const path = require('path')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const AntDesignThemePluginVariablesToChange = require('./src/app/components/kit-vendors/antd/themes/variablesToChange.js')
const AntDesignThemePluginOptions = {
  antdStylesDir: path.join(__dirname, './node_modules/ng-zorro-antd'),
  stylesDir: path.join(__dirname, './src/app/components/kit-vendors/antd/themes'),
  varFile: path.join(__dirname, './src/app/components/kit-vendors/antd/themes/variables.less'),
  mainLessFile: path.join(__dirname, './src/app/components/kit-vendors/antd/themes/main.less'),
  themeVariables: AntDesignThemePluginVariablesToChange,
  indexFileName: false,
  generateOnce: false // generate color.less on each compilation
}

module.exports = {
  plugins: [
    new AntDesignThemePlugin(AntDesignThemePluginOptions)
  ]
}