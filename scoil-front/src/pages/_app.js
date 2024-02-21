// import { getItem } from '@/components/modal/useStorage';
import { getItem } from '@/components/useStorage';
  // import Auth from '@/layout/auth';
  // import Guest from '@/layout/guest';
  import '@/styles/globals.css'
  import { createContext, useEffect, useState } from 'react'
  import { config } from '@fortawesome/fontawesome-svg-core';
  import '@fortawesome/fontawesome-svg-core/styles.css';
  // import 'react-quill/dist/quill.snow.css';
  import '@/styles/editor.css';
import '../styles/globals.css';
/* import '@/styles/editor.css'; */

  // import '@/styles/calendario.css';
  // import "react-datepicker/dist/react-datepicker.css";
  // import LibellumLayout from '@/layout/libellum';
  import '@/styles/triangleImec.css'

import { SelectedDetailProvider } from '@/hooks/contextBarPurple';
  
  config.autoAddCss = false;
  
  export const DataContext = createContext();
  
  const App = ({ Component, pageProps }) => {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    const token = getItem('_token');
    const [q, setQ] = useState('');
    const [ notifGeneral, setNotifGeneral] = useState(0);
    const [ notiCalendario, setNotiCalendario] = useState(0);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
  
    if (!initialRenderComplete) return <></>;
  
    if (window.visualViewport) {
      const resizeLayout = () => {
        let container = document.getElementById('__next');
        let body = document.body;
        let html = document.querySelector('.html_cont')
        // const keyboardHeight = window.visualViewport.height - window.innerHeight;
        let height = window.innerHeight;
        container.style.maxHeight = height
        body.style.maxHeight = height
        // html.style.maxHeight = height
        body.style.overflow = 'hidden';
        // html.style.overflow = 'hidden';
        /* console.log(height); */
      }
  
      setTimeout(() => {
        window.visualViewport.addEventListener('resize', resizeLayout);
      }, 400);
    }
  
    if (token) {
      return (
        <DataContext.Provider value={{ q, setQ,  notifGeneral, setNotifGeneral, notiCalendario, setNotiCalendario }}>
          
            {/* <Auth> */}
              <Component {...pageProps} />
            {/* </Auth> */}
  
        </DataContext.Provider>
      )
    } else {
      return (
        <SelectedDetailProvider>
          <DataContext.Provider value={{ q, setQ }}>
            {/* <LibellumLayout> */}
              <Component {...pageProps} />
            {/* </LibellumLayout> */}
          </DataContext.Provider>
        </SelectedDetailProvider>
      )
      /* return (
        <DataContext.Provider value={{ q, setQ }}>
          <Guest>
            <Component {...pageProps} />
          </Guest>
        </DataContext.Provider>
      ) */
    }
  }
  
  export default App;