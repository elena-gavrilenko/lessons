import { hints } from "../constants/hints.js";
import { generalTreasureCoords} from './generalTreasureCoords.js'

const hint=document.getElementById('hint');
const treasureMap=document.querySelector('[alt="map"]');

let treasureCoords=generalTreasureCoords(treasureMap,50);
console.log(treasureCoords);

export function mapClickHandler({offsetX, offsetY}){
   const userClickCoords={
    x:offsetX,
    y:offsetY
   }
   console.log('Координаты клика:',userClickCoords);
}