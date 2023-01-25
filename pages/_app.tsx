import '@/styles/globals.css'
import { darkTheme } from '@/theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme } from '../theme/light-theme';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <ThemeProvider theme={lightTheme}> */}
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
