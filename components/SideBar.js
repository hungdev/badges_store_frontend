import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import exploreIcon from '../public/images/explore.png'
import myBadgeIcon from '../public/images/my_badges.png'
import uploadIcon from '../public/images/upload.png'


export default function SideBar() {
  return (
    <div className='bg-sidebar w-16 flex items-center flex-col'>
      <div className='mt-8 cursor-pointer'>
        <Link href='/'>
          <Image src={exploreIcon} alt="Explore" width={30} height={30} layout="fixed" />
        </Link>
      </div>
      <div className='mt-8 cursor-pointer'>
        <Link href='/upload'>
          <Image src={uploadIcon} alt="Upload" width={30} height={30} layout="fixed" />
        </Link>
      </div>
      <div className='mt-8 mb-auto cursor-pointer'>
        <Link href='/badges'>
          <Image src={myBadgeIcon} alt="Badges" width={30} height={30} layout="fixed" />
        </Link>
      </div>
      <div className='bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center mb-8 cursor-pointer'>
        DA
      </div>
    </div>
  )
}
