import { createSlice } from "@reduxjs/toolkit"; 
 
const initialState = { 
  value: 0, 
}; 
 
//le slice : Combine l’état initial et les actions 
// la fonction reducer nommé compteurSlice 
const compteurSlice = createSlice({ 
  name: "compteur", //nom du slice 
  initialState, //état initial du state 
  reducers: { 
    //reducer crée avec l'ensemble de ses actions 
    increment: (state) => { 
      state.value += 1; 
 

    }, 
    decrement: (state) => { 
      state.value -= 1; 
    }, 
      reset: (state) => { 
        state.value = 0;
     },
  }, 
}); 
 
export const { increment, decrement, reset } = compteurSlice.actions; 
export default compteurSlice.reducer; 