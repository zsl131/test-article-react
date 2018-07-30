export default {
  plugins: [
    ['umi-plugin-dva', { immer: true }],
  ],
  // hashHistory:true, //加上这个是在地址栏#
  exportStatic: true,
  // "outputPath":"file:E:/temp/test-chess/",
  // exportStatic: {},
  "pages": {
    "/admin/article":{context: {title: "测试项目111"}},
    "/admin/news": { context: {title: '新闻列表'}, document: "./src/pages/news-document.ejs" }
  },
  context: {
    title: '测试项目'
  },
};

