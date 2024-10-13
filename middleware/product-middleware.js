import { products } from "../data/products.js";

export const createProduct = (req, res, next) => {
    if(req.body && req.body.title && req.body.price){
        const new_id = products.length + 1;
        const new_product = { id: new_id, ...req.body };
        req.new_product = new_product;
        next();
        return;
    }
    else{
        res.status(400).json({ error: "Body is empty" });
    }
};

export const updateProduct = (req, res, next) => {
    const { title, price } = req.body;
    
    if(title && price){
        const updated_product = { title, price };
        req.updated_product = updated_product;
        next();
    }
    else{
        res.status(400).json({ error: "Invalid data. Fields 'title' and 'price' are required." });
    }
};