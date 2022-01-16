import {load} from "./loadDOM";
import { createProject, Project} from "./project";


let Default = createProject('Default');
Project.projArr.push(Default);


function checkClick()
{
        load.AddBtnClick()
        load.TodoHeaderClick()
        load.ProjHeaderClick();

        Project.initialCallDefault();
        Project.create();
               
}


  

export {Default , checkClick}