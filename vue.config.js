/** @format */

const path = require('path')
// const fs = require('fs')
const SizePlugin = require('size-plugin')

const PrerenderSPAPlugin = require('prerender-spa-plugin')

const isProductionEnvFlag = process.env.NODE_ENV === 'production'
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')

const isOpenPrerenderSPA = false

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))

    // remove the old loader & add new one
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        name: '[name]-[hash:7]',
        prefixize: true
      })

    const splitOptions = config.optimization.get('splitChunks')
    config.optimization.splitChunks({
      ...splitOptions,
      maxAsyncRequests: 16,
      maxInitialRequests: 16,
      minChunks: 1,
      minSize: 30000,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        default: false,
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        element: {
          name: 'element',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          chunks: 'initial',
          priority: -30
        }
      }
    })

    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(webpackBundleAnalyzer.BundleAnalyzerPlugin())
    }
  },
  configureWebpack: {
    plugins: [
      isProductionEnvFlag && isOpenPrerenderSPA
        ? new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: ['/', '/explore']
          })
        : () => {},
      isProductionEnvFlag ? new SizePlugin() : () => {}
    ]
  },
  pwa: {
    name: 'Eatwiser',
    themeColor: '#5be1c8',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin (GenerateSW or InjectManifest)
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'public/service-worker.js'
    }
  },
  // configure webpack-dev-server behavior
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: null
  }
}
