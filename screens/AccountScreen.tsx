import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello This Account Page 🚀</Text>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
