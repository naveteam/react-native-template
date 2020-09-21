# Nave React Native template.

## Project Configuration

First of all, as you usually do, run `npx react-native init yourProjectName`

In your *new project*, add these dependencies to your `package.json`:

```json
"dependencies": {
    "axios": "^0.19.2",
    "styled-components": "^5.0.1",
    "styled-system": "^5.1.5",
    "@react-navigation/native": "^5.0.9",
    "@react-navigation/stack": "^5.1.1",
    "react-native-gesture-handler": "^1.6.0",
    "react-native-reanimated": "^1.7.0",
    "react-native-safe-area-context": "^0.7.3",
    "@react-native-community/masked-view": "^0.1.7",
    "react-native-screens": "^2.2.0",
    "react-native-config": "^1.0.0"
}

"devDependencies": {
  "@commitlint/cli": "^8.3.5",
  "@commitlint/config-conventional": "^8.3.4",
  "babel-eslint": "^10.0.3",
  "babel-preset-react-native": "^4.0.1",
  "commitlint": "^8.3.5",
  "cz-conventional-changelog": "^3.1.0",
  "husky": "^4.2.1",
  "jest-react-native": "^18.0.0",
  "lint-staged": "^10.0.7",
  "prettier": "^1.19.1",
  "reactotron-react-native": "^4.0.3",
  "eslint": "^6.8.0",
  "eslint-config-prettier": "^6.1.0",
  "eslint-config-standard": "^14.0.1",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-node": "^11.0.0",
  "eslint-plugin-prettier": "^3.1.0",
  "eslint-plugin-promise": "^4.2.1",
  "eslint-plugin-react": "^7.14.3",
  "eslint-plugin-react-hooks": "^2.0.1",
  "eslint-plugin-standard": "^4.0.1"
}
```
In your *new project*, remove the currently installed dependencies and install all again

```bash
# Remove old depencies on your project root folder
$ rm -rf node_modules

# Install all dependecies using yarn or npm
$ yarn install
```

Copy all the following folders and files from this template to your *new project* root folder.
```
├── /src
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .huskyrc.json
├── .npmignore
├── .prettier.js
├── App.js
├── AuthenticatedApp.js
├── .commitlint.config.js
├── index
├── metro.config.js
├── ReactotronConfig.js
├── UnauthenticatedApp.js
```

### Packages already configured

- Styled components
- React Navigation
- Axios
- Reactotron
- Commitlint

## Finishing configuration

Add `.env` to your .gitignore file

## Code Standard

Besides of all the things talked in the [nave guide](https://nave.gitlab.io/guides/nave/code-guide/), as import standards and best practices using Javascript, there are some best practices to be used, mainly in components and pages creation.

1. Avoid to use unnecessary `styleds`. We already have the Row, Column and Text component deal with that on pages. Besides that, the mentioned components have the [styled-system](https://styled-system.com/getting-started), that allows to pass margins, padding and anothers ones throught `props`.
2. In a new component creating, always think about the use of `styled-system`.
3. Always add [prop-types](https://github.com/facebook/prop-types) in your components. This can be used as a guide to another people that will use this component and can also be used as a documentation.
4. **NEVER** repeat the same code 2 times. Do not copy and paste, instead of this, create some helpers and components. Make your code reusable.
5. If you need to create a new component with variants, take a look at the `Text` component and use the `variant` prop from the `styled-system`.
6. Follow the code pattern and folder standard.

Copyright 2019 nave.rs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
