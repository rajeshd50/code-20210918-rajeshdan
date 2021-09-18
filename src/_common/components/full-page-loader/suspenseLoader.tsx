import React from 'react'

const SuspenseLoader = () => {
   return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
         <div className="spinner-grow text-primary spinner-grow-sm mr-3"></div>
         <div className="spinner-grow text-success spinner-grow-sm mr-3"></div>
         <div className="spinner-grow text-info spinner-grow-sm"></div>
      </div>
   )
}

export default SuspenseLoader