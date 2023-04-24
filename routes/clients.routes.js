import express from "express";
import clients from "../controllers/clients.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  try {
    if (id) {
      data = await clients.findOne(id);
    } else {
      data = await clients.findAll();
    }
    res.json(data);
  } catch (error) {}
});

router.post("/", async (req, res, next) => {
  try {
    let clientDTO = req.body;
    let data = await clients.addOne(clientDTO);
    res.json(data);
  } catch (error) {
    console.error("Check your body.")
  }
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let clientDTO = req.body;
  let data = await employees.updateOne(id, clientDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await clients.removeOne(id);
  res.json(data);
});

export default router;
