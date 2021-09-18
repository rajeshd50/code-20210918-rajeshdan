import React from 'react'
import './appLoader.css';

function AppLoaderOnly() {
  return (
    <div className="app-loader-container">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default AppLoaderOnly
