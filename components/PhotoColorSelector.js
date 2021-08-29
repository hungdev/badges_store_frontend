import React from 'react'
import p2 from '/public/discounts/discount_01_yellow_40.png'

export default function PhotoColorSelector() {
  return (
    <div className='h-12 w-full flex flex-row'>
      <img src={p2.src} alt="img-color" className='h-12 w-12 rounded border mr-2' />
      <img src={p2.src} alt="img-color" className='h-12 w-12 rounded border' />
    </div>
  )
}
