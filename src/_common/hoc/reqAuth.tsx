import React from 'react'
import { Redirect } from 'react-router'
import { URLS } from '../../_config'
import AuthLayout from '../layout/AuthLayout'
import { useAuthStatus } from '../hooks/authHook'

const requireAuth = (Component: React.ComponentType) => {
  function AuthHoc(props: any) {
    const isAuth = useAuthStatus()

    return (
      isAuth ? <AuthLayout>
        <Component {...props} />
      </AuthLayout> : <Redirect to={URLS.USER.LOGIN}/>
    )
  }

  return AuthHoc
}
export default requireAuth
