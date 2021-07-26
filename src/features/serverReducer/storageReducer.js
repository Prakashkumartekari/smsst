import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { db, storage } from '../../firebase/config';
const dt = new Date()
export const addmember = createAsyncThunk(
          "storage/addmember",
          async ({formdata,url})=>{
                    const imageurl = await url
                   await db.collection('members').add({
                              addedDate:`${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`,
                              memberid:formdata.memberid,
                              name:formdata.name,
                              parents:formdata.parents,
                              age:formdata.age,
                              gender:formdata.gender,
                              post:formdata.post,
                              village:formdata.village,
                              district:formdata.district,
                              pincode:formdata.pincode,
                              state:formdata.state,
                             imageurl


                   }).catch(err=>{
                             console.log(err)
                   })
                  
          return;

          }
)
const storageSlice = createSlice({
          name:'storage',
          initialState:{
                    loading:false,
                    member:[]
          },
          reducers:{
                    addnews:(state,action)=>{

                    },
                  
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