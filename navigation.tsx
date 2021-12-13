import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';
import OrderCompleted from './screens/OrderCompleted';
import AccountScreen from './screens/AccountScreen';
import AboutScreen from './screens/AboutScreen';
import BrowseScreen from './screens/BrowseScreen';
import GroceryScreen from './screens/GroceryScreen';
import OrdersScreen from './screens/OrdersScreen';

export default function RootNavigation() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const Tab = createMaterialTopTabNavigator();

    const screenOptions = {
        headerShown: false
    };


    const createHomeStack = () => (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name='Home1' children={createDrawer} />
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
            <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
    )
    const createDrawer = () => (
        <Drawer.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name="Profile" component={AccountScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
    return (
        <NavigationContainer>

            <Tab.Navigator tabBarPosition='bottom'
                screenOptions={{
                    swipeEnabled: true,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#333',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: '#fff' },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#eee'
                    }
                }}
                style={{}}>
                <Tab.Screen name='Home2' children={createHomeStack} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
                <Tab.Screen name='Browse' component={BrowseScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name='Grocery' component={GroceryScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="basket" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name='Orders' component={OrdersScreen} options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="receipt" color={color} size={26} />
                    ),
                }}
                />
                <Tab.Screen name='Account' component={AccountScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}