import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { db } from '../../firebase/config';

export const addmember = createAsyncThunk(
          "storage/addmember",
          async (formdata)=>{
                    
                   await db.collection('members').doc('1giKOUOEMFyxm1MTMOO6').collection(`${formdata.memberid}`).add({
                              memberid:formdata.memberid,
                              name:formdata.name,
                              parents:formdata.parents,
                              age:formdata.age,
                              gender:formdata.gender,
                              post:formdata.post,
                              village:formdata.village,
                              district:formdata.district,
                              pincode:formdata.pincode,
                              state:formdata.state

                   }).catch(err=>{
                             console.log(err)
                   })
                  
          return;

          }
)
const storageSlice = createSlice({
          name:'storage',
          initialState:{
                    loading:false
          },
          reducers:{
                    addnews:(state,action)=>{

                    }
          },
          extraReducers:{
                    [addmember.pending]:(state)=>{
                              state.loading=true
                    },
                    [addmember.fulfilled]:(state)=>{
                              state.loading =false
                    },
                    [addmember.rejected]:(state,action)=>{
                              
                              state.loading=false
                    }
          }

})
export default storageSlice.reducer;
export const {addnews} =storageSlice.actions