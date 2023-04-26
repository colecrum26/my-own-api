import express from "express";
import cors from "cors";
import config from "./config/index.js";
import router from "./routes/index.js";
import logger from "./logger/log.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(logger);
app.use("/api", router);

app.use((err, req, res, next) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message });
    res.status(404).send("Page Not Found.")
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
});




