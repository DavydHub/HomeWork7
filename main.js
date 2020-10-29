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

// ФУНКЦИЯ ДОБАВЛЕНИЯ НОВОГО ЭЛЕМЕНТА
function addButtonFunction () {
  let params = {
    title: textData.value, 
    timeCreate: Date.now(),
    crossedLine: false
  }
  data.push(params)
  liMaker(params);
  localStorage.setItem('mynotes', JSON.stringify(data));
  textData.value = "";
}
//КЛИК НА КНОПКУ
addButton.addEventListener("click", () => {
  addButtonFunction ();
});
// НАЖАТИЕ НА ENTER
textData.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
  addButtonFunction();
  }
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
    const arrayIndexChange = data.findIndex((item) => {
      return item.timeCreate === parseInt(timeAdd)
    })
    // меняю элементы массива местами.
    
      let changedElem = data[arrayIndexChange];
      data.splice(arrayIndexChange, 1);
      data.unshift(changedElem);

      // записываю изменения в localSt
      localStorage.setItem('mynotes', JSON.stringify(data));

    //===============================================================================//

    data[0].crossedLine = !data[0].crossedLine; // переключает значение true/false последнего элемента


    // записываю изменения в localSt
    localStorage.setItem('mynotes', JSON.stringify(data));

  } 
  if (e.target.classList.contains("del_btn")) {

    const timeAdd = e.target.parentElement.getAttribute('data-time'); 

    const arrayindex = data.findIndex((item) => {
      return item.timeCreate === parseInt(timeAdd)
    })

    data.splice(arrayindex, 1);
    localStorage.setItem('mynotes', JSON.stringify(data));

    e.target.parentElement.remove();
    
  }
});
