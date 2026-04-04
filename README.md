<!-- [![Fork Button](https://img.shields.io/github/forks/iemafzalhassan/full-stack_chatApp?style=social)](https://github.com/iemafzalhassan/full-stack_chatApp/fork)


# Real-Time Chat Application


Welcome to the **Full Stack Realtime Chat App** project, where we're building a scalable and secure real-time chat experience using the latest technologies. Whether you're a seasoned developer or a beginner, we invite you to contribute and be a part of this exciting journey!

## Table of Contents


* [Introduction](#introduction)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Building the Backend](#building-the-backend)
* [Running the Application](#running-the-application)
* [Contributing](#contributing)
* [Future Plans](#future-plans)
* [License](#license)

## 📝 Introduction

This project aims to provide a real-time chat experience that's both scalable and secure. With a focus on modern technologies, we're building an application that's easy to use and maintain.

## Detailed Workflow Description:


![image](https://github.com/user-attachments/assets/f845a188-8e70-42f7-8577-30af38e83053)


  - **User Interaction:**
    - Users interact with the frontend application running in their browser. This includes actions like logging in, sending messages, and navigating through the chat interface.Frontend (React App):The frontend is responsible for rendering the user interface and handling user inputs.It communicates with the backend via HTTP requests (for RESTful APIs) and WebSocket connections (for real-time interactions).

    - **Backend (Node.js/Express + Socket.io):**
       - The backend handles all the server-side logic.It processes API requests from the frontend to perform actions such as user authentication, message retrieval, and message storage.Socket.io is used to manage real-time bi-directional communication between the frontend and the backend. This allows for instant messaging features, such as showing when users are typing or when new messages are sent.


    - **MongoDB (Database):**
       - MongoDB stores all persistent data for the application, including user profiles, chat messages, and any other relevant data.The backend interacts with MongoDB to retrieve, add, update, or delete data based on the requests it receives from the frontend.

## ✨ Features


* **Real-time Messaging**: Send and receive messages instantly using Socket.io 
* **User Authentication & Authorization**: Securely manage user access with JWT 
* **Scalable & Secure Architecture**: Built to handle large volumes of traffic and data 
* **Modern UI Design**: A user-friendly interface crafted with React and TailwindCSS 
* **Profile Management**: Users can upload and update their profile pictures 
* **Online Status**: View real-time online/offline status of users 


## 🛠️ Tech Stack


* **Backend:** Node.js, Express, MongoDB, Socket.io
* **Frontend:** React, TailwindCSS
* **Containerization:** Docker
* **Orchestration:** Kubernetes (planned)
* **Web Server:** Nginx
* **State Management:** Zustand
* **Authentication:** JWT
* **Styling Components:** DaisyUI


### 🔧 Prerequisites


* **[Node.js](https://nodejs.org/)** (v14 or higher)
* **[Docker](https://www.docker.com/get-started)** (for containerizing the app)
* **[Git](https://git-scm.com/downloads)** (to clone the repository)


### 📝 Environment Configuration

Create a `.env` file in the root directory with the following configuration:

```env
# Database Configuration
MONGODB_URI=mongodb://root:admin@mongo:27017/chatApp?authSource=admin&retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Server Configuration
PORT=5001
NODE_ENV=production

# Cloudinary Configuration (Required for Profile Pics)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Note:** 
> - Replace `your_jwt_secret_key` with a strong secret key
> - For local development without Docker, change `MONGODB_URI` to `mongodb://localhost:27017/chatApp`
> - You can use command ```echo "Text what you want" | base64

### Clone the Repository

```bash
git clone https://github.com/iemafzalhassan/full-stack_chatApp.git
```

🏗️ Build and Run the Application

Follow these steps to build and run the application:

1. Build & Run the Containers:

```bash
cd full-stack_chatApp
```
```bash
docker-compose up -d --build
```

2. Access the application in your browser:

```
http://localhost
```
---

## 🛠️ Getting Started

Follow these simple steps to get the project up and running on your local Host using docker.

```bash
git clone https://github.com/iemafzalhassan/full-stack_chatApp.git
```

```bash
cd full-stack_chatApp
```
## Create a Docker network:

```bash
docker network create full-stack
```

## 🛠️ Building the Frontend

```bash
cd frontend
```

```bash
docker build -t full-stack_frontend .
```

### Run the Frontend container:

```bash
docker run -d --network=full-stack  -p 5173:5173 --name frontend full-stack_frontend:latest
```
#### The frontend will now be accessible on port 5173.


## Run the MongoDB Container:

```bash
docker run -d -p 27017:27017 --name mongo mongo:latest
```
---

## 🛠️ Building the Backend

```bash
cd backend
```

### Build the Backend image:

```bash
docker build -t full-stack_backend .
```

### Run the Backend container:

```bash
docker run -d --network=full-stack --add-host=host.docker.internal:host-gateway -p 5001:5001 --env-file .env full-stack_backend
```
#### This will build and run the backend container, exposing the backendAPI on port 5001.

`Backend API: http://localhost:5001`

### To Verify the conncetion between backend and databse:
```bash
docker-compose logs -f
```

### Once the backend and frontend containers are running, you can access the application in your browser:

`Frontend: http://localhost`


You can now interact with the real-time chat app and start messaging!

---



### 🤝 Contributing


We welcome contributions from DevOps & Developer of all skill levels! Here's how you can contribute:

**Report bugs:** If you encounter any bugs or issues, please open an issue with detailed information.
**Suggest features:** Have an idea for a new feature? Open an issue to discuss it with the community.
**Submit pull requests:** If you have a fix or a feature you'd like to contribute, submit a pull request. Ensure your changes pass any linting or tests, if applicable.

### 🌐 Join the Community

We invite you to join our community of developers and contributors. Let's work together to build an amazing real-time chat application!

* **Star this repository** to show your support
* **Fork this repository** to contribute to the project
* **Open an issue** to report bugs or suggest features
* **Submit a pull request** to contribute code changes

## 🔮 Future Plans


This project is evolving, and here are a few exciting things on the horizon:

* [ ] **CI/CD Pipelines:** Implement Continuous Integration and Continuous Deployment pipelines to automate testing and deployment.
* [ ] **Kubernetes (K8s):** Add Kubernetes manifests for container orchestration to deploy the app on cloud platforms like AWS, GCP, or Azure.
* [ ] **Feature Expansion:** Add more features like group chats, media sharing, and user status updates.
* **Stay tuned for updates as we continue to improve and expand this project!**

---

## 📚 Project Snapshots:

![Settings](frontend/public/settings.png)

![chat](frontend/public/chat.png)

![logout](/frontend/public/logout.png)

![Login](/frontend/public/login.png)



## 📜 License


This project is licensed under the MIT License. See the LICENSE file for more details.













 -->

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
* [ArgoCD Setup (GitOps CD)](#-argocd-setup-gitops-cd)
* [Quick Public Demo with Ngrok](#-quick-public-demo-with-ngrok)
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
* **GitOps / CD:** ArgoCD
* **Tunneling (demo):** Ngrok

## Current Project Status

### Implemented

* Backend, frontend, and MongoDB are containerized and deployable.
* Local deployment with Docker Compose works.
* Kubernetes deployment on Kind works.
* `ingress-nginx` is configured and routing traffic.
* Host-based access is working through `chat-app.com`.
* **MongoDB migrated from Deployment → StatefulSet** with a headless service (`clusterIP: None`) for stable DNS.
* **Backend health endpoint** (`/health`) returns `503` when MongoDB is not connected.
* **Readiness + liveness probes** added to backend and MongoDB.
* **CI/CD pipeline** builds, scans (Trivy), and publishes Docker images.
* **ArgoCD GitOps CD** enabled for automated manifest synchronization.
* **Security Hardening**: Implemented **Bitnami Sealed Secrets** to securely store credentials (JWT, Cloudinary) in the public repository.
* **Payload Support**: Increased request limits to **10MB** (Express + Nginx Ingress) for profile picture uploads.
* **Infrastructure Optimization**: Cleaned up redundant PVCs and fixed ArgoCD health monitoring.
* **Local K8s Auth Fix**: Optimized cookie and CORS settings for plain HTTP access via `chat-app.com:8080`.

### Not implemented yet

* Multi-replica MongoDB with replica set configuration.

## Project Structure

* `frontend/` - React app + `frontend/Dockerfile`
* `backend/` - API + socket server + auth
  * `src/routes/health.route.js` - health check endpoint (Mongo-aware, returns 503 if not connected)
* `k8s/` - Kubernetes manifests
  * `namespace.yaml` - creates `chat-app` namespace
  * `mongo-pvc.yaml` - MongoDB PVC (used by legacy Deployment; StatefulSet manages its own PVC via `volumeClaimTemplates`)
  * `mongodb-statefullset.yaml` - **MongoDB StatefulSet** (replaces the old Deployment)
  * `mongodb-service.yaml` - **Headless service** (`clusterIP: None`) for stable MongoDB DNS
  * `sealed-secrets.yaml` - **Encrypted secrets** (JWT, Cloudinary) managed by Bitnami Sealed Secrets
  * `backend-deployment.yaml`, `backend-service.yaml`
  * `frontend-configmap.yaml` - Nginx config for frontend container
  * `frontend-deployment.yaml`, `frontend-service.yaml`
  * `ingress.yaml` - host/path routing for app traffic
* `.github/workflows/cicd.yml` - GitHub Actions CI/CD pipeline

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
kubectl apply -f k8s/frontend-configmap.yaml -n chat-app
kubectl apply -f k8s/sealed-secrets.yaml -n chat-app
```

> [!IMPORTANT]
> This project uses **Sealed Secrets**. Credentials are encrypted and safe for Git. To update secrets, use the `kubeseal` CLI or contact the project maintainer.

### Step 4: Deploy MongoDB
```bash
kubectl apply -f k8s/k8s/mongodb-statefullset.yaml -n chat-app
kubectl apply -f k8s/mongodb-service.yaml -n chat-app
kubectl -n chat-app rollout status statefulset.apps/mongodb --timeout=180s
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

---

## 🔄 ArgoCD Setup (GitOps CD)

ArgoCD is installed in the cluster and monitors this repository. When CI commits updated image tags to `k8s/*-deployment.yaml`, ArgoCD automatically syncs and rolls out the new pods.

### Step 1: Install ArgoCD into the cluster
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl -n argocd rollout status deployment/argocd-server --timeout=180s
```

### Step 2: Access the ArgoCD UI
Port-forward in a dedicated terminal:
```bash
kubectl port-forward svc/argocd-server -n argocd 8081:443
```
Open `https://localhost:8081` in your browser (accept the self-signed certificate warning).

### Step 3: Get the initial admin password
```bash
kubectl -n argocd get secret argocd-initial-admin-secret \
  -o jsonpath="{.data.password}" | base64 -d && echo
```
Log in with username `admin` and the printed password.

### Step 4: Create the ArgoCD Application
In the ArgoCD UI click **New App**, or apply this manifest:
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: chat-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/rahul6364/full-stack_chatApp.git
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: chat-app
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```
```bash
kubectl apply -f argocd-app.yaml
```

### Step 5: Verify sync
```bash
# Check app status
kubectl -n argocd get applications

# Or via CLI (if argocd CLI is installed)
argocd app get chat-app
argocd app sync chat-app   # manual sync if needed
```

ArgoCD will now automatically redeploy whenever CI pushes new image tags to `k8s/*.yaml`.

> **Note:** The `paths-ignore: k8s/**` in `.github/workflows/cicd.yml` prevents ArgoCD's manifest commits from re-triggering a full CI build loop.

---

## 🌐 Quick Public Demo with Ngrok

Ngrok lets you expose your local Kind cluster to the internet without opening firewall ports — useful for demos and testing on real devices.

### Step 1: Keep ingress port-forward running
```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

### Step 2: Start Ngrok tunnel
From another terminal:
```bash
ngrok http 8080 --host-header="chat-app.com"
```

### Step 3: Open the Ngrok URL
Ngrok will print a public URL like `https://xxxxx.ngrok-free.app`. Open it in any browser.

> **Why `--host-header="chat-app.com"` matters:**  
> `k8s/ingress.yaml` only routes requests when the HTTP `Host` header is `chat-app.com`. Without this flag, Ngrok forwards the tunnel hostname instead, which doesn't match the Ingress rule and results in a 404.

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

### 3) Empty JWT secret causing 500 errors
* **Symptom:** auth flows failing with HTTP 500 errors.
* **Cause:** `jwt-secret` key in `backend-secrets` was empty, so JWT signing threw an error.
* **Fix:** regenerate and apply the secret with a non-empty random value, then restart the backend pod:
```bash
JWT_SECRET=$(python3 -c "import secrets; print(secrets.token_hex(32))")
kubectl -n chat-app create secret generic backend-secrets \
  --from-literal=jwt-secret="$JWT_SECRET" \
  --dry-run=client -o yaml | kubectl apply -f -
kubectl -n chat-app rollout restart deployment/backend
```

### 4) Wrong kubectl context while debugging
* **Symptom:** `kubectl` could not reach expected cluster resources.
* **Cause:** current context pointing to another cluster.
* **Fix:**
```bash
kubectl config get-contexts
kubectl config use-context kind-kind
kubectl cluster-info
```

### 5) Push rejected because remote was ahead
* **Symptom:** `git push` was rejected — remote had commits (CI manifest updates) the local branch didn't have.
* **Cause:** the `update_k8s_manifests_images` CI job commits back to `main`, so `main` can advance while you're working locally.
* **Fix:**
```bash
git fetch origin
git pull --no-rebase origin main   # or --rebase if preferred
git push origin main
```
* **Best practice going forward:** before every push, run `git fetch origin && git status -sb`. If you're behind, do `git pull --rebase origin main` first.

### 6) MongoDB pods not becoming ready after migration to StatefulSet
* **Symptom:** MongoDB pod stuck in `Pending` or `CrashLoopBackOff` after switching from Deployment to StatefulSet.
* **Cause:** the old Deployment + ClusterIP service conflict with the new StatefulSet + headless service; or the PVC was already bound by the old Deployment.
* **Fix:** delete the old Deployment and ClusterIP service before applying the StatefulSet and headless service. The StatefulSet manages its own PVC via `volumeClaimTemplates`.

### 7) 413 Payload Too Large on Image Uploads
* **Symptom:** Uploading profile pictures failed with error 413.
* **Cause:** Default 100kb limit in Express and 1MB limit in Nginx Ingress.
* **Fix:** Increased `express.json({ limit: "10mb" })` and added `nginx.ingress.kubernetes.io/proxy-body-size: "10m"` to `ingress.yaml`.

### 8) Cloudinary Images Blocked by CSP
* **Symptom:** Profile pictures didn't load in the frontend.
* **Cause:** Content Security Policy (CSP) header in `frontend/nginx.conf` restricted image sources to `'self'`.
* **Fix:** Updated CSP to include `https://res.cloudinary.com`.

### 9) GitOps Secret Management Security
* **Symptom:** Plain-text secrets were committed or required manual `kubectl` intervention, breaking GitOps flow.
* **Cause:** Standard K8s Secrets are base64 only, not encrypted for Git.
* **Fix:** Integrated **Bitnami Sealed Secrets**. Encrypted manifests (`k8s/sealed-secrets.yaml`) are now safely version-controlled.

### 10) Authentication Failures on Local HTTP Ingress
* **Symptom:** Users stayed logged out or saw 500/401 errors on `chat-app.com:8080`.
* **Cause:** JWT cookies had `secure: true` (only works on HTTPS) and CORS origins were missing.
* **Fix:** Set `secure: false` for cookies and added `chat-app.com:8080` to CORS allowed origins.

### 11) Gitleaks CI Pipeline Failures
* **Symptom:** GitHub Actions failed on push due to "leaks" in the SealedSecret manifest.
* **Cause:** Gitleaks identified the high-entropy encrypted blobs as potential secrets.
* **Fix:** Added `.gitleaks.toml` to ignore the `k8s/sealed-secrets.yaml` file while maintaining protection for other source files.

## CI/CD Status

This repository has a production-grade GitHub Actions pipeline in `.github/workflows/cicd.yml`.

### Pipeline triggers
* `push` to `main` — but **ignores changes under `k8s/**`** to prevent infinite CI loops when the pipeline itself commits manifest updates.
* Tag pushes like `v*.*.*`
* `pull_request`
* Manual `workflow_dispatch`

### Pipeline stages

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
   * Runs only on `main` / tag pushes and not on PRs.
   * Logs in to Docker Hub using repository secrets.
   * Pushes both immutable SHA tags and `latest` tags for frontend/backend.

7. **Update Kubernetes manifests (`update_k8s_manifests_images`)** *(new job)*
   * Runs after a successful Docker push.
   * Uses a Python script to update the `image:` line in `k8s/frontend-deployment.yaml` and `k8s/backend-deployment.yaml` to the new `<NAMESPACE>/<IMAGE>:<SHORT_SHA>` tag.
   * Commits and pushes the manifest changes back to `main` with `[skip ci]` in the commit message so it doesn't re-trigger the pipeline.
   * ArgoCD (auto-sync enabled) picks up the commit and rolls out the new image to the Kind cluster.

### Security controls

* **Secret detection:** Gitleaks at the start of pipeline.
* **Code security scanning:** CodeQL integrated.
* **Image vulnerability scanning:** Trivy before image push.
* **Supply chain hygiene:** immutable SHA image tags in addition to `latest`.
* **Protected credentials:** Docker credentials and namespace via GitHub Secrets.
* **Concurrency control:** cancels in-progress runs on same ref to avoid race conditions.
* **CI loop prevention:** `paths-ignore: k8s/**` on the push trigger prevents the manifest-update commit from re-triggering a full CI run.

### End-to-end GitOps flow

```
Code push to main
  → GitHub Actions CI
  → Build + scan + push Docker images (SHA tag)
  → Update k8s/*-deployment.yaml with new SHA tag
  → Commit + push manifest changes to main
  → ArgoCD detects diff → syncs to Kind cluster
  → Pods roll out with new image
```

In other words: **CI image delivery is production-grade, and GitOps CD is fully automated via ArgoCD syncing manifest changes.**

## Contributing

Contributions are welcome:
* report issues
* suggest features
* open pull requests

## License

This project is licensed under the MIT License. See `LICENSE` for details.

