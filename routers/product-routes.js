import { Router } from "express";
import { products } from "../data/products.js";
import { createProduct, updateProduct } from "../middleware/product-middleware.js";
import path from "path";
import { error } from "console";

const productRoutes = Router();

productRoutes
    .route("/")
    .get((req, res) => {
        res.status(200).json(products);
    })
    .post(createProduct, (req, res) => {
        products.push(req.new_product);
        res.status(201).json(req.new_product);
    });

productRoutes.get("/:id_product", (req, res, next) => {
    const id = +req.params.id_product;
    
    if (!isNaN(id)) {
      const product = products.find((el) => el.id === id);
      res.status(200).json(product);
    }
    next();
});

productRoutes.put("/:id_product", updateProduct, (req, res) => {
    const id = +req.params.id_product;
    const productIndex = products.findIndex((el) => el.id === id);

    if (productIndex === -1){
        return res.status(404).json({ error: "Product not found" });
    }

    products[productIndex] = { id, ...req.updated_product };
    res.status(200).json(products[productIndex]);
})

export default productRoutes;  