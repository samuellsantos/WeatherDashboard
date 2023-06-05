import React from 'react'
import { Wallpaper } from './Wallpaper'
import { LeftHeaeder } from './LeftHeaeder'

export const LeftContainer = () => {
  return (
    <div className='flex'>
      <Wallpaper />
      <div>
        <LeftHeaeder />
      </div>
    </div>
  )
}
