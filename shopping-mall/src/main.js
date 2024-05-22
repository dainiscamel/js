import productsApi from "./products.json";

const main = async () => {
  const products = await productsApi;
  console.log(products);
  document.querySelector("#products").innerHTML = products
    .map(
      (
        product
      ) => `<div class="product"><img src="${product.images[0]}" alt="상품 이미지" />
    <p>${product.name}</p>
    <div class="flex justify-between items-center">
    <span>${product.regularPrice}</span>
    <div >
    <button type="button" class="bg-gray-300 hover:bg-gray-400  text-green-400 w-8 h-8 border-2 border-green-400 rounded">+</button>
    <span>7</span>
    <button type="button" class="bg-gray-300 hover:bg-gray-400  text-green-400 w-8 h-8 border-2 border-green-400 rounded">-</button>
    </div>
    </div>
    </div>`
    )
    .join("");
};

main();
