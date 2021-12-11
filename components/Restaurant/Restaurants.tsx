import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { YELP_API_KEY, YELP_URL } from '@env';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { restaurant as restaurantType } from '../../types';

const localRestaurants: Array<restaurantType> = [
    {
        name: 'Soi',
        categories: [{ title: 'Chinese' }, { title: 'Bar' }],
        image_url: 'https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg',
        price: '$$',
        review_count: 1473,
        rating: 4.7
    },
    {
        name: 'La Vespa des halles',
        categories: [{ title: 'Italian' }, { title: 'Bar' }],
        image_url: 'https://img3.mashed.com/img/gallery/you-should-never-fold-pizza-slices-heres-why/l-intro-1602105889.jpg',
        price: '$$',
        review_count: 379,
        rating: 3.9
    },
    {
        name: 'Casa de Tacos',
        categories: [{ title: 'Mexican' }, { title: 'Bar' }],
        image_url: 'https://www.samtell.com/hubfs/Blogs/Four-Scrumptous-Tacos-Lined-up-with-ingredients-around-them-1.jpg',
        price: '$$$',
        review_count: 3489,
        rating: 4.9
    }
]
const Restaurants = ({ navigation }: any) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false);

    const getRestaurantsFromYelp = async () => {
        const yelpUrl = `${YELP_URL}?term=restaurants&location=${city}`;
        try {
            const res = await fetch(`${yelpUrl}/`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${YELP_API_KEY}`
                }
            });

            const response = await res.json();

            setLoading(false);
            console.log(response.businesses);
            setRestaurantData(
                response.businesses.filter((business: any) =>
                    business.transactions.includes(activeTab.toLowerCase())
                )
            )
            if (response.status >= 300 || response.errors) {
                return { error: response };
            }
            return { response: response };
        } catch (error) {
            console.log('error:', error);
            setLoading(false);
            return { error };
        }
    };

    useEffect(() => {
        // getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <View>
            {
                restaurantData.map((restaurant: restaurantType, index: number) => (
                    <TouchableOpacity key={index} style={{
                        marginTop: 20,
                        padding: 15,
                        backgroundColor: '#fff'
                    }} activeOpacity={0.8
                    } onPress={() => navigation.navigate('RestaurantDetails', {
                        name: restaurant.name,
                        image_url: restaurant.image_url,
                        price: restaurant.price,
                        review_count: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories
                    })}>
                        <RestaurantImage image_url={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const RestaurantImage = ({ image_url }: restaurantType) => {
    return (
        <View>
            <Image source={{ uri: image_url }}
                style={{
                    width: '100%',
                    height: 180
                }} />
            <TouchableOpacity style={{
                position: 'absolute',
                top: 20,
                right: 20
            }}>
                <MaterialCommunityIcon name='heart-outline' size={25} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

const RestaurantInfo = ({ name, rating }: restaurantType) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>{name}</Text>
                <Text style={{
                    fontSize: 13,
                    color: 'gray'
                }}>30-45 • min</Text>
            </View>
            <View style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15
            }}>
                <Text style={{ fontWeight: '400' }}>{rating}</Text>
            </View>
        </View>
    )
}

export default Restaurants;
