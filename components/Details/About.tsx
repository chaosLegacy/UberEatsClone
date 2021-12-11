import React from 'react'
import { View, Text, Image } from 'react-native';
import { restaurant } from '../../types';

const localRestaurant = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image_url: 'https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg',
    price: '$$',
    review_count: '1500',
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }]
};

const About = ({ route }: any) => {
    const { name, image_url, price, review_count, rating, categories } = route ? route.params : localRestaurant;
    const formatCategories = categories.map((cat: { title: string }) => cat.title).join(' • ');
    const description = `${formatCategories} ${price ? ' • ' + price : ''} • 💳 ${rating} ⭐(${review_count})+`;
    return (
        <View>
            <RestaurantImage image_url={image_url} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({ image_url }: restaurant) => {
    return (
        <View>
            <Image source={{ uri: image_url }} style={{
                width: '100%',
                height: 180
            }} />
        </View>
    )
}

const RestaurantName = ({ name }: restaurant) => {
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

const RestaurantDescription = ({ description }: restaurant) => {
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
