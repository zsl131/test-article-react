import request from '../../../../utils/request';

function listMessage(query) {
  return request("messagesService.list", query) ;
}

function addOrUpdateMessage(message) {
  return request("messagesService.addOrUpdate", message);
}

function deleteMessage(id) {
  return request("messagesService.delete", id);
}

function listReply(query) {
  return request("replyService.list", query) ;
}

function addOrUpdateReply(reply) {
  return request("replyService.addOrUpdate", reply);
}

function deleteReply(id) {
  return request("replyService.delete", id);
}

export {
  listMessage,
  listReply,
  addOrUpdateMessage,
  addOrUpdateReply,
  deleteMessage,
  deleteReply,
}
