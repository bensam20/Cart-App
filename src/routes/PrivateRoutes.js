import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { LoginContext } from '../Contexts/Contexts'

const PrivateRoutes = () => {
    const {validationRes} = useContext(LoginContext)
  return (
    <>
        {validationRes === 'success' ? <Outlet/> : <Navigate to={'/login'}/>}
    </>
  )
}

export default PrivateRoutes