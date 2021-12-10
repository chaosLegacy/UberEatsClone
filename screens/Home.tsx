import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Categories from '../components/Categorie/Categories';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/Header/SearchBar';
import Restaurants from '../components/Restaurant/Restaurants';

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <Restaurants />
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15
    },
});
