import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ViewCart = ({ navigation }: any) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 80,
            zIndex: 9
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={{
                        marginTop: 20,
                        backgroundColor: 'black',
                        alignItems: 'center',
                        padding: 14,
                        borderRadius: 30,
                        width: '70%',
                        position: 'relative'
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>VIEW CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart
