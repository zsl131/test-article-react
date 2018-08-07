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
      yield put ({type:'modifyState',payload:{totalElements:data.size, datas:data.datas}});
    },
    *delete({payload:id},{call}){
      const data = yield call(messagesService.deleteMessage,{id});
      console.log(data);
      if(data){
        message.success(data.message);
      }
    },
    *saveOrUpdate({payload:message},{call,put}){
      const data = yield call(messagesService.addOrUpdateMessage,message);
      console.log("saveOrUpdate",data);
      if(data) {
        message.success("添加成功");
        yield put({type: 'modifyState', payload: {addVisible: false}});
      }
    }
  },
  subscriptions:{
    setup({history,dispatch}){
      return history.listen((location)=>{
        if(location.pathname==='/admin/messages'){
          dispatch({type:'listMessage',payload:location.query});
        }
      })
    }
  }
}
