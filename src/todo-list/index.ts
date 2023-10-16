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
            const target = e.target as HTMLElement
            if(target.classList.contains('fa-trash')){
            
                const deleteTodo:HTMLDivElement=target.parentElement as HTMLDivElement;
                

                this.todos=this.todos.filter((todo)=>{
                    if (todo.id===deleteTodo.id){
                        todo.unmount()
                        return false
                    }
                    return true;
                })
            }
            if (target.classList.contains('fa-circle-check')){
                const switchTodo:HTMLDivElement=target.parentElement as HTMLDivElement;
                this.todos.forEach((todo)=>{
                    if (todo.id===switchTodo.id){
                        todo.isDone=!todo.isDone;
                    }
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