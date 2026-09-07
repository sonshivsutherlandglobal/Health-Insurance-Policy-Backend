export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'ZUz1y5CdzHRYXWw0hujHn',
    client_secret:
      'hFK-984OK55h2fInARij4Jq0uJ5yHCdWXUV0c4bFGlCJPd6wCuK0zvFjcdiZ0lGrmnfjMUzoYj-fBVvcnHru6w',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
