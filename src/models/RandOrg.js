import { getRandOrgList } from '../services/WmcSiteSvc'
export default {  
    namespace: 'RandOrg',
  state: {
    orgList:[]
  },
  reducers: {
    
    suc(state, action) {
     
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *getRandOrgList({ payload }, { call, put }) {
      let { count } = payload;
      let { data } = yield getRandOrgList({
        count: count,
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          
          yield put({
            type: 'suc',
            payload: {
              orgList: data.body
            }
          });
        } 
      }
    },
  }
}