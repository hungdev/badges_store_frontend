import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import chatIcon from '../public/images/chat.png'
import searchIcon from '../public/images/search.png'
import { Input, Upload } from 'antd';
import CategoryScroll from '@/components/CategoryScroll'
import AllBadgesUploaded from '@/components/AllBadgesUploaded'
import { uniqBy } from '@/utils/index'

const { Dragger } = Upload;

export default function UploadBox() {
  const [files, setFiles] = useState([])
  const uploadProps = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    beforeUpload: () => false,
    onChange(info) {
      const { file, fileList } = info;
      console.log('fileList', fileList)
      setFiles(prev => [
        ...prev,
        ...fileList?.map(imf => imf?.originFileObj)])
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
      // console.log(Object.values(e.dataTransfer.files))
      // setFiles(prev => [...prev, ...Object.values(e.dataTransfer.files)?.map(imf => URL.createObjectURL(imf))])
    },
  };

  return (
    <div className='flex flex-col w-500 sm:w-400 md:w-400 lg:w-500 border pr-color pt-6 pl-6'>
      <div className='flex flex-row'>
        <div className='text-xl mr-auto'>Upload</div>
      </div>

      <div className='mr-6 my-6'>
        <Dragger {...uploadProps} className='p-4'>
          <div className='flex justify-center items-center flex-col'>
            <div className="ant-upload-text">Drag & Drop your badge in here</div>
            <div className='flex flex-row'>or <div className='text-redLight ml-1'>Choose a file</div></div>

            <div className="text-second mt-4 text-xs">
              File uploader must JPG, SVG, PNG. maximum size is 1 MB
            </div>
          </div>
        </Dragger>
      </div>

      <AllBadgesUploaded imagesUploaded={uniqBy(files, 'uid')?.map(e => URL.createObjectURL(e))} />
    </div >
  )
}
