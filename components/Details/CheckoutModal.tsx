import React from 'react'
import { View, Text, TouchableHighlight, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { useSelector } from '../../redux/store';
import OrderItem from './OrderItem';
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from '../../firebase';

const CheckoutModal = ({ modalVisible, setModalVIsible, totalPrice }: {
    modalVisible: boolean, setModalVIsible: any, totalPrice: string
}) => {
    const { cart } = useSelector(state => state);
    const { selectedItems, restaurantName } = cart;

    const setOrder = async () => {
        try {
            const docRef = await addDoc(collection(firestore, "orders"), {
                items: selectedItems,
                restaurantName: restaurantName || 'Demo',
                createdAt: Timestamp.now()
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setModalVIsible(false);
    }

    return (
        <Modal animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVIsible(false)}>
            <View style={styles.modalContainer}>
                <TouchableHighlight
                    onPress={() => setModalVIsible(false)}
                    underlayColor={"transparent"}
                    style={styles.modalBackdrop}>
                    <View></View>
                </TouchableHighlight>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.modalTitle}>Restaurant name</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            selectedItems.map((item, index) => (
                                <OrderItem key={index} {...item} />))
                        }
                    </ScrollView>
                    <View style={styles.modalSubTotalContainer}>
                        <Text style={styles.modalSubTotalText}>SubTotal</Text>
                        <Text>{totalPrice}</Text>
                    </View>
                    <View style={styles.modalCheckoutButtonContainer}>
                        <TouchableOpacity onPress={setOrder}
                            style={styles.modalCheckoutButton}>
                            <Text style={styles.modalCheckoutButtonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,

    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, .7)'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: '50%',
        borderWidth: 1
    },
    modalTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    modalSubTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    modalSubTotalText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    modalCheckoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalCheckoutButton: {
        marginTop: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: '100%'
    },
    modalCheckoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
});


export default CheckoutModal;
