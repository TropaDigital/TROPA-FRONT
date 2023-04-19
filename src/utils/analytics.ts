import ReactGA from 'react-ga';

export const initGA = (trackingID: string) => {
    ReactGA.initialize(trackingID);
};

export const logPageView = (pathname: string) => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
};

export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
