import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { YELP_API_KEY, YELP_URL } from '@env';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { restaurant as restaurantType, RestaurantParamList } from '../../types';
import { useSelector } from '../../redux/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducer';

// type Props = NativeStackScreenProps<RestaurantParamList, 'RestaurantDetails'>;

const Restaurants = ({ navigation }: any) => {
    const { activeHeaderTab, searchCity, restaurants, location } = useSelector((state) => state);
    const totalItems = Array.isArray(restaurants) ? restaurants.length : 0;
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const generateYelpURL = (): { isDefined: boolean, link: string } => {
        const customSearch = searchCity ? `location=${searchCity}` : (location ? `latitude=${location.coords.latitude}&longitude=${location.coords.longitude}` : undefined);
        const yelpUrl = `${YELP_URL}?term=restaurants&${customSearch}&limit=${5}&offset=${offset}`;
        console.log(yelpUrl);
        return {
            isDefined: !!customSearch,
            link: yelpUrl
        }
    }

    const getRestaurantsFromYelp = async () => {
        const yelpUrl = generateYelpURL().link;
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

            const data = response.businesses.filter((business: any) =>
                business.transactions.includes(activeHeaderTab.toLowerCase())
            );
            console.log(data);
            if (data && data.length)
                dispatch(actions.setRestaurants(data));

            if (response.status >= 300 || response.errors) {
                dispatch(actions.set({ error: `${res.url}\n\n${JSON.stringify(response, null, 2)}` }));
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
        if (!generateYelpURL().isDefined) return;
        const unsubscribe = getRestaurantsFromYelp();
        return () => {
            unsubscribe
        }
    }, [activeHeaderTab, searchCity])

    return (
        <View>
            {
                restaurants.map((restaurant: restaurantType, index: number) => (
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
