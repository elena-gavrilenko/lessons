import { Mountable } from "../mountable";
import styles from './index.module.css'

export class Todo extends Mountable {
    parent: HTMLElement;
    self: HTMLElement;
    todoText:string;
    id:string;
    private _isDone:boolean;

    constructor(parent:HTMLElement, todoText:string){
        super()
        this.parent=parent;
        this.todoText=todoText;
        this.id=String(Date.now());
        this.self=this.createSelf();
        this._isDone=false;
    }
    
    set isDone(val:boolean){
        const checkIcon=this.self.getElementsByClassName('fa-circle-check')[0];
            if(val){
              checkIcon.classList.replace('fa-regular','fa-solid')
            } else{
                checkIcon.classList.replace('fa-solid','fa-regular')
            }

        this._isDone=val;
    }

    get isDone(){
        return this._isDone;
    }
    protected createSelf(): HTMLElement {
        
        const wrapper = document.createElement('div')
        wrapper.classList.add(styles.todoItem);
        wrapper.id=this.id;
        const text = document.createElement('div')
        text.classList.add(styles.text);
        text.textContent=this.todoText;
        const deleteIcon = document.createElement('i')
        deleteIcon.classList.add('fa-solid', 'fa-trash',styles.icon)
        const checkIcon = document.createElement('i')
        checkIcon.classList.add('fa-regular', 'fa-circle-check',styles.icon)

        wrapper.append(text, deleteIcon, checkIcon)
        return wrapper
    }
}
// иконки
        // <i class="fa-solid fa-trash"></i>
        // <i class="fa-solid fa-circle-check"></i>
        // <i class="fa-regular fa-circle-check"></i>

//структура
// <div>
// <div class='text' Todo text> 
// // <i class="fa-solid fa-trash"></i>
//         // <i class="fa-solid fa-circle-check"></i>
// </div>