import { generalRAndomNumber } from "./generalRandomNumber.js"

export const generalTreasureCoords=({width,height},gap)=>({
    
        x: generalRAndomNumber(width,gap),
        y: generalRAndomNumber(height,gap)
})