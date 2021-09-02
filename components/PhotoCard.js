import React from 'react'
import Image from 'next/image'
import { Input, Button } from 'antd';
import AlignBox from './AlignBox'
import PhotoColorSelector from './PhotoColorSelector'
import defaultImage from '../public/images/default_image.png'
import chatIcon from '../public/images/chat_bold.png'
import p1 from '/public/discounts/discount_01_black_10.png'
import p2 from '/public/discounts/discount_01_yellow_40.png'

const topBadges = Array(10).fill('').map((e, i) => ({ id: i }))
const centerBadges = Array(2).fill('').map((e, i) => ({ id: i }))

export default function PhotoCard({ isPhoto }) {
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
        {topBadges?.map(e => <div key={e.id} style={{ height: 70, width: 70, flexShrink: 0 }}><img src={p1.src} style={{ height: '100%', width: '100%', }} /></div>)}
      </div>
      <div className='right-list-badges z-20 flex flex-col overflow-hidden'>
        {topBadges?.map(e => <div key={e.id}><img src={p2.src} width={70} height={70} /></div>)}
      </div>
      <div className='bottom-list-badges z-30 flex flex-row-reverse overflow-hidden'>
        {topBadges?.map(e => <div key={e.id} style={{ height: 70, width: 70, flexShrink: 0 }}><img src={p1.src} style={{ height: '100%', width: '100%', }} /></div>)}
      </div>
      <div className='left-list-badges z-30 flex flex-col-reverse overflow-hidden'>
        {topBadges?.map(e => <div key={e.id}><img src={p2.src} width={70} height={70} /></div>)}
      </div>
      <div className='center-list-badges z-30 flex flex-row overflow-hidden'>
        {centerBadges?.map(e => <div key={e.id} style={{ height: 70, width: 70, flexShrink: 0 }}><img src={p2.src} width={70} height={70} /></div>)}
      </div>
    </div>
  )
}
