fetch('/')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const row = document.getElementById('tr');

            const idColumn = document.createElement('td');
            idColumn.textContent = product.id;
            row.appendChild(idColumn);

            const titleColumn = document.createElement('td');
            titleColumn.textContent = product.id;
            row.appendChild(titleColumn);

            const priceColumn = document.createElement('td');
            priceColumn.textContent = product.id;
            row.appendChild(priceColumn);

            productList.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
});