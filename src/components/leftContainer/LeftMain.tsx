import { useState, useEffect } from 'react'

/* ICONS */
import { FaWind } from 'react-icons/fa'
import { WiBarometer } from 'react-icons/wi'
import { FaCloudSunRain } from 'react-icons/fa'
import { IoMdSunny } from 'react-icons/io'

/* REACT REDUX */
import { useSelector } from 'react-redux'

import GetStateType from '../../store'

import { OverviewItems } from './OverviewItems'
import { ErrorModal } from '../ErrorModal'




export const LeftMain = () => {
  const city = useSelector((state: GetStateType) => state.changeCity)



  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [pressure, setPressure] = useState<number | null>(null);
  const [wind, setWind] = useState<number | null>(null);
  const [humidity, SetHumidity] = useState<number | null>(null);
  const [maxTemperature, setMaxTemperature] = useState<number | null>(null);
  const [country, setCountry] = useState('BR')



  useEffect(() => {
    getTemperature()
  }, [city])


  const getTemperature = async() => {
    const API_KEY = '3905b56a5d0ad9c3e625933cb4c99de6' 
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

      const data = await response.json()

      setPressure(data.main.pressure)
      setWind(data.wind.speed)
      setMaxTemperature(data.main.temp_max)
      SetHumidity(data.main.humidity)
      setError(false)
      console.log(data)

      const responseCountry = await fetch (`https://restcountries.com/v3.1/alpha/${data.sys.country}
      `)
      const dataCountry = await responseCountry.json()
      setCountry(dataCountry.map((country: any) => country.flags.svg))

    } catch(error) {
      setModal(true)
      setTimeout(() => {
        setModal(false)
      }, 2000);
      
      setError(true)
    }
    
    
  }





  return (
    <div>
      {modal && 
      <div className='absolute top-0'>
        <ErrorModal />
      </div>}

      <div className='flex items-center justify-between mb-10'>
        <h2 className='text-2xl font-medium'>
          Today Overview
        </h2>
        <p className='flex items-center gap-x-2'>
          <span>
            {error ? 'City not found' : city}
          </span>
          <img src={country} alt={`${country} flag`} className='w-4'/>
        </p>
      </div>
      
      <div>
        <div className='flex items-center gap-x-8 mb-8'>
          <OverviewItems icon={<FaWind size={30} />} name='Wind Speed' details={error ? '0' : `${wind?.toFixed()}km/h`}/>
          <OverviewItems icon={<FaCloudSunRain size={30} color={'rgb(96 200 300)'}/>} name='Humidity' details={error ? '0' : `${humidity}%`}/>
        </div>

        <div className='flex items-center gap-x-8'>
          <OverviewItems icon={<WiBarometer size={35} />} name='Atm Pressure' details={error ? '0' : `${pressure}hpa`}/>
          <OverviewItems icon={<IoMdSunny size={30} color={'orange'}/>} name='Max temperature' details={error ? '0' : `${maxTemperature?.toFixed()}ºC`}/>
        </div>
      </div>
    </div>
  )
}
