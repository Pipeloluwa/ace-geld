'use client';


export const WelcomeSuspense= () => {
  return (
    <div className='z-50 fixed left-0 right-0 top-0 bottom-0 flex flex-col gap-y-12 justify-center items-center bg-gray-900'>
        <div className='pulse-loader'/>

        <p className="text-white">
          {"L o a d i n g ..."}
        </p>
    </div>
  )
}
