import { projArr } from "./project"
import {Todo} from "./todo";
import {load} from "./loadDOM";
import { checkBox } from "./checked";

let lStorage = (() => {

    function updateLocalStorage(arr)
    {
        localStorage.setItem('projArr', JSON.stringify(arr))
    }

    function initProjArr()
    {
        
        let arr = JSON.parse(localStorage.getItem('projArr'))
        
        
        
        
        arr.forEach(element => {
            

            element['addTodo'] = () => {
                let todoAddBtn = document.querySelector('.addTodo')
        
                let todo = (name,date,prio) => {
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

                        lStorage.updateLocalStorage(projArr);
                    }
                }

            }
        });

        console.log(arr);
    }

    return {updateLocalStorage, initProjArr}
})()

export {lStorage}