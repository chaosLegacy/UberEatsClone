import { food, restaurant } from "../types";

export const localRestaurants: Array<restaurant> = [
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
];

export const foods: Array<food> = [
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
