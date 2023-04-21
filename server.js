import express from "express";
import config from "./config/index";
import router from "./routes/index";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.use((err, req, res, next) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
});




