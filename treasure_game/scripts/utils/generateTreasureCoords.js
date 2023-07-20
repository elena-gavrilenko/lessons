import { generateRandomNumber } from "./generateRandomNumber.js";

export const generateTreasureCoords = ({width, height}, gap) => ({
    x: generateRandomNumber(width, gap),
    y: generateRandomNumber(height, gap)
});