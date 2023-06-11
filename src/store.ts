import {configureStore} from '@reduxjs/toolkit'
import { changeCityReducer } from './features/changeCityName/ChangeCityName-slice'
import { sunReducer } from './features/sunriseSunset/SunriseSunset-slice'

export const store = configureStore({
  reducer: {
    changeCity: changeCityReducer,
    sun: sunReducer,
  }
})

type GetStateType = typeof store.getState

export default GetStateType