import '../styles/main.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
