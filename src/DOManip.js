let addBtn = document.querySelector('#addBtn');
let visible = document.querySelector('#visible');
let todoAdd = document.querySelector('#todoList');
let projectAdd = document.querySelector('#projectList');
let todovisible = document.querySelector('#todovisible');
let provisible = document.querySelector('#provisible');
let pressed = true;

function displayAdd(e)
{
    if(pressed)
    {
        visible.style.display = 'block';
        e.target.innerHTML = '&times';
        e.target.style.cssText = 'color: red; border-color: red;';
        pressed = false;
    }
    else
    {
        e.target.innerHTML = '+';
        e.target.style.cssText = 'color: black; border-color: grey;';
        visible.style.display = 'none';
        pressed = true;
    }
}

function displayTodo()
{
    todovisible.style.display = 'flex';
    provisible.style.display = 'none';
}
todoAdd.addEventListener('click',displayTodo);


function displayPro()
{
    provisible.style.display = 'flex';
    todovisible.style.display = 'none';
}
projectAdd.addEventListener('click',displayPro);

export {displayAdd, addBtn};