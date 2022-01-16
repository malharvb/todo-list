import {Todo} from "./todo";
import {load} from "./loadDOM";
import { checkBox } from "./checked";
import {lStorage} from './storage'

let projArr = []


let createProject = (name) => {
     
    const todo = (name,date,prio) => {
        let color = prio == 1 ? 'red': 'green';
        return {name,date,color};
    }

    let arr = [];


    function addTodo()
    {
        let todoAddBtn = document.querySelector('.addTodo')
        
        todoAddBtn.onclick = () => {
            let temp = Todo.DOMTodo();
            if(temp != undefined)
            {
                let obj = todo(temp[0], temp[1], temp[2]);
    
                arr.push(obj);
                sortArr(arr);
                
                load.TodoList(arr);
                checkBox.isChecked(arr);

                lStorage.updateLocalStorage(projArr);
            }
        }
        
    }

    function sortArr(arr)
    {
        arr.sort(function(a,b){
            
            return a.date - b.date;
        });

    }

    return {addTodo, arr, name}
}

let Project = (() => {

    let current = 0

    function initialCallDefault()
    {
        projArr[current].addTodo()
        selectDOM('proj-0')
    }


    function create()
    {
        let addProBtn = document.querySelector('.addPro')
        let projName = document.querySelector('#projectName')
        addProBtn.addEventListener('click', () => {

            if(projName.value.length == 0) return;
            
            projArr.push(createProject(projName.value))
            
            load.ProjectList(projArr);

            selectDOM('proj-0')

            projName.value = null;
            
            lStorage.updateLocalStorage(projArr);

            select();
        })
        
        
    }

    function select()
    {
        let tabs = document.querySelectorAll('.tab');


        tabs.forEach(el => el.addEventListener('click', e => {
            let id = e.target.id.split('-')[1];
            current = parseInt(id);

            load.TodoList(projArr[id].arr);

            selectDOM(e.target.id)

            projArr[current].addTodo();

            checkBox.isChecked(projArr[current].arr);

        }))
        
        
        
    }

    function selectDOM(id)
    {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(el => el.classList.remove('selectedProj'));

        let selected = document.querySelector(`#${id}`);
        selected.classList.add('selectedProj');
    }



    return {create, current, initialCallDefault}

})()
export {createProject, projArr, Project}