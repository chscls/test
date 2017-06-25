import { getPosterPage,saveOrUpdatePoster } from '../../services/WmcManageSvc'
export default {
  namespace: 'WmcPoster',
  state: {
    submit: false,
    list: {
      data: [],
      loading: true,
    },
    pagination: {
      current: 1,
      pageSize: 10,
      total: null
    }
  },
  reducers: {
    fetchList(state, action) {
      return { ...state, ...action.payload };
    },
    changePage(state, action) {
      return { ...state, ...action.payload };
    },
   /* suc(state,action){
       return { ...state, ...action.payload };
    }*/
  },
  effects: {
    *fetchRemote({ payload }, { call, put }) {
      if (payload.token == null) {
        payload.auth()
        return
      }
      let { current, pageSize, token } = payload;
      let { data } = yield getPosterPage({
        pageNo: current,
        pageSize: pageSize,
        token: token,
        v: Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          yield put({
            type: 'fetchList',
            payload: {
              list: {
                data: data.body.list,
                loading: false
              },
              pagination: {
                current: data.body.pageNo,
                pageSize: data.body.pageSize,
                total: data.body.totalCount
              }
            }
          });
        } else if (data.errorCode == "auth") {
          payload.auth()

        }
      }
    },
    *saveOrUpdatePoster({ payload }, { call, put }) {
      if (payload.token == null) {
        payload.auth()
        return
      }
      payload.v=Date.parse(new Date());
    
      let { data } = yield saveOrUpdatePoster( payload.values);
      if (data) {
        if (data.errorCode == "suc") {
         /* yield put({
            type: 'suc',
            payload: {
            }
          });*/
          payload.back()
        } else if (data.errorCode == "auth") {
          payload.auth()

        }
      }
    }
  },
  subscriptions: {},
}
