<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="../../../assets/logo.png" alt="" /></h1>
    <!-- <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"v-for=""
      background-color="transparent" 透明色
      text-color="#fff"
      active-text-color="#fff"
      router> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :index="index + ''" :key="item.id">
          <!-- 一级菜单 -->
          <template slot="title">
            <!-- <i :class="item.meta.icon"></i> -->
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
            >{{ subItem.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
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
  computed,
} from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    /**
     * data 数据
     */
    // const isCollapse = ref(false); //控制菜单展示，展开或缩放
    const routers = reactive(root.$router.options.routes);
    console.log(root.$router.options.routes);
    /**
     * computed 监听
     */
    const isCollapse = computed(() => root.$store.state.app.isCollapse);
    /**
     *  函数
     */
    // const handleOpen = (key, keyPath) => {
    //   console.log(key, keyPath);
    // };
    // const handleClose = (key, keyPath) => {
    //   console.log(key, keyPath);
    // };
    //打印store
    root.$store.commit("SET_COUNT", 100);

    console.log(root.$store.state.count);
    console.log(root.$store.getters.count);

    return {
      isCollapse,
      routers,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-wrap {
  position: fixed;
  width: $navMenu;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #344a5f;
  @include webkit(transition,all .3s ease 0s);
  // -webkit-transition: all .3s ease 0s;
  // -moz-transition: all .3s ease 0s;
  // -o-transition: all .3s ease 0s;
  // -ms-transition: all .3s ease 0s;
  // transition: all .3s ease 0s;
  svg {
    font-size: 20px;
    margin-right: 10px;
    fill: currentColor;
    color: #fff;
  }
}
.logo {
  text-align: center;
  img {
    width: 92px;
    margin: 28px auto 25px;
    // @include webkit(transition,all .3s ease 0s);
  }
}
.open {
  #nav-wrap {
    width: $navMenu;
  }
}
.close {
  #nav-wrap {
    width: 64px;
    img{
      // @include webkit(transition,all .3s ease 0s);
      width: 40px;
      height: 40px;
    }
  }
}
</style>
