import { auth, db } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// LOGIN
window.login = async function () {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("dashboard").style.display = "block";
    alert("Login successful!");
  } catch (error) {
    alert(error.message);
  }
};

// LOGOUT
window.logout = async function () {
  await signOut(auth);
  location.reload();
};

// ADD PRODUCT
window.addProduct = async function () {
  const name = document.getElementById("productName").value;
  const category = document.getElementById("productCategory").value;
  const price = document.getElementById("productPrice").value;
  const description = document.getElementById("productDescription").value;
  const imageUrl = document.getElementById("productImageUrl").value;

  try {
    await addDoc(collection(db, "products"), {
      name,
      category,
      price,
      description,
      imageUrl,
      createdAt: new Date()
    });

    alert("Product Added Successfully!");

    document.getElementById("productName").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productImageUrl").value = "";

  } catch (error) {
    alert(error.message);
  }
};