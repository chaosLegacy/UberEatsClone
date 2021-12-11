import numbro from 'numbro';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from '../../redux/store';

const ViewCart = ({ navigation }: any) => {
    const { cart } = useSelector(state => state);
    const { selectedItems } = cart;
    const total = selectedItems.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = numbro(total).formatCurrency();

    return (
        <>
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

export default ViewCart
