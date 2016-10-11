## React Router Setup ##

```
npm install react react-dom react-router --save
```

```
npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```

```
touch .babelrc webpack.config.js
```

```
mkdir src
cd src
touch index.html App.js main.js
```

.babelrc
```
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

webpack.config.js
```
module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
```

package.json
```
{
...
"scripts" : {
  "start": "webpack-dev-server"
},
...
}
```
