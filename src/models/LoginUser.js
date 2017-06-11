import { login } from '../services/WmcUserSvc'
import { getLocalStorage, setLocalStorage } from '../utils/helper';
export default {
  namespace: 'LoginUser',
  state: {
    user: null,
    loading: false,
    msg: null,
    suc: false
  },
  reducers: {
    loginSuc(state, action) {
      return { ...state, ...action.payload };
    },
    loginFail(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      let { username, password,loginSuc } = payload;
      let { data } = yield login({
        username: username,
        password: password,
        v:Date.parse(new Date())
      });
      if (data) {
        if (data.errorCode == "suc") {
          setLocalStorage('user', data.body);
          loginSuc(data.body);
          yield put({
            type: 'loginSuc',
            payload: {
              user: data.body,
              loading: false,
              suc: true
            }
          });
        } else {
          yield put({
            type: 'loginFail',
            payload: {
              loading: false,
              msg: data.msg
            }
          });
        }
      }
    },
  },
  subscriptions: {

    setup({ dispatch }) {
      const data = getLocalStorage('user');
      if (!data) {
        dispatch({
          type: 'login',
          payload: {},
        });
      } else {
        dispatch({
          type: 'loginSuc',
          payload: {
            user: data,
          },
        });
      }

    }
  }
}
