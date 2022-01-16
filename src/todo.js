let Todo = (function(){

    function DOMTodo()
    {
        let todoName = document.querySelector('#todoName');
        let todoDate = document.querySelector('#todoDate');
        

        if(todoName.value.length == 0 || todoDate.value.length == 0) return;
        let prio = prioCheck();
        let arr = [todoName.value, todoDate.valueAsDate, prio];

        todoDate.value = null;
        todoName.value = null;

        return arr;
    }

    function prioCheck()
    {
        let prio = 0;
        let red = document.querySelector('.red');
        let green = document.querySelector('.green');

        if(red.style.color == 'white')
        {    
            prio = 1;
        }

        red.style.cssText = 'color: red; background-color: white';
        green.style.cssText = 'color: white; background-color: #38ba5b';

        return prio;
    }

    function prioFocus()
    {
        let red = document.querySelector('.red');
        let green = document.querySelector('.green');

        red.addEventListener('click', () => {
            red.style.cssText = 'color: white; background-color: #fa513e';
            green.style.cssText = 'color: green; background-color: white';

        })

        green.addEventListener('click', () => {
            red.style.cssText = 'color: red; background-color: white';
            green.style.cssText = 'color: white; background-color: #38ba5b';

        })
    }



    return {DOMTodo, prioCheck, prioFocus};
})()

export {Todo}