# Nave React Native template.

## Using

Run `react-native init yourProjectName --template nave`


### Packages already configured

- Redux
- React redux
- Styled components
- React Navigation
- Redux logger
- Redux Thunk
- Axios
- Reactotron
- Commitlint


## Finishing configuration

Add this to your `package.json`

```json
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "eslint": "eslint src/**/*.js src/**/**/*.js src/**/**/*.js src/**/**/**/*.js src/**/**/**/**/*.js",
    "jest": "jest test --notify --config=jest.json",
    "test": "npm run eslint",
    "commit": "npx git-cz",
    "prettier": "yarn prettier:js && git add .",
    "prettier:js": "prettier --write *.js src/*.js src/**/*.js src/**/**/*.js src/**/**/**/*.js src/**/**/**/**/*.js"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```


Copyright 2019 nave.rs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
