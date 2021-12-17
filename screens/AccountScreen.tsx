import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

const AccountScreen = ({ navigation }: any) => {
    const signOut = () => {
        auth.signOut();
        navigation.navigate('AuthStack');

    }
    return (
        <View style={styles.container}>
            <Text>Hello This Account Page 🚀</Text>
            <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={() => signOut()}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
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
    },
    button: {
        backgroundColor: '#F5568B',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
