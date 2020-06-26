<template>
<div id="layout">
    <LayoutHeder></LayoutHeder>
    <LayoutNav></LayoutNav>
    <LayoutMain></LayoutMain>
</div>
</template>
<script>
import LayoutHeder from "./Components/Header"
import LayoutNav from "./Components/Nav"
import LayoutMain from "./Components/Main"
export default {
    name: 'layout',
    components: {LayoutHeder,LayoutNav,LayoutMain},
    setup(){

    }
}
</script>
<style lang="scss" scoped>

</style>