import {configureStore} from '@reduxjs/toolkit'
import { changeCityReducer } from './features/changeCityName/ChangeCityName-slice'
import { sunReducer } from './features/sunriseSunset/SunriseSunset-slice'
import { iconReducer } from './features/iconId/IconId-slice'

export const store = configureStore({
  reducer: {
    changeCity: changeCityReducer,
    sun: sunReducer,
    icon: iconReducer
  }
})

type GetStateType = typeof store.getState

export default GetStateType