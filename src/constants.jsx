import Hero from './components/Hero'
import Meat from './components/sections/Meat'
import Menu from './components/sections/Menu'
import Reviews from './components/sections/Reviews'
import Membership from './components/sections/Membership'
import Restaurants from './components/sections/Restaurants'
import Contact from './components/sections/Contact'
import Newsletter from './components/sections/Newsletter'
import FAQ from './components/sections/FAQ'

import { faChild, faDollar, faStreetView, faClock, faList } from '@fortawesome/free-solid-svg-icons'

const sections = [
    <Hero />,
    <Meat />,
    <Menu />,
    <Reviews />,
    <Membership />,
    <Restaurants />,
    <Contact />,
    <Newsletter />,
    <FAQ />
]

const meats = [
    {
        name: "Chicken",
        img: require("./img/meats/Chicken.png"),
        ingredients: [
            "Chicken meat 95%",
            "Water",
            "Corn flour",
            "Seasonings",
            "Potato starch",
        ],
    },

    {
        name: "Beef",
        img: require("./img/meats/Beef.png"),
        ingredients: [
            "Beef meat 90%",
            "Water",
            "Seasonings",
            "Animal fats 4%",
        ]
    }
]

const products = [
    {
        name: "Standard Tortilla",
        price: 8,
        desc: "Tortilla filled with delicious chicken.",
        img: require("./img/thumbnails/Standard.png"),
    },

    {
        name: "Beef Tortilla",
        price: 10,
        desc: "Tortilla filled with delicious beef.",
        img: require("./img/thumbnails/BeefOnly.png"),
    },

    {
        name: "Vegan Tortilla",
        price: 6,
        desc: "Tortilla filled with no meat.",
        img: require("./img/thumbnails/Standard.png"),
    },

    {
        name: "Meat Mix Tortilla",
        price: 12,
        desc: "Tortilla filled both delicious meat types.",
        img: require("./img/thumbnails/MeatMix.png"),
        badge: "MOST POPULAR",
    },
]

const reviews = [
    {
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
        ],
        title: "Delicious",
        content: "Best kebab i have ever eaten. Highly recommended!",
        avatar: require("./img/avatars/woman1.jpg"),
        name: "Amanda",
        date: "Yesterday",
    },

    {
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
        ],
        title: "I'm lovin' it!",
        content: "The meat is very delicious, soft, crispy yet very juicy. Will come back!",
        avatar: require("./img/avatars/man1.jpg"),
        name: "John",
        date: "Two days ago",
    },

    {
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: false},
        ],
        title: "Amazing, however,",
        content: "I don't really like the membership program.",
        avatar: require("./img/avatars/man2.jpg"),
        name: "Kennedy",
        date: "One week ago",
    },

    {
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: false},
        ],
        title: "Great, but...",
        content: "The food is great and well-priced, but lately the portions have ben progressively getting smaller and smaller...",
        avatar: require("./img/avatars/woman2.jpg"),
        name: "Kathy",
        date: "Two weeks ago",
    },
]

const memberships = [
    {
        name: "STANDARD",
        price: 15,
        priceColor: "#BBBBBB",
        benefits: [
            {name: "Two free kebabs", val: true},
            {name: "Loyalty program", val: true},
            {name: "Monthly free points", val: false},
            {name: "Works everywhere", val: false},
            {name: "Dedicated app access", val: false},
            {name: "Card", val: false},
        ],
    },

    {
        name: "SILVER",
        price: 25,
        priceColor: "#BBBBBB",
        benefits: [
            {name: "Three free kebabs", val: true},
            {name: "Loyalty program", val: true},
            {name: "Monthly free points (2000)", val: true},
            {name: "Works in selected locations", val: true},
            {name: "Dedicated app access", val: true},
            {name: "Card", val: false},
        ],
    },

    {
        name: "PREMIUM",
        price: 45,
        priceColor: "#FFA800",
        benefits: [
            {name: "Four free kebabs", val: true},
            {name: "Loyalty program", val: true},
            {name: "Monthly free points (5000)", val: true},
            {name: "Works everywhere", val: true},
            {name: "Dedicated app access", val: true},
            {name: "Card", val: true},
        ],
        badge: "RECOMMENDED",
    },
]

const restaurants = [
    {
        name: "La Kebap",
        start_date: "May 1st 2014",
        desc: "Luxury restaurant located in stunning Paris, France. Opened at the beginning of may in 2014 and since then is considered as the most luxury kebab restaurant in the world by Forbes. All menu items are available in this restaurant and additional chef special.",
        street: "Rue de Rivioli Street",
        country: "France",
        city: "Paris",
        reservation_phone: "+33 999 999 999",
        flag_img: "",
        restaurant_img: require("./img/res1.jpg"),
        features: [
            {
                icon: faStreetView,
                title: "Amazing views",
            },

            {
                icon: faDollar,
                title: "Luxury",
            },

            {
                icon: faChild,
                title: "Family friendly",
            },
        ],
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true}
        ],
    },

    {
        name: "Luxor",
        start_date: "January 2nd 2010",
        desc: "This is where it all started. First kebab shop run by Luxor founder, Habibi. Our only location where you can try our legendary special sauce with secret ingredients. Habibi spent over a year carefully creating the recipe. But the effort was soon worth it as people from around the globe wanted to try it.",
        street: "Rynek 24 Street",
        country: "Poland",
        city: "Grodków",
        reservation_phone: "+48 999 999 999",
        flag_img: "",
        restaurant_img: require("./img/res2.PNG"),
        features: [
            {
                icon: faDollar,
                title: "Attractive prices",
            },

            {
                icon: faClock,
                title: "Fast-food",
            },

            {
                icon: faList,
                title: "Big menu",
            },
        ],
        stars: [
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: true},
            {filled: false}
        ],
    },
]

const faqs = [
    {
        question: "How do I redeem my loyalty points?",
        answer: "Exchange them directly in selected restaurant or use our mobile app. Note that the app is only available with the Premium and Silver memberships.",
    },

    {
        question: "I'm experiencing technical issues with the mobile app. What do I do?",
        answer: "We are very sorry for the inconvenience. We would be thankful if you would report your issue providing enough feedback.",
    },

    {
        question: "My Premium membership card is not working.",
        answer: "Please mail us your card correctly labeled to this address: Paris. We will send you a new card.",
    },

    {
        question: "I’m looking for allergens list.",
        answer: "Lactose, Soybeans",
    },

    {
        question: "I have a complaint.",
        answer: "We value our customers opinions and are very sorry for situations like this. Please provide enough information so we can take next steps.",
    },
]

export { meats, sections, products, reviews, memberships, restaurants, faqs }