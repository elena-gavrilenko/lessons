export const generalRAndomNumber=(size,gap)=>{
return Math.floor(Math.random()*(size-(gap*2)))+gap;
}