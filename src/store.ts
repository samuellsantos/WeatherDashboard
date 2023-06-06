import {configureStore} from '@reduxjs/toolkit'
import { changeCityReducer } from './features/changeCityName/ChangeCityName-slice'

export const store = configureStore({
  reducer: {
    changeCity: changeCityReducer
  }
})

type GetStateType = typeof store.getState

export default GetStateType