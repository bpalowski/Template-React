React Fundamentals Week 1
Change Titles to your Project
Webpack
package.JSON

Installed
$ apm install react@0.16.2

Press Enter to accept the default values.
Package.json
npm init

folder
.gitignore
.DS_STORE
node_modules
build

packages for the React and React-DOM libraries:
$ npm install react@15.5.4 react-dom@15.5.4 --save

nstall Webpack
$ npm install webpack@3.4.0 --save-dev
$ npm install webpack@3.4.0 -g

Webpack requires a webpack.config.js configuration file in the top-level of the project directory. We'll create it now and add the following: Refer to final file to copy code

webpack.config.js

Babel tools into our project with this command:
babel-core
$ npm install babel-core
babel-loader
@6.24.1 babel-loader
babel-preset-es2015
@7.0.0 babel-preset-es2015
babel-preset-react
@6.24.1 babel-preset-react
@6.24.1 --save-dev



Webpack is instructed to bundled code in build/app.bundle.js.
Let's link this file in index.html instead of index.js, like this:
src/index.jsx

command to transpile and bundle our source code
$ webpack

Optional
Create React Component folder with files
$ npm install --save-dev create-react-component-folder
Creating single component
$ npx crcf myComponent
$ npx crcf components/myComponent

Creating multiple components
$ npx crcf components/header footer button navigation

Prop types library
$ npm install prop-types@15.5.10 --save

Webpack Development Server
project's development environment, and globally:
$ npm install webpack-dev-server@2.5.0 -g
$ npm install webpack-dev-server@2.5.0 --save-dev

Compile
$ webpack
$ webpack-dev-server

Hot Module Replacement
$ npm install react-hot-loader@3.0.0-beta.7 --save-dev

Launching the Server with HMR
$ npm install html-webpack-plugin@2.29.0 --save-dev

Embedded JS Templates
create file
template.ejs

eslint
$ npm install eslint@4.13.1 -g
$ npm install eslint@4.13.1 --save-dev

 initialize it in our project by running the following in our directory's top-level:
$ eslint --init
Select Answer questions about your style.
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? No
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Spaces  
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? Yes
? What format do you want your config file to be in? JSON

If, for whatever reason, you don't see this plugin listed in the "devDependencies" section of your package.json file, manually install it now:
$ npm install eslint-plugin-react -g
$ npm install eslint-plugin-react --save-dev

jsx-indent rule to matches the number of spaces our general indent rule is set to:
2

ESLint Loader
npm install eslint-loader --save-dev

Configuring CSS Modules
$ npm install --save styled-jsx

Installation
$ npm install react-router-dom@4.0.0 --save

Configuring Webpack to Encode and Bundle Images
$ npm install url-loader@0.6.2 --save-dev

install the file-loader package. It will handle any extra-large images that url-loader may not be as performant with
$ npm install file-loader@1.1.6 --save-dev
