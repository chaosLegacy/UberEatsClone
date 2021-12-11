import React from 'react'
import { View, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements';
import MenuItems from '../components/About/MenuItems'

const restaurant = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg',
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }]
};
const About = () => {
    const { name, image, price, reviews, rating, categories } = restaurant;
    const formatCategories = categories.map(cat => cat.title).join(' • ');
    const description = `${formatCategories} ${price ? ' • ' + price : ''} • 💳 ${rating} ⭐(${reviews})+`;

    return (
        <View style={{ flex: 1 }}>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
            <Divider width={1} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}

const RestaurantImage = ({ image }: { image: string }) => {
    return (
        <View>
            <Image source={{ uri: image }} style={{
                width: '100%',
                height: 180
            }} />
        </View>
    )
}

const RestaurantName = ({ name }: { name: string }) => {
    return (
        <View>
            <Text style={{
                fontSize: 29,
                fontWeight: 'bold',
                marginTop: 10,
                marginHorizontal: 15
            }}>{name}</Text>
        </View>
    )
}

const RestaurantDescription = ({ description }: { description: string }) => {
    return (
        <View>
            <Text style={{
                marginTop: 10,
                marginHorizontal: 15,
                fontWeight: '400',
                fontSize: 15.5
            }}>{description}</Text>
        </View>
    )
}

export default About
