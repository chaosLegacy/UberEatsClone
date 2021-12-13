import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GroceryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello This Grocery Page 🚀</Text>
        </View>
    )
}

export default GroceryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
