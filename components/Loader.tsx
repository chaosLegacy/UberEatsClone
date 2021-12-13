import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type LoaderProps = {
    loading: boolean;
    loop?: boolean;
    speed?: number;
}
const Loader = ({ loading, loop = true, speed = 2 }: LoaderProps) => {
    return (
        loading ? (
            <View style={styles.loaderContainer}>
                <AnimatedLottieView
                    source={require('../assets/animations/scanner.json')}
                    autoPlay
                    loop={loop}
                    speed={speed}
                />
            </View>
        ) : <></>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6,
    }
});

export default Loader
