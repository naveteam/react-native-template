import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
console.disableYellowBox = true
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
