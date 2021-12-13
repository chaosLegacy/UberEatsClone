import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { food as foodType } from '../../types';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';
import { useSelector } from '../../redux/store';
import { foods } from '../../redux/constants';


const MenuItems = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
    const { selectedItems } = cart;
    const setItem = (item: foodType, isChecked: boolean) => {
        isChecked ? dispatch(actions.addToCart(item)) : dispatch(actions.removeFromCart(item));
    }
    const isItemInCart = (item: foodType, cartItems: Array<foodType> = selectedItems) => {
        return Boolean(cartItems.find(itm => itm.title === item.title));
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food: foodType, index: number) => (
                    <View key={index}>
                        <View style={styles.menuItemsStyle}>
                            <BouncyCheckbox
                                onPress={(isChecked: boolean) => setItem(food, isChecked)}
                                isChecked={isItemInCart(food)}
                                iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                                fillColor='green' />
                            <FoodInfo {...food} />
                            <FoodImage {...food} />
                        </View>
                        <Divider width={0.4} orientation='vertical' style={{ marginHorizontal: 20 }} />
                    </View>

                ))
            }
        </ScrollView>
    )
};

const FoodInfo = (food: foodType) => {
    const { title, description, price } = food;
    return (
        <View style={{
            width: '48%',
            justifyContent: 'space-evenly'
        }}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
};

const FoodImage = (food: foodType) => (
    <View>
        <Image source={{ uri: food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8
            }} />
    </View>
);


const styles = StyleSheet.create({
    menuItemsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default MenuItems;
