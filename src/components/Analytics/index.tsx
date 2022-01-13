import Script from 'next/script'
// import { GA_TRACKING_ID } from '../../lib/gtag'

const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=UA-112950037-2`}
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-112950037-2', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics