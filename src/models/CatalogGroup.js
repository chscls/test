import { getCatalogGroupList } from '../services/WmcSiteSvc'
export default {
  namespace: 'CatalogGroup',
  state: {
    catalogGroupList:[],
    topicGroupList:[],
    indexFloorList:[]
  },
    reducers: {
       suc(state, action) {
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
            type: 'suc',
            payload: {
              catalogGroupList: data.body
            }
          });
        }
      }
    },
    *getTopicGroupList({ payload }, { call, put }) {
         
      let { count} = payload;
      let { data } = yield getCatalogGroupList({
        count: count,
        type:'indexTopic',
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'suc',
            payload: {
              topicGroupList: data.body
            }
          });
        }
      }
    },
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
            type: 'suc',
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
