import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/layout';
import ExploreBox from '@/components/ExploreBox';
import ProductImageBox from '@/components/ProductImageBox';
import AutomateBox from '@/components/AutomateBox';

export default function Home() {
  return (
    <Layout>
      <ExploreBox />
      <ProductImageBox />
      <AutomateBox />
    </Layout>
  )
}
