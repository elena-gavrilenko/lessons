import { createSelector } from "@reduxjs/toolkit";

const selectCounter=state=>state.counter
export const getCurrentValueToolkin=createSelector(selectCounter,(state)=>{
    return state.count
})
