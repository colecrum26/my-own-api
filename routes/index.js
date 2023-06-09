import express from "express";
import clientRouter from "./clients.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Working!");
});

router.use("/clients", clientRouter);

export default router;