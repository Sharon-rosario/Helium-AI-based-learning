"use client"
import { userInfo, userInfoWithoutToken } from "@/interFace/interFace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState: userInfo = {
  email:'',
  userName :'',
  password : '',
  phoneNumber :'',
  accessToken : '',
  status:1,
  seconds : 30,
  timerActive : true,
  userId : ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user_credentils : (state, { payload }: PayloadAction<userInfoWithoutToken>)=>{
      // console.log(payload,'--------------------------------trying to store data')
      state.email = payload.email
      state.userName = payload.userName
      state.password = payload.password
      state.phoneNumber = payload.phoneNumber
      state.userId = payload.userId
    },
    save_access_token : (state, { payload }: PayloadAction<string>)=>{
      // console.log(payload,'--------------------------------save_access_token')
      state.accessToken = payload
      // state.userInfo = payload
    },
    set_seconds : (state, { payload }: PayloadAction<number>)=>{
      // console.log(payload,'--------------------------------save_access_token')
      state.seconds = state.seconds - payload
      // state.userInfo = payload
    },
    set_timer_active : (state, { payload }: PayloadAction<boolean>)=>{
      console.log(payload,'-------------------------------timerActive changed')
      state.timerActive = payload
      state.seconds = 30
      // state.userInfo = payload
    },
  },
});

export const {
  user_credentils,
  save_access_token,
  set_seconds,
  set_timer_active
} = userSlice.actions;

export default userSlice.reducer;
