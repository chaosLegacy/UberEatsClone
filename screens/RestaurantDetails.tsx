import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements';
import About from '../components/Details/About';
import MenuItems from '../components/Details/MenuItems';
import ViewCart from '../components/Details/ViewCart';

const RestaurantDetails = ({ route, navigation }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1} style={{ marginVertical: 20 }} />
            <MenuItems />

            <ViewCart navigation={navigation} />
        </View>
    )
}

export default RestaurantDetails
