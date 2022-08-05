import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect, useState } from 'react'

const initialState = {
    loading:false,
    companies:[],
    error:''
}

export const allApplication = createAsyncThunk('users/allApplication',()=>{
    return axios({
        method:'get',
        url:'/allApps'
    })
    .then((res)=>{
        console.log('abccccccccccccccccc');
        console.log(res);
       return res.data
    })
   
})

export const newApplication = createAsyncThunk('users/newApplication',()=>{
    return axios({
        method:'get',
        url:'/newApplication'
    })
    .then((res)=>res.data)
})

export const pendingApplication = createAsyncThunk('users/pendingApplication',()=>{
    return axios({
        method:'get',
        url:'/pendingApplication'
    })
    .then((res)=> res.data)
})

export const registeredApplication = createAsyncThunk('users/registeredApplication',()=>{
    return axios({
        method:'get',
        url:'/registeredApplication'
    })
    .then((res)=>res.data)
})

export const blockedApplication = createAsyncThunk('users/blockedApplication',()=>{
    return axios({
        method:'get',
        url:'/blockedApplication'
    })
    .then((res)=>{
        console.log('jjjjjjjjjjjjjjjjjjjjjjjjj');
        console.log(res.data);
        return res.data
    })
})


export const companySlice =createSlice({
name : 'companies',
initialState,
reducers:{
    reset:(state)=>initialState
  },
    
extraReducers:(builder)=>{
    builder.addCase(newApplication.pending,(state)=>{
        state.loading =true
    })
    builder.addCase(newApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.companies = action.payload
        state.error = ''
    })
    builder.addCase(newApplication.rejected,(state,action)=>{
        state.loading=false
        state.companies = []
        state.error = action.error.message
    })
    builder.addCase(pendingApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.companies = action.payload
        state.error = ''
    })
    builder.addCase(registeredApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.companies = action.payload
        state.error = ''
    })
    builder.addCase(blockedApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.companies = action.payload
        state.error = ''
    })
    builder.addCase(allApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.companies = action.payload
        state.error = ''
    })
  
}

})

export default companySlice.reducer
