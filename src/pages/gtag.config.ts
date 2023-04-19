export const GA_MEU_ID = 'G-TMC8BJVX26';

export const pageview = (url: string) => {
    window.gtag('config', GA_MEU_ID, {
        page_path: url,
    });
};

type GtagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export const event = ({ action, category, label, value }: GtagEvent) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
