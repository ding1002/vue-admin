<template>
  <div id="header-wrap">
    <div class="pull-left header-icon">
      <svg-icon iconClass="menu" className="menu" />
    </div>
    <div class="pull-right ">
      <div class="user-info pull-left">
        <img src="../../../assets/images/face.png" alt="" />
        管理员
        <!-- {{ username }} -->
      </div>
      <div class="header-icon pull-left">
        <svg-icon iconClass="exit" className="exit" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1); //投影
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
</style>
