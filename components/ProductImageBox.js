import React from 'react'
import Image from 'next/image'
import { Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getBadges, setBadgeToCard, setBadgeSelected, changeField } from '@/store/badge'
import AlignBox from './AlignBox'
import PhotoColorSelector from './PhotoColorSelector'
import PhotoCard from './PhotoCard'
import defaultImage from '../public/images/default_image.png'
import chatIcon from '../public/images/chat_bold.png'
import p1 from '/public/discounts/discount_01_black_10.png'
import p2 from '/public/discounts/discount_01_yellow_40.png'
import Select from '@/components/Select'
import produce from 'immer';

export default function ProductImageBox({ isPhoto = true, hideSelectColor }) {
  const dispatch = useDispatch()

  const badgeSelected = useSelector(store => store.badge.badgeSelected);
  const badgeCard = useSelector(store => store.badge.badgeCard);

  const onRemoveBadge = () => {
    const nextBadgeList = badgeCard?.filter(e => e?.orderId !== badgeSelected?.orderId)
    dispatch(changeField('badgeCard', nextBadgeList))
    dispatch(setBadgeSelected(nextBadgeList?.[0]))
  }

  return (
    <div className='flex flex-auto justify-center items-center flex-col relative product-box'>
      <div className='flex items-center bg-white py-2 px-3 rounded-full mb-2 shadow text-redLight cursor-pointer'>
        Preview all products <RightOutlined className='text-xs ml-2' />
      </div>
      <PhotoCard isPhoto={isPhoto} />

      <div className='rounded-lg border h-auto w-300 mt-4 px-5 py-3 xl:py-5 bg-white'>
        <div className='flex flex-row items-end'>
          <div >
            <div>Align</div>
            <AlignBox />
          </div>
          <div className='border-separate m-auto' />
          <div >
            <div>Size</div>
            <div className='relative'>
              <Input bordered={false} placeholder='50' className='bg-input h-9 w-20 rounded-md' />
              <div className='absolute top-1/2 right-0 transform-translate-50 text-second'>px</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-end mt-4'>
          <div>
            <div>Color</div>
            <PhotoColorSelector />
          </div>
          <div className='border-separate m-auto' />
          <div >
            <div>Discount</div>
            <Select />
          </div>
        </div>
        <div div className='text-base text-delete mt-6 font-medium text-center cursor-pointer' onClick={onRemoveBadge}> Remove badge</div >
      </div >
      <div className='absolute bottom-0 right-0 cursor-pointer'><Image src={chatIcon} alt="Explore" width={70} height={70} layout="fixed" /></div>
    </div >
  )
}
