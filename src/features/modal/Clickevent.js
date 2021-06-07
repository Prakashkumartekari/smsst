import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
          name:"modal",
          initialState:{
                    value:false,
          },
          reducers:{
                    showModal:(state)=>{
                              state.value=true
                    },
                    closeModal:(state)=>{
                              state.value=false
                    }
          }
})
export const {showModal,closeModal} = modalSlice.actions
export default modalSlice.reducer