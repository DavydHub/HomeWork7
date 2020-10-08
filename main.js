const addButton = document.querySelector(".add_item");
const textDate = document.getElementById("inp").value;

addButton.addEventListener("click", () => {
  const ul = document.querySelector(".least");
  ul.insertAdjacentHTML(
    "afterBegin",
    `<li class="list_item">
    Создать приложение "TODOLEAST" <button class="item_btn">+</button>
     </li>`
  );
});
