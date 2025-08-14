document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(err => console.error("Error loading products:", err));
});

let cartCount = 0;

function displayProducts(products) {
    const productList = document.getElementById("productList");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
}
