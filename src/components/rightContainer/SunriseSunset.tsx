import { useEffect, useState } from 'react'
import {LuSunrise} from 'react-icons/lu'
import {LuSunset} from 'react-icons/lu'
import { useSelector } from 'react-redux'
import { OverviewItems } from '../leftContainer/OverviewItems'

export const SunriseSunset = () => {
  const sunriseSelector = useSelector((state: any) => state.sun[0])
  const sunsetSelector = useSelector((state: any) => state.sun[1])

  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')

  const sunDate = (i: number) => {
    const date = new Date(i * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes}`;

    if(i === sunriseSelector) {
      setSunrise(formattedTime)
    } else {
      setSunset(formattedTime)
    }
  }

  useEffect(() => {
    sunDate(sunriseSelector)
    sunDate(sunsetSelector)
  }, [sunriseSelector, sunsetSelector])




  return (
    <div>
      <h1 className='mb-8 text-xl font-bold'>
        Sunrise & Sunset
      </h1>
      <div className='flex items-center justify-between'>
        <OverviewItems icon={<LuSunrise color={'yellow'} size={30}/>} mode='dark' name='Sunrise' details={sunrise}/>
        <OverviewItems icon={<LuSunset color={'yellow'} size={30}/>} mode='dark' name='Sunset' details={sunset}/>
      </div>
    </div>
  )
}
