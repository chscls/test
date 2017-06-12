import { getCatalogGroupList } from '../services/WmcSiteSvc'
export default {
  namespace: 'CatalogGroup',
  state: {
    catalogGroupList:[]
  },
    reducers: {
       setCatalogGroupList(state, action) {
      return { ...state, ...action.payload };
        }
  },
  effects: {
    *getCatalogGroupList({ payload }, { call, put }) {
         
      let { count,type } = payload;
      let { data } = yield getPosterList({
        count: count,
        type:type,
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'setCatalogGroupList',
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
