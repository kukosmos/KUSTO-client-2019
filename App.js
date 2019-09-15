import React from "react";
import { HomeScreen, ResultScreen } from "./src/screens";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Main: {
    screen: HomeScreen
  },
  Result: {
    screen: ResultScreen
  }
});

const AppNavigator = createAppContainer(MainNavigator);

const App = () => {
  return <AppNavigator />;
};

export default App;
