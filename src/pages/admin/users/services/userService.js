import request from '../../../../utils/request';

function findAll(query) {
  return request("userService.findAll", query, true);
}

function saveOrUpdate(obj) {
  return request("userService.saveOrUpdate", obj, true);
}

function login(params) {
  return request("userService.login", params, true);
}

export {
  findAll,
  saveOrUpdate,
  login,
}
