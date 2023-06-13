import {configureStore} from '@reduxjs/toolkit'
import { changeCityReducer } from './features/changeCityName/ChangeCityName-slice'
import { sunReducer } from './features/sunriseSunset/SunriseSunset-slice'
import { iconReducer } from './features/iconId/IconId-slice'
import { weatherReducer } from './features/weather/Weather-slice'
import { errorReducer } from './features/error/Error-slice'

export const store = configureStore({
  reducer: {
    changeCity: changeCityReducer,
    sun: sunReducer,
    icon: iconReducer,
    weather: weatherReducer,
    error: errorReducer
  }
})

type GetStateType = typeof store.getState

export default GetStateType