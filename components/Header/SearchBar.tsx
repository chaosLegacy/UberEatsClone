import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GOOGLE_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';

const SearchBar = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete placeholder='Search' query={{ key: GOOGLE_API_KEY }}
                onPress={(data) => {
                    const city = data.description.split(',')[0];
                    dispatch(actions.set({ searchCity: city }));
                }}
                styles={{
                    textInput: styles.googleSearch_textInput,
                    textInputContainer: styles.googleSearch_textInputContainer
                }}
                renderLeftButton={() => (
                    <View style={styles.googleSearch_leftButton}>
                        <Ionicicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.googleSearch_rightButton}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15
    },
    googleSearch_textInput: {
        backgroundColor: '#eee',
        borderRadius: 20,
        fontWeight: '700',
        marginTop: 7
    },
    googleSearch_textInputContainer: {
        backgroundColor: '#eee',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    googleSearch_leftButton: {
        marginLeft: 10
    },
    googleSearch_rightButton: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    }
});

