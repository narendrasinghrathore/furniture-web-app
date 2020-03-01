export default function Products() {
  this.test = () => {
    console.log("Testing product");
  };

  return `(
    <div>
      <h2>Products</h2>
      <button onclick="() => this.test()">Test</button>
    </div>
  )`;
}
