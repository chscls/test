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
         
      let { count} = payload;
      let { data } = yield getCatalogGroupList({
        count: count,
        type:'indexTop',
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'setCatalogGroupList',
            payload: {
              catalogGroupList: data.body
            }
          });
        }
      }
    }
  },
  subscriptions: {



  }

}