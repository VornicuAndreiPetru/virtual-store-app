document.addEventListener("DOMContentLoaded", function () {
    // Funcționalitate pentru adăugare produs
    const productForm = document.getElementById('product-form');
    productForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;

        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName,
                price: productPrice
            })
        })
            .then(response => {
                if (response.ok) {
                    alert('Produs adăugat cu succes!');
                    productForm.reset();
                } else {
                    alert('Eroare la adăugarea produsului!');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    // Funcționalitate pentru adăugare categorie
    const categoryForm = document.getElementById('category-form');
    categoryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const categoryName = document.getElementById('category-name').value;

        fetch('http://localhost:8080/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: categoryName
            })
        })
            .then(response => {
                if (response.ok) {
                    alert('Categorie adăugată cu succes!');
                    categoryForm.reset();
                } else {
                    alert('Eroare la adăugarea categoriei!');
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
