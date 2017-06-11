import { getRandOrgList } from '../services/WmcSiteSvc'
export default {  
    namespace: 'RandOrg',
  state: {
    orgList:[]
  },
  reducers: {
    getRandOrgListSuc(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *getRandOrgList({ payload }, { call, put }) {
      let { count } = payload;
      let { data } = yield getRandOrgList({
        count: count,
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'getRandOrgListSuc',
            payload: {
              orgList: data.body
            }
          });
        } 
      }
    },
  }
}