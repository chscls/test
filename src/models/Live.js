import { getLiveAnnounceList,getLiveList } from '../services/WmcLiveSvc'
export default {  
    namespace: 'Live',
  state: {
      liveList:[],
     liveAnnounceList:[]
  },
  reducers: {
    suc(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *getLiveList({ payload }, { call, put }) {
      let { count } = payload;
      let { data } = yield getLiveList({
        count: count,
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'suc',
            payload: {
              liveList: data.body
            }
          });
        } 
      }
    },  
    *getLiveAnnounceList({ payload }, { call, put }) {
      let { count } = payload;
      let { data } = yield getLiveAnnounceList({
        count: count,
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'suc',
            payload: {
              liveAnnounceList: data.body
            }
          });
        } 
      }
    }
  }
}