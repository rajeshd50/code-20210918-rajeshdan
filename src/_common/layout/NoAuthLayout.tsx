import React, { PropsWithChildren, useEffect } from 'react'

export default function NoAuthLayout(props: PropsWithChildren<any>) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
