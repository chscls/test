import { getSite } from '../../services/WmcSiteSvc'
export default {
  namespace: 'WmcSite',
  state: {
    site:{}
  },
  reducers: {
    suc(state, action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *getSite({ payload }, { call, put }) {
     
     
      let { data } = yield getSite({
         v:Date.parse(new Date())
      });
      if (data) {
    
        yield put({
          type: 'suc',
          payload: {
            site:data.body
           
          }
        });
       
      }
    },
  },
  subscriptions: {},
}
