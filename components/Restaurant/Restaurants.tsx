import React, { createContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import RestaurantItem from './RestaurantItem'
import { YELP_API_KEY, YELP_URL } from '@env';

export type restaurant = {
    name?: string;
    image_url?: string;
    categories?: Array<string>;
    price?: string;
    reviews?: number;
    rating?: number;
};

const localRestaurants: Array<restaurant> = [
    {
        name: 'Soi',
        categories: ['Chinese', 'Bar'],
        image_url: 'https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg',
        price: '$$$',
        reviews: 1473,
        rating: 4.7
    },
    {
        name: 'La Vespa des halles',
        categories: ['Italian', 'Bar'],
        image_url: 'https://img3.mashed.com/img/gallery/you-should-never-fold-pizza-slices-heres-why/l-intro-1602105889.jpg',
        price: '$$$',
        reviews: 379,
        rating: 3.9
    },
    {
        name: 'Casa de Tacos',
        categories: ['Mexican', 'Bar'],
        image_url: 'https://www.samtell.com/hubfs/Blogs/Four-Scrumptous-Tacos-Lined-up-with-ingredients-around-them-1.jpg',
        price: '$$$',
        reviews: 3489,
        rating: 4.9
    }
]
const Restaurants = () => {
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
                restaurantData.map((data: restaurant, index: number) => (
                    <RestaurantItem key={index} name={data.name} image_url={data.image_url} rating={data.rating} />
                ))
            }
        </View>
    )
}

export default Restaurants
