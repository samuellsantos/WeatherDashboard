import { useSelector } from 'react-redux'

export const RightHeader = () => {
  const city = useSelector((state: any) => state.changeCity)
  const sunState = useSelector((state: any) => state.sun)
  const iconID = useSelector((state:any) => state.icon)
  const temperature = useSelector((state: any) => state.weather[0].toFixed());
  const description = useSelector((state: any) => state.weather[1]);


  return (
    <header>
      <div>
        <h1 className='text-3xl uppercase mb-24'>
          {city}
        </h1>
        
        <div className='border-b-2 border-slate-500 pb-16'>
          <img src={iconID} alt="weather icon" />
          <div className='flex items-center justify-between'>
            <h2 className='text-4xl'>{temperature} ºC</h2>
            <h4 className='text-xl'>{description}</h4>
          </div>
        </div>
      </div>
    </header>
  )
}
