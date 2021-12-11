import React from 'react'
import { View, Text } from 'react-native'
import { food } from '../../types'

const OrderItem = (item: food) => {
    const { price, title } = item;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#999'
        }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
        </View>
    )
}

export default OrderItem
