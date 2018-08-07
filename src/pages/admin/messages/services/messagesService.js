import request from '../../../../utils/request';
function listMessage(query){
  return request("messagesService.list",query);
}
function addOrUpdateMessage(message){
  return request("messagesService.addOrUpdate",message)
}
function deleteMessage(message){
  return request("messagesService.delete",message)
}
function listReply(query) {
  return request("replyService.list",query)
}
export {
  listMessage,
  addOrUpdateMessage,
  deleteMessage,
  listReply,
}
