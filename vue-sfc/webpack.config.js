// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  //mode: "production",
  mode: "development",
  //entry: "./sfc.vue",
  entry: "./index.js",
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      //{
      //  test: /\.js$/,
      //  loader: "babel-loader",
      //},
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files "vue-style-loader", "style-loader",
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
      },
    ],
  },
  // make sure to include the plugin for the magic
  plugins: [
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
};
