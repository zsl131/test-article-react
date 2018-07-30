var proxy = require('http-proxy-middleware');
require('es6-promise').polyfill();
require('isomorphic-fetch')

window.routerBase = "/"; //手动刷新时才不会找不到页面
