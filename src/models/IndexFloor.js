import { getCatalogGroupList } from '../services/WmcSiteSvc'
export default {
  namespace: 'IndexFloor',
  state: {
    indexFloorList:[]
  },
    reducers: {
       setIndexFloorList(state, action) {
      return { ...state, ...action.payload };
        }
  },
  effects: {
    *getIndexFloorList({ payload }, { call, put }) {
         
      let { count} = payload;
      let { data } = yield getCatalogGroupList({
        count: count,
        type:'indexFloor',
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'setIndexFloorList',
            payload: {
             indexFloorList: data.body
            }
          });
        }
      }
    }
  },
  subscriptions: {



  }

}
