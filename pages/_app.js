import '@/styles/globals.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
       AOS.init({disable: 'mobile'});
 }, [])
  return <Component {...pageProps} />
}
