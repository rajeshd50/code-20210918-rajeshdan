import React, { PropsWithChildren } from 'react'

export default function AuthLayout(props: PropsWithChildren<any>) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
