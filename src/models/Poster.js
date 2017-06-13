import { getPosterList } from '../services/WmcSiteSvc'
export default {
  namespace: 'Poster',
  state: {
    posterList:[],
    advertiseList:[]
  },
  reducers: {
       suc(state, action) {
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
            type: 'suc',
            payload: {
              posterList: data.body
            }
          });
        }
      }
    },
    *getAdvertiseList({ payload }, { call, put }) {
         
      let { count} = payload;
      let { data } = yield getPosterList({
        count: count,
        keyword:"indexAd",
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'suc',
            payload: {
              advertiseList: data.body
            }
          });
        }
      }
    }
  },
  subscriptions: {



  }

}