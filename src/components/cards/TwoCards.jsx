import React from 'react'
import './twoCards.scss'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import PieComponent from './PieComponent';

  
const TwoCards = () => {
  return (
    <div className='twoCards'>
        <div className="products-card">
        <div className='products-title'>
          <p> Top Products</p>
          <span>May-June, 2021 <ArrowDropDown /> </span>
        </div>
        <div className="products-pieChart">
            <div className="pieChart">
            <PieComponent />
            </div>
            <div className="pieChart-Info">
                <div className="one">
                    <div className='bullet'></div>
                    <div><p>Basic Tees</p>
                    <span>40%</span>
                    </div>
                </div>
                <div className="two">
                    <div className='bullet'></div>
                    <div><p>Custom Short Pants</p>
                    <span>30%</span>
                    </div>
                </div>
                <div className="three">
                    <div className='bullet'></div>
                    <div><p>Super Hoodies</p>
                    <span>30%</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="schedule-card">
        <div className='schedule-title'>
          <p> Today's Schedule</p>
          <span>See All<ArrowRight /> </span>
        </div>
        <div className="schedule-info">
          <div className="schedule-info-one">
            <div className='border-right'>

            </div>
            <div>
            <h4>Meeting with Suppliers from Kutta Bali</h4>
            <p>14:00 - 15:00</p>
            <span>at Sunset Road, Kutta Bali</span>
            </div>
          </div>
          <div className="schedule-info-two">
          <div  className='border-right'>

            </div>
            <div>
            <h4>Meeting with Suppliers from Kutta Bali</h4>
            <p>14:00 - 15:00</p>
            <span>at Sunset Road, Kutta Bali</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TwoCards