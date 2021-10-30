import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import chatIcon from '../public/images/chat.png'
import searchIcon from '../public/images/search.png'
import { Input, Button } from 'antd';
import CategoryScroll from '@/components/CategoryScroll'
import DiscountExploreBox from '@/components/DiscountExploreBox'
import NotificationBox from '@/components/NotificationBox'

const listCategory = ['Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free', 'Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free', 'Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free']

export default function ExploreBox() {
  const [visible, setVisible] = useState(false);

  const onToggleNoti = () => setVisible(prev => !prev)

  return (
    <div className='flex flex-col w-400 sm:w-400 md:w-400 lg:w-400 xl:w-400 border pr-color pt-6 pl-6'>
      <div className='flex flex-row'>
        <div className='text-xl mr-auto font-medium'>Explore</div>
        <div className='flex mr-6 self-center cursor-pointer' onClick={onToggleNoti}>
          <div className='mr-2'><Image src={chatIcon} alt="Explore" width={13} height={13} layout="fixed" /></div>
          <div className='text-red-400'>Request badges</div>
        </div>
      </div>

      <div className='flex flex-row mt-10 items-center'>
        <div className='mr-2'><Image src={searchIcon} alt="Explore" width={20} height={20} layout="fixed" /></div>
        <Input bordered={false} placeholder='Discount, Holiday, Trust' className='mr-6' />
      </div>

      <CategoryScroll list={listCategory} />
      <DiscountExploreBox />
      <NotificationBox visible={visible} onCancel={onToggleNoti} />
    </div>
  )
}
