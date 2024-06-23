// scripts/seed.js
const mongoose = require('mongoose');
const FoodCategory = require('../models/foodcategory');
require('dotenv').config();

mongoose.connect('mongodb+srv://prakashsangave:prakashEcommerce@cluster0.v8mshjc.mongodb.net/')
  .then(async () => {
    console.log('MongoDB connected');
    await FoodCategory.deleteMany();

    const foodCategories = [
        {
            "name": "biryani",
            "image": "/assets/titleImgs/heading-1.avif",
            "subitems":[
                {
                   "subname": "Biryani",
                   "type": 'non veg',
                    "name": "Hyderabadi Biryani",
                    "url": "/assets/biryani/img-1.jpg",
                    "description": "Aromatic basmati rice cooked with marinated chicken, infused with saffron, and garnished with fried onions and coriander.",
                    "price": "12.99",
                    "rating": 4.5
                },
                {
                  "subname": "Biryani",
                    "name": "Vegetable Biryani",
                    "type": 'veg',
                    "url": "/assets/biryani/img-3.jpg",
                    "description": "Mixed vegetables and basmati rice cooked with a blend of traditional spices, served with yogurt raita.",
                    "price": "10.99",
                    "rating": 4.2
                },
                {
                  "subname": "Biryani",
                    "name": "Mutton Biryani",
                    "type": 'non veg',
                    "url": "/assets/biryani/img-2.jpg",
                    "description": "Tender pieces of mutton and basmati rice slow-cooked in a sealed pot with saffron, nuts, and aromatic spices.",
                    "price": "15.99",
                    "rating": 4.7
                },
                {
                  "subname": "Biryani",
                    "name": "Prawn Biryani",
                    "type": 'non veg',
                    "url": "/assets/biryani/img-4.jpg",
                    "description": "Juicy prawns and basmati rice cooked with coconut milk, mustard seeds, and fresh curry leaves.",
                    "price": "14.99",
                    "rating": 4.3
                }

            ]
        },
        {
            "name": "north indian",
            "image": "/assets/titleImgs/heading-2.avif", 
            "subitems": [
                
                    {
                      "subname": "North Indian",
                        "name": "Butter Chicken",
                        "type": 'non veg',
                        "url": "/assets/paneer/img-1.jpg",
                        "description": "Tender chicken pieces marinated in yogurt and spices, cooked in a creamy tomato-based gravy with butter and cream.",
                        "price": "13.99",
                        "rating": 4.6
                    },
                    {
                      "subname": "North Indian",
                        "name": "Palak Paneer",
                        "type": 'veg',
                        "url": "/assets/paneer/img-2.jpg",
                        "description": "Soft paneer cubes cooked in a smooth spinach sauce, seasoned with fresh ginger, garlic, and aromatic spices.",
                        "price": "11.99",
                        "rating": 4.4
                    },
                    {
                      "subname": "North Indian",
                        "name": "Chole Bhature",
                        "type": 'veg',
                        "url": "/assets/paneer/img-3.jpg",
                        "description": "Spicy chickpeas curry served with fried bread called bhature, a staple in North Indian cuisine.",
                        "price": "9.99",
                        "rating": 4.5
                    },
                    {
                      "subname": "North Indian",
                        "name": "Rogan Josh",
                        "type": 'veg',
                        "url": "/assets/paneer/img-4.jpg",
                        "description": "Aromatic lamb curry cooked in a rich and spicy gravy, flavored with Kashmiri chilies, cardamom, and cloves.",
                        "price": "14.99",
                        "rating": 4.7
                    }
                
            ]
        },
        {
            "name": "Pizza",
            "image": "/assets/titleImgs/heading-3.avif", 
            "subitems": [
                
                {
                  "subname": "Pizza",
                    "name": "Margherita",
                    "type": 'veg',
                    "url": "/assets/pizza/img-1.jpg",
                    "description": "Classic pizza with fresh mozzarella cheese, basil, and a rich tomato sauce",
                    "price": 8.99,
                    "rating": 4.5
                  },
                  {
                    "subname": "Pizza",
                    "name": "Pepperoni",
                    "type": 'non veg',
                    "url": "/assets/pizza/img-2.jpg",
                    "description": "A hearty topping of pepperoni, mozzarella cheese, and a zesty tomato base",
                    "price": 9.99,
                    "rating": 4.7
                  },
                  {
                    "subname": "Pizza",
                    "name": "Veggie",
                    "type": 'veg',
                    "url": "/assets/pizza/img-3.jpg",
                    "description": "A delicious variety of seasonal vegetables on a classic tomato and cheese base",
                    "price": 10.49,
                    "rating": 4.3
                  },
                  {
                    "subname": "Pizza",
                    "name": "Hawaiian",
                    "type": 'veg',
                    "url": "/assets/pizza/img-3.jpg",
                    "description": "A sweet and savory mix of ham, pineapple, cheese, and tomato sauce",
                    "price": 11.49,
                    "rating": 3.8
                  }
                
            ]
        },
        {
            "name": "Chinese",
            "image": "/assets/titleImgs/heading-4.avif", 
            "subitems": [
                
                {
                  "subname": "Chinese",
                  "type": 'non veg',
                    "name": "Kung Pao Chicken",
                    "url": "/assets/chinese/img-1.jpg",
                    "description": "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
                    "price": 12.95,
                    "rating": 4.6
                  },
                  {
                    "subname": "Chinese",
                    "name": "Beef and Broccoli",
                    "type": 'non veg',
                    "url": "/assets/chinese/img-2.jpg",
                    "description": "Tender beef slices stir-fried with fresh broccoli in a savory sauce.",
                    "price": 13.50,
                    "rating": 4.4
                  },
                  {
                    "subname": "Chinese",
                    "name": "Sweet and Sour Pork",
                    "type": 'non veg',
                    "url": "/assets/chinese/img-3.jpg",
                    "description": "Crispy fried pork with pineapple, bell peppers, and onion in a sweet and tangy sauce.",
                    "price": 11.75,
                    "rating": 4.2
                  },
                  {
                    "subname": "Chinese",
                    "name": "Mapo Tofu",
                    "type": 'veg',
                    "url": "/assets/chinese/img-4.jpg",
                    "description": "Soft tofu cooked in a spicy and aromatic bean sauce with minced meat.",
                    "price": 10.99,
                    "rating": 4.5
                  },
                  {
                    "subname": "Chinese",
                    "name": "Spring Rolls",
                    "type": 'veg',
                    "url": "/assets/chinese/img-5.jpg",
                    "description": "Crispy rolls filled with vegetables and sometimes meat, served with dipping sauce.",
                    "price": 6.95,
                    "rating": 4.3
                  },
                  {
                    "subname": "Chinese",
                    "name": "Egg Fried Rice",
                    "type": 'non veg',
                    "url": "/assets/chinese/img-6.jpg",
                    "description": "Fluffy rice stir-fried with eggs, peas, carrots, and green onions.",
                    "price": 8.99,
                    "rating": 4.1
                  }
            ]
        },

        {
            "name": "burger",
            "image": "/assets/titleImgs/heading-5.avif", 
            "subitems": [
                
                {
                  "subname": "Burger",
                    "name": "Classic Cheese Burger",
                    "type": 'veg',
                    "url": "/assets/burger/img-1.jpg",
                    "description": "A juicy beef patty topped with melted cheddar cheese, crisp lettuce, fresh tomato, and onion on a toasted sesame bun. Served with a side of fries.",
                    "price": "8.99",
                    "rating": 4.5
                },
                {
                  "subname": "Burger",
                    "name": "Bacon Burger",
                    "type": 'non veg',
                    "url": "/assets/burger/img-2.jpg",
                    "description": "A premium beef patty with crispy bacon, blue cheese, caramelized onions, and a smoky BBQ sauce on a brioche bun.",
                    "price": "10.99",
                    "rating": 4.7
                },
                {
                  "subname": "Burger",
                    "name": "Veggie Burger",
                    "type": 'veg',
                    "url": "/assets/burger/img-3.jpg",
                    "description": "A delicious blend of grilled vegetables and black beans in a patty, topped with avocado, sprouts, and a vegan spicy mayo on a whole wheat bun.",
                    "price": "9.50",
                    "rating": 4.3
                }
                
            ]
        },
        {
            "name": "Rolls",
            "image": "/assets/titleImgs/heading-6.avif",
            "subitems":[
                {
                  "subname": "Rolls",
                    "name": "California Roll",
                    "type": 'non veg',
                    "url": "/assets/rolls/img-1.jpg",
                    "description": "A type of sushi roll containing cucumber, crab meat or imitation crab, and avocado.",
                    "price": 7.50,
                    "rating": 4.4
                  },
                  {
                    "subname": "Rolls",
                    "name": "Cinnamon Roll",
                    "type": 'non veg',
                    "url": "/assets/rolls/img-2.jpg",
                    "description": "Soft bread rolled with a cinnamon sugar mixture and topped with icing.",
                    "price": 3.99,
                    "rating": 4.6
                  }

            ]
        },

        {
            "name": "pure veg",
            "image": "/assets/titleImgs/heading-7.avif",
            "subitems":[
                {
                  "subname": "pure veg",
                    "name": "Chickpea Curry",
                    "type": 'veg',
                    "url": "/assets/pure-veg/img-1.jpg",
                    "description": "A robust curry made with chickpeas, tomatoes, and a blend of fragrant spices, served with basmati rice.",
                    "price": 9.99,
                    "rating": 4.5
                  },
                  {
                    "subname": "pure veg",
                    "name": "Caprese Salad",
                    "type": 'veg',
                    "url": "/assets/pure-veg/img-2.jpg",
                    "description": "Fresh slices of mozzarella and tomatoes topped with basil leaves and drizzled with balsamic glaze.",
                    "price": 7.50,
                    "rating": 4.7
                  }

            ]
        },

        {
            "name": "pav bhaji",
            "image": "/assets/titleImgs/heading-8.avif",
            "subitems":[
                {
                  "subname": "pav bhaji",
                    "name": "Pav Bhaji",
                    "type": 'veg',
                    "url": "/assets/pure-veg/img-PB-3",
                    "description": "A spicy blend of mashed vegetables cooked in a tomato base, served with buttered bread rolls.",
                    "price": 6.99,
                    "rating": 4.8
                  }

            ]
        },

        {
            "name": "sauth indian",
            "image": "/assets/titleImgs/heading-9.avif",
            "subitems":[
                {
                  "subname": "sauth indian",
                    "name": "Masala Dosa",
                    "type": 'veg',
                    "url": "/assets/south/img-1.jpg",
                    "description": "A thin, crispy dosa filled with spicy mashed potatoes and served with coconut chutney and sambar.",
                    "price": "5.99",
                    "rating": 4.5
                  },
                  {
                    "subname": "sauth indian",
                    "name": "Idli Sambar",
                    "type": 'veg',
                    "url": "/assets/south/img-2.jpg",
                    "description": "Steamed rice cakes served with a savory lentil and vegetable stew.",
                    "price": "4.50",
                    "rating": 4.2
                  },
                  {
                    "subname": "sauth indian",
                    "type": 'veg',
                    "name": "Uttapam",
                    "url": "/assets/south/img-3.jpg",
                    "description": "A thick pancake made from fermented rice and lentil batter, topped with onions, tomatoes, and green chilies.",
                    "price": "6.25",
                    "rating": 4.7
                  }

            ]
        }
      // Add other food categories in the same format...
    ];

    await FoodCategory.insertMany(foodCategories);
    console.log('Data inserted');
    process.exit();
  })
  .catch(err => console.log(err));