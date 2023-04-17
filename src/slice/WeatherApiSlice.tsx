import {PayloadAction,createSlice} from '@reduxjs/toolkit'
import { ApiWeatherData } from "../Types/Types";

type ApiWeatherState={
    list:any,
    error:boolean,
    loading:boolean,
    color:string
}
type EmptyObject = {
    [K in any] : never
}
const initialState:ApiWeatherState={
    list:[],
    error:false,
    loading:false,
    color:''
}

const ApiWeatherSlice = createSlice({
    name:'apiWeather',
    initialState,
    reducers:{
     updateState(state,action){
        state.list= action.payload
     },
     getError(state,action){
        state.error=action.payload 
     },
     getLoading(state,action){
        state.loading=action.payload
     },
     uploadColor(state,action){
        state.color=action.payload
     }

    },
    extraReducers:{}
})

export default ApiWeatherSlice.reducer

export const {updateState,getError,getLoading,uploadColor} = ApiWeatherSlice.actions