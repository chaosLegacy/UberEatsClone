import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export type headerProps = {
    title: string;
    bgColor: string;
    textColor: string;
}

const HeaderButton = ({ title, textColor, bgColor, activeTab, setActiveTab }: any) => {
    return (
        <TouchableOpacity
            onPress={() => setActiveTab(title)}
            style={{ ...styles.button, backgroundColor: activeTab === title ? 'black' : 'white' }}>
            <Text style={{ ...styles.text, color: activeTab === title ? 'white' : 'black' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default HeaderButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
