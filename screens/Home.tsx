import React from 'react'
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Categories from '../components/Categorie/Categories';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/Header/SearchBar';
import Restaurants from '../components/Restaurant/Restaurants';
import BottomTabs from '../components/Tabs/BottomTabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation, route }: any) => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <Restaurants navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            {/* <BottomTabs /> */}
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        backgroundColor: '#fff',
        padding: 15
    },
});
