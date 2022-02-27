import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // Create a client
  const queryClient = new QueryClient()

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps}></Component>)}
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default MyApp
