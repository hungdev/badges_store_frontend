import React from 'react'
import { Input, Checkbox } from 'antd';

const data = Array(12).fill('').map((e, i) => ({
  id: i,
  img: 'https://thuthuatnhanh.com/wp-content/uploads/2019/11/anh-gai-xinh-cap-3-cute-545x580.jpg',
  name: 'Female classic T-shirt with custom image dog, cat, tiger, Female classic T-shirt with custom image dog, cat, tiger,'
}))
export default function AutomateMyBadges() {
  const onChange = () => {

  }

  return (
    <div className='flex flex-auto flex-col relative product-box p-6 pb-0'>
      <div className='flex flex-row justify-between'>
        <div>
          <div className='text-xl'>Automate New Arrival</div>
          <div className='mt-2'>Apply on 12,980 products </div>
        </div>
        <div>
          <Checkbox onChange={onChange} className='mr-6'>All products</Checkbox>
          <div className='p-3 px-4 bg-pr inline-block text-white rounded-lg mr-2 cursor-pointer'>Edit Schedule</div>
          <div className='p-3 px-4 bg-redLight inline-block text-white rounded-lg cursor-pointer'>Remove Badges</div>
        </div>
      </div>

      <div className='flex flex-row flex-wrap overflow-auto -mr-5 mt-6'>
        {data?.map((e, i) => (
          <div key={e.id} className='automate-photo-box relative'>
            <Checkbox onChange={onChange} className='absolute top-4 right-4'></Checkbox>
            <img src={'https://thuthuatnhanh.com/wp-content/uploads/2019/11/anh-gai-xinh-cap-3-cute-545x580.jpg'}
              alt="Explore" layout="fixed" className='h-auto max-h-300 w-full border rounded-xl overflow-hidden'
            />
            <div className='text-two-lines mt-2'>{e.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
