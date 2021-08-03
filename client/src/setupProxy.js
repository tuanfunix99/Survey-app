const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  ),
  app.use(
    ["/api", "/api/*"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  )
};