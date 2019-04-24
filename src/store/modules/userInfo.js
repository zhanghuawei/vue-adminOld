export { setToken, getToken, removeToken } from "@/utils/auth.js";
export { userLogin } from "@/api/api.js";
const userInfo = {
  state: {
    username: ""
  },
  mutations: {
    set_username(state, val) {
      state.username = val;
    }
  },
  actions: {
    login(content, data) {
      return new Promise((resolve, reject) => {
        userLogin(data).then(res => {
          setToken(res.data.token);
        });
      });
    }
  }
};

export default userInfo;
