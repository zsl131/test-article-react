import * as leaveService from '../services/leaveService';
import {message} from 'antd';

export default {
  state: {
    leaveList:[],
    verifyList:[],
    item:[],
    it:[],
    update:false,
    updateVisible:false,
    updateVisibleVerify:false,
    totalElements:0,
    verifyElements:0,
    addLeaveVisible:false,
    addVerifyVisible:false,
  },
  reducers: {
    modifyState(state,{payload:options}) {
      return {...state,...options};
    }
  },
  effects: {
    *list({payload:query},{call,put}) {
      const data = yield call(leaveService.list,query);
      console.log(data);
      yield put({type:'modifyState',payload:{totalElements:data.size,leaveList:data.datas, verifyElements: data.verifySize, verifyList: data.verifyList}});
    },
    *addOrUpdate({payload:obj},{call,put}) {
      const data = yield call(leaveService.addOrUpdate,obj);
      console.log(data);
      yield put({type:"modifyState",payload:{addLeaveVisible:false}});
    },
    *deleteObj({payload:id},{call}) {
      const data = yield call(leaveService.deleteObj,{id});
      if(data) {
        message.success(data.data.result.datas);
      }
    },
    *listVerify({payload:query},{call,put}) {
      const data = yield call(leaveService.listVerify,query);
      console.log(data);
      yield put({type:'modifyState',payload:{verifyElements:data.data.result.size,verifyList:data.data.result.datas}});
    },
    *addOrUpdateVerify({payload:obj},{call,put}) {
      const data = yield call(leaveService.addOrUpdateVerify,obj);
      console.log(data);
      yield put({type:"modifyState",payload:{update:false}});
    },

  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen((location) => {
        if (location.pathname === '/leave') {
          dispatch({type: 'list', payload: location.query});
        }
      });
    }
  }
}
