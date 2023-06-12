import { useSelector } from 'react-redux'

export const RightHeader = () => {
  const city = useSelector((state: any) => state.changeCity)
  const sunState = useSelector((state: any) => state.sun)
  const iconID = useSelector((state:any) => state.icon)

  return (
    <header>
      <div>
        <h1 className='text-3xl uppercase mb-24'>
          {city}
        </h1>
        
        <div>
          <img src={iconID} alt="weather icon" />
        </div>
      </div>
    </header>
  )
}
