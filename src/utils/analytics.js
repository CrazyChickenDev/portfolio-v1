import ReactGA from 'react-ga';

export const InitializeAnalytics = () => {
	if (!process.env.REACT_APP_GA_TRACKING) throw new Error('localhost');
	const trackingId = process.env.REACT_APP_GA_TRACKING || '';
	ReactGA.initialize(trackingId);
	ReactGA.pageview('/');
};

export const AnalyticsEvent = (category, action) => {
	ReactGA.event({
		category: category,
		action: action,
	});
};
