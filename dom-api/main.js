//document.body.innerHTML = "hello world";
// const h1 = document.createElement("h1");
// h1.innerText = "Hello";
// h1.classList.add("intro");
// document.body.prepend(h1);

// document.querySelector("#app").innerHTML = `
// <button type="button" class="hello1">Hello1</button>
// <button type="button" class="hello2">Hello2</button>
// <button type="button" class="hello3">Hello3</button>

// <input class="input" type="text" />

// <div class="div">
//   <button type="button" class="span-button">
//     <span>span</span>
//   </button>
// </div>

// `;

// document.querySelector("button").addEventListener("click", (event) => {
//   // console.log("event", event);
//   const input = document.querySelector(".input");
//   console.log(input.value);
// });

// document.querySelector(".input").addEventListener("input", (event) => {
//   console.log("event", event.target.value);
// });

// // event-bubbling ? target 이벤트가 없으면 부모로 타고 올라가서 이벤트를 실행 시킴.
// document.querySelector(".span-button").addEventListener("click", (event) => {
//   // event bubbling 방지. button단에서 이벤트를 실행시키고 더 이상 상위로 이벤트를 실행 시키지 않도록 함.
//   event.stopPropagation();
//   console.log("event from button", event);
// });

// document.querySelector(".div").addEventListener("click", (event) => {
//   console.log("event from div", event);
// });

document.querySelector("#app").innerHTML = `
<button class="btn-add-card" type="button">카드추가</button>
<div class="cards"></div>
`;

let count = 0;
document.querySelector(".btn-add-card").addEventListener("click", () => {
  count += 1;
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <p>Card #${count}</p>
    <button class="btn-new-card" data-attribute=${count} type="button">new 버튼</button>
  `;

  //클로저
  const thisCount = count;
  // card.querySelector(".btn-new-card").addEventListener("click", () => {
  //   console.log("Current Card Count :", thisCount);
  // });
  document.querySelector(".cards").appendChild(card);
});

document.querySelector(".cards").addEventListener("click", (event) => {
  const isButton = event.target;
  if (isButton.matches(".btn-new-card")) {
    console.log("버튼 클릭!", isButton.getAttribute("data-attribute"));
  } else {
    console.log("버튼이 아닌 다른 요소 클릭됨");
  }
});
