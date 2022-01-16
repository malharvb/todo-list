import {load} from "./loadDOM";
import { createProject, projArr, Project} from "./project";
import {lStorage} from './storage'


let Default = createProject('Default');
projArr.push(Default);


function checkClick()
{
        lStorage.initProjArr()
        load.AddBtnClick()
        load.TodoHeaderClick()
        load.ProjHeaderClick();

        Project.initialCallDefault();
        Project.create();
               
}


  

export {Default , checkClick}