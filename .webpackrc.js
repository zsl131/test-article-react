import { resolve } from 'path';

export default {
  // 接口代理示例
  proxy: {
    "/api": {
      "target": "http://test.example.com:8888/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  },
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
