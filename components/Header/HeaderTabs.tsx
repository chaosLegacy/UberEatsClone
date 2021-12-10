import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HeaderButton, { headerProps } from './HeaderButton';

const HeaderTabs = () => {
    const tabs: Array<headerProps> = [
        {
            title: 'Delivery',
            bgColor: '#000',
            textColor: '#fff'
        },
        {
            title: 'Pickup',
            bgColor: '#fff',
            textColor: '#000'
        }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].title);
    return (
        <View style={styles.container}>
            {
                tabs.map((tab: headerProps, index) => (
                    <HeaderButton key={index} title={tab.title} bgColor={tab.bgColor} textColor={tab.textColor}
                        activeTab={activeTab} setActiveTab={setActiveTab} />
                ))
            }
        </View>
    )
}

export default HeaderTabs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
});
