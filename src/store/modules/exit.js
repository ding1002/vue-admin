import { Login } from "@/api/login";
import { setToken,getToken } from "@/utils/app";
const app = {

    state: {
        //菜单栏是否缩放 ||  左边为真则为真，左边为假，取右边的值
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
        // isCollapse: JSON.parse(Cookie.get('isCollapse')) || false,//从cookie中获取
        count: 10,
        token: '',
        username: ''
      },
      getters: {
        //通过计算属性获取
          count: state => state.count+10,
          token: state => state.token,
          username: state => state.username
      },
      mutations: {
        //同步调用
        SET_COLLAPSE(state){
          state.isCollapse=!state.isCollapse;
          console.log(state.isCollapse);
          //html 存储json 浏览器关闭清除，最大缓存5m
          sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));
          //存储cookie
          // Cookie.set('isCollapse', JSON.stringify(state.isCollapse));
          // console.log(JSON.parse(Cookie.get('isCollapse')) || false);
        },
        SET_COUNT(state,value){
          state.count=value
        },
        SET_TOKEN(state,value){
          state.token=value
        },
        SET_USERNAME(state,value){
          state.username=value
        },
      },
      actions: {
    
        //异步调用
        // setMenuStatus(content,data){
        //   console.log(content);
        //   console.log(data);
        //   content.commit('SET_COLLAPSE')
        // }
        //content 默认参数，自定义
        log(content,data){
          return new Promise((resolve,reject)=>{
              //登录接口
              Login(data).then((response)=>{
                let data = response.data;
                content.commit('SET_TOKEN',data.token);
                content.commit('SET_USERNAME',data.username);
                setToken(data.username,data.token);
                resolve(response)
              }).catch(error => {
                reject(error)
              })
          })
        }
    
      }
}
export default app;