import { wrapper } from '../store';
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/custom.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
