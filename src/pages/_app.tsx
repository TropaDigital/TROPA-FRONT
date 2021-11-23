import { GlobalStyles } from '../assets/styles/Global';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
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
        </>
    );
}

export default MyApp;
