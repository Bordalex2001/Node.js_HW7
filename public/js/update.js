import { response } from "express";

const productId = window.location.pathname.split('/').pop();

fetch(`/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        document.getElementById('title').value = product.title;
        document.getElementById('price').value = product.price;
    })
    .catch(error => {
        console.error('Error fetching product:', error);
        alert('Error loading product data');
    });

document.getElementById('update-product')
    .addEventListener('submit', function(e) {
        e.preventDefault();

        const updatedProduct = {
            title: document.getElementById('title').value,
            price: document.getElementById('price').value
        };

        fetch(`/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(response => response.json())
        .then(() => {
            window.location.href = '/products';
        })
        .catch(error => {
            console.error('Error updating product:', error);
        });
})
