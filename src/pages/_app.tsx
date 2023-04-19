import { GlobalStyles } from '../assets/styles/Global';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Analytics from './../components/Analytics';
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const [loadingInitial, setLoadingInitial] = useState(true);

    const LoadingInitial = ({
        size = 100,
        className = '',
        color = '#cc6138',
    }: any) => {
        setTimeout(() => {
            setLoadingInitial(false);
        }, 500);

        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    background: 'white',
                    zIndex: 99999999999999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    className={className}
                >
                    <rect
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="none"
                    />
                    <path
                        fill={color}
                        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                        opacity=".5"
                    />
                    <path
                        fill={color}
                        d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            from="0 12 12"
                            repeatCount="indefinite"
                            to="360 12 12"
                            type="rotate"
                        />
                    </path>
                </svg>
            </div>
        );
    };
    return (
        <>
            <GlobalStyles />
            <NextNProgress
                color="#b4613c"
                startPosition={0.3}
                stopDelayMs={200}
                height={10}
                showOnShallow={true}
            />
            <Analytics />
            {loadingInitial ? <LoadingInitial /> : <Component {...pageProps} />}
        </>
    );
}

export default MyApp;
