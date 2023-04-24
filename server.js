import express from "express";
import config from "./config/index.js";
import router from "./routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
});




