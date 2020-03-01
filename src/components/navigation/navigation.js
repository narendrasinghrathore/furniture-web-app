let navigateTo = route => {
  console.log(route);
};

export default function Navigation() {
  return `<nav>
    <button onclick="() => navigateTo('home')">Home</button>
    <button onclick="() => navigateTo('products')">Products</button>
    </nav>`;
}
