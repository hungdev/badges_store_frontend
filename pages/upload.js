import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import Layout from '../layouts/layout';
import UploadBox from '@/components/UploadBox';
import ProductImageBox from '@/components/ProductImageBox';
import AutomateBox from '@/components/AutomateBox';

export default function UploadPage() {
  return (
    <Layout>
      <UploadBox />
      <ProductImageBox />
      <AutomateBox />
    </Layout>
  )
}
