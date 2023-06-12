import React from 'react'

interface overviewProps {
  name: string;
  details: string;
  icon?: React.ReactNode
  mode: 'dark' | 'light'
}

export const OverviewItems = ({name, details, icon, mode}: overviewProps ) => {
  return (
    <div 
    className={`flex gap-x-4 
    ${mode === 'light' ? 'bg-slate-100' : 'bg-slate-800'} 
    p-4 rounded w-72`}>
      <div className='text-blue-400'>{icon}</div>
      <div className='flex flex-col'>
        <span 
        className={`${mode === 'light' ? 'text-slate-500' :'text-slate-200'} font-normal`}>{name}</span>
        <span className='font-bold text-xl'>{details}</span>
      </div>
    </div>
  )
}
