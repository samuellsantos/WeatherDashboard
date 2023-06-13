import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {FaSmog} from 'react-icons/fa'
import { FaCloudRain } from 'react-icons/fa'
import { OverviewItems } from '../leftContainer/OverviewItems'
import { SunriseSunset } from './SunriseSunset'

export const RightMain = () => {
  const city = useSelector((state: any) => state.changeCity)
  const error = useSelector((state: any) => state.error)
  /* STATES */
  const [aqi, setAqi] = useState('')
  const [pm, setPm] = useState('')


  useEffect(() => {
    fetchAirQuality()
  }, [city])

  async function fetchAirQuality() {
    const api_key = 'c3ee8dfb9ce54570ba5490713d41abfe'

    if(error) null
    try {
      const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/airquality?key=${api_key}&city=${city}`)
      const data = await response.json()


      setAqi(data.data[0].aqi)
      setPm(data.data[0].pm25)
      console.log()
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`)
    }
  }

  return (
    <div className='mt-8'>
      {error !== true && 
      <div>
        <h1 className='text-2xl font-bold mb-2'>Air Quality</h1>
        <h4 className='text-light text-[14px] text-slate-400 mb-3'>
          The AQI is used to measure air quality on a scale that ranges from zero (less hazardous) to 500 (most hazardous).
        </h4>
        <h4 className='text-light text-[14px] text-slate-400'>
          PM2.5 refers to fine particles with a diameter of 2.5 micrometers or less in the air, emitted by various sources such as fossil fuel combustion, biomass burning, industrial emissions, and dust.
        </h4>
        <div className='mt-8 mb-28 flex items-center flex-wrap gap-y-8 justify-between 2xl:justify-between'>
          <OverviewItems name='Aqi' details={aqi} icon={<FaSmog size={30}/>} mode='dark'/>
          <OverviewItems name='Pm 2.5' details={`${pm} µg/m³`} icon={<FaCloudRain size={30}/>} mode='dark'/>
        </div>
        <SunriseSunset />
        </div>}
  
    </div>
  )
}
