import React, { useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/reducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const SplashScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const fetchLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log('status :', status);
        if (status !== 'granted') {
            dispatch(actions.set({ error: 'Permission to access location was denied' }));
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log('location :', location);
        dispatch(actions.set({ location }));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('HomeStack');
            }
        });
    }
    useEffect(() => {
        const unsubscribeLocation = fetchLocation();
        return () => {
            unsubscribeLocation
        }
    }, []);
    return (
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
