import numbro from 'numbro';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from '../../redux/store';
import CheckoutModal from './CheckoutModal';
import LottieView from 'lottie-react-native';
import Loader from '../Loader';


const ViewCart = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { cart } = useSelector(state => state);
    const { selectedItems } = cart;

    const total = selectedItems.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = numbro(total).formatCurrency();
    return (
        <>
            <Loader loading={loading} />
            <CheckoutModal
                navigation={navigation}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setLoading={setLoading}
                totalPrice={totalPrice} />
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
                                onPress={() => setModalVisible(true)}
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


export default ViewCart;