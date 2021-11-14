import React from 'react'
import Image from 'next/image'
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { position } from '@/utils/contanst'
import { getUrlBadge } from '@/utils/photo-utils'
import { setBadgeSelected } from '@/store/badge'

import AlignBox from './AlignBox'
import PhotoColorSelector from './PhotoColorSelector'
import defaultImage from '../public/images/default_image.png'
import chatIcon from '../public/images/chat_bold.png'
import p1 from '/public/discounts/discount_01_black_10.png'
import p2 from '/public/discounts/discount_01_yellow_40.png'

const topBadges = Array(10).fill('').map((e, i) => ({ id: i }))
const centerBadges = Array(2).fill('').map((e, i) => ({ id: i }))

export default function PhotoCard({ isPhoto }) {
  const dispatch = useDispatch()

  const badgeCard = useSelector(store => store.badge.badgeCard);
  const badgeSelected = useSelector(store => store.badge.badgeSelected);


  const topLeftCard = badgeCard?.filter(e => e?.align === position?.TOP_LEFT)
  const topRightCard = badgeCard?.filter(e => e?.align === position?.TOP_RIGHT)
  const bottomLeftCard = badgeCard?.filter(e => e?.align === position?.BOTTOM_LEFT)
  const bottomRightCard = badgeCard?.filter(e => e?.align === position?.BOTTOM_RIGHT)
  const centerCard = badgeCard?.filter(e => e?.align === position?.CENTER)

  const onSelectPhoto = (photo) => () => {
    dispatch(setBadgeSelected(photo))
  }

  return (
    <div className='rounded-lg border h-350 w-300 grid flex-col overflow-hidden relative grid-badge'>
      {isPhoto ? (
        <img src={'https://thuthuatnhanh.com/wp-content/uploads/2019/11/anh-gai-xinh-cap-3-cute-545x580.jpg'}
          alt="Explore" width={300} height={350} layout="fixed" className='flex-1 absolute inset-0 h-full w-full'
        />
      ) : (
        <div className='absolute top-2/4 left-2/4 flex flex-col items-center content-center transform-translate-50 w-full'>
          <div className=''><Image src={defaultImage} alt="Explore" width={60} height={60} layout="fixed" /></div>
          <div className='text-lg text-second'>Product image show in here</div>
          <div className='text-sm text-second'>Please choose automate or products</div>
        </div>
      )}

      <div className='top-list-badges z-10 flex flex-row overflow-hidden'>
        {topLeftCard?.map(e => {
          const isSelected = badgeSelected?.orderId === e?.orderId
          return (
            <div key={e.id} onClick={onSelectPhoto(e)} style={{ height: 70, width: 70, flexShrink: 0 }}
              className={`border ${isSelected && 'border-blue'}`}>
              <img src={getUrlBadge(e?.icon)} style={{ height: '100%', width: '100%', }} alt='badge' />
            </div>)
        })}
      </div>

      <div className='right-list-badges z-20 flex flex-col overflow-hidden'>
        {topRightCard?.map(e => {
          const isSelected = badgeSelected?.orderId === e?.orderId
          return (
            <div key={e.id} onClick={onSelectPhoto(e)} className={`border ${isSelected && 'border-blue'}`}>
              <img src={getUrlBadge(e?.icon)} width={70} height={70} alt='badge' />
            </div>)
        })}
      </div>

      <div className='bottom-list-badges z-30 flex flex-row-reverse overflow-hidden'>
        {bottomLeftCard?.map(e => {
          const isSelected = badgeSelected?.orderId === e?.orderId
          return (
            <div key={e.id} onClick={onSelectPhoto(e)} style={{ height: 70, width: 70, flexShrink: 0 }}
              className={`border ${isSelected && 'border-blue'}`}>
              <img src={getUrlBadge(e?.icon)} style={{ height: '100%', width: '100%', }} alt='badge' />
            </div>)
        })}
      </div>

      <div className='left-list-badges z-30 flex flex-col-reverse overflow-hidden'>
        {bottomRightCard?.map(e => {
          const isSelected = badgeSelected?.orderId === e?.orderId
          return (
            <div key={e.id} onClick={onSelectPhoto(e)} className={`border ${isSelected && 'border-blue'}`}>
              <img src={getUrlBadge(e?.icon)} width={70} height={70} alt='badge' />
            </div>)
        })}
      </div>

      <div className='center-list-badges z-30 flex flex-row overflow-hidden'>
        {centerCard?.map(e => {
          const isSelected = badgeSelected?.orderId === e?.orderId
          return (
            <div key={e.id} onClick={onSelectPhoto(e)} style={{ height: 70, width: 70, flexShrink: 0 }}
              className={`border ${isSelected && 'border-blue'}`}>
              <img src={getUrlBadge(e?.icon)} width={70} height={70} alt='badge' />
            </div>)
        })}
      </div>
    </div>
  )
}
