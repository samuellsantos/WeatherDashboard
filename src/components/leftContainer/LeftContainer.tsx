import { LeftHeader } from './LeftHeader'
import { LeftMain } from './LeftMain'

export const LeftContainer = () => {
  return (
    <div className='flex text-blue-950'>
      <div className='py-8 px-8 w-full xl:px-32 flex flex-col gap-y-20'>
        <LeftHeader />
        <LeftMain />
      </div>
    </div>
  )
}
