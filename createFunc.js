// Функция которая создает обьекты
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