import "./style.css";
import icon from "../assets/svgs/empty-cart.svg";
import products from "./services/products.js";
const element = document.getElementById("app");
products();
element.classList.add("app");
element.innerHTML = `<h1>Hello there.</h1><img src='${icon}' />`;
