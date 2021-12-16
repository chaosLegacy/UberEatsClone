import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    titleContainer: {
        width: '80%',
        marginBottom: 20
    },
    titleMainText: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    titleSecondText: {
        fontWeight: '400',
        fontSize: 20,
        color: '#777'
    },
    formContainer: {
        width: '80%'
    },
    inputContainer: {
        position: 'relative'
    },
    inputText: {
        position: 'absolute',
        backgroundColor: '#fff',
        color: '#777',
        fontSize: 12,
        top: 12,
        left: 20,
        paddingHorizontal: 10,
        zIndex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 12,
        paddingVertical: 9,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    inputPassword: {
        paddingRight: 50
    },
    passwordContainer: {
        position: 'relative'
    },
    passwordEyeButton: {
        position: 'absolute',
        top: '55%',
        right: 20,
    },
    linkContainer: {
        width: '100%',
        marginVertical: 10,
    },
    link: {
        alignSelf: 'flex-end',
        color: '#777',
        fontWeight: '700'
    },
    buttonContainer: {
        width: '100%'
    },
    buttonContainerVmargin: {
        marginVertical: 20
    },
    button: {
        textAlign: 'center',
        borderRadius: 12,
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonGoogle: {
        borderColor: '#D64F43',
        backgroundColor: '#D64F43',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0
    },
    buttonTextGoogle: {
        marginLeft: 10
    },
    dividerContainer: {
        width: '100%',
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative'
    },
    divider: {
        width: '100%',
        alignSelf: 'center',
    },
    textDivider: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: -2,
        color: '#777',
        paddingHorizontal: 10,
        left: '45%'
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: '6%',
    },
    footerText: {
        fontSize: 15,
    },
    signText: {
        color: '#F5568B',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
