import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OrdersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello This Orders Page 🚀</Text>
        </View>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
