import React from 'react'
import searchIcon from '../public/images/search.png'
import filterIcon from '../public/images/filter.png'
import { Input, Checkbox } from 'antd';
import Image from 'next/image'
import p2 from '/public/discounts/discount_01_yellow_40.png'

const data = Array(10).fill('').map((e, i) => ({ id: i + 1, photo: p2.src, title: 'On Sale & Discount', description: 'Apply badge to products with discount' }))
export default function AutomateTab() {
  const onChange = () => {

  }

  return (
    <div className='flex flex-col'>

      <div className='flex flex-row items-center bg-white'>
        <div className='mr-2'><Image src={searchIcon} alt="Explore" width={20} height={20} layout="fixed" /></div>
        <Input bordered={false} placeholder='Find products' className='mr-6' />
        <div className='mr-2 cursor-pointer'><Image src={filterIcon} alt="filterIcon" width={15} height={15} layout="fixed" /></div>
      </div>

      <div className='flex justify-between mt-4'>
        <div>2 products</div>
        <div className='flex check-all'> <Checkbox onChange={onChange}>All</Checkbox></div>
      </div>
      <div className='overflow-auto mt-4'>
        {data?.map(e => (
          <div className='flex flex-row rounded-md border mt-2 p-4'>
            <img src={e.photo} className='h-12 w-12 rounded-full mr-4' />
            <div>
              <div className='text-lg text-pr'>{e.title}</div>
              <div className='text-second text-sm'>{e.description}</div>
            </div>
            <Checkbox onChange={onChange}></Checkbox>
          </div>
        ))}
        <div className='mt-10 text-sm text-center text-pr'>Do you want custom automate?</div>
        <div className='text-sm text-redLight text-center font-medium mb-10 cursor-pointer'>Contact Us</div>
      </div>

    </div>
  )
}
