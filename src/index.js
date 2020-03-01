import "./style.css";
import icon from "../assets/svgs/empty-cart.svg";
// import Products from "./components/products/products.js";
// import Router from "./route/router.js";
// import Navigation from "./components/navigation/navigation.js";
const element = document.getElementById("app");
const ul = document.createElement("ul");
ul.classList.add("ul");
/**
 * Routes
 */
// const routes = [
//   {
//     path: "products",
//     title: "Products",
//     component: Products
//   },
//   {
//     path: "/",
//     title: "Home"
//   }
// ];
// const router = new Router(routes, element);
element.classList.add("app");

async function getPhotos() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const response = await fetch(url);
  return await response.json();
}
/**
 * Variables declarations
 */
const list = [];

getPhotos().then(data => {
  list.push(...data);
  generateList(list.slice(0, 10));
});

function generateList(data) {
  if (!data) {
    data = `<li>No items in list</li>`;
  } else {
    data = data.map(item => {
      const li = document.createElement("li");
      li.classList.add("li");
      li.innerHTML = `<img  src="${item.thumbnailUrl}" /> Title: ${item.title}`;
      return li;
    });
  }
  data.forEach(element => {
    ul.appendChild(element);
  });
}

element.innerHTML = `<h1>Hello there.</h1><img src='${icon}' />`;
element.appendChild(ul);
