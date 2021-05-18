import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import DecisionScreen from './screens/first button/DecisionScreen';
import InfoScreen from './screens/second button/InfoScreen';
import MenuScreenForFood from './screens/first button/MenuScreenForFood';
import MilkProductsScreen from './screens/first button/food/MilkProductsScreen';
import FruitSaladsScreen from './FruitSaladsScreen';
import JunkFoodScreen from './screens/first button/food/JunkFoodScreen';
import Yogurt from './screens/milk products/Yogurt';
import Butter from './screens/milk products/Butter';
import Cheese from './screens/milk products/Cheese';
import Pizza from './screens/first button/food/Pizza';
import Coffee from './screens/first button/drinks/Coffee';
import Juice from './screens/first button/drinks/Juice';
import Decsion from './screens/first button/drinks/DecisionScreen';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <AppContainer />
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Decision: {screen: DecisionScreen},
  Info: {screen: InfoScreen},
  DecisionS: {screen: DecisionScreen},
  FooD: {screen: MenuScreenForFood},
  Milk: {screen: MilkProductsScreen}, 
  Fruit: {screen: FruitSaladsScreen},
  JunkFood: {screen: JunkFoodScreen},
  yogurt: {screen: Yogurt},
  butter: {screen: Butter},
  cheese: {screen: Cheese},
  pizza: {screen: Pizza},
  coffee: {screen: Coffee},
  juice: {screen: Juice},
  decision: {screen: Decsion},
})
//expo publish 
//expo build:android
const AppContainer = createAppContainer(AppNavigator)