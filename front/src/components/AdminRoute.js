import React, { useContext } from 'react'
import Store from '../Store'
export default function AdminRoute({children}) {
    const{state}=useContext(Store);
    const {userInfo}=state
  return (
    <div>AdminRoute</div>
  )
}
