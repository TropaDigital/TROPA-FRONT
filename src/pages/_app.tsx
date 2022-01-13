import { GlobalStyles } from '../assets/styles/Global';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import * as gtag from '../lib/gtag'
import Analytics from './../components/Analytics'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: any) => {
          gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router.events])

    return (
        <>
            <NextNProgress
                color="#b4613c"
                startPosition={0.3}
                stopDelayMs={200}
                height={10}
                showOnShallow={true}
            />
            <Component {...pageProps} />
            <GlobalStyles />
            <Analytics />
        </>
    );
}

export default MyApp;
