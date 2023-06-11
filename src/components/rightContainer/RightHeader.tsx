import { useSelector } from 'react-redux'

export const RightHeader = () => {
  const city = useSelector((state: any) => state.changeCity)
  const sunState = useSelector((state: any) => state.sun)

  return (
    <header>
      <div>
        <h1 className='text-3xl uppercase'>
          {city}
        </h1>
        <h2>
          Sunrise: {sunState[1]}
          Sunset: {sunState[0]}
        </h2>
      </div>
    </header>
  )
}
