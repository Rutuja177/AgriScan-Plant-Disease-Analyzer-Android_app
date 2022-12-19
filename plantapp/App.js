import React, { Component }  from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigations/Navigator";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default class App extends Component {
  render(){
      return(
        
        <NavigationContainer>
        <StackNavigator/>
        </NavigationContainer>
      );
  }
}