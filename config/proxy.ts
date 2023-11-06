/**
 * @name proxy configuration
 * @see In the production environment, the proxy cannot take effect, so there is no production environment configuration here
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */

const { REACT_APP_API_URL } = process.env;

export default {
  dev: {
    '/api/': {
      target: REACT_APP_API_URL,
      ws: true,
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
