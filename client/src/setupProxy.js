const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://localhost:5000",
      target: "http://ec2-3-84-8-34.compute-1.amazonaws.com:5000",
      changeOrigin: true,
    })
  );
};
