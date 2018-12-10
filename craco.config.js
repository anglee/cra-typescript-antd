const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,

      // theme can be customize here, or using `antd.customize.less`
      // options: {
      //   customizeTheme: {
      //     "@primary-color": "#1DA57A",
      //     "@link-color": "#1DA57A"
      //   }
      // }
    },
  ],
};
