const addButton = document.querySelector(".add_item");
const doneButton = document.querySelector(".item_btn");

addButton.addEventListener("click", () => {
  const textDate = document.getElementById("inp").value;
  const ul = document.querySelector(".least");
  ul.insertAdjacentHTML(
    "afterBegin",
    `<li class="list_item">
    ${textDate} <button class="item_btn">+</button>
     </li>`
  );
  console.log(textDate);
});

doneButton.addEventListener("click", () => {
  const doneElement = document.querySelector(".list_item");
  doneElement.remove(doneElement);
});
