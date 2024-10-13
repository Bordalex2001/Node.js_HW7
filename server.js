import express from "express";
import path from "node:path";
import productRoutes from "./routers/product-routes.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json()); //middleware
app.use(express.static("public")); //middleware
app.use('/products', productRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public", "pages", "index.html"));
});

app.get("/update", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public", "pages", "update.html"))
});

app.all("*", (req, res) => {
    res.status(404).send();
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});