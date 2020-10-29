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

const data = JSON.parse(localStorage.getItem('mynotes')) || []; // Основной массив

const list = document.querySelector(".list");

addButton.addEventListener("click", (e) => {

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

list.addEventListener("click", function (e) {
  // event object
  
  if (e.target.classList.contains("item_btn")) {
    e.target.parentElement.classList.toggle("done_list");

    /* Так как метод  replaceChild() удаляет последний элемент
    и что бы не удалять нужный последний элемент создаю в конец списка элемент
    который потом удалит replaceChild*/

    const newLastElement = document.createElement('li');
    this.append(newLastElement);


    const targ = e.target.parentElement; //активный элемент

    this.replaceChild(targ, this.lastChild); // происходит замена с удалением последнего

    /* Реализация, перемещения элемента в массиве locallStorage что бы запоминать
    положение элементов при перезагрузке */

    const timeAdd = e.target.parentElement.getAttribute('data-time'); 
    //находим индекс элемента
    const arrayindex = data.findIndex((item) => {
      console.log(item);
      return item.timeCreate === parseInt(timeAdd)
    })
    // деструктуризирующее присваивание (меняет местами элементы массива)
    [data[arrayindex], data[0]] = [data[0], data[arrayindex]];
    // записываю изменения в localStorage
    localStorage.setItem('mynotes', JSON.stringify(data));

  } 
  if (e.target.classList.contains("del_btn")) {

    const timeAdd = e.target.parentElement.getAttribute('data-time'); 

    const arrayindex = data.findIndex((item) => {
      console.log(item);
      return item.timeCreate === parseInt(timeAdd)
    })

    data.splice(arrayindex, 1);
    localStorage.setItem('mynotes', JSON.stringify(data));

    e.target.parentElement.remove();
    
  }
});
