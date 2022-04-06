import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './infoSlice'
import petReducer from './petSlice'

export default configureStore({
  reducer: {
    infoReducer,
    petReducer
  },  
})