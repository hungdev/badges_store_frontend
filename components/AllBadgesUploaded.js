import React from 'react'
import Image from 'next/image'

const discountList = [
  { id: 1, img: require('../public/discounts/discount_01_black_5.svg') },
  { id: 2, img: require('../public/discounts/discount_01_yellow_15.svg') },
  { id: 3, img: require('../public/discounts/discount_01_black_15.svg') },
]

const mockData = Array(15).fill('').map((e, i) => ({ id: i, img: require('../public/discounts/discount_01_black_5.svg') }))
export default function AllBadgesUploaded({ imagesUploaded }) {
  const imgSize = 500 / 3 - 31
  return (
    <div className='flex flex-col overflow-auto pt-6'>
      <div className='mb-2 font-medium'>ALL BADGES UPLOADED</div>
      <div className='flex flex-wrap '>
        {!imagesUploaded?.length &&
          <div className='flex justify-center flex-col items-center my-6 w-full'>
            <div className='text-second'>NO BADGES</div>
            <div className='text-second'>Your badges uploaded used will show in here</div>
          </div>}
        {imagesUploaded?.map((e, i) => {
          return (
            <div key={i} className='rounded border mr-5 mb-5'>
              <img src={e} alt="Explore" width={imgSize} height={imgSize} style={{ height: imgSize, width: imgSize }} layout="fixed" />
            </div>
          )
        }
        )}
      </div>
      <hr className='mr-6 my-4' />
      <div className='my-2 font-medium'>REQUESTED BADGES</div>
      <div className='text-xs text-second mb-4'>Only for Pro & Enterprise plans</div>
      <div className='flex flex-wrap '>
        {discountList?.map((e, i) =>
          <div key={i} className='rounded border mr-5 mb-5'>
            <Image src={e.img} alt="Explore" width={imgSize} height={imgSize} layout="fixed" />
          </div>
        )}
      </div>
    </div>
  )
}
