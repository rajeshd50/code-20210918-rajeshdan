import React from 'react'
import { Redirect } from 'react-router'
import { URLS } from '../../_config'
import NoAuthLayout from '../layout/NoAuthLayout'
import { useAuthStatus } from '../hooks/authHook'

const requireNoAuth = (Component: React.ComponentType) => {
  function NoAuthHoc(props: any) {
    const isAuth = useAuthStatus()

    return (
      isAuth ? <Redirect to={URLS.USER.HOME}/> : <NoAuthLayout>
        <Component {...props} />
      </NoAuthLayout>
    )
  }

  return NoAuthHoc
}
export default requireNoAuth
