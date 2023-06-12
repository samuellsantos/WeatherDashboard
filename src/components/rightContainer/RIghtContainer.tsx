import { RightHeader } from "./RightHeader"
import { RightMain } from "./RightMain"

export const RIghtContainer = () => {

  return (
    <div 
    className='p-8 bg-gradient-to-b from-first to-second w-5/12 text-white'>
      <RightHeader />
      <RightMain />
    </div>
  )
}
