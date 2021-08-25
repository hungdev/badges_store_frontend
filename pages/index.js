import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import Layout from '../layouts/layout';
import ExploreBox from '@/components/ExploreBox';

export default function Home() {
  return (
    <Layout>
      <ExploreBox />
    </Layout>
  )
}
