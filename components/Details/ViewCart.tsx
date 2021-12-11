import numbro from 'numbro';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { useSelector } from '../../redux/store';
import OrderItem from './OrderItem';

const ViewCart = ({ navigation }: any) => {
    const [modalVisible, setModalVIsible] = useState(true);
    const { cart } = useSelector(state => state);
    const { selectedItems } = cart;

    const total = selectedItems.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = numbro(total).formatCurrency();

    const checkoutModal = () => {
        return (
            <>
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
                            <TouchableOpacity onPress={() => setModalVIsible(false)}
                                style={styles.modalCheckoutButton}>
                                <Text style={styles.modalCheckoutButtonText}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <Modal animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVIsible(false)}>
                {checkoutModal()}
            </Modal>
            {
                selectedItems.length ? (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 15,
                        opacity: .9
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <TouchableOpacity
                                onPress={() => setModalVIsible(true)}
                                activeOpacity={.8}
                                style={{
                                    backgroundColor: 'black',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    padding: 15,
                                    borderRadius: 30,
                                    width: '70%',
                                    position: 'relative'
                                }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginRight: '8.5%' }}>VIEW CART</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{totalPrice}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : <></>
            }

        </>

    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1
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

export default ViewCart
