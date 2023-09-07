// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  devServer:{
    port: 8081
  },
  chainWebpack: (config) => {
    config.devServer.set("inline", false);
    config.devServer.set("hot", true);
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    console.log('环境：',process.env.NODE_ENV,',',`[name]`)
    if (process.env.NODE_ENV !== "production") {
      config.output.filename(`js/[name].js`);
    }
    //打包时不打包进源码，并且引用时从window上读取（webpack的externals的方法决定的）
    // 前面是依赖的名字，后面是window上的名字，在引用依赖的名字时会从window上获取后面那个key值
    config.externals([{ vue: "Vue" }, { "vue-router": "VueRouter" }]);
  },
  filenameHashing: false,
};
