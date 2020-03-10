import sentryConfig from '../../config/sentry';

const Sentry = require('@sentry/node');

Sentry.init(sentryConfig);

export default Sentry;
