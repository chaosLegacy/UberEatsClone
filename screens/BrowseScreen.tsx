import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BrowseScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello This Browse Page 🚀</Text>
        </View>
    )
}

export default BrowseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
