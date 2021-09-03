import React from 'react'
import Image from 'next/image'

const discountList = [
  { id: 1, img: require('../public/discounts/discount_01_black_5.svg') },
  { id: 2, img: require('../public/discounts/discount_01_yellow_15.svg') },
  { id: 3, img: require('../public/discounts/discount_01_black_15.svg') },
  { id: 4, img: require('../public/discounts/discount_01_red_35.svg') },
  { id: 5, img: require('../public/discounts/discount_01_black_10.svg') },
  { id: 6, img: require('../public/discounts/freeshipping_04_blue.svg') },
  { id: 7, img: require('../public/discounts/freeshipping_04_red.svg') },
  { id: 8, img: require('../public/discounts/freeshipping_04_white.svg') },
  { id: 1, img: require('../public/discounts/discount_01_black_5.svg') },
  { id: 2, img: require('../public/discounts/discount_01_yellow_15.svg') },
  { id: 3, img: require('../public/discounts/discount_01_black_15.svg') },
  { id: 4, img: require('../public/discounts/discount_01_red_35.svg') },
  { id: 5, img: require('../public/discounts/discount_01_black_10.svg') },
  { id: 6, img: require('../public/discounts/freeshipping_04_blue.svg') },
  { id: 7, img: require('../public/discounts/freeshipping_04_red.svg') },
  { id: 8, img: require('../public/discounts/freeshipping_04_white.svg') },
]

const mockData = Array(15).fill('').map((e, i) => ({ id: i, img: require('../public/discounts/discount_01_black_5.svg') }))
export default function DiscountExploreBox() {
  const imgSize = 500 / 3 - 31
  return (
    <div className='flex flex-row flex-wrap overflow-auto pt-6'>
      {discountList?.map((e, i) => {
        return (
          <div key={i} className='rounded border mr-5 mb-5 width-explore-badge'>
            <img src={e.img?.default?.src} className='' alt='explore-badge' />
          </div>
        )
      }
      )}
    </div>
  )
}
