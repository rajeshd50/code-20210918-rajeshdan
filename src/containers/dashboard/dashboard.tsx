import React, { useState, useEffect } from 'react'
import HeaderBanner from '../../_common/components/headerBanner'
import { useAppLoader } from '../../_common/hooks/appLoaderHook'
import { Car } from '../../_common/interfaces/models/car'
import { CARS_MOCK_DATA } from '../../_config'
import './dashboard.css'

export default function Dashboard() {

  const [ cars, setCars ] = useState<Car[]>([])
  const [ currentPage, setCurrentPage ] = useState(1)
  const loader = useAppLoader()
  const maxPage = 10

  useEffect(() => {
    setCars([...CARS_MOCK_DATA])
  }, [])

  useEffect(() => {
    loadCars()
  }, [currentPage])

  const loadCars = () => {
    loader.showLoader()
    setTimeout(() => {
      setCars([...cars, ...CARS_MOCK_DATA.map(c => {
        return {
          ...c,
          id: currentPage*CARS_MOCK_DATA.length + c.id
        }
      })])
      loader.hideLoader()
    }, 1000)
  }

  const loadNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="container-fluid w-100 p-0">
      <HeaderBanner/>
      <div className="container-fluid car-list-container">
      {
        cars && cars.length ? <div className="car-list">
          {
            cars.map((car) => {
              return <div className="single-car" key={car.id}>
                <div className="car-img-container">
                  <img className="car-img" src={`/assets/images/${car.image}`}/>
                </div>
                <div className="car-info-container">
                  <div className="car-info-text-container">
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Model</div>
                      <div className="car-info-text-value">{car.model}</div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Make</div>
                      <div className="car-info-text-value">{car.make}</div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Year</div>
                      <div className="car-info-text-value">{car.year}</div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">VIN</div>
                      <div className="car-info-text-value">{car.vin}</div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Interior Color</div>
                      <div className="car-info-text-value">{car.interior_color} <div className="color-preview" style={{
                        backgroundColor: car.interior_color
                      }}></div></div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Exterior Color</div>
                      <div className="car-info-text-value">{car.exterior_color} <div className="color-preview" style={{
                        backgroundColor: car.exterior_color
                      }}></div></div>
                    </div>
                    <div className="car-info-text-row">
                      <div className="car-info-text-label">Price</div>
                      <div className="car-info-text-value price-value">{car.price}</div>
                    </div>
                  </div>
                  <div className="car-info-buy-container">
                    <button className="btn btn-primary">Contact Sales</button>
                  </div>
                </div>
              </div>
            })
          }
          <div className="load-more-container">
          {
            currentPage < maxPage ? <button className="btn btn-secondary" onClick={loadNextPage}>Load more</button> : <p>Thats all folks!</p>
          }
          </div>
        </div> : <div className="no-cars">No cars available right now</div>
      }
      </div>
    </div>
  )
}
