import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Upload from '../screens/Upload' ;//need to add detect symbol and redirect there
import Profile from '../screens/Profile'; //need login and register page
import { Image } from "react-native";
import Main from  '../screens/Main' ;
import Login from '../screens/Login' ;
import Register from '../screens/Register';
import Home from '../screens/Home';
import Search from "../screens/Search";



const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
        
        tabBarOptions={{
            activeTintColor: '#006A42',
            inactiveTintColor: '#000',
            labelStyle: {
                fontSize: 10,
                padding: 5,
              },
            style:{
                height:100,
                justifyContent:"center",
                paddingVertical:70,
                backgroundColor:"#006A42",
                elevation:6,  
                display: 'none'
                
            }
        }}
        >
            <Tab.Screen
                 name="Home"
                 component={Home}
                 options={{
                     headerShown: false, 
                     tabBarLabel:"Home",
                     tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/hom.png")}
                            style={{ height:35, width:35 }}
                        />
                     )
                 }}
             />
            
            <Tab.Screen
                name="Upload"
                component={Upload}
                options={{
                    headerShown: false, 
                    tabBarLabel:"Analyze",
                    tabBarVisible:false,
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/cam.png")}
                            style={{  position: 'absolute',
                            bottom: 6, // space from bottombar
                            height: 70,
                            width: 70,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',  }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false, 
                    tabBarLabel:"Profile",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/pro.png")}
                            style={{ height:35, width:35}}
                        />
                    )
                }}
            />
        </Tab.Navigator>

    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const StackNavigator = () => {
    return(
        
            <Stack.Navigator initialRouteName="Main">
            <Stack.Screen options={{headerShown: false}} name = "Main" component={Main}/>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
            <Stack.Screen options={{headerShown: false}} name="Sign-Up" component={Register}/>
            <Stack.Screen options={{headerShown: false}} name="Upload" component={Upload}/>
            <Stack.Screen  name="Profile" component={Profile}/>
            <Stack.Screen  name="Search" component={Search}/>
            
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
}



export default StackNavigator;