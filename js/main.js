import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productsContainer = document.getElementById("productsContainer");
let allProducts = [];

// Load Products
async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  allProducts = [];

  querySnapshot.forEach((doc) => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });

  displayProducts(allProducts);
}

function displayProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.imageUrl}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">₹ ${product.price}</div>
        <a href="https://wa.me/919344262483" class="btn-primary">Buy Now</a>
      </div>
    `;
  });
}

// Filter Function
window.filterProducts = function(category) {
  if (category === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(p => p.category === category);
    displayProducts(filtered);
  }
};

// Contact Form
document.getElementById("contactForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "inquiries"), {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      createdAt: new Date()
    });

    alert("Message sent successfully!");
    e.target.reset();
  });

loadProducts();