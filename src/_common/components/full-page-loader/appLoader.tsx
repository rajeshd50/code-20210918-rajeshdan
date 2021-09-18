import React from 'react'
import { useAppLoaderSelector } from '../../hooks/loaderSelector';

import './appLoader.css';

function AppLoader() {

  const show = useAppLoaderSelector()

  if (!show) {
    return null
  }

  return (
    <div className="app-loader-container">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default AppLoader