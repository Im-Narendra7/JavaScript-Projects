const apiUrl = "https://fakestoreapi.com/products";

async function fetchProducts() {
    try {
        const response =  await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Http error! Status:', response.status);
        }
        const products = await  response.json();
        displayProducts(products);
    } catch(error) {
        console.error('Error:', error);
    }

}

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <img src = ${product.image} alt = {product.title} >
            <h2>${product.title}</h2>
            <p>${product.description.substring(0, 100)}...</p>
            <span>$${product.price}</span> `;
            container.appendChild(productDiv);
    })
}

fetchProducts();