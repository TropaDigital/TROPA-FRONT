// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params);
};

export function gtagReportConversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-11149050857/DhBvCOWkopkYEOmHpMQp',
        'event_callback': callback
    });
    return false;
}
