import React from 'react'

type LogoProps = {
  expanded?: boolean;
}

export function NavLogo ({expanded}: LogoProps) {
  return (
    <div>

      {/*navbar*/}
      <div className='flex items-center'>
        <img src="/logo.png" alt="" className={`w-14 h-14 rounded-full object-cover hover:scale-110 hover:ring hover:ring-rose-400/60 hover:shadow-lg
          ${expanded
            ? "-scale-x-100 absolute md:left-68 left-48"
            : "absolute md:left-20 left-6"
          }
          `} />
        <h1 className={`font-bold ml-4 text-lg  ${expanded
            ? " absolute md:left-82 left-60 hidden md:block"
            : "absolute md:left-34 left-20"
          } `}>Hair Routine Tracker</h1>
      </div>

      {/*navbar
      <div>
        <img src="/hair.png" alt="" className='w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover ' />
        <h1 className='font-bold ml-4 '>Hair Routine Tracker</h1>
      </div>*/}
    </div>
  )
}


export function SidebarLogo ({expanded}: LogoProps) {
  return (
    <div>

      {/*sidebar*/}
      <div className=' items-center justify-center'>
        <img src="/logo.png" alt=""  
        className={`rounded-full object-cover cursor-pointer
          transition-transform duration-300 ease-out 
          hover:shadow-[0_0_0_6px_rgba(251,113,133,0.25)]
          hover:rotate-3
          active:scale-95
          ${expanded 
            ? "w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 transform scale-100 ring-4 ring-rose-200/60" : "w-14 h-14 -scale-x-100"}
          hover:scale-110
          `} />

        <h1 className={`font-bold ml-4 mt-2 transition-opacity duration-200 ${expanded ? "opacity-100" : "opacity-0 hidden"}  `}>Hair Routine Tracker</h1>
      </div>

      {/*navbar
      <div>
        <img src="/hair.png" alt="" className='w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover ' />
        <h1 className='font-bold ml-4 '>Hair Routine Tracker</h1>
      </div>*/}
    </div>
  )
}
