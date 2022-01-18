import { addTodoProto } from "./project"


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
                let {addTodo} = addTodoProto()
                element.addTodo = addTodo
                
            });

            
            return arr
        }
        }

    return {updateLocalStorage, initProjArr}
})()

export {lStorage}