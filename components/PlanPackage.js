import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Image from 'next/image'
import close from '../public/images/close.png'
import checkbox from '../public/images/checkbox.png'

export default function planPackage({ visible, onCancel }) {
  return (
    <div>
      <Modal
        title=""
        centered
        visible={visible}
        onCancel={onCancel}
        footer={null}
        width={1032}
        bodyStyle={{ height: '608px', overflow: 'hidden', borderRadius: '12px' }}
        className='modal-plan-package'
        closeIcon={<Image src={close} alt="Explore" width={8} height={8} layout="fixed" />}
      >
        <div className='flex flex-row h-full'>
          <div className='border p-10 h-full mr-3 rounded-xl'>
            <div className='title'>Basic</div>
            <div className='flex flex-row'>
              <div className='currency'>$</div>
              <div className='money'>9.9</div>
              <div className='month'>/ Month</div>
            </div>
            <div className='group mt-6 flex border rounded-lg border-black h-12 justify-center items-center cursor-pointer hover:bg-redLight hover:border-transparent group-hover:border-transparent' style={{ width: 239 }}>
              <div className='text-base group-hover:text-white'>Get Started</div>
            </div>
            <div className='flex flex-row mt-12 items-center'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Choose from 3000+ badges</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Apply badges to 300 products</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Upload 5 badges per month</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update more badges lifetime</div>
            </div>
          </div>

          <div className='border p-10 h-full mr-3 rounded-xl bg-redLight'>
            <div className='title text-white'>Pro</div>
            <div className='flex flex-row'>
              <div className='currency'>$</div>
              <div className='money'>49.9</div>
              <div className='month'>/ Month</div>
            </div>
            <div className='group mt-6 flex border rounded-lg  h-12 justify-center items-center cursor-pointer bg-white hover:bg-input hover:border-transparent group-hover:border-transparent' style={{ width: 239 }}>
              <div className='text-base text-redLight '>Choose Pro</div>
            </div>
            <div className='flex flex-row mt-12 items-center'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Choose from 3000+ badges</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Apply badges to 300 products</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Upload 5 badges per month</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update more badges lifetime</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update more badges lifetime</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update features lifetime</div>
            </div>
          </div>

          <div className='border p-10 h-full rounded-xl w-80 pr-0'>
            <div className='title'>Enterprise</div>
            <div className='flex flex-row'>
              <div className='currency'>$</div>
              <div className='money'>139.9</div>
              <div className='month'>/ Month</div>
            </div>
            <div className='group mt-6 flex border rounded-lg border-black h-12 justify-center items-center cursor-pointer hover:bg-redLight hover:border-transparent group-hover:border-transparent' style={{ width: 239 }}>
              <div className='text-base group-hover:text-white'>Choose Enterprise</div>
            </div>
            <div className='flex flex-row mt-12 items-center'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Choose from 3000+ badges</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Apply badges to 300 products</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Upload 200 badges per month</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div>
                <div className='ml-3'>Request unlimited custom badges</div>
                <div className='ml-3 text-10' style={{ color: '#717597' }}>Free 50 badges/ mo. Then, contact us</div>
              </div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update more badges lifetime</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div className='ml-3'>Update features lifetime</div>
            </div>
            <div className='flex flex-row items-center mt-4'>
              <Image src={checkbox} alt="Explore" width={16} height={16} layout="fixed" />
              <div>
                <div className='ml-3'>Request unlimited custom badges</div>
                <div className='ml-3 text-10' style={{ color: '#717597' }}>Need contact us</div>
              </div>
            </div>

          </div>
        </div>


      </Modal>
    </div>
  )
}
