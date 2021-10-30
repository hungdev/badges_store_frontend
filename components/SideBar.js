import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Dropdown, Button, Space } from 'antd';
import exploreIcon from '../public/images/explore.png'
import myBadgeIcon from '../public/images/my_badges.png'
import uploadIcon from '../public/images/upload.png'


export default function SideBar({ onShowPlan }) {

  const menu = (
    <Menu className='menu-sidebar'>
      <div className='store-name'>Hello Store</div>
      <div className='free-plan'>Free plan</div>
      <hr />
      <div className='upgrade-plan' onClick={onShowPlan}>Upgrade plan</div>
      <div className='logout'>Logout</div>
    </Menu>
  );

  return (
    <div className='sidebar-container bg-sidebar w-16 flex items-center flex-col' style={{ width: 64 }}>
      <div className='mt-8 cursor-pointer'>
        <Link href='/' passHref>
          <a><Image src={exploreIcon} alt="Explore" width={24} height={24} layout="fixed" /></a>
        </Link>
      </div>
      <div className='mt-8 cursor-pointer'>
        <Link href='/upload' passHref>
          <a><Image src={uploadIcon} alt="Upload" width={24} height={24} layout="fixed" /></a>
        </Link>
      </div>
      <div className='mt-8 mb-auto cursor-pointer'>
        <Link href='/my-badges' passHref>
          <a><Image src={myBadgeIcon} alt="Badges" width={24} height={24} layout="fixed" /></a>
        </Link>
      </div>
      <Dropdown overlay={menu} placement="topLeft">
        <div className='bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center mb-8 cursor-pointer'>
          DA
        </div>
      </Dropdown>

    </div>
  )
}
