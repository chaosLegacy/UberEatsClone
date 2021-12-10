import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryItem, { cat } from './CategoryItem'


const items: Array<cat> = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-up'
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        image: require('../../assets/images/bread.png'),
        text: 'Bakery Items'
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: 'Fast Food'
    },
    {
        image: require('../../assets/images/deals.png'),
        text: 'Deals'
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: 'Coffee & Tea'
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: 'Desserts'
    },
]
const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{
                flexDirection: 'row',
                marginTop: 20,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingLeft: 20
            }}>
                {
                    items.map((item, index) => (
                        <CategoryItem key={index} image={item.image} text={item.text} />
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default Categories
