import { hints } from "../../constants/hints.js";
import { generalTreasureCoords } from "./generalTreasureCoords.js";

const hint=document.getElementById('hint');
const treasureMap=document.querySelector('[alt="map"]');

console.log(treasureMap);

let treasureCoords=generalTreasureCoords(treasureMap,50);
export function mapClickHandler(){
   const userClickCoords={
    x:offsetX,
    y:offseY
   }
}