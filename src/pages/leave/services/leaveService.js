import request from '../../../utils/request';

function list(query) {
  return new request("leaveService.list",query);
}
function addOrUpdate(obj) {
  return new request("leaveService.addOrUpdate",obj);
}
function deleteObj(id) {
  return new request("leaveService.delete",id);
}
function listVerify(query) {
  return new request("verifyService.list",query);
}
function addOrUpdateVerify(obj) {
  return new request("verifyService.addOrUpdate",obj);
}
function deleteObjVerify(id) {
  return new request("verifyService.delete",id);
}
export {
  list,
  listVerify,
  deleteObj,
  deleteObjVerify,
  addOrUpdate,
  addOrUpdateVerify,

}
