import { Mountable } from "../mountable";
import { Todo } from "../todo";

export class TodoList<ItemType extends Todo> extends Mountable{
    self: HTMLElement;
    parent: HTMLElement;
    todos:ItemType[]=[];

    constructor(parent:HTMLElement){
        super();
        this.parent=parent;
        this.self=this.createSelf();
    }

    protected createSelf(): HTMLElement {
        const wrapper=document.createElement('div');
        wrapper.classList.add('todoList');


        wrapper.addEventListener('click',(e:MouseEvent)=>{
            if(e.target && 'parentElement' in e.target){
            
                const deleteTodo:HTMLDivElement=e.target.parentElement as HTMLDivElement;
                

                this.todos=this.todos.filter((todo)=>{
                    if (todo.id===deleteTodo.id){
                        todo.unmount()
                        return false
                    }
                    return true;
                })
            }
        })
        return wrapper
    }
    todoAdd(text:string){
        const todo=new Todo(this.self,text);
        this.todos.push(todo as ItemType);
        todo.mount();
    }
}