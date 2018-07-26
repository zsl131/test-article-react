export default {
  plugins: [
    ['umi-plugin-dva', { immer: true }],
  ],
  context: {
    title: '测试项目'
  },
  // hashHistory:true, //加上这个是在地址栏#
  exportStatic: true,
  // "outputPath":"file:E:/temp/test-chess/",
  // exportStatic: {},
  "pages": {
    "/news": { document: "./src/pages/news-document.ejs" }
  }
};

