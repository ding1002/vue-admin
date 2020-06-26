<template>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRef,
  toRefs,
  onMounted,
  computed
} from "@vue/composition-api";
export default {
  name: "svgIcon",
  // props: ['iconClass','className'],//简单写法
  props: {
    iconClass: {
      type: String,
      default: "默认值",
      required: false,
      // validator: (value) => {
      //   return value >= 0;
      // },
    },
    className: {
      type: String,
      default: "默认值",
      required: false,
      // validator: (value) => {
      //   return value >= 0;
      // },
    },
  },
  setup(props) {
    console.log(props.iconClass);
    const msg = ref("这tm又是啥");
    // 计算属性，得出最终结果，并返回
    const iconName = computed(() => `#icon-${props.iconClass}`);
    console.log(iconName);

    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });
    return {
      msg,
      iconName,
      svgClass,
    };
  },
};
</script>
<style lang="scss" scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  // fill: currentColor;
  // color: red;
  // &.font12 {
  //   font-size: 20px;
  // }
  //   &.font50 {
  //   font-size: 50px;
  // }

}
</style>
