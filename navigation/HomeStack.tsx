import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import { BottomNavigator } from "../utils/bottomNavigation";
import Header from "../components/shared/header";

const HomeStack = (): JSX.Element => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator initialRouteName={BottomNavigator.HOME}>
      <StackNavigator.Screen
        name={BottomNavigator.HOME}
        component={Home}
        options={{
          headerShown: false,
          header: () => <Header />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeStack;
