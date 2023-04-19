import { useEffect } from 'react';
import { useRouter } from 'next/router';

type GtagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export const useGoogleAnalytics = (trackingId: string) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            (window as any).gtag('config', trackingId, {
                page_path: url,
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, trackingId]);

    const logEvent = ({ action, category, label, value }: GtagEvent) => {
        console.log('rolou');

        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    };

    return { logEvent };
};
