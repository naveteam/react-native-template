# Nave React Native template.

## Using

Run `react-native init yourProjectName --template nave`

### Packages already configured

- Styled components
- React Navigation
- Axios
- Commitlint

## Finishing configuration

Add `.env` to your .gitignore file

You'll also need to manually apply a plugin to your app, from `android/app/build.gradle`:

```
// 2nd line, add a new apply:
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"

```

Finally, add this to your `package.json`:

```json
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "commit": "npx git-cz",
    "podinstall": "npx pod-install ios"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "lint-staged": {
    "*.{js, jsx}": [
      "prettier --write"
    ]
  }
```

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
