import {Todo} from "./todo";
import { format } from 'date-fns'

const load = (function(tempTodo){

    let pressed = true;
    
    function AddBtnClick()
    {
        let addBtn = document.querySelector('#addBtn');
        function Add(e)
        {
            const visible = document.querySelector('#visible');
            let todovisible = document.querySelector('#todovisible');
            let provisible = document.querySelector('#provisible');

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
                todovisible.style.display = 'none';
                provisible.style.display = 'none';
                tempTodo.prioCheck();
                pressed = true;
            }
        }
        addBtn.addEventListener('click', Add);
    }

    function TodoHeaderClick()
    {
        let todoShowBtn = document.querySelector('.headTodo');
        
        function Todo()
        {
            let todovisible = document.querySelector('#todovisible');
            let provisible = document.querySelector('#provisible');

            todovisible.style.display = 'flex';
            provisible.style.display = 'none';

            tempTodo.prioFocus();
        }
        
        todoShowBtn.addEventListener('click',Todo);
    }

    function ProjHeaderClick()
    {
        let projectShowBtn = document.querySelector('.headProj');
        
        function Pro()
        {
            let todovisible = document.querySelector('#todovisible');
            let provisible = document.querySelector('#provisible');

            provisible.style.display = 'flex';
            todovisible.style.display = 'none';
        }

        projectShowBtn.addEventListener('click',Pro);
    }

    function TodoList(todoArr)
    {
        let todoList = document.querySelector('.todo');
        todoList.innerHTML = '';
        todoArr.forEach(element => {
            todoList.innerHTML += 
            `<div class="items">
                <input type="checkbox" class="checkbox">
                <div class="name" style="color:${element.color};">${element.name}</div>
                <div class="due">${format(element.date , 'dd/MM/yyyy')}</div>
            </div>`;
        });
        if(todoArr.length == 0)
        {
            todoList.textContent = 'Add a todo';
        }
    }

    function ProjectList(projArr)
    {

        let projId = 0;
        let projList = document.querySelector('.container-1');
        projList.innerHTML = ''
        projArr.forEach(element => {
            projList.innerHTML += `<div class="tab" id="proj-${projId}">${element.name}</div>` 
            projId++;
        })

        
    }

    return {AddBtnClick, TodoHeaderClick, ProjHeaderClick, TodoList, ProjectList};
})(Todo)



export {load};