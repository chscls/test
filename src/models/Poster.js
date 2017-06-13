import { getPosterList } from '../services/WmcSiteSvc'
export default {
  namespace: 'Poster',
  state: {
    posterList:[]
  },
  reducers: {
       setPosterList(state, action) {
      return { ...state, ...action.payload };
        }
  },
  effects: {
    *getPosterList({ payload }, { call, put }) {
         
      let { count } = payload;
      let { data } = yield getPosterList({
        count: count,
        keyword:"indexTop",
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'setPosterList',
            payload: {
              posterList: data.body
            }
          });
        }
      }
    }
  },
  subscriptions: {



  }

}