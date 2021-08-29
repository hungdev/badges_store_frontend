import Head from 'next/head';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import SideBar from '@/components/SideBar';

const Layout = ({ children, title = 'Badge Store' }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='flex flex-row h-screen'>
        <SideBar />
        <main className='w-full flex'>
          {children}
        </main>
      </div>

      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Layout;