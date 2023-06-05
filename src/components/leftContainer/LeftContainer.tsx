import { Wallpaper } from './Wallpaper'
import { LeftHeaeder } from './LeftHeaeder'
import { LeftMain } from './LeftMain'

export const LeftContainer = () => {
  return (
    <div className='flex text-blue-950'>
      <Wallpaper />
      <div className='p-8 flex flex-col gap-y-20'>
        <LeftHeaeder />
        <LeftMain />
      </div>
    </div>
  )
}
