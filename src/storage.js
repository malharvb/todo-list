import { Project } from "./project"
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
        
        
        if(arr != null)
        {
            arr.forEach(element => {
                
                element.arr.forEach(e => e.date = new Date(e.date))
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
                
                            element.arr.push(obj);
                            sortArr(element.arr);
                            
                            load.TodoList(element.arr);
                            checkBox.isChecked(element.arr);

                            lStorage.updateLocalStorage(Project.projArr);
                        }
                    }

                }
            });

            
            return arr
        }
        }

    return {updateLocalStorage, initProjArr}
})()

export {lStorage}