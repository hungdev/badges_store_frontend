import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import chatIcon from '../public/images/chat.png'
import searchIcon from '../public/images/search.png'
import { Input, Upload } from 'antd';
import CategoryScroll from '@/components/CategoryScroll'
import DiscountExploreBox from '@/components/DiscountExploreBox'

const listCategory = ['Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free', 'Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free', 'Popular', 'All badges', 'Holidays', 'Sale off', 'Trust', 'Free']

const { Dragger } = Upload;

const uploadProps = {
  name: 'file',
  multiple: true,
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  showUploadList: false,
  onChange(info) {
    const { status } = info.file;
    console.log('status', info)
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function UploadBox() {
  return (
    <div className='flex flex-col w-500 sm:w-400 md:w-400 lg:w-500 border pr-color pt-6 pl-6'>
      <div className='flex flex-row'>
        <div className='text-xl mr-auto'>Upload</div>
      </div>

      <div>
        <Dragger {...uploadProps}>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </div>

      <div className='flex flex-row mt-10 items-center'>
        <div className='mr-2'><Image src={searchIcon} alt="Explore" width={20} height={20} layout="fixed" /></div>
        <Input bordered={false} placeholder='Discount, Holiday, Trust' className='mr-6' />
      </div>

      <CategoryScroll list={listCategory} />
      <DiscountExploreBox />
    </div>
  )
}
