import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct } from "../handlers/index.js";


const appRouter = Router();

appRouter.get("/", getAllProducts); //all products
appRouter.get("/:id", getProduct);
appRouter.post("/create", createProduct);
appRouter.put("/:id", updateProduct);
appRouter.delete("/delete/:id", deleteProduct);


export default appRouter;