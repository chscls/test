import { getPosterSpacePage } from '../../services/WmcManageSvc'
export default {
  namespace: 'WmcPosterSpace',
  state: {
    list:{
      data:[],
      loading:true,
    },
    pagination:{
      pageNo:0,
      pageSize:10,
      total:null
    }
  },
  reducers: {
    fetchList(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetchRemote({ payload }, { call, put }) {
       
      let {pageNo,pageSize} = payload;
      let { data } = yield getPosterSpacePage({
        pageNo: pageNo,
        pageSize:pageSize,
      });
      if (data) {
        yield put({
          type: 'fetchList',
          payload: {
            list: {
              data:data.body.list,
              loading:false
            },
            pagination: {
                pageNo:data.body.pageNo,
                pageSize:data.body.pageSize,
                totalCount:data.body.totalCount
            }
          }
        });
      }
    },
  },
  subscriptions: {},
}
