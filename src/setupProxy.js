const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://assignment.bunq.com",
      pathRewrite: {
        "^/api/": "/" // remove base path
      }
    })
  );
};
