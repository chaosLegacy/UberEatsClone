import React, { useEffect, useState } from 'react'
import { Keyboard, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Auth.style';
import { auth } from '../../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithCredential, GoogleAuthProvider } from '@firebase/auth';

import * as Google from 'expo-google-app-auth';
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';

import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';

const SignInScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('HomeStack');
            }
        });
        return unsubscribe;
    }, []);

    const handleSignIn = async () => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            alert(error.message);
            dispatch(actions.set({ error }));
            console.log('error: ', error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            setLoading(true);
            const config = {
                iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ['email', 'profile']
            };
            // First- obtain access token from Expo's Google API
            const result = await Google.logInAsync(config);
            if (result.type === 'success') {

                var credential = GoogleAuthProvider.credential(
                    result.idToken,
                    result.accessToken
                );
                signInWithCredential(auth, credential);
                dispatch(actions.set({ user: result.user }));
                console.log('user: ', result.user);
            } else {
                console.log('Google signin was cancelled');
                dispatch(actions.set({ error: 'Google signin was cancelled' }));
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            dispatch(actions.set({ error }));
            console.log('error: ', error);
        }
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(true));
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(false));
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.titleMainText}>Welcome,</Text>
                <Text style={styles.titleSecondText}>Sign in to continue! 🚀</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Email ID</Text>
                    <TextInput
                        // autoFocus={true}
                        placeholder='Johndoe@gmail.com'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={email => setEmail(email)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                        keyboardType='default'
                        secureTextEntry={passwordVisible}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        style={[styles.input, styles.inputPassword]}
                    />
                    <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setPasswordVisible(!passwordVisible)} disabled={loading}>
                        <FontAwesome5Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={18} color='#777' />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.linkContainer}
                    onPress={() => navigation.navigate('Recover')}>
                    <Text style={styles.link}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleSignIn()}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F5568B', '#F8A48C']}
                            style={{ borderRadius: 12 }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Sign in</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

                <View style={styles.dividerContainer}>
                    <Divider style={styles.divider} color='#333' />
                    <Text style={styles.textDivider}>Or</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.buttonGoogle]}
                        onPress={() => signInWithGoogle()}
                        disabled={loading}>
                        <FontAwesome5Icon name='google' size={20} color='#fff' />
                        <Text style={[styles.buttonText, styles.buttonTextGoogle]}>Connect with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                !keyboardStatus && (
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>I'm a new user, </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

        </KeyboardAvoidingView>
    )
}

export default SignInScreen

