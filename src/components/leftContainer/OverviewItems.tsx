import React from 'react'

interface overviewProps {
  name: string;
  details: string;
  icon?: React.ReactNode
}

export const OverviewItems = ({name, details, icon}: overviewProps ) => {
  return (
    <div className='flex gap-x-4 bg-slate-100 p-4 rounded w-72'>
      <div className='text-blue-400'>{icon}</div>
      <div className='flex flex-col'>
        <span className='text-slate-500 font-normal'>{name}</span>
        <span className='font-bold text-xl'>{details}</span>
      </div>
    </div>
  )
}
