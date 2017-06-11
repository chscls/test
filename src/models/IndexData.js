import { getPosterList } from '../services/WmcSiteSvc'
export default {
  namespace: 'IndexData',
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
         
      let { count,keyword } = payload;
      let { data } = yield getPosterList({
        count: count,
        keyword:keyword,
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