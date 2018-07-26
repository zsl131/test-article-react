import * as newsService from '../services/newsService';
export default {
  namespace: 'news',
  state: {
    datas: [],
    item:{},
    totalElements: 0,
    showVisible: false
  },
  reducers: {
    listPage(state, {payload: data}) {
      console.log("datas:::", data);
      return {...state, totalElements: data.data.size, datas: data.data.datas};
    },
    modifyState(state, {payload: options}) {
      return {...state, ...options};
    }
  },
  effects: {
    *listObj({payload: query}, {call, put}) {
      const data = yield call(newsService.list, query);
      console.log(data);
      yield put({type: 'listPage', payload: data});
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen((location)=> {
        if(location.pathname === '/news') {
          console.log(location);
          dispatch({type:'listObj', payload: location.query});
        }
      });
    }
  }
}
