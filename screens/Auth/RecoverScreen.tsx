import React, { useEffect, useState } from 'react'
import { Keyboard, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Auth.style';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const RecoverScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    const handleRecover = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            navigation.navigate('AuthStack');
        } catch (error: any) {
            alert(error.message);
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
                <Text style={styles.titleMainText}>Password lost?</Text>
                <Text style={styles.titleSecondText}>Will help you with that! 🚀</Text>
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


                <View style={[styles.buttonContainer, styles.buttonContainerVmargin]}>
                    <TouchableOpacity onPress={() => handleRecover()}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F5568B', '#F8A48C']}
                            style={{ borderRadius: 12 }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Recover password</Text>
                            </View>
                        </LinearGradient>
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

export default RecoverScreen

