import React from 'react'
import p2 from '/public/discounts/discount_01_yellow_40.png'

const data = Array(10).fill('').map((e, i) => ({ id: i + 1, photo: p2.src, title: 'On Sale & Discount', description: 'Apply badge to products with discount' }))
export default function AutomateTab() {
  return (
    <div className='overflow-auto flex flex-col'>
      {data?.map((e, i) => (
        <div key={i} className='flex flex-row rounded-md border mt-2 p-4'>
          <img src={e.photo} className='h-12 w-12 rounded-full mr-4' />
          <div>
            <div className='text-lg text-pr'>{e.title}</div>
            <div className='text-second text-sm'>{e.description}</div>
          </div>
        </div>
      ))}

      <div className='mt-10 text-sm text-center text-pr'>Do you want custom automate?</div>
      <div className='text-sm text-redLight text-center font-medium mb-10 cursor-pointer'>Contact Us</div>
    </div>
  )
}
