import * as messageService from '../services/messagesService';

export default {
  state: {
    messageList:[],
    replyList:[],
    totalElements: 0,
    replyElements:0,
    addMessageVisible: false,
    addReplyVisible: false,
  },
  reducers: {
    modifyState(state, {payload: options}) {
      return {...state, ...options};
    }
  },
  effects: {
    *listMessage({payload: query}, {call,put}) {
      const data = yield call(messageService.listMessage, query);
      console.log(data);
      put({type: 'modifyState', payload: {totalElements: data.data.result.size, messageList: data.data.result.datas}});
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen((location)=> {
        if(location.pathname === '/admin/messages') {
          dispatch({type: 'listMessage', payload: location.query});
        }
      })
    }
  }
}
