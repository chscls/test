import { getPosterList } from '../services/WmcSiteSvc'
export default {
  namespace: 'Advertise',
  state: {
    advertiseList:[]
  },
  reducers: {
       setAdvertiseList(state, action) {
      return { ...state, ...action.payload };
        }
  },
  effects: {
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
            type: 'setAdvertiseList',
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