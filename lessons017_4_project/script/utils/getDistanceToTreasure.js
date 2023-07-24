export function getDistanceToTreasure({x:cX,y:cY},{x:tX,y:tY}){
    console.log(Math.sqrt(Math.pow((cX-tX),2)+Math.pow((cY-tY),2)));
   
    return Math.sqrt((cX-tX)**2+(cY-tY)**2)
}