import { hints } from "../constants/hints.js";
import { generalTreasureCoords} from './generalTreasureCoords.js'
import { getDistanceToTreasure } from "./getDistanceToTreasure.js";

const hint=document.getElementById('hint');
const treasureMap=document.querySelector('[alt="map"]');

let treasureCoords=generalTreasureCoords(treasureMap,50);
// console.log(treasureCoords);

function starNewtGame(){
   // удаляем окно из DOM  с помощью remove
   document.getElementsByClassName('popup')[0].remove();


   // генерируем нговые координаты клада
   treasureCoords=generalTreasureCoords(treasureMap,50);
   // добавляем слушателя события обратно
   treasureMap.addEventListener('click',mapClickHandler);
}

export function mapClickHandler({offsetX, offsetY}){
   // в в аргументах функции применили деструктуризацию
   // координаты пользователя
   const userClickCoords={
    x:offsetX,
    y:offsetY
   }
   generateHint(getDistanceToTreasure(userClickCoords,treasureCoords),hint)
   // console.log('Координаты клика:',userClickCoords);
}

function removePrevClass(elem){
   // проверяем есть ли у элемента класс
   // и если есть - удаляем его
   // cls- класс
   hints.forEach((cls)=>{
      if(elem.classList.contains(cls)){
         elem.classList.remove(cls);

      }
   })
}

function openPopup(){
   const mapWraper=document.getElementById('map_wrapper');
   // создаем div для окна
   const popup=document.createElement('div');
   popup.classList.add('popup');
   popup.style.left=treasureCoords.x+'px';
   popup.style.top=treasureCoords.y+'px';
   // создаем кнопку для запуска новый игры в окне
   const btnNewGame=document.createElement('button');
   btnNewGame.textContent='start new game';
   btnNewGame.classList.add('start');
   btnNewGame.addEventListener('click',starNewtGame);
   // добавляем сообщение в окне
   const winMessage=document.createElement('span');
   winMessage.textContent='YOU WON'
   // добавляем на страницу
   popup.append(winMessage);
   popup.append(btnNewGame);

   mapWraper.append(popup);
}
function makeHint(hintName, elem){
   elem.classList.add(hintName);
   elem.textContent=hintName;
}
function endGame(){
   // удаляем слушателя события
   treasureMap.removeEventListener('click',mapClickHandler);
   openPopup();
}

function generateHint(distance,element){
   removePrevClass(element);
   if (distance<30){
      makeHint('hot', element);
      endGame();
   } else if(distance<60){
      makeHint('warm', element);
   }
   else if(distance<100){
      makeHint('medium', element);
   }
   else if(distance<150){
      makeHint('cold', element);
   }
   else {
      makeHint('winter', element);
   }

}