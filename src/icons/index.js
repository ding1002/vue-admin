import Vue from "vue";
import Svglcon from "./Svglcon";
// 自定义全局组件
Vue.component('svg-icon',Svglcon);
//解析svg图标文件
/**
 * param1 目录
 * param2 是否遍历子级目录
 * param3 定义遍历文件规则 末尾位svg文件
 */
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext)
};
requireAll(req);
  