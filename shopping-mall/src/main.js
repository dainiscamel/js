const main = async () => {
  const api = await fetch(
    "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
  );

  const products = await api.json();

  document.querySelector("#products").innerHTML = products
    .map(
      (
        product
      ) => `<div class="product"><img src="${product.images[0]}" alt="상품 이미지" />
    <p>${product.name}</p></div>`
    )
    .join("");
};

main();
