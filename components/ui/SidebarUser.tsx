
import { userProps } from '@/types/user'
import React from 'react'

const SidebarUser = ({name, email}: userProps) => {

   return (
      <div className=' pl-12 absolute bottom-0 mb-5'>
         <h4>{name ?? " Welcome"}</h4>
         <p>{email ?? "test@gmail.com"}</p>
         
      </div>
   )
}

export default SidebarUser