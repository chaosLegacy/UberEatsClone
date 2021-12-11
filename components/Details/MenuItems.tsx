import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { food as foodType } from '../../types';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';
import { useSelector } from '../../redux/store';


const foods: Array<foodType> = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    }
];

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
