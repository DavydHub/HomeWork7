const addButton = document.querySelector(".add_item");

const list = document.querySelector(".least");

addButton.addEventListener("click", () => {
  const textDate = document.getElementById("inp").value;

  if (textDate !== "") {
    const ul = document.querySelector(".least");
    ul.insertAdjacentHTML(
      "afterBegin",
      `<li class="list_item">
    ${textDate} <button class="item_btn">+</button>
     </li>`
    );
  } else console.log(textDate);
});

console.log(list);
list.addEventListener("click", function (e) {
  // event object
  console.log("ITEM", e.target.classList.contains("item_btn"));
  if (e.target.classList.contains("item_btn")) {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("done_least");
  }
});
