import React from 'react'
import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categorie/Categories';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/Header/SearchBar';

const Home = () => {
    return (
        <View>
            <View style={styles.container}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
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
