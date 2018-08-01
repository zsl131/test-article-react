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

function deleteObj(id) {
  return request("userService.delete", id, true);
}

function loadOne(id) {
  return request("userService.loadOne", id, true);
}

export {
  findAll,
  saveOrUpdate,
  login,
  deleteObj,
  loadOne,
}
