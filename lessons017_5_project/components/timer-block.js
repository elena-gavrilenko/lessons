import { getPerciseDateDifference, getTodayDataFormat } from "../utils/date.js";




export class timerBlock {
    #date;
    #timerContainer;
    #timerTextHTML;
    constructor(date){
        this.#date=date;
        this.#timerContainer=document.createElement('div');
        this.#timerTextHTML=document.createElement('h2');
    }
#getTimerContent(){
    return getPerciseDateDifference(new Date(), this.#date);
}
#enableDateUpdate(){
    setInterval(() => {
        this.#timerTextHTML.textContent=this.#getTimerContent();
    }, 1000);
}

    render(){
        this.#timerContainer.id='timer';

        this.#timerTextHTML.className='timer-text';
        this.#timerTextHTML.textContent=this.#getTimerContent();

        const todayDateHTML=document.createElement('div');
        todayDateHTML.className='today-date';
        const todayDateFormat=getTodayDataFormat(new Date());
        todayDateHTML.textContent=`Сегодня ${todayDateFormat}`;

        this.#timerContainer.append(this.#timerTextHTML,todayDateHTML);

        this.#enableDateUpdate();
        return this.#timerContainer;
    }
}