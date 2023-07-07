import React from 'react'
import './infoCard.scss'

const InfoCard = ({data}) => {
  return (
    <div className='infoCard'>
        <div className='info'>
            <p className='info-detail'>{data.title}</p>
            <span className='info-numbers'>${data.earnings}</span>
            <div className='icon'>{data.icon}</div>
        </div>
    </div>
  )
}

export default InfoCard