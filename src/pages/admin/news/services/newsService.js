import request from '../../../../utils/request';
import axios from 'axios';
function list(query) {
  const opts = {
    method: 'GET',
    mode: 'cors',
    // credentials:'include',
    // redirect:'follow',
    // dataType:'jsonp',
    /*headers: {
      /!*'auth-token':'12314123',
      'api-code':'articleService.list',*!/
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    }*/
    headers: {
      'api-code':'articleService.list',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  return request("/api/handler?params=a=2", opts);
  /*return axios({
    baseURL: 'http://localhost:8888',
    url: '/api/handler2',
    params: {
      params:'a=b'
    },
    headers: {
      'auth-token':'124',
      'api-code':'articleService.list',
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
    proxy: {
      host: 'localhost',
      port: 8888,
      auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
      }
    },
  });*/
}

export {
  list
}
