import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

async function loadProducts() {
  const container = document.getElementById("productsContainer");

  if (!container) return;

  const q = query(
    collection(db, "products"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  container.innerHTML = "";

  snapshot.forEach((doc) => {
    const product = doc.data();

    container.innerHTML += `
      <div class="product-card">
        <img src="${product.imageUrl}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p><strong>${product.category}</strong></p>
        <p>₹ ${product.price}</p>
        <p>${product.description}</p>
      </div>
    `;
  });
}

loadProducts();
