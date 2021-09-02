import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import Layout from '../layouts/layout';
import UploadBox from '@/components/UploadBox';
import AutomateMyBadges from '@/components/AutomateMyBadges';
import MyBadgesBox from '@/components/MyBadgesBox';

export default function UploadPage() {
  return (
    <Layout>
      <MyBadgesBox />
      <AutomateMyBadges />
    </Layout>
  )
}
