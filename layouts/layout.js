import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import SideBar from '@/components/SideBar';
import ModalPlanPackage from '@/components/PlanPackage'

const Layout = ({ children, title = 'Badge Store' }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const onShowPlan = () => setVisible(prev => !prev)

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='flex flex-row h-screen'>
        <SideBar onShowPlan={onShowPlan} />
        <main className='w-full flex'>
          {children}
        </main>
      </div>
      <ModalPlanPackage visible={visible} onCancel={onShowPlan} />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Layout;