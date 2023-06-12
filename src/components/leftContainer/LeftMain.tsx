import { useState, useEffect } from 'react'

/* ICONS */
import { FaWind } from 'react-icons/fa'
import { WiBarometer } from 'react-icons/wi'
import { FaCloudSunRain } from 'react-icons/fa'
import { IoMdSunny } from 'react-icons/io'

/* REACT REDUX */
import { useSelector, useDispatch } from 'react-redux'

/* SLICE REDUX */
import { changeCity } from '../../features/changeCityName/ChangeCityName-slice'
import { Sunrise, Sunset } from '../../features/sunriseSunset/SunriseSunset-slice'
import { iconID } from '../../features/iconId/IconId-slice'

/* COMPONENTS */
import { OverviewItems } from './OverviewItems'
import { ErrorModal } from '../ErrorModal'
import { LeftChart } from './LeftChart'
import { weatherDescription, weatherTemperature } from '../../features/weather/Weather-slice'







export const LeftMain = () => {
  const city = useSelector((state: string | any) => state.changeCity)
  const dispatch = useDispatch()


  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [pressure, setPressure] = useState<number | null>(null);
  const [wind, setWind] = useState<number | null>(null);
  const [humidity, SetHumidity] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);



  /* REDUX */
  const [country, setCountry] = useState('BR')
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [icon, setIcon] = useState('')
  const [description, setDescription] = useState('')


  useEffect(() => {
    dispatch(weatherDescription(description))
  }, [description])

  useEffect(() => {
    dispatch(weatherTemperature(temperature))
  }, [temperature])

  useEffect(() => {
    if(error) dispatch(iconID(`http://openweathermap.org/img/w/null}.png`))
    dispatch(iconID(`http://openweathermap.org/img/w/${icon}.png`))
  }, [icon])

  useEffect(() => {
    if(error) null
    dispatch(Sunrise(sunrise))
    dispatch(Sunset(sunset))
  }, [sunrise, sunset])


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
      setTemperature(data.main.temp)
      SetHumidity(data.main.humidity)
      setSunrise(data.sys.sunrise)
      setSunset(data.sys.sunset)
      setIcon(data.weather[0].icon)
      setDescription(data.weather[0].description)
      setError(false) 
      const responseCountry = await fetch (`https://restcountries.com/v3.1/alpha/${data.sys.country}
      `)
      const dataCountry = await responseCountry.json()
      setCountry(dataCountry.map((country: any) => country.flags.svg))

    } catch(error) {
      dispatch(changeCity(''))
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
          <span className='uppercase'>
            {error ? 'City not found' : city}
          </span>
          {error === false && <img src={country} alt={`${country} flag`} className='w-4'/>}
        </p>
      </div>
      
      <div className='mb-24'>
        <div className='flex items-center gap-x-8 mb-8'>
          <OverviewItems mode='light' icon={<FaWind size={30} />} name='Wind Speed' details={error ? '0' : `${wind?.toFixed()}km/h`}/>
          <OverviewItems mode='light' icon={<FaCloudSunRain size={30} color={'rgb(96 200 300)'}/>} name='Humidity' details={error ? '0' : `${humidity}%`}/>
        </div>

        <div className='flex items-center gap-x-8'>
          <OverviewItems mode='light' icon={<WiBarometer size={35} />} name='Atm Pressure' details={error ? '0' : `${pressure}hpa`}/>
          <OverviewItems mode='light' icon={<IoMdSunny size={30} color={'orange'}/>} name='Temperature' details={error ? '0' : `${temperature?.toFixed()}ºC`}/>
        </div>
      </div>


      <div>
        {error ? <h3>
          City not found
        </h3> : <div>
          <h3 className='text-xl font-bold mb-4'>
          Temperatures <span className='text-third underline uppercase'>{city}</span> in ºC
        </h3>
        <LeftChart />
        <h4 className='text-slate-400 text-[12px] mt-8'>
          These three-hour intervals are based on Coordinated Universal Time (UTC).
        </h4>  
        </div>}
      </div>
    </div>
  )
}
