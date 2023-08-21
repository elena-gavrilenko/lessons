import { JSBlock } from "./block.js";
import { timerBlock } from "./timer-block.js";
import { JS_CREATION_DATE } from "../constans/settings.js";

export class App {
    #jsBlock;
    #timerBlock;

    constructor(){
        this.#jsBlock=new JSBlock();
        this.#timerBlock=new timerBlock(JS_CREATION_DATE);
    }
    // метод run
    // будет запускать проект и добавлять элементы в DOM
    run(){
        const jsBlockHTML= this.#jsBlock.render();
        const timerBlockHTML=this.#timerBlock.render()
        document.body.append(jsBlockHTML,timerBlockHTML);
    }
}