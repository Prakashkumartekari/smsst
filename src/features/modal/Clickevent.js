import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
          name:"modal",
          initialState:{
                    value:false,
                    type:""
          },
          reducers:{
                    showModal:(state,action)=>{
                              state.value=true
                              state.type=action.payload
                    },
                    closeModal:(state)=>{
                              state.value=false
                    }
          }
})
export const {showModal,closeModal} = modalSlice.actions
export default modalSlice.reducer