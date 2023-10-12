import { Mountable } from "../mountable";
import styles from './index.module.css'

export class UserInput  extends Mountable{
    parent:HTMLElement;
    self: HTMLElement;
    constructor(parent:HTMLElement){
        super();
        console.log(styles)
        this.parent=parent;
        this.self=this.createSelf();

    }

    protected createSelf(): HTMLElement {
        const input=document.createElement('input');
        input.type='text';
        input.name='todoTextInput';
        input.classList.add(styles.input)
        const button=document.createElement('button');
        button.textContent='Add';
        button.classList.add(styles.button);
        const wrapper=document.createElement('div');
        wrapper.append(input);
        wrapper.append(button);
        wrapper.classList.add(styles.wrapper)
        return wrapper;
    }
    onClick (callback: (inputValue:string)=>void){
        const button=this.self.getElementsByTagName('button')[0];
        const input=this.self.getElementsByTagName('input')[0];
        
        button.addEventListener('click', ()=>{
            callback(input.value);
            input.value=''
        })
    }
} 