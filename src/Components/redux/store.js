import {configureStore,combineReducers} from '@reduxjs/toolkit'
import  useReducer from './userSlice'
const rootReducer=combineReducers({user:useReducer});
export const store=configureStore({
reducer:rootReducer
})

