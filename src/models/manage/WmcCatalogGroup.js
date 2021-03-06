import { getCatalogGroupPage,saveOrUpdateCatalogGroup,deleteCatalogGroup } from '../../services/WmcManageSvc'
export default {
  namespace: 'WmcCatalogGroup',
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
      let { current, pageSize, token,type } = payload;
      let { data } = yield getCatalogGroupPage({
        pageNo: current,
        pageSize: pageSize,
        token: token,
        type:type,
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
    *delete({ payload }, { call, put }) {
      if (payload.token == null) {
        payload.auth()
        return
      }
    
      let { data } = yield deleteCatalogGroup({
          token:payload.token,
          ids:payload.ids,
          v:Date.parse(new Date()),
      } );
      if (data) {
        if (data.errorCode == "suc") {
         
          payload.back()
        } else if (data.errorCode == "auth") {
          payload.auth()

        }
      }
    },
    *saveOrUpdate({ payload }, { call, put }) {
      if (payload.token == null) {
        payload.auth()
        return
      }
      payload.v=Date.parse(new Date());
    
      let { data } = yield saveOrUpdateCatalogGroup( payload.values);
      if (data) {
        if (data.errorCode == "suc") {
          payload.back()
        } else if (data.errorCode == "auth") {
          payload.auth()

        }
      }
    }
  },
  subscriptions: {},
}
