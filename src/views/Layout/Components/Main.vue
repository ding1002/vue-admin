<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content"> <router-view/></div>
    </div>
   
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRef,
  toRefs,
  onMounted,
} from "@vue/composition-api";
export default {
  name: '',
  setup(){
    
    const str=ref('{"name":"这是啥","title":"这是啥"}');
    const json=reactive(JSON.parse(str.value));//字符串转对象
     const jsonObject=reactive([
       "name","a",
       "title","b"
     ]);//声明数组对象
     const jsonstr=ref(JSON.stringify(jsonObject));
    console.log(str.value);
    console.log(json);
    console.log(jsonstr.value+"------------------------");
    return {
      str,
      json,
      jsonstr
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";

#main-wrap {
//   background-color: #fff;
//   position: fixed;
//   left: $navMenu;
//   top: 75px;
//   right: 0;
//   bottom: 0;
//   border: 30px solid #f7f7f7;
//   border-bottom: none;
//   -webkit-box-sizing: border;
height: 100vh;
}
.main-content{
    width: 100%;
    height: 100%;
    padding-top: $layoutHeader + 30;
    padding-left: $navMenu + 30;
    padding-right: 30px;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    @include webkit(box-sizing,border-box);
      @include webkit(transition,all .3s ease 0s);
}
.content{
    width: 100%;
    height: 100%;
    padding: 30px 30px 0;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
       @include webkit(box-sizing,border-box);
    background-color: #fff;
}
.close{
  .main-content{
    padding-left: $navMenumin + 30px;
    
  }
}
</style>
