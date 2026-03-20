import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Health check endpoint
router.get("/", async (req, res) => {
  try {
    // Check database connection
    const dbReady = mongoose.connection.readyState === 1;
    const dbStatus = dbReady ? "connected" : "disconnected";

    // If Mongo isn't reachable, fail readiness/liveness (Kubernetes can act on it).
    if (!dbReady) {
      return res.status(503).json({
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        database: dbStatus,
        environment: process.env.NODE_ENV || "development",
      });
    }

    return res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: dbStatus,
      environment: process.env.NODE_ENV || "development",
    });
  } catch (error) {
    res.status(503).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

export default router; 