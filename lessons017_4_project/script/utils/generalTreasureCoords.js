import { generalRAndomNumber } from "./generalRandomNumber.js"

export const generalTreasureCoords=({width,height},gap)=>({
// gap - отступ
// width - ширина карты , height - высота карты
        x: generalRAndomNumber(width,gap),
        y: generalRAndomNumber(height,gap)
})