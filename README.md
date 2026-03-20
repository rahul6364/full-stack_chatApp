[![Fork Button](https://img.shields.io/github/forks/iemafzalhassan/full-stack_chatApp?style=social)](https://github.com/iemafzalhassan/full-stack_chatApp/fork)

# Real-Time Chat Application

A full-stack real-time chat application built with React, Node.js/Express, Socket.io, MongoDB, Docker, and Kubernetes (Kind).

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Current Project Status](#current-project-status)
* [Project Structure](#project-structure)
* [Environment Configuration](#environment-configuration)
* [Quick Start (Docker Compose)](#quick-start-docker-compose)
* [Kubernetes Deployment (Kind + ingress-nginx)](#kubernetes-deployment-kind--ingress-nginx)
* [Validation Checklist](#validation-checklist)
* [Issues Faced and Fixes](#issues-faced-and-fixes)
* [CI/CD Status](#cicd-status)
* [Contributing](#contributing)
* [License](#license)

## Introduction

This project provides a scalable and production-style chat application with:
* JWT authentication
* real-time messaging with Socket.io
* MongoDB persistence
* containerized local and Kubernetes deployments

## Features

* Real-time messaging with Socket.io
* JWT-based auth and protected routes
* Profile updates and online user presence
* React + TailwindCSS frontend
* Docker and Kubernetes support

## Tech Stack

* **Backend:** Node.js, Express, Socket.io, MongoDB
* **Frontend:** React, TailwindCSS, Zustand
* **Containerization:** Docker
* **Orchestration:** Kubernetes (Kind + ingress-nginx)
* **Web Server:** Nginx
* **Authentication:** JWT + HTTP-only cookies

## Current Project Status

### Implemented

* Backend, frontend, and MongoDB are containerized and deployable.
* Local deployment with Docker Compose works.
* Kubernetes deployment on Kind works.
* `ingress-nginx` is configured and routing traffic.
* Host-based access is working through `chat-app.com`.

### Not implemented yet

* End-to-end CI/CD pipeline.
* ArgoCD deployment and GitOps sync.

## Project Structure

* `frontend/` - React app + `frontend/Dockerfile`
* `backend/` - API + socket server + auth
* `k8s/` - Kubernetes manifests
  * `namespace.yaml` - creates `chat-app` namespace
  * `mongo-pvc.yaml` - MongoDB PVC
  * `mongodb-deployment.yaml`, `mongodb-service.yaml`
  * `backend-secrets.yaml` - backend JWT secret
  * `backend-deployment.yaml`, `backend-service.yaml`
  * `frontend-configmap.yaml` - Nginx config for frontend container
  * `frontend-deployment.yaml`, `frontend-service.yaml`
  * `ingress.yaml` - host/path routing for app traffic

## Environment Configuration

Create `.env` in project root:

```env
MONGODB_URI=mongodb://root:admin@mongo:27017/chatApp?authSource=admin&retryWrites=true&w=majority
JWT_SECRET=your_strong_secret
PORT=5001
NODE_ENV=production
```

Notes:
* Use a strong `JWT_SECRET`.
* For local non-container DB, use `mongodb://localhost:27017/chatApp`.

## Quick Start (Docker Compose)

### Step 1: Clone repository
```bash
git clone https://github.com/iemafzalhassan/full-stack_chatApp.git
cd full-stack_chatApp
```

### Step 2: Start app
```bash
docker-compose up -d --build
```

### Step 3: Verify
```bash
docker-compose ps
```

Open `http://localhost`.

## Kubernetes Deployment (Kind + ingress-nginx)

### Step 0: Verify tools
```bash
docker --version
kubectl version --client
kind version
```

### Step 1: Create Kind cluster

Create `kind-config.yaml`:
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
```

Create cluster:
```bash
kind create cluster --config kind-config.yaml
```

Validate:
```bash
kind get clusters
kubectl cluster-info
kubectl get nodes
```

### Step 2: Install ingress-nginx controller
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
kubectl -n ingress-nginx rollout status deployment/ingress-nginx-controller --timeout=180s
kubectl -n ingress-nginx get pods
```

### Step 3: Create namespace and base resources
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/mongo-pvc.yaml -n chat-app
kubectl apply -f k8s/frontend-configmap.yaml -n chat-app
kubectl apply -f k8s/backend-secrets.yaml -n chat-app
```

Important: ensure JWT secret is non-empty in cluster:
```bash
JWT_SECRET=$(python3 -c "import secrets; print(secrets.token_hex(32))")
kubectl -n chat-app create secret generic backend-secrets \
  --from-literal=jwt-secret="$JWT_SECRET" \
  --dry-run=client -o yaml | kubectl apply -f -
```

### Step 4: Deploy MongoDB
```bash
kubectl apply -f k8s/mongodb-deployment.yaml -n chat-app
kubectl apply -f k8s/mongodb-service.yaml -n chat-app
kubectl -n chat-app rollout status deployment/mongodb --timeout=180s
kubectl -n chat-app get pods -l app=mongodb
```

### Step 5: Deploy backend
```bash
kubectl apply -f k8s/backend-deployment.yaml -n chat-app
kubectl apply -f k8s/backend-service.yaml -n chat-app
kubectl -n chat-app rollout status deployment/backend --timeout=180s
kubectl -n chat-app get pods -l app=backend
```

Local HTTP note: for cookie-based auth while testing on plain `http://`, backend should use `NODE_ENV=development`.

### Step 6: Deploy frontend
```bash
kubectl apply -f k8s/frontend-deployment.yaml -n chat-app
kubectl apply -f k8s/frontend-service.yaml -n chat-app
kubectl -n chat-app rollout status deployment/frontend --timeout=180s
kubectl -n chat-app get pods -l app=frontend
```

### Step 7: Deploy Ingress
```bash
kubectl apply -f k8s/ingress.yaml -n chat-app
kubectl -n chat-app get ingress
kubectl -n chat-app describe ingress chat-app
```

Expected host in Ingress: `chat-app.com`.

### Step 8: Expose ingress locally
Start port-forward in a dedicated terminal:
```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

Add Windows hosts entry:
`C:\Windows\System32\drivers\etc\hosts`
```txt
127.0.0.1 chat-app.com
```

### Step 9: Test routing
```bash
curl -v -H "Host: chat-app.com" http://127.0.0.1:8080/
curl -v -H "Host: chat-app.com" http://127.0.0.1:8080/api/auth/check
```

Open browser: `http://chat-app.com:8080/`.

## Validation Checklist

Run these checks after deployment:

```bash
kubectl -n chat-app get all
kubectl -n chat-app get endpoints frontend backend mongodb
kubectl -n ingress-nginx get pods
kubectl -n chat-app get ingress chat-app
```

Expected:
* all pods in `chat-app` are `Running`
* endpoints exist for `frontend`, `backend`, `mongodb`
* ingress host is `chat-app.com`
* app opens at `http://chat-app.com:8080/`

## Issues Faced and Fixes

### 1) Ingress hostname mismatch
* **Symptom:** app did not load using a different hostname.
* **Cause:** Ingress host and browser host were different.
* **Fix:** set host in `k8s/ingress.yaml` to `chat-app.com`, add `127.0.0.1 chat-app.com` in Windows hosts file, and access `http://chat-app.com:8080/`.

### 2) Auth 401 on protected APIs after login
* **Symptom:** `/api/auth/check` and `/api/messages/users` returned `401`.
* **Cause:** cookie behavior with `secure` flag while testing over plain HTTP.
* **Fix:** use `NODE_ENV=development` in backend deployment for local Kind HTTP testing.

### 3) Backend issues from empty JWT secret
* **Symptom:** auth flows can fail or return 500.
* **Cause:** empty `jwt-secret` in `backend-secrets`.
* **Fix:** create/update Kubernetes secret with a non-empty random value and restart backend pod.

### 4) Wrong kubectl context while debugging
* **Symptom:** `kubectl` could not reach expected cluster resources.
* **Cause:** current context pointing to another cluster.
* **Fix:**

```bash
kubectl config get-contexts
kubectl config use-context kind-kind
kubectl cluster-info
```

## CI/CD Status

This repository already has a strong GitHub Actions pipeline in `.github/workflows/cicd.yml`.

### What is implemented now (CI + image delivery)

Pipeline triggers:
* `push` to `main`
* tag pushes like `v*.*.*`
* `pull_request`
* manual `workflow_dispatch`

Pipeline stages currently implemented:

1. **Secret scan + lint**
   * Runs Gitleaks to detect committed secrets.
   * Sets up Node and installs frontend/backend dependencies.
   * Runs frontend lint checks.

2. **Static code security analysis**
   * Runs CodeQL analysis for JavaScript.
   * Uploads security findings to GitHub Security tab.

3. **Docker metadata**
   * Calculates short SHA tag (for immutable image tagging).
   * Decides whether push is allowed (`main` or tags).

4. **Docker build**
   * Builds backend and frontend images using Buildx.
   * Exports built images as tar artifacts for downstream jobs.
   * Uses cache to speed up builds.

5. **Container vulnerability scanning**
   * Loads built images and scans with Trivy (HIGH/CRITICAL).
   * Generates SARIF reports and uploads them to GitHub Security tab.

6. **Docker push (controlled)**
   * Runs only when conditions are met (not PR, and push is allowed).
   * Logs in to Docker Hub using repository secrets.
   * Pushes both immutable SHA tags and `latest` tags for frontend/backend.

### Security controls already in place

* **Secret detection:** Gitleaks at the start of pipeline.
* **Code security scanning:** CodeQL integrated.
* **Image vulnerability scanning:** Trivy before image push.
* **Supply chain hygiene:** immutable SHA image tags in addition to `latest`.
* **Protected credentials:** Docker credentials and namespace via GitHub Secrets.
* **Concurrency control:** cancels in-progress runs on same ref to avoid race conditions.

### Current CD status for Kubernetes

* **Implemented:** CI builds, scans, and publishes Docker images.
* **Implemented:** CI updates Kubernetes manifests in `k8s/` with the new immutable image tag (short SHA) so Git changes drive rollouts.
* **Works with ArgoCD:** when ArgoCD auto-sync is enabled, it deploys the updated manifests to your Kind cluster.

In other words: **CI image delivery is production-grade, and GitOps CD is enabled via ArgoCD syncing manifest changes.**

## Contributing

Contributions are welcome:
* report issues
* suggest features
* open pull requests

## License

This project is licensed under the MIT License. See `LICENSE` for details.

