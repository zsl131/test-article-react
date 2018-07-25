export default {
  // 接口代理示例
  /*proxy: {
    "/api": {
      "target": "http://localhost:8888/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  },*/
  "publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "http://localhost:8888/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/v2_api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/v2_api" : "" }
    },
  },
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
