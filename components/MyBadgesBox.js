import React from 'react'
import Image from 'next/image'
import box from '../public/images/box.png'
import p2 from '/public/discounts/discount_01_yellow_40.png'

const data = Array(10).fill('').map((e, i) => ({ id: i + 1, photo: p2.src, title: 'On Sale & Discount', date: '24 June 2021 to When i remove', description: 'Apply badge to products' }))
export default function AllBadgesUploaded({ imagesUploaded }) {
  return (
    <div className='flex flex-shrink-0 flex-col w-400 sm:w-300 md:w-400 lg:w-400 border pr-color pt-6 pl-6'>
      <div className='flex flex-row'>
        <div className='text-xl mr-auto mb-2'>My badges</div>
      </div>

      <div className='overflow-auto flex flex-col'>
        {data?.map((e, i) => (
          <div key={i} className='flex flex-row rounded-md border mt-2 p-4 mr-6 items-center'>
            <img src={e.photo} className='h-16 w-16 rounded-full mr-4' />
            <div>
              <div className='text-lg text-pr'>{e.title}</div>
              <div className='flex flex-row items-center mt-2 '>
                <div className='h-3 w-3 border rounded-full bg-delete' />
                <div className='text-sm ml-2'>{e.date}</div>
              </div>
              <div className='flex flex-row items-center mt-2 '>
                <Image src={box} alt="Explore" width={12} height={12} layout="fixed" />
                <div className='text-second text-sm ml-2'>{e.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='flex flex-col overflow-auto pt-6'>
        <div className='flex flex-wrap '>
          {discountList?.map((e, i) =>
            <div key={i} className='rounded border mr-5 mb-5'>
              <Image src={e.img} alt="Explore" width={imgSize} height={imgSize} layout="fixed" />
            </div>
          )}
        </div>
      </div> */}
    </div>
  )
}
