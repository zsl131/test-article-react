import * as messagesService from '../services/messagesService';
import {message} from 'antd';
export default {
  state:{
    replyList:[],
    totalElements: 0,
    replyElements:0,
    datas:[],
    item:[],
    addMessageVisible: false,
    addReplyVisible: false,
    updateVisible:false
  }
  ,
  reducers:{
    modifyState(state,{payload:options}){
      return{...state,...options};
    },
  },
  effects:{
    *listMessage({payload:query},{call,put}){
      const data = yield call(messagesService.listMessage,query);
      console.log(data);
      yield put ({type:'modifyState',payload:{totalElements:data.data.result.size,datas:data.data.result.datas}});
    },
    *delete({payload:id},{call}){
      const data = yield call(messagesService.deleteMessage,{id});
      console.log(data);
      if(data){
        message.success(data.data.result.datas);
      }
    },
    *saveOrUpdate({payload:message},{call,put}){
      const data = yield call(messagesService.addOrUpdateMessage,message);
      console.log("saveOrUpdate",data);
      if(data.data.data.result.size===0){
        message.err(data.data.result.datas);
      }else if(data.data.size ===1) {
        message.success(data.data.result.datas);
        yield put({type: 'listMessage', payload: {addVisible: false}});
      }
    }
  },
  subscriptions:{
    setup({history,dispatch}){
      return history.listen((location)=>{
        if(location.pathname==='/messages'){
          dispatch({type:'listMessage',payload:location.query});
        }
      })
    }
  }
}
