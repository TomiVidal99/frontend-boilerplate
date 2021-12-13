const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

var config = {
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
    filename: "bundle.[fullhash].js",
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
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
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },

      // load images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
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

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true, // modules gives me the ability to import the modules from the React Components.

              localsConvention: "camelCase", // camelCase allows us to write classes like this: .home-button {...}
              sourceMap: true,
            },
          },
        ],
        include: [path.resolve(__dirname, "src/app/styles")],
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
  ],

  /*
   * development server configuration
   */
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    client: {
      logging: "error",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  /*
   * specifies weather it's on production mode or development mode.
   */
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};

module.exports = config;
