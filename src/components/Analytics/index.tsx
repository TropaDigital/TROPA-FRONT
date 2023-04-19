import Script from 'next/script';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

interface Props {
    trackingId: string;
}

const Analytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=UA-112950037-2`}
            />
            <Script
                id="ga"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-112950037-2', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />

            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-TMC8BJVX26`}
            />
            <Script
                id="ga"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-TMC8BJVX26');
          `,
                }}
            />
        </>
    );
};

export default Analytics;
