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
    picture?: string;
}

export type Cart = {
    selectedItems: Array<food>,
    restaurantName?: string,
}

export type State = {
    error: string;
    user: null | User,
    cart: Cart
}