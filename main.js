const addButton = document.querySelector(".add_item");
let todayDate =  document.querySelector('.text-date');
const ul = document.querySelector(".list");
let textData = document.getElementById("inp");


const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

todayDate.textContent =  new Date().toLocaleString('en-US', dateOptions)



const data = JSON.parse(localStorage.getItem('mynotes')) || [];






//Функция которая создает обьекты
const liMaker = (text) => {
const li = document.createElement('li');
li.textContent = text.title;
ul.prepend(li);
li.classList.add('list_item');
li.setAttribute('data-time', text.timeCreate);
//создание кнопки "+"
const plusButton = document.createElement('button');
plusButton.classList.add('item_btn');
plusButton.textContent = '+'
li.append(plusButton);
//создание кнопки "del"
const delButton = document.createElement('button');
delButton.classList.add('del_btn');
delButton.textContent = 'del';
li.append(delButton);

}

const list = document.querySelector(".list");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  let params = {
    title: textData.value, 
    timeCreate: Date.now()
  }
  data.push(params)
  liMaker(params);
  localStorage.setItem('mynotes', JSON.stringify(data));
  textData.value = "";
});

data.forEach(item => {
  liMaker(item);
});
console.log(data);


list.addEventListener("click", function (e) {
  // event object
  console.log("ITEM", e.target.classList.contains("item_btn"));
  if (e.target.classList.contains("item_btn")) {
    e.target.parentElement.classList.toggle("done_list");


    //=====================================================
    /* Так как метод  replaceChild() удаляет последний элемент
    и что бы не удалять нужный последний элемент создаю в конец списка элемент
    который потом удалит replaceChild*/

    const newLastElement = document.createElement('li');
    this.append(newLastElement);


    const targ = e.target.parentElement; //активный элемент

    this.replaceChild(targ, this.lastChild); // происходит замена с удалением послднего


    // ====================================================
  } 
  if (e.target.classList.contains("del_btn")) {


    
    let timeAdd = e.target.parentElement.getAttribute('data-time');

    /* let delElement = data.find(item => item.timeCreate == timeAdd); */
    let delIndexElement = data.indexOf(timeAdd, 0);

    console.log("atribute", timeAdd);
    console.log("find", delIndexElement);
    


    





  
   /*  e.target.parentElement.remove(); */
  }
/*   if (e.target.classList.contains("down_btn")) {
    console.log(e.target.parentElement.lastChild.previousElementSibling);

    e.target.parentElement.lastChild.previousElementSibling.classList.toggle('togg');
    e.target.parentElement.style.height = `${30}px`;
    
  } */
  

});
