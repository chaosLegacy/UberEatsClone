import * as Location from 'expo-location';

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

export type RestaurantParamList = restaurant;

export type food = {
    title?: string;
    description?: string;
    price: string;
    image?: string;
}

type restaurantCategory = {
    title: string
}
export type restaurant = {
    name?: string;
    image_url?: string;
    description?: string;
    categories?: Array<restaurantCategory>;
    price?: string;
    review_count?: number;
    rating?: number;
};


export type User = {
    id: string;
    name: string;
    email: string;
    familyName?: string;
    givenName?: string;
    photoUrl?: string;
}

export type Cart = {
    selectedItems: Array<food>,
    restaurantName?: string,
}

export type State = {
    error: string;
    activeHeaderTab: string;
    searchCity: string;
    user: null | User,
    location: null | Location.LocationObject,
    restaurants: Array<restaurant>,
    cart: Cart
}