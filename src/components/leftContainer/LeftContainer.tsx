import { LeftHeaeder } from './LeftHeaeder'
import { LeftMain } from './LeftMain'

export const LeftContainer = () => {
  return (
    <div className='flex text-blue-950'>
      <div className='py-8 px-24 flex flex-col gap-y-20'>
        <LeftHeaeder />
        <LeftMain />
      </div>
    </div>
  )
}
