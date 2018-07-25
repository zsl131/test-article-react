import * as postsService from '../services/postsService';
export default {
  namespace: 'posts',
  state: {
    totalElements: 0
  },
  reducers: {
    listObj(state, {payload: data}) {
      console.log("length::", data.data.length);
      return {...state, totalElements: data.data.length};
    }
  },
  effects: {
    *list({payload},{call,put}) {
      const data = yield call(postsService.list);
      console.log(data);
      if(data) {
        yield put({type:'listObj', payload: data});
      }
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen((location) => {
        if(location.pathname === '/posts') {
          dispatch({type:'list'})
        }
      })
    }
  }
}
