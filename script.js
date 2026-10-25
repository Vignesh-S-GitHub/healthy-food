"use strict";

// Food sources, not calculated nutrient totals. Example orders are not portion prescriptions.
const mealGroups = [
  {
    "id": "breakfast",
    "icon": "🌅",
    "title": "Breakfast",
    "meals": [
      {
        "id": "breakfast-0",
        "pair": [
          "Idli",
          "Boiled egg"
        ],
        "side": "Vegetable sambar",
        "nutrients": {
          "protein": "Egg, urad dal, sambar lentils",
          "fibre": "Sambar vegetables, lentils",
          "carbs": "Idli rice",
          "other": "Choline: egg yolk"
        },
        "veg": false,
        "image": "assets/images/meals/idli-eggs.webp",
        "imageAlt": "Idli + Boiled egg, with vegetable sambar",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Idli set + boiled egg + a bowl of sambar.",
        "note": "Egg may need to be bought separately at an egg stall.",
        "allergens": "Egg; ask about chutney ingredients."
      },
      {
        "id": "breakfast-1",
        "pair": [
          "Dosa",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Lentils, sambar vegetables",
          "carbs": "Dosa rice",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/dosa-sambar.webp",
        "imageAlt": "Dosa + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Plain dosa + vegetable sambar + coconut chutney.",
        "note": "Ask for sambar with lentils and vegetables.",
        "allergens": "Coconut; recipe may include ghee."
      },
      {
        "id": "breakfast-2",
        "pair": [
          "Vegetable upma",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Sambar lentils, peas",
          "fibre": "Carrot, beans, peas, lentils",
          "carbs": "Rava (wheat semolina)",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/upma-sambar.webp",
        "imageAlt": "Vegetable upma + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Vegetable rava upma + sambar.",
        "note": "Usually a breakfast item; availability varies.",
        "allergens": "Wheat, coconut; may contain cashews or ghee."
      },
      {
        "id": "breakfast-3",
        "pair": [
          "Ven pongal",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Moong dal, sambar lentils",
          "fibre": "Sambar vegetables, lentils",
          "carbs": "Rice",
          "other": "Fats: cashews, coconut"
        },
        "veg": true,
        "image": "assets/images/meals/pongal-sambar.webp",
        "imageAlt": "Ven pongal + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Ven pongal + sambar + coconut chutney.",
        "note": "Ask for less added ghee if preferred.",
        "allergens": "Cashews, milk/ghee, coconut."
      },
      {
        "id": "breakfast-4",
        "pair": [
          "Puttu",
          "Kadala curry"
        ],
        "side": "Banana",
        "nutrients": {
          "protein": "Black chickpeas",
          "fibre": "Black chickpeas, banana",
          "carbs": "Rice puttu, banana",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/puttu-kadala.webp",
        "imageAlt": "Puttu + Kadala curry, with banana",
        "where": "Kerala restaurant; selected South Indian food-court counters",
        "order": "Rice puttu + black-chickpea kadala curry + banana.",
        "note": "Ask a Kerala restaurant; not every tiffin shop serves it.",
        "allergens": "Coconut."
      },
      {
        "id": "breakfast-5",
        "pair": [
          "Adai",
          "Avial"
        ],
        "side": "",
        "nutrients": {
          "protein": "Mixed lentils in adai; curd in avial",
          "fibre": "Lentils, avial vegetables",
          "carbs": "Rice and lentils in adai",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/adai-avial.webp",
        "imageAlt": "Adai + Avial",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Adai + avial; ask whether both are available.",
        "note": "Often an evening special; breakfast availability varies.",
        "allergens": "Milk/curd, coconut; recipes vary."
      },
      {
        "id": "breakfast-6",
        "pair": [
          "Ragi dosa",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Ragi, lentils, vegetables",
          "carbs": "Ragi, rice in batter",
          "other": "Calcium: ragi"
        },
        "veg": true,
        "image": "assets/images/meals/ragi-dosa.webp",
        "imageAlt": "Ragi dosa + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Ragi dosa + vegetable sambar.",
        "note": "Ask for ragi dosa; some outlets serve only plain dosa.",
        "allergens": "Coconut; some ragi batters contain wheat."
      },
      {
        "id": "breakfast-7",
        "pair": [
          "Idiyappam",
          "Kadala curry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Black chickpeas",
          "fibre": "Black chickpeas",
          "carbs": "Rice idiyappam",
          "other": "Fats: coconut in curry"
        },
        "veg": true,
        "image": "assets/images/meals/idiyappam-kadala.webp",
        "imageAlt": "Idiyappam + Kadala curry",
        "where": "Kerala restaurant; selected South Indian food-court counters",
        "order": "Idiyappam set + black-chickpea curry.",
        "note": "Ask specifically for kadala curry; kurma is a different side.",
        "allergens": "Coconut."
      },
      {
        "id": "breakfast-8",
        "pair": [
          "Mini idli",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Lentils, sambar vegetables",
          "carbs": "Idli rice",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/mini-idli.webp",
        "imageAlt": "Mini idli + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Mini idli in sambar + chutney.",
        "note": "Choose sambar idli rather than a fried idli preparation.",
        "allergens": "Coconut; may include ghee."
      }
    ]
  },
  {
    "id": "lunch",
    "icon": "☀️",
    "title": "Lunch",
    "meals": [
      {
        "id": "lunch-0",
        "pair": [
          "Rice",
          "Paruppu & egg"
        ],
        "side": "Vegetable poriyal",
        "nutrients": {
          "protein": "Lentils, egg",
          "fibre": "Lentils, poriyal vegetables",
          "carbs": "Rice",
          "other": "Choline: egg yolk"
        },
        "veg": false,
        "image": "assets/images/meals/rice-dal-egg.webp",
        "imageAlt": "Rice + Paruppu & egg, with vegetable poriyal",
        "where": "Non-veg South Indian hotel / meals mess",
        "order": "Rice + paruppu + boiled egg + vegetable poriyal.",
        "note": "Order the egg as a separate side if needed.",
        "allergens": "Egg, coconut; may include ghee."
      },
      {
        "id": "lunch-1",
        "pair": [
          "Rice",
          "Sambar & kootu"
        ],
        "side": "Poriyal, plain curd",
        "nutrients": {
          "protein": "Sambar lentils, kootu lentils, curd",
          "fibre": "Lentils, kootu and poriyal vegetables",
          "carbs": "Rice",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "assets/images/meals/veg-meals.webp",
        "imageAlt": "Rice + Sambar & kootu, with poriyal, plain curd",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "South Indian meals: rice, sambar, kootu, poriyal and curd.",
        "note": "Ask which kootu and poriyal are served that day.",
        "allergens": "Milk/curd, coconut."
      },
      {
        "id": "lunch-2",
        "pair": [
          "Rice",
          "Fish kulambu"
        ],
        "side": "Vegetable poriyal",
        "nutrients": {
          "protein": "Fish",
          "fibre": "Poriyal vegetables",
          "carbs": "Rice",
          "other": "Vitamin B12: fish"
        },
        "veg": false,
        "image": "assets/images/meals/fish-rice.webp",
        "imageAlt": "Rice + Fish kulambu, with vegetable poriyal",
        "where": "Non-veg South Indian hotel / meals mess",
        "order": "Rice + fish kulambu + vegetable poriyal.",
        "note": "Ask which fish is available; bones may be present.",
        "allergens": "Fish, coconut depending on recipe."
      },
      {
        "id": "lunch-3",
        "pair": [
          "Lemon rice",
          "Chickpea sundal"
        ],
        "side": "Cucumber raita",
        "nutrients": {
          "protein": "Chickpeas, curd, peanuts",
          "fibre": "Chickpeas, cucumber",
          "carbs": "Rice, chickpeas",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "assets/images/meals/lemon-rice.webp",
        "imageAlt": "Lemon rice + Chickpea sundal, with cucumber raita",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "Lemon rice + chickpea sundal + cucumber raita.",
        "note": "Sundal may need to be bought separately from a snack stall.",
        "allergens": "Peanuts, milk/curd, coconut."
      },
      {
        "id": "lunch-4",
        "pair": [
          "Tamarind rice",
          "Green gram sundal"
        ],
        "side": "Plain curd",
        "nutrients": {
          "protein": "Green gram, curd, peanuts",
          "fibre": "Whole green gram",
          "carbs": "Rice, green gram",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "assets/images/meals/tamarind-rice.webp",
        "imageAlt": "Tamarind rice + Green gram sundal, with plain curd",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "Puliyodharai + green gram sundal + plain curd.",
        "note": "If the rice counter has no sundal, buy it separately.",
        "allergens": "Peanuts, sesame in some mixes, milk/curd, coconut."
      },
      {
        "id": "lunch-5",
        "pair": [
          "Curd rice",
          "Chickpea sundal"
        ],
        "side": "Cucumber",
        "nutrients": {
          "protein": "Curd, chickpeas",
          "fibre": "Chickpeas, cucumber",
          "carbs": "Rice, chickpeas",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "assets/images/meals/curd-rice.webp",
        "imageAlt": "Curd rice + Chickpea sundal, with cucumber",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "Curd rice + chickpea sundal + cucumber.",
        "note": "Ask for plain curd rice; sundal is a separate side.",
        "allergens": "Milk/curd, coconut."
      },
      {
        "id": "lunch-6",
        "pair": [
          "Sambar rice",
          "Keerai kootu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils in sambar and kootu",
          "fibre": "Spinach, lentils, vegetables",
          "carbs": "Rice",
          "other": "Iron: spinach, lentils"
        },
        "veg": true,
        "image": "assets/images/meals/sambar-keerai.webp",
        "imageAlt": "Sambar rice + Keerai kootu",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "Sambar sadam + keerai kootu.",
        "note": "Ask for a lentil-based keerai kootu, not just spinach gravy.",
        "allergens": "Coconut; recipe may include ghee."
      },
      {
        "id": "lunch-7",
        "pair": [
          "Tomato rice",
          "Boiled egg"
        ],
        "side": "Cucumber",
        "nutrients": {
          "protein": "Egg; tempering lentils",
          "fibre": "Tomato, cucumber",
          "carbs": "Rice",
          "other": "Choline: egg yolk"
        },
        "veg": false,
        "image": "assets/images/meals/tomato-rice.webp",
        "imageAlt": "Tomato rice + Boiled egg, with cucumber",
        "where": "Non-veg South Indian hotel / meals mess",
        "order": "Thakkali sadam + boiled egg + cucumber.",
        "note": "Buy a boiled egg separately if the rice shop is vegetarian.",
        "allergens": "Egg; peanuts in some tomato-rice recipes."
      },
      {
        "id": "lunch-8",
        "pair": [
          "Rasam rice",
          "Paruppu"
        ],
        "side": "Keerai poriyal",
        "nutrients": {
          "protein": "Lentils in paruppu",
          "fibre": "Spinach, lentils",
          "carbs": "Rice",
          "other": "Iron: spinach, lentils"
        },
        "veg": true,
        "image": "assets/images/meals/rasam-rice.webp",
        "imageAlt": "Rasam rice + Paruppu, with keerai poriyal",
        "where": "South Indian hotel / meals mess; mall meals counter",
        "order": "Rice + rasam + a separate bowl of paruppu + keerai poriyal.",
        "note": "Rasam alone is not the pulse side; order paruppu too.",
        "allergens": "Coconut; recipe may include ghee."
      }
    ]
  },
  {
    "id": "snacks",
    "icon": "🍎",
    "title": "Snacks",
    "meals": [
      {
        "id": "snacks-0",
        "pair": [
          "Curd",
          "Banana"
        ],
        "side": "Almonds & walnuts",
        "nutrients": {
          "protein": "Curd, nuts",
          "fibre": "Banana, nuts",
          "carbs": "Banana",
          "other": "Calcium: curd; fats: nuts"
        },
        "veg": true,
        "image": "assets/images/meals/curd-banana.webp",
        "imageAlt": "Curd + Banana, with almonds & walnuts",
        "where": "Department store / supermarket; mall supermarket",
        "order": "Plain curd cup + banana + a small pack of plain nuts.",
        "note": "Ready to eat; keep curd chilled until eating.",
        "allergens": "Milk, almonds, walnuts."
      },
      {
        "id": "snacks-1",
        "pair": [
          "Roasted chana",
          "Guava"
        ],
        "side": "",
        "nutrients": {
          "protein": "Roasted chana",
          "fibre": "Roasted chana, guava",
          "carbs": "Chana, guava",
          "other": "Vitamin C: guava"
        },
        "veg": true,
        "image": "assets/images/meals/chana-guava.webp",
        "imageAlt": "Roasted chana + Guava",
        "where": "Department store / supermarket; mall supermarket",
        "order": "Plain roasted chana + a whole guava.",
        "note": "Ready to eat; wash the guava.",
        "allergens": "Check packaged chana for peanut cross-contact."
      },
      {
        "id": "snacks-2",
        "pair": [
          "Buttermilk",
          "Roasted chana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Buttermilk, roasted chana",
          "fibre": "Roasted chana",
          "carbs": "Roasted chana",
          "other": "Calcium: buttermilk"
        },
        "veg": true,
        "image": "assets/images/meals/buttermilk-chana.webp",
        "imageAlt": "Buttermilk + Roasted chana",
        "where": "Department store / supermarket; mall supermarket",
        "order": "Plain buttermilk + roasted chana.",
        "note": "Ready to eat; check the drink is unsweetened.",
        "allergens": "Milk; check chana packaging."
      },
      {
        "id": "snacks-3",
        "pair": [
          "Green gram sundal",
          "Banana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Whole green gram",
          "fibre": "Whole green gram, banana",
          "carbs": "Green gram, banana",
          "other": "Iron: green gram"
        },
        "veg": true,
        "image": "assets/images/meals/moong-banana.webp",
        "imageAlt": "Green gram sundal + Banana",
        "where": "Sundal stall / snack shop; selected mall snack counters",
        "order": "Cooked green gram sundal + banana from a fruit shop.",
        "note": "Buy cooked sundal; raw sprouts need cooking.",
        "allergens": "Coconut."
      },
      {
        "id": "snacks-4",
        "pair": [
          "Apple & banana",
          "Peanuts"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peanuts",
          "fibre": "Fruit, peanuts",
          "carbs": "Fruit",
          "other": "Fats: peanuts"
        },
        "veg": true,
        "image": "assets/images/meals/fruit-peanuts.webp",
        "imageAlt": "Apple & banana + Peanuts",
        "where": "Department store / supermarket; mall supermarket",
        "order": "Whole apple + banana + plain peanuts.",
        "note": "Ready to eat; wash fruit and choose plain nuts.",
        "allergens": "Peanuts."
      },
      {
        "id": "snacks-5",
        "pair": [
          "Chickpea sundal",
          "Guava"
        ],
        "side": "Grated coconut",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Chickpeas, guava",
          "carbs": "Chickpeas, guava",
          "other": "Vitamin C: guava"
        },
        "veg": true,
        "image": "assets/images/meals/sundal-guava.webp",
        "imageAlt": "Chickpea sundal + Guava, with grated coconut",
        "where": "Sundal stall / snack shop; selected mall snack counters",
        "order": "Chickpea sundal + a guava from a fruit shop.",
        "note": "Look for cooked sundal at local snack counters.",
        "allergens": "Coconut."
      },
      {
        "id": "snacks-6",
        "pair": [
          "Boiled peanuts",
          "Cucumber"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peanuts",
          "fibre": "Peanuts, cucumber",
          "carbs": "Peanuts",
          "other": "Fats: peanuts"
        },
        "veg": true,
        "image": "assets/images/meals/peanuts-cucumber.webp",
        "imageAlt": "Boiled peanuts + Cucumber",
        "where": "Sundal stall / snack shop; selected mall snack counters",
        "order": "Boiled peanuts + cucumber from a fruit / vegetable shop.",
        "note": "Choose freshly boiled peanuts; wash the cucumber.",
        "allergens": "Peanuts."
      },
      {
        "id": "snacks-7",
        "pair": [
          "Coconut water",
          "Roasted chana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Roasted chana",
          "fibre": "Roasted chana",
          "carbs": "Chana, coconut water",
          "other": "Potassium: coconut water"
        },
        "veg": true,
        "image": "assets/images/meals/coconut-chana.webp",
        "imageAlt": "Coconut water + Roasted chana",
        "where": "Coconut stall + grocery shop; mall supermarket",
        "order": "Tender coconut + a small pack of roasted chana.",
        "note": "Buy the chana separately if the coconut stall does not sell it.",
        "allergens": "Coconut; check chana packaging."
      },
      {
        "id": "snacks-8",
        "pair": [
          "Boiled corn",
          "Milk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Milk; some protein from corn",
          "fibre": "Corn",
          "carbs": "Corn, milk",
          "other": "Calcium: milk"
        },
        "veg": true,
        "image": "assets/images/meals/corn-milk.webp",
        "imageAlt": "Boiled corn + Milk",
        "where": "Corn stall + dairy shop; mall corn kiosk + supermarket",
        "order": "Plain boiled corn + plain milk.",
        "note": "Ask for corn without butter; milk is a separate purchase.",
        "allergens": "Milk; butter if added."
      }
    ]
  },
  {
    "id": "dinner",
    "icon": "🌙",
    "title": "Dinner",
    "meals": [
      {
        "id": "dinner-0",
        "pair": [
          "Idli",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Lentils, sambar vegetables",
          "carbs": "Idli rice",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/idli-sambar.webp",
        "imageAlt": "Idli + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Idli set + a bowl of vegetable sambar.",
        "note": "Freshly steamed idli is usually available at tiffin outlets.",
        "allergens": "Coconut; recipe may include ghee."
      },
      {
        "id": "dinner-1",
        "pair": [
          "Egg dosa",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Egg, urad dal, sambar lentils",
          "fibre": "Lentils, sambar vegetables",
          "carbs": "Dosa rice",
          "other": "Choline: egg yolk"
        },
        "veg": false,
        "image": "assets/images/meals/egg-dosa.webp",
        "imageAlt": "Egg dosa + Sambar, with coconut chutney",
        "where": "Non-veg tiffin hotel; selected mall South Indian counters",
        "order": "Egg dosa + vegetable sambar.",
        "note": "Pure-vegetarian hotels do not serve egg dosa.",
        "allergens": "Egg, coconut."
      },
      {
        "id": "dinner-2",
        "pair": [
          "Rice",
          "Chicken kulambu"
        ],
        "side": "Carrot & beans poriyal",
        "nutrients": {
          "protein": "Chicken",
          "fibre": "Carrot, beans",
          "carbs": "Rice",
          "other": "Vitamin B12: chicken"
        },
        "veg": false,
        "image": "assets/images/meals/chicken-rice.webp",
        "imageAlt": "Rice + Chicken kulambu, with carrot & beans poriyal",
        "where": "Non-veg South Indian hotel / meals mess",
        "order": "Rice + chicken kulambu + vegetable poriyal.",
        "note": "Ask for curry rather than a generic chicken stir-fry.",
        "allergens": "Coconut or milk in some recipes."
      },
      {
        "id": "dinner-3",
        "pair": [
          "Vegetable upma",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Sambar lentils, peas",
          "fibre": "Carrot, beans, peas, lentils",
          "carbs": "Rava (wheat semolina)",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/upma-sambar.webp",
        "imageAlt": "Vegetable upma + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Vegetable rava upma + sambar.",
        "note": "Check evening availability; some outlets serve it only at breakfast.",
        "allergens": "Wheat, coconut; may contain cashews or ghee."
      },
      {
        "id": "dinner-4",
        "pair": [
          "Kuzhi paniyaram",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Lentils, onion, sambar vegetables",
          "carbs": "Rice in batter",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/paniyaram.webp",
        "imageAlt": "Kuzhi paniyaram + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Savoury kuzhi paniyaram + sambar + chutney.",
        "note": "Often sold at evening tiffin stalls; ask for sambar separately.",
        "allergens": "Coconut; batter may include milk/curd."
      },
      {
        "id": "dinner-5",
        "pair": [
          "Appam",
          "Kadala curry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Black chickpeas",
          "fibre": "Black chickpeas",
          "carbs": "Rice appam",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/appam-kadala.webp",
        "imageAlt": "Appam + Kadala curry",
        "where": "Kerala restaurant; selected South Indian food-court counters",
        "order": "Appam set + black-chickpea kadala curry.",
        "note": "Check the curry: vegetable stew is a different dish.",
        "allergens": "Coconut."
      },
      {
        "id": "dinner-6",
        "pair": [
          "Veg uttapam",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Carrot, tomato, onion, lentils",
          "carbs": "Rice in batter",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "assets/images/meals/uttapam.webp",
        "imageAlt": "Veg uttapam + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Vegetable uttapam + vegetable sambar.",
        "note": "Ask for vegetables rather than only onion topping.",
        "allergens": "Coconut; some outlets add ghee."
      },
      {
        "id": "dinner-7",
        "pair": [
          "Ragi dosa",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Ragi, lentils, vegetables",
          "carbs": "Ragi, rice in batter",
          "other": "Calcium: ragi"
        },
        "veg": true,
        "image": "assets/images/meals/ragi-dosa.webp",
        "imageAlt": "Ragi dosa + Sambar, with coconut chutney",
        "where": "South Indian hotel / tiffin shop; mall South Indian counter",
        "order": "Ragi dosa + vegetable sambar.",
        "note": "Availability varies; ask before ordering.",
        "allergens": "Coconut; some ragi batters contain wheat."
      },
      {
        "id": "dinner-8",
        "pair": [
          "Idiyappam",
          "Kadala curry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Black chickpeas",
          "fibre": "Black chickpeas",
          "carbs": "Rice idiyappam",
          "other": "Fats: coconut in curry"
        },
        "veg": true,
        "image": "assets/images/meals/idiyappam-kadala.webp",
        "imageAlt": "Idiyappam + Kadala curry",
        "where": "Kerala restaurant; selected South Indian food-court counters",
        "order": "Idiyappam set + black-chickpea curry.",
        "note": "Check evening availability at Kerala / South Indian restaurants.",
        "allergens": "Coconut."
      }
    ]
  }
];

const storePicks = [
  {
    "icon": "🍌",
    "title": "Banana & guava",
    "where": "Fruit section",
    "prep": "Ready to eat",
    "tip": "Wash fruit."
  },
  {
    "icon": "🍎",
    "title": "Apple & seasonal fruit",
    "where": "Fruit section",
    "prep": "Ready to eat",
    "tip": "Choose whole fruit."
  },
  {
    "icon": "🥛",
    "title": "Plain curd",
    "where": "Chilled dairy aisle",
    "prep": "Ready to eat",
    "tip": "Keep chilled."
  },
  {
    "icon": "🥛",
    "title": "Plain milk",
    "where": "Dairy aisle",
    "prep": "Ready to drink / heat",
    "tip": "Follow the pack instructions."
  },
  {
    "icon": "🧃",
    "title": "Buttermilk",
    "where": "Chilled dairy aisle",
    "prep": "Ready to drink",
    "tip": "Choose unsweetened."
  },
  {
    "icon": "🥥",
    "title": "Coconut water",
    "where": "Drinks aisle / coconut stall",
    "prep": "Ready to drink",
    "tip": "Choose no added sugar."
  },
  {
    "icon": "🫘",
    "title": "Roasted chana",
    "where": "Snacks / pulses aisle",
    "prep": "Ready to eat",
    "tip": "Choose plain or lightly salted."
  },
  {
    "icon": "🥜",
    "title": "Plain peanuts",
    "where": "Snacks / nuts aisle",
    "prep": "Ready to eat if roasted",
    "tip": "Raw peanuts need cooking."
  },
  {
    "icon": "🌰",
    "title": "Almonds & walnuts",
    "where": "Nuts aisle",
    "prep": "Ready to eat",
    "tip": "Choose plain nuts."
  },
  {
    "icon": "🥒",
    "title": "Cucumber & carrot",
    "where": "Vegetable section",
    "prep": "Wash before eating",
    "tip": "Buy whole or freshly prepared."
  },
  {
    "icon": "🌽",
    "title": "Boiled corn",
    "where": "Corn kiosk / ready-food counter",
    "prep": "Ready to eat",
    "tip": "Frozen or raw corn needs cooking."
  },
  {
    "icon": "🫘",
    "title": "Cooked sundal",
    "where": "Ready-food counter / snack stall",
    "prep": "Ready to eat",
    "tip": "Confirm it is cooked; stock varies."
  },
  {
    "icon": "🥚",
    "title": "Eggs",
    "where": "Egg / dairy section",
    "prep": "Cook first",
    "tip": "For ready-boiled eggs, ask a food counter."
  },
  {
    "icon": "🫓",
    "title": "Idli / dosa batter",
    "where": "Chilled batter aisle",
    "prep": "Cook first",
    "tip": "Keep chilled; steam or cook on a tawa."
  },
  {
    "icon": "🌾",
    "title": "Ragi dosa mix",
    "where": "Breakfast-mix aisle",
    "prep": "Cook first",
    "tip": "Check whether wheat is included."
  },
  {
    "icon": "🫘",
    "title": "Adai mix",
    "where": "Breakfast-mix aisle",
    "prep": "Cook first",
    "tip": "Follow the pack instructions."
  },
  {
    "icon": "🫘",
    "title": "Black chickpeas",
    "where": "Dry pulses aisle",
    "prep": "Soak & cook",
    "tip": "For kadala curry or sundal."
  },
  {
    "icon": "🌱",
    "title": "Whole green gram",
    "where": "Dry pulses aisle",
    "prep": "Soak & cook",
    "tip": "For cooked green gram sundal."
  },
  {
    "icon": "🫘",
    "title": "Toor & moong dal",
    "where": "Dry pulses aisle",
    "prep": "Cook first",
    "tip": "For sambar, paruppu and kootu."
  },
  {
    "icon": "🌾",
    "title": "Rice & millets",
    "where": "Grain aisle",
    "prep": "Cook first",
    "tip": "For rice meals or millet versions."
  },
  {
    "icon": "🥣",
    "title": "Puttu flour",
    "where": "Rice-flour / breakfast aisle",
    "prep": "Steam first",
    "tip": "Ask for rice puttu flour."
  },
  {
    "icon": "🍜",
    "title": "Idiyappam flour",
    "where": "Rice-flour / breakfast aisle",
    "prep": "Cook first",
    "tip": "Ready idiyappam, if sold, is a separate product."
  },
  {
    "icon": "🥣",
    "title": "Rava",
    "where": "Grain / flour aisle",
    "prep": "Cook first",
    "tip": "Wheat semolina for vegetable upma."
  },
  {
    "icon": "🥬",
    "title": "Spinach & vegetables",
    "where": "Vegetable section",
    "prep": "Cook for kootu / poriyal",
    "tip": "Buy a fresh mix of greens and vegetables."
  }
];

const buyingGuide = [
  {
    "icon": "🍽️",
    "title": "Hotels & restaurants",
    "items": "Idli, dosa, pongal, upma, sambar meals, rice varieties.",
    "tip": "Ask for sambar, kootu or sundal separately if missing. Egg, fish and chicken need a non-veg outlet."
  },
  {
    "icon": "🛒",
    "title": "Department stores",
    "items": "Curd, milk, buttermilk, fruit, roasted chana, peanuts.",
    "tip": "Ready to eat. Batter, dry pulses and flour still need cooking."
  },
  {
    "icon": "🏬",
    "title": "Shopping malls",
    "items": "South Indian food-court counters, corn kiosks and supermarkets.",
    "tip": "Combine a meal from the food court with fruit, curd or chana from the supermarket. Stock varies by outlet."
  }
];
const nutrientLabels = {protein: "Protein", fibre: "Fibre", carbs: "Carbs", other: "Other"};
const storageKey = "healthy-food-v4";
const dayMilliseconds = 86400000;
const dateFormatter = new Intl.DateTimeFormat("en-CA", {timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit"});

function indiaDay(now = new Date()) {
  const parts = Object.fromEntries(dateFormatter.formatToParts(now).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function hash(value) {
  let result = 2166136261;
  for (const char of value) result = Math.imul(result ^ char.charCodeAt(0), 16777619);
  return result >>> 0;
}

// Shuffle a complete cycle, then advance one place each Indian calendar day.
// Every eligible dish appears once per cycle; consecutive days never repeat it.
function dailyOrder(meals, key) {
  const ordered = [...meals];
  let seed = hash(key);
  for (let i = ordered.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
  }
  return ordered;
}

function createPlan(day, diet) {
  const ordinal = Math.floor(Date.parse(`${day}T00:00:00Z`) / dayMilliseconds);
  return Object.fromEntries(mealGroups.map(group => {
    const eligible = group.meals.filter(meal => diet !== "veg" || meal.veg);
    const ordered = dailyOrder(eligible, `${group.id}:${diet}`);
    return [group.id, ordered[ordinal % ordered.length].id];
  }));
}

function randomIndex(length) {
  if (globalThis.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    globalThis.crypto.getRandomValues(value);
    return value[0] % length;
  }
  return Math.floor(Math.random() * length);
}

function shufflePlan(current, diet) {
  return Object.fromEntries(mealGroups.map(group => {
    const choices = group.meals.filter(meal => (diet !== "veg" || meal.veg) && meal.id !== current[group.id]);
    return [group.id, choices[randomIndex(choices.length)].id];
  }));
}

function validPlan(plan, diet) {
  return plan && mealGroups.every(group => group.meals.some(meal => meal.id === plan[group.id] && (diet !== "veg" || meal.veg)));
}

function readSaved() {
  try { return JSON.parse(localStorage.getItem(storageKey)); } catch { return null; }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[char]));
}

function nutritionHtml(meal) {
  const fields = [["Order", meal.order], ["Buy", meal.where], ["Tip", meal.note],
    ...Object.entries(nutrientLabels).map(([key, label]) => [label, meal.nutrients[key]]),
    ["Ingredients to check", meal.allergens]];
  return `<details class="nutrition"><summary>Details</summary><dl>${fields.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl></details>`;
}

function cardHtml(meal, group, daily = false) {
  return `<article class="meal-card" data-meal-id="${meal.id}">
    ${daily ? `<div class="meal-label">${group.icon} ${group.title}</div>` : ""}
    <div class="meal-image-wrap">
      <span class="image-fallback" aria-hidden="true">${group.icon}</span>
      <img src="${escapeHtml(meal.image)}" alt="${escapeHtml(meal.imageAlt)}" width="768" height="512" decoding="async" loading="${daily ? 'eager' : 'lazy'}" />
    </div>
    <div class="meal-content">
      <h3 class="food-pair"><span>${escapeHtml(meal.pair[0])}</span><span class="pair-second">${escapeHtml(meal.pair[1])}</span></h3>
      <p class="side${meal.side ? "" : " side-empty"}"${meal.side ? "" : ' aria-hidden="true"'}>${escapeHtml(meal.side) || "&nbsp;"}</p>
      <div class="nutrient-tags"><span>Protein</span><span>Fibre</span></div>
      ${nutritionHtml(meal)}
    </div>
  </article>`;
}

const saved = readSaved();
let diet = saved?.diet === "veg" ? "veg" : "all";
let activeDay = indiaDay();
let plans = saved?.day === activeDay && saved.plans && typeof saved.plans === "object" ? saved.plans : {};
let currentPlan;

function saveState() {
  try { localStorage.setItem(storageKey, JSON.stringify({day: activeDay, diet, plans})); } catch { /* Works without browser storage. */ }
}

function restorePlan() {
  if (!validPlan(plans[diet], diet)) plans[diet] = createPlan(activeDay, diet);
  currentPlan = plans[diet];
}

function renderDaily(message = "") {
  const mainGroups = ["breakfast", "lunch", "dinner"].map(id => mealGroups.find(group => group.id === id));
  document.getElementById("dailyPlan").innerHTML = mainGroups.map(group => cardHtml(group.meals.find(meal => meal.id === currentPlan[group.id]), group, true)).join("");
  const snackGroup = mealGroups.find(group => group.id === "snacks");
  const snack = snackGroup.meals.find(meal => meal.id === currentPlan.snacks);
  document.getElementById("dailySnack").innerHTML = `<strong>🍎 Snacks</strong><span class="snack-food">${escapeHtml(snack.pair.join(' + '))}${snack.side ? ` + ${escapeHtml(snack.side)}` : ''}</span>${nutritionHtml(snack)}`;
  const date = new Date(`${activeDay}T12:00:00+05:30`);
  const time = document.getElementById("todayDate");
  time.dateTime = activeDay;
  time.textContent = new Intl.DateTimeFormat("en-IN", {timeZone:"Asia/Kolkata", day:"numeric", month:"short", weekday:"short"}).format(date);
  document.getElementById("planStatus").textContent = message;
}

function renderCatalogue() {
  document.getElementById("mealSections").innerHTML = ["breakfast", "lunch", "dinner", "snacks"].map(id => {
    const group = mealGroups.find(group => group.id === id);
    const meals = group.meals.filter(meal => diet !== "veg" || meal.veg);
    return `<section class="section meal-section" id="${group.id}" aria-labelledby="${group.id}-heading">
      <div class="section-heading"><h2 id="${group.id}-heading">${group.icon} ${group.title}</h2><span class="option-count">${meals.length} options</span></div>
      <div class="meal-grid">${meals.map(meal => cardHtml(meal, group)).join("")}</div>
    </section>`;
  }).join("");
}

function refreshDay() {
  const day = indiaDay();
  if (day === activeDay) return false;
  activeDay = day;
  plans = {};
  restorePlan();
  saveState();
  renderDaily("Today's menu is ready.");
  return true;
}

restorePlan();
document.querySelector(`input[name="diet"][value="${diet}"]`).checked = true;
renderDaily();
renderCatalogue();
saveState();
function renderStock() {
  document.getElementById("stockGrid").innerHTML = storePicks.filter(item => diet !== "veg" || item.title !== "Eggs").map(item => `<article><span aria-hidden="true">${item.icon}</span><h3>${escapeHtml(item.title)}</h3><p class="prep">${escapeHtml(item.prep)}</p><details><summary>Details</summary><p>${escapeHtml(item.where)}</p><p>${escapeHtml(item.tip)}</p></details></article>`).join("");
}
renderStock();
document.getElementById("buyingGuide").innerHTML = buyingGuide.map(item => `<article><span aria-hidden="true">${item.icon}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.items)}</p><p>${escapeHtml(item.tip)}</p></article>`).join("");

// Keep a usable illustrated placeholder if a remote food image cannot load.
document.addEventListener("error", event => {
  if (event.target instanceof HTMLImageElement) event.target.hidden = true;
}, true);

document.getElementById("shuffleButton").addEventListener("click", () => {
  refreshDay();
  currentPlan = shufflePlan(currentPlan, diet);
  plans[diet] = currentPlan;
  saveState();
  renderDaily("Menu shuffled.");
});

document.querySelectorAll('input[name="diet"]').forEach(input => input.addEventListener("change", () => {
  refreshDay();
  diet = input.value;
  restorePlan();
  saveState();
  renderDaily(diet === "veg" ? "Vegetarian menu selected." : "All meals shown.");
  renderCatalogue();
  renderStock();
}));

setInterval(refreshDay, 30000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshDay(); });
window.addEventListener("pageshow", refreshDay);
