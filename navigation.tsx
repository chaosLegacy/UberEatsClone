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
import RecoverScreen from './screens/Auth/RecoverScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import SignInScreen from './screens/Auth/SignInScreen';

export default function RootNavigation() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const Tab = createMaterialTopTabNavigator();

    const screenOptions = {
        headerShown: false
    };

    const createDrawer = () => (
        <Drawer.Navigator initialRouteName='Profile' screenOptions={screenOptions}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name="Profile" component={AccountScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );

    const createHomeStack = () => (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
            <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
        </Stack.Navigator>
    )

    const createAuthStack = () => (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Recover' component={RecoverScreen} />
        </Stack.Navigator>
    )

    const createTabStack = () => (
        <Tab.Navigator
            initialRouteName='HomeTab'
            tabBarPosition='bottom'
            screenOptions={{
                swipeEnabled: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#333',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarIndicatorStyle: {
                    backgroundColor: '#eee'
                }
            }}>
            <Tab.Screen
                name='HomeTab'
                component={createHomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name='BrowseTab'
                component={BrowseScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name='GroceryTab'
                component={GroceryScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="basket" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='OrdersTab'
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="receipt" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='AccountTab'
                component={createDrawer}
                listeners={
                    ({ navigation }) => ({
                        tabPress: (event) => {
                            event.preventDefault();
                            navigation.navigate('AccountTab', { screen: 'AccountTab' })
                        }
                    })
                }
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName='AuthStack'>
                <Stack.Screen name='HomeStack' component={createTabStack} />
                <Stack.Screen name='AuthStack' component={createAuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}