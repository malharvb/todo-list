const checkBox = (() => { 

    let check = document.querySelectorAll('.checkbox');;



    function isChecked(arr)
    {
        check = document.querySelectorAll('.checkbox');
        let todoList = document.querySelector('.todo');
        check.forEach(elem => elem.addEventListener('change', (e) => {
            let index = arr.map(function(e) { return e.name; }).indexOf(e.target.nextSibling.nextSibling.innerHTML);
            e.target.nextSibling.nextSibling.innerHTML = '<strike>' + e.target.nextSibling.nextSibling.innerHTML + '</strike>';
            arr.splice(index,1);
            setTimeout(() => {
                e.target.parentElement.remove();
                if(arr.length == 0)
                {
                    todoList.textContent ='Add a todo';
                }
            
            }, 1000);
        
            
            
        }
        
        ));

    }

    return {isChecked}
}

)()



export {checkBox}