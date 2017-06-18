import { getPosterSpacePage } from '../../services/WmcManageSvc'
export default {
  namespace: 'WmcPosterSpace',
  state: {
    list:{
      data:[],
      loading:true,
    },
    pagination:{
      current:1,
      pageSize:10,
      total:null
    }
  },
  reducers: {
    fetchList(state, action) {
      return { ...state, ...action.payload };
    },
    changePage(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetchRemote({ payload }, { call, put }) {
       if(payload.token==null){
          payload.auth()
          return
       }
      let {current,pageSize,token} = payload;
      let { data } = yield getPosterSpacePage({
        pageNo: current,
        pageSize:pageSize,
        token:token,
         v:Date.parse(new Date())
      });
      if (data) {
         if(data.errorCode=="suc"){
        yield put({
          type: 'fetchList',
          payload: {
            list: {
              data:data.body.list,
              loading:false
            },
            pagination: {
                current:data.body.pageNo,
                pageSize:data.body.pageSize,
                total:data.body.totalCount
            }
          }
        });
         }else if(data.errorCode=="auth"){
          payload.auth()
         }
      }
    },
  },
  subscriptions: {},
}
