import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';

type headerProps = {
    title: string;
}

const HeaderTabs = () => {
    const dispatch = useDispatch();
    const tabs: Array<headerProps> = [
        { title: 'Delivery' }, { title: 'Pickup' }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].title);

    const changeActiveTab = (title: string) => {
        setActiveTab(title);
        dispatch(actions.set({ activeHeaderTab: title }));
    }
    useLayoutEffect(() => {
        dispatch(actions.set({ activeHeaderTab: tabs[0].title }));
    }, [])
    return (
        <View style={styles.container}>
            {
                tabs.map((tab: headerProps, index: number) => (
                    <TouchableOpacity key={index}
                        onPress={() => changeActiveTab(tab.title)}
                        style={{ ...styles.button, backgroundColor: activeTab === tab.title ? 'black' : 'white' }}>
                        <Text style={{
                            ...styles.text,
                            color: activeTab === tab.title ? 'white' : 'black'
                        }}>
                            {tab.title}
                        </Text>
                    </TouchableOpacity>
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
