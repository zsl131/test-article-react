import * as userService from '../services/userService';
import {message} from 'antd';

export default {
  state: {
    totalElements: 0,
    datas: [],
    addVisible: false,
    updateVisible: false,
    loginVisible: false,
    item: []
  },
  reducers: {
    modifyState(state, {payload: options}) {
      return {...state, ...options};
    },
    onUpdatePage(state, {payload: data}) {
      console.log(data);
      return {...state, item: data.data.datas, updateVisible: true};
    }
  },
  effects: {
    * findAll({payload: query}, {call, put}) {
      const data = yield call(userService.findAll, query);
      console.log("findAll", data);
      yield put({type: 'modifyState', payload: {totalElements: data.data.size, datas: data.data.datas}});
    },
    * saveOrUpdate({payload: obj}, {call,put}) {
      const data = yield call(userService.saveOrUpdate, obj);
      console.log("saveOrUpdate", data);
      if(data.data.size ===0 ){
        message.error(data.data.datas);
      } else if(data.data.size ===1) {
        message.success(data.data.datas);
        yield put({type: 'modifyState', payload: {addVisible: false}});
      }
    },
    *login ({payload: obj}, {call}) {
      const data = yield call(userService.login, obj);
      if(data.data.size ===0 ){
        message.error(data.data.datas);
      } else if(data.data.size ===1) {
        message.success("验证通过");
        console.log(data.data.datas);
      }
    },
    *deleteObj({payload: id}, {call}) {
      const data = yield call(userService.deleteObj, {id});
      console.log(data);
      if(data) {
        message.success(data.data.datas);
      }
    },
    *onUpdate({payload: obj}, {call, put}) {
      const data = yield call(userService.loadOne, {id: obj.id});
      yield put({type: "onUpdatePage", payload: data});
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen((location) => {
        if (location.pathname === '/admin/users') {
          dispatch({type: 'findAll', payload: location.query});
        }
      });
    }
  }
}
