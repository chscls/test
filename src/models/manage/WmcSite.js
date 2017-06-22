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
      
      console.log(payload.values);
    //values.v=Date.parse(new Date());
        let { data } = yield updateSite(
       payload.values);
      if (data) {
        yield put({
          type: 'suc',
          payload: {
            site:data.body
           
          }
        });
       payload.back();
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
