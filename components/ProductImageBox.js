import React from 'react'
import Image from 'next/image'
import { Input, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import AlignBox from './AlignBox'
import PhotoColorSelector from './PhotoColorSelector'
import PhotoCard from './PhotoCard'
import defaultImage from '../public/images/default_image.png'
import chatIcon from '../public/images/chat_bold.png'
import p1 from '/public/discounts/discount_01_black_10.png'
import p2 from '/public/discounts/discount_01_yellow_40.png'

export default function ProductImageBox({ isPhoto = true }) {
  return (
    <div className='flex flex-auto justify-center items-center flex-col relative product-box'>
      <div className='flex items-center bg-white py-2 px-3 rounded-full mb-2 shadow text-redLight cursor-pointer'>
        Preview all products <RightOutlined className='text-xs ml-2' />
      </div>
      <PhotoCard isPhoto={isPhoto} />

      <div className='rounded-lg border h-auto w-300 mt-4 p-5 bg-white'>
        <div className='flex flex-row'>
          <div className='w-1/3'>Align</div>
          <AlignBox />
        </div>
        <div className='flex flex-row items-center mt-4'>
          <div className='w-1/3'>Size</div>
          <div className='relative w-full'>
            <Input bordered={false} placeholder='50' className='bg-input h-9 rounded-md' />
            <div className='absolute top-1/2 right-0 transform-translate-50 text-second'>px</div>
          </div>
        </div>
        <div className='flex flex-row items-center mt-4'>
          <div className='w-1/3'>Color</div>
          <PhotoColorSelector />
        </div>
        <div className='text-base text-delete mt-6 font-medium text-center cursor-pointer'>Remove badge</div>
      </div>
      <div className='absolute bottom-0 right-0 cursor-pointer'><Image src={chatIcon} alt="Explore" width={70} height={70} layout="fixed" /></div>
    </div>
  )
}
