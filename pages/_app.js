import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'  // Adjust this path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
