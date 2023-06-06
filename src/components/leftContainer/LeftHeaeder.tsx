import {useState} from 'react'
import { BiBell } from 'react-icons/bi'
import { HiOutlineUser } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'

import { useDispatch, useSelector } from 'react-redux'
import GetStateType from '../../store'
import { changeCity } from '../../features/changeCityName/ChangeCityName-slice'

export const LeftHeaeder = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentDate = new Date()
  const day = currentDate.getDay()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const formatedDate = `${months[month]} ${year}`

  const [valueInput, setValueInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event: any) => {
    setValueInput(event.target.value);
  };
  
  const city = useSelector((state: GetStateType) => state.changeCity)

  const dispatchAction = () => {
    dispatch(changeCity(valueInput))
  }

  const dispatchWithEnterKeyDown = (event: any) => {
    if(event.key === 'Enter') {
      dispatch(changeCity(valueInput))
    }
  }

  


  return (
    <header className='w-full text-blue-950'>
      <div className='flex items-center justify-between gap-x-12'>
        <div>
          <h1 className='text-3xl font-medium'>
            {formatedDate}
          </h1>
          <p className='flex gap-x-1'>
            <span>
            {months[month]}
            </span>
            <span>
              {day < 10 && `0${day}`}
            </span> 
            <span>
              {year}
            </span>
          </p>
        </div>


        <div className='flex items-center gap-x-6'>
          
          <div className='relative'>
            <input 
            type="text" 
            className='bg-slate-100 w-64 h-10 pl-4 pr-12 rounded focus:outline-slate-300' 
            placeholder='Name city here...'
            onChange={handleChange}
            value={valueInput}
            onKeyDown={dispatchWithEnterKeyDown}
            />

            <button 
            className='absolute right-4 top-3 text-slate-400'
            onClick={dispatchAction}
            >
              <IoSearch size={20}/>
            </button>
          </div>

          <button className='w-12 h-12 bg-slate-100 flex items-center justify-center rounded hover:border-2 hover:border-slate-300 transition-all'>
            <BiBell size={20}/>
          </button>

          <button className='w-12 h-12 bg-slate-100 flex items-center justify-center rounded hover:border-2 hover:border-slate-300 transition-all'>
            <HiOutlineUser size={20}/>
          </button>
        </div>
      </div>
    </header>
  )
}
