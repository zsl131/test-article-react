import request from '../../../utils/request';

function list(query) {
  const opts = {
    method: 'GET',
    mode: 'cors',
    credentials:'include',
    redirect:'follow',
    headers: {
      'auth-token':'11123',
      'api-code':'articleService.list',
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    }
  }
  //s
  return request("/v2_api/posts", opts);
}

export {
  list
}
