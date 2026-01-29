
import React from 'react'


const SidebarUser = ({email}: {email: string}) => {

   return (
      <div>
         <h4>Subby</h4>
         <p>{email}</p>
      </div>
   )
}

export default SidebarUser