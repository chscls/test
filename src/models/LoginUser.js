import { login } from '../services/WmcUserSvc'
export default {
  namespace: 'LoginUser',
  state: {
    token:null,
    loading:true,
    user:{
      username:null,
      id:null,
      realname:null,
      mobile:null,
      nickname:null,
       idCard:null
    }
  },
  reducers: {
    loginResult(state, action) {
      alert("xxxxx");
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
        let {username,password} = payload;
      let { data } = yield login({
        username:username,
        password:password,
      });
      if (data) {
        yield put({
          type: 'loginResult',
          payload: {
            token:data.body.token,
             loading:true,
             user:data.body.user
          }
        });
      }
    },
  },
  subscriptions: {},
}
