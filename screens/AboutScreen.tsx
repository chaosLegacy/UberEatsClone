import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello This About Page 🚀</Text>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
