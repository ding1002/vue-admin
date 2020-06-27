<template>
  <div id="layout" :class="[menuStatus? 'close':'open']">
    <LayoutHeder></LayoutHeder>
    <LayoutNav></LayoutNav>
    <LayoutMain></LayoutMain>
  </div>
</template>
<script>
import LayoutHeder from "./Components/Header";
import LayoutNav from "./Components/Nav";
import LayoutMain from "./Components/Main";
import { computed } from "@vue/composition-api";
export default {
  name: "layout",
  components: { LayoutHeder, LayoutNav, LayoutMain },
  setup(props, { root }) {
    const menuStatus = computed(() => root.$store.state.app.isCollapse);
    return {
        menuStatus
    }
  },
};
</script>
<style lang="scss" scoped></style>
