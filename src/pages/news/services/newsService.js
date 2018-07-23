import request from '../../../utils/request';
function list(query) {
  const opts = {
    method: 'GET',
    headers: {
      'auth-token':'12314123',
      'api-code':'articleService.list'
    }
  }
  return request("/api/handler?params=a=b", opts);
}

export {
  list
}
