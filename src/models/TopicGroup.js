import { getCatalogGroupList } from '../services/WmcSiteSvc'
export default {
  namespace: 'TopicGroup',
  state: {
    topicGroupList:[]
  },
    reducers: {
       setTopicGroupList(state, action) {
      return { ...state, ...action.payload };
        }
  },
  effects: {
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
            type: 'setTopicGroupList',
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
