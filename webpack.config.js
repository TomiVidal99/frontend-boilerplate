const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const port = process.env.PORT || 3000;

const isProd = process.env.NODE_ENV === "production";

var config = {
  /*
   * specifies weather it's on production mode or development mode.
   */
  mode: isProd ? "production" : "development",

  /*
   * app.ts represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   */
  entry: ["./src/index.js"],

  /*
   * devtool will create source maps to help you with debugging of your application.
   * There are several types of source maps and this particular map (inline-source-map)
   * is to be used only in development. (Refer to the docs for more options).
   */
  devtool: "inline-source-map",

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   */
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "auto",
    filename: "bundle.[fullhash].js",
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "./src/app/components/"),
      "@pages": path.resolve(__dirname, "./src/app/pages/"),
      "@styles": path.resolve(__dirname, "./src/app/styles/"),
      "@utils": path.resolve(__dirname, "./src/app/utils/"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@icons": path.resolve(__dirname, "./src/assets/icons/"),
    },
  },

  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file. I haven't
     * installed ts-loader yet, but will do that shortly.
     */
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, "src")],
      },

      // load images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 20000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
        include: [path.resolve(__dirname, "src/assets")],
      },

      // load inline svgs
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
            //options: {
            //jsx: true // true outputs JSX tags
            //}
          },
        ],
      },

      // load the css and compile with tailwind classes.
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          !isProd ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },

      // load sass files
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        include: [path.resolve(__dirname, "src/app/styles")],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new HotModuleReplacementPlugin(),
  ].concat(
    isProd
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
            chunkFilename: "[id].css",
          }),
        ]
      : []
  ),
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    compress: true,
    client: {
      logging: "error",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };
}

module.exports = config;
