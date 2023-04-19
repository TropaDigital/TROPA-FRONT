import Script from 'next/script';

const Analytics = () => (
    <>
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=UA-112950037-2`}
        />
        <Script
            id="gtag"
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
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-TMC8BJVX26`}
        />
        <Script
            id="gtag"
            strategy="afterInteractive"
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

export default Analytics;
