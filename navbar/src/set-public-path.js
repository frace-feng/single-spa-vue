
/**
 * systemjs-webpack-interop 是一个 npm 包，
 * 它导出的函数可帮助您创建可供 SystemJS 作为浏览器内模块使用的 webpack 包。

具体来说，该库做了两件事：
帮助您“动态”设置webpack 公共路径 ，以使用 SystemJS 导入映射中包的动态 url。
帮助您创建或验证webpack 配置以确保与 SystemJS 正确互操作。
 */
import { setPublicPath } from "systemjs-webpack-interop";

window._coworking && setPublicPath("navbar", 2);
