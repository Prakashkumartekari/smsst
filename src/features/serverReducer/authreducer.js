import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { auth } from "../../firebase/config";

export const signupUser = createAsyncThunk(
  "auth/usersignup", 
  
  async (userdata) => {
    const {type,email,password} = userdata
    if(type === "register"){
     const res= await auth.createUserWithEmailAndPassword(email,password )
     console.log(res)
        const {error} =res
        return error;
    }else if(type === "login"){
     const res = await auth.signInWithEmailAndPassword(email,password)
     console.log(res)
     const {error} = res
     return {error}
    }else{}
 
  
});

const authReducer = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    invalid:false,
    token: null,
    uid: "",
  },
  reducers: {
    logout: (state) => {
      auth.signOut();
      state.token=null;
    },
    updateToken: (state, action) => {
      state.token = action.payload
    },
  },
  extraReducers: {
    [signupUser.rejected]: (state, action) => {
     state.loading = false;
     state.invalid = true;
   },
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.invalid =false
    }, 
  
  },
});
export const { logout, updateToken} = authReducer.actions;
export default authReducer.reducer;
