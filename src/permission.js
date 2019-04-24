import router from "./router/router";
import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // progress 样式
import { getToken } from "@/utils/auth"; // 对token操作

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/", "/login"]; //

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
});

router.afterEach(() => {
  // 路由完成
  NProgress.done();
});
