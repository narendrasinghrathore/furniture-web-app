import "./style.css";
import icon from "../assets/svgs/empty-cart.svg";
const element = document.getElementById("app");
element.classList.add("app");
element.innerHTML = `<h1>Hello there.</h1><img src='${icon}' />`;
