import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screen/indexScreen';


const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index', 
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})