import router from "./index";
import {getToken} from "@/utils/app";
import store from "@/store/index";

const whiteRouter =['/login'];

//路由守卫
router.beforeEach((to,from,next)=>{
    if(getToken()){
      if(to.path==='/login'){
        // removeToken();
        //命名空间 app
        store.commit("app/SET_TOKEN",'');
        next();
      }else{
        //获取角色
        //动态分配路由权限
        next();
        console.log("存在")
      }
    }else{
      console.log("不存在")
      console.log(to.path)
      debugger;
      if(whiteRouter.indexOf(to.path)!==-1){
        console.log("白名单")
        next(); //to
      } else{
        console.log("跳转login");
          next('/login');
      }
     
     
    }
    console.log(to);//进入下一个页面
    console.log(from);  //离开之前的页面
    console.log(next);
  })