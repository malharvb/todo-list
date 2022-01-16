import {Todo} from "./todo";
import {load} from "./loadDOM";
import { checkBox } from "./checked";
import {lStorage} from './storage'



let createProject = (name) => {
     
    let arr = [];


    function addTodo()
    {
        let todoAddBtn = document.querySelector('.addTodo')
        const todo = (name,date,prio) => {
            let color = prio == 1 ? 'red': 'green';
            return {name,date,color};
        }

        function sortArr(arr)
        {
            arr.sort(function(a,b){
                
                return a.date - b.date;
            });
        }

        todoAddBtn.onclick = () => {
            let temp = Todo.DOMTodo();
            if(temp != undefined)
            {
                let obj = todo(temp[0], temp[1], temp[2]);
    
                arr.push(obj);
                sortArr(arr);
                
                load.TodoList(arr);
                checkBox.isChecked(arr);

                lStorage.updateLocalStorage(Project.projArr);
            }
        }
        
    }

    

    return {addTodo, arr, name}
}

let Project = (() => {

    let current = 0

    let projArr = []

    function initialCallDefault()
    {
        if(lStorage.initProjArr() != null)
        {
            projArr = lStorage.initProjArr()
        }
        
        projArr[current].addTodo()
        load.TodoList(projArr[current].arr);
        load.ProjectList(projArr)
        checkBox.isChecked(projArr[current].arr)
        selectDOM('proj-0')
        select();    
        
    }


    function create()
    {
        let addProBtn = document.querySelector('.addPro')
        let projName = document.querySelector('#projectName')
        addProBtn.addEventListener('click', () => {

            if(projName.value.length == 0) return;
            
            projArr.push(createProject(projName.value))
            
            load.ProjectList(projArr);

            selectDOM(`proj-${current}`)

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



    return {create, current, initialCallDefault, projArr}

})()
export {createProject, Project}