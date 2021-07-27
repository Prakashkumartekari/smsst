import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
          name:"modal",
          initialState:{
                    value:false,
                    type:"",
                    alert:false,
                    text:""
          },
          reducers:{
                    showModal:(state,action)=>{
                              state.value=true
                              state.type=action.payload
                    },
                    closeModal:(state)=>{
                              state.value=false
                    },
                    showAlert:(state,action)=>{
                              state.alert=true
                              state.text=action.payload
                    },
                    closeAlert:(state)=>{
                              state.alert =false
                    }
          }
})
export const {showModal,closeModal,showAlert,closeAlert} = modalSlice.actions
export default modalSlice.reducer