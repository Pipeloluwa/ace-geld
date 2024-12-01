'use client';
import { Spinner } from '@material-tailwind/react'


export const WelcomeSuspense= () => {
  return (
    <div className='z-50 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-gray-900'>
        <Spinner color='yellow' className="h-12 w-12" onPointerEnterCapture onPointerLeaveCapture/>
    </div>
  )
}
