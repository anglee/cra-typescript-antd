const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

// reference: https://ant.design/docs/react/use-with-create-react-app

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true
  })(config, env);

  return config;
};
