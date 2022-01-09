import { displayAdd, addBtn } from "./DOManip";
 
function addLoad()
{
    addBtn.addEventListener('click', displayAdd);
}

export {addLoad}