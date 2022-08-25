import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <CssBaseline />
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
