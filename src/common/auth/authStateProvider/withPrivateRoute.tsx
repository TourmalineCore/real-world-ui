import { FunctionComponent, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AuthContext } from './authContext'
import { auth } from '../auth.helper'

export const withPrivateRoute = <Type extends Record<string, unknown>>(ComposedComponent: FunctionComponent<Type>) => {
  return function RequireAuthentication(props: Type) {
    const {
      isAuthenticated, setIsAuthenticated,
    } = useContext(AuthContext)

    const navigation = useNavigate()

    const location = useLocation()

    const token = auth.getToken()

    if (token) {
      setIsAuthenticated(true)
    }

    useEffect(() => {
      if (!isAuthenticated) {
        navigation(redirectAuth(location.pathname))
        window.location.reload()
      }
    }, [
      isAuthenticated,
    ])

    return isAuthenticated ? <ComposedComponent {...props} /> : null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function redirectAuth(_from: string) {
    return `/auth`
  }
}
