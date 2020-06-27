<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="menu" className="menu" />
    </div>
    <div class="pull-right ">
      <div class="user-info pull-left">
        <img src="../../../assets/images/face.png" alt="" />
        {{username}}
        <!-- {{ username }} -->
      </div>
      <div class="header-icon pull-left" @click="exit">
        <svg-icon iconClass="exit" className="exit"  />
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from '@vue/composition-api'
export default {
name: 'layoutHeader',
setup(props,{root}){
  const username= computed(() => root.$store.state.app.username);
  const navMenuState = () =>{
    //调用SET_COLLAPSE方法 同步
    root.$store.commit('app/SET_COLLAPSE');
    // root.$store.dispatch('setMenuStatus',{"name":"aaaaa"});//调用 actions  setMenuStatus方法  异步调用
  };
  const exit =() =>{
      root.$store.dispatch('app/exit').then(()=>{
        root.$router.push({
          name: 'Login'
        } 
        )
      });
  }
return {
  navMenuState,
  username,
  exit
}
}

};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  // -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1); //投影
   @include webkit(box-shadow,0 3px 16px 0 rgba(0, 0, 0, 0.1)); //投影
   @include webkit(transition,all .3s ease 0s);//过度动画
  line-height: 75px; //行高
}
.header-icon {
  padding: 0 32px;
  svg {
    margin-bottom: -8px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  }
  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-bottom: -12px;
    margin-right: 18px;
   border-radius:50%;
  }
}
.close{
  #header-wrap{
     left: 64px;
  }
}
</style>
