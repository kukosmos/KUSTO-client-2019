import React from "react";
import { HomeScreen, ResultScreen } from "./src/screens";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      header: null
    }
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: {
      title: "Result",
      header: null
    }
  }
});

const AppNavigator = createAppContainer(MainNavigator);

const App = () => {
  return <AppNavigator />;
};

export default App;
