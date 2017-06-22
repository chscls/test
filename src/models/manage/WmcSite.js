import { getSite,updateSite } from '../../services/WmcSiteSvc'
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
    *updateSite({ payload }, { call, put }) {
payload.v=Date.parse(new Date());
var x =payload.back;
payload.back=null;
        let { data } = yield updateSite(
       payload);
      if (data) {
        yield put({
          type: 'suc',
          payload: {
            site:data.body
           
          }
        });
       x();
      }
    },

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
