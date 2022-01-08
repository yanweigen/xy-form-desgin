# xy-form-desgin
{
  "name": "xy-form-design",
  "author": {
    "name": "yanweigen",
    "url": "https://github.com/yanweigen",
    "email": "24331105@qq.com"
  },
  "version": "1.0.0",
  "main": "lib/index.umd.min.js",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name XYFormDesign --dest lib --filename index --formats umd-min ./packages/index.js",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  },
  "dependencies": {
    "monaco-editor": "^0.31.1",
    "vuedraggable": "^2.24.3"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.5.13",
    "@vue/cli-plugin-eslint": "^4.5.13",
    "@vue/cli-service": "^4.5.13",
    "avue-plugin-ueditor": "^0.2.3",
    "babel-eslint": "^10.1.0",
    "core-js": "^3.17.2",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^6.2.2",
    "sass": "^1.39.0",
    "sass-loader": "^7.3.1",
    "vue-template-compiler": "^2.6.14"
  },
  "files": [
    "lib"
  ],
  "repository": {
    "type": "github",
    "url": "https://github.com/yanweigen/xy-form-design"
  },
  "keywords": [
    "vue",
    "element-ui",
    "avue",
    "form",
    "design"
  ],
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {
      "no-console": "off",
      "no-debugger": "off",
      "no-control-regex": 0
    },
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "license": "MIT"
}