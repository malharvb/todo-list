let addBtn = document.querySelector('#addBtn');
let visible = document.querySelector('#visible');
let todovis = document.querySelector('#todoList')

function displayAdd()
{
    visible.style.display = 'block'
}

addBtn.addEventListener('click', displayAdd)