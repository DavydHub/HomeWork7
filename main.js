const addButton = document.querySelector(".add_item");
let todayDate =  document.querySelector('.text-date');

const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

todayDate.textContent =  new Date().toLocaleString('en-US', dateOptions)



const list = document.querySelector(".list");

addButton.addEventListener("click", () => {
  let inp = document.getElementById("inp")
  let textData = document.getElementById("inp").value;

  if (textData !== "") {
    const ul = document.querySelector(".list");
    ul.insertAdjacentHTML(
      "afterBegin",
      `<li class="list_item">
    ${textData} 
    <button class="del_btn">del</button>
    <button class="item_btn">+</button>
     </li>`
    );
  } 

 inp.value = "";
  
});


list.addEventListener("click", function (e) {
  // event object
  console.log("ITEM", e.target.classList.contains("item_btn"));
  if (e.target.classList.contains("item_btn")) {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("done_list");


    //=====================================================
    /* Так как метод  replaceChild удаляет последний элемент
    и что бы не удалять нужный последний элемент создаю в конец списка элемент
    который потом удалит replaceChild*/

    const newLastElement = document.createElement('li');
    this.append(newLastElement);


    const targ = e.target.parentElement; //активный элемент

    this.replaceChild(targ, this.lastChild); // происходит замена с удалением послднего


    // ====================================================
  } 
  if (e.target.classList.contains("del_btn")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }

});
