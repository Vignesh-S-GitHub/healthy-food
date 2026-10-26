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
      },
      {
        "id": "breakfast-9",
        "pair": [
          "Chapati",
          "Vegetable kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Whole wheat, peas",
          "fibre": "Whole wheat, vegetables",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-9.webp",
        "imageAlt": "Chapati + Vegetable kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chapati + Vegetable kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; coconut"
      },
      {
        "id": "breakfast-10",
        "pair": [
          "Poori",
          "Potato masala"
        ],
        "side": "",
        "nutrients": {
          "protein": "Wheat; peas if included",
          "fibre": "Wheat, potato, peas",
          "carbs": "Wheat, potato",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-10.webp",
        "imageAlt": "Poori + Potato masala",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Poori + Potato masala; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; frying oil"
      },
      {
        "id": "breakfast-11",
        "pair": [
          "Masala dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, sambar lentils",
          "fibre": "Potato, lentils, vegetables",
          "carbs": "Rice, potato",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-11.webp",
        "imageAlt": "Masala dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Masala dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "breakfast-12",
        "pair": [
          "Rava dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Sambar lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Rava, rice flour",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-12.webp",
        "imageAlt": "Rava dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rava dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; coconut"
      },
      {
        "id": "breakfast-13",
        "pair": [
          "Onion dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Onion, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-13.webp",
        "imageAlt": "Onion dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Onion dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "breakfast-14",
        "pair": [
          "Podi dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, urad dal",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-14.webp",
        "imageAlt": "Podi dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Podi dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Sesame in some podi"
      },
      {
        "id": "breakfast-15",
        "pair": [
          "Ghee roast",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-15.webp",
        "imageAlt": "Ghee roast + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Ghee roast + Sambar; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk/ghee; coconut"
      },
      {
        "id": "breakfast-16",
        "pair": [
          "Rava idli",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Curd, lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Rava",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-16.webp",
        "imageAlt": "Rava idli + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rava idli + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat, milk, cashews"
      },
      {
        "id": "breakfast-17",
        "pair": [
          "Rava kichadi",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peas, lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Rava",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-17.webp",
        "imageAlt": "Rava kichadi + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rava kichadi + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat, cashews"
      },
      {
        "id": "breakfast-18",
        "pair": [
          "Semiya upma",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, peas",
          "fibre": "Vegetables, lentils",
          "carbs": "Wheat vermicelli",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-18.webp",
        "imageAlt": "Semiya upma + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Semiya upma + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat"
      },
      {
        "id": "breakfast-19",
        "pair": [
          "Aval upma",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peanuts, curd",
          "fibre": "Peanuts, vegetables",
          "carbs": "Flattened rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-19.webp",
        "imageAlt": "Aval upma + Curd",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Aval upma + Curd; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, peanuts"
      },
      {
        "id": "breakfast-20",
        "pair": [
          "Pesarattu",
          "Ginger chutney"
        ],
        "side": "",
        "nutrients": {
          "protein": "Green gram",
          "fibre": "Whole green gram",
          "carbs": "Green gram, rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-20.webp",
        "imageAlt": "Pesarattu + Ginger chutney",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Pesarattu + Ginger chutney; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Check chutney ingredients"
      },
      {
        "id": "breakfast-21",
        "pair": [
          "Set dosa",
          "Vegetable kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, peas",
          "fibre": "Vegetables, peas",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-21.webp",
        "imageAlt": "Set dosa + Vegetable kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Set dosa + Vegetable kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "breakfast-22",
        "pair": [
          "Kal dosa",
          "Vadacurry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, chana dal",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-22.webp",
        "imageAlt": "Kal dosa + Vadacurry",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Kal dosa + Vadacurry; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "breakfast-23",
        "pair": [
          "Wheat dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Wheat, lentils",
          "fibre": "Whole wheat, vegetables",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-23.webp",
        "imageAlt": "Wheat dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Wheat dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat"
      },
      {
        "id": "breakfast-24",
        "pair": [
          "Onion uttapam",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Onion, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-24.webp",
        "imageAlt": "Onion uttapam + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Onion uttapam + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "breakfast-25",
        "pair": [
          "Ven pongal",
          "Medhu vada"
        ],
        "side": "",
        "nutrients": {
          "protein": "Moong dal, urad dal",
          "fibre": "Lentils",
          "carbs": "Rice, lentils",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-25.webp",
        "imageAlt": "Ven pongal + Medhu vada",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Ven pongal + Medhu vada; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Cashews, ghee; fried vada"
      },
      {
        "id": "breakfast-26",
        "pair": [
          "Idli",
          "Vadacurry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, chana dal",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-26.webp",
        "imageAlt": "Idli + Vadacurry",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Idli + Vadacurry; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
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
      },
      {
        "id": "lunch-9",
        "pair": [
          "Chapati",
          "Dal"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, wheat",
          "fibre": "Whole wheat, lentils",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-9.webp",
        "imageAlt": "Chapati + Dal",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chapati + Dal; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat"
      },
      {
        "id": "lunch-10",
        "pair": [
          "Chapati",
          "Channa masala"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chickpeas, wheat",
          "fibre": "Chickpeas, whole wheat",
          "carbs": "Wheat, chickpeas",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-10.webp",
        "imageAlt": "Chapati + Channa masala",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chapati + Channa masala; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat"
      },
      {
        "id": "lunch-11",
        "pair": [
          "Vegetable biryani",
          "Curd raita"
        ],
        "side": "",
        "nutrients": {
          "protein": "Curd, peas",
          "fibre": "Vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-11.webp",
        "imageAlt": "Vegetable biryani + Curd raita",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Vegetable biryani + Curd raita; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, cashews in some recipes"
      },
      {
        "id": "lunch-12",
        "pair": [
          "Chicken biryani",
          "Curd raita"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chicken, curd",
          "fibre": "Onion, vegetables in raita",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-12.webp",
        "imageAlt": "Chicken biryani + Curd raita",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chicken biryani + Curd raita; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; non-veg"
      },
      {
        "id": "lunch-13",
        "pair": [
          "Egg biryani",
          "Curd raita"
        ],
        "side": "",
        "nutrients": {
          "protein": "Egg, curd",
          "fibre": "Vegetables in raita",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-13.webp",
        "imageAlt": "Egg biryani + Curd raita",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Egg biryani + Curd raita; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Egg, milk; non-veg"
      },
      {
        "id": "lunch-14",
        "pair": [
          "Mutton biryani",
          "Curd raita"
        ],
        "side": "",
        "nutrients": {
          "protein": "Mutton, curd",
          "fibre": "Vegetables in raita",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-14.webp",
        "imageAlt": "Mutton biryani + Curd raita",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Mutton biryani + Curd raita; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; non-veg"
      },
      {
        "id": "lunch-15",
        "pair": [
          "Coconut rice",
          "Green gram sundal"
        ],
        "side": "",
        "nutrients": {
          "protein": "Green gram",
          "fibre": "Green gram, coconut",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-15.webp",
        "imageAlt": "Coconut rice + Green gram sundal",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Coconut rice + Green gram sundal; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "lunch-16",
        "pair": [
          "Bisibele bath",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, curd",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-16.webp",
        "imageAlt": "Bisibele bath + Curd",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Bisibele bath + Curd; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, peanuts in some recipes"
      },
      {
        "id": "lunch-17",
        "pair": [
          "Millet meals",
          "Sambar & kootu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Millets, vegetables, lentils",
          "carbs": "Millets",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-17.webp",
        "imageAlt": "Millet meals + Sambar & kootu",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Millet meals + Sambar & kootu; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "lunch-18",
        "pair": [
          "Keerai rice",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils if included, curd",
          "fibre": "Spinach",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-18.webp",
        "imageAlt": "Keerai rice + Curd",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Keerai rice + Curd; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "lunch-19",
        "pair": [
          "Kootanchoru",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, curd",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-19.webp",
        "imageAlt": "Kootanchoru + Curd",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Kootanchoru + Curd; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "lunch-20",
        "pair": [
          "Vegetable pulao",
          "Dal"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, peas",
          "fibre": "Vegetables, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-20.webp",
        "imageAlt": "Vegetable pulao + Dal",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Vegetable pulao + Dal; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Check ghee and nuts"
      },
      {
        "id": "lunch-21",
        "pair": [
          "Rice",
          "Egg kulambu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Egg",
          "fibre": "Vegetables in gravy",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-21.webp",
        "imageAlt": "Rice + Egg kulambu",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Egg kulambu; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Egg; non-veg"
      },
      {
        "id": "lunch-22",
        "pair": [
          "Rice",
          "Kara kulambu & kootu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Kootu lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-22.webp",
        "imageAlt": "Rice + Kara kulambu & kootu",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Kara kulambu & kootu; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "lunch-23",
        "pair": [
          "Rice",
          "Mor kulambu & paruppu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Curd, lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-23.webp",
        "imageAlt": "Rice + Mor kulambu & paruppu",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Mor kulambu & paruppu; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "lunch-24",
        "pair": [
          "Rice",
          "Meen fry & rasam"
        ],
        "side": "",
        "nutrients": {
          "protein": "Fish",
          "fibre": "Ask for vegetable poriyal",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-24.webp",
        "imageAlt": "Rice + Meen fry & rasam",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Meen fry & rasam; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Fish; non-veg"
      },
      {
        "id": "lunch-25",
        "pair": [
          "Rice",
          "Chicken pepper fry"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chicken",
          "fibre": "Ask for vegetable poriyal",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-lunch-25.webp",
        "imageAlt": "Rice + Chicken pepper fry",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Chicken pepper fry; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Non-veg; recipe varies"
      },
      {
        "id": "lunch-26",
        "pair": [
          "Rice",
          "Mushroom kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Mushrooms, peas if included",
          "fibre": "Mushrooms, vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-lunch-26.webp",
        "imageAlt": "Rice + Mushroom kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Rice + Mushroom kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut, cashews in some recipes"
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
      },
      {
        "id": "snacks-9",
        "pair": [
          "Medhu vada",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Lentils",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-9.webp",
        "imageAlt": "Medhu vada + Sambar",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Medhu vada + Sambar; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Fried; coconut"
      },
      {
        "id": "snacks-10",
        "pair": [
          "Masala vada",
          "Buttermilk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chana dal, curd",
          "fibre": "Chana dal",
          "carbs": "Lentils",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-10.webp",
        "imageAlt": "Masala vada + Buttermilk",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Masala vada + Buttermilk; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; fried"
      },
      {
        "id": "snacks-11",
        "pair": [
          "Sambar vada",
          "Coconut chutney"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Lentils",
          "carbs": "Lentils",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-11.webp",
        "imageAlt": "Sambar vada + Coconut chutney",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Sambar vada + Coconut chutney; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut; fried"
      },
      {
        "id": "snacks-12",
        "pair": [
          "Curd vada",
          "Fruit"
        ],
        "side": "",
        "nutrients": {
          "protein": "Curd, urad dal",
          "fibre": "Whole fruit",
          "carbs": "Lentils, fruit",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-12.webp",
        "imageAlt": "Curd vada + Fruit",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Curd vada + Fruit; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; fried vada"
      },
      {
        "id": "snacks-13",
        "pair": [
          "Bajji",
          "Roasted chana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chana dal flour, roasted chana",
          "fibre": "Chana, vegetable filling",
          "carbs": "Gram flour, vegetable",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-13.webp",
        "imageAlt": "Bajji + Roasted chana",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Bajji + Roasted chana; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Fried; may contain wheat"
      },
      {
        "id": "snacks-14",
        "pair": [
          "Bonda",
          "Buttermilk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Gram flour, curd",
          "fibre": "Potato, gram flour",
          "carbs": "Potato, flour",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-14.webp",
        "imageAlt": "Bonda + Buttermilk",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Bonda + Buttermilk; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; fried"
      },
      {
        "id": "snacks-15",
        "pair": [
          "Onion pakoda",
          "Buttermilk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Gram flour, curd",
          "fibre": "Onion, gram flour",
          "carbs": "Gram flour",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-15.webp",
        "imageAlt": "Onion pakoda + Buttermilk",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Onion pakoda + Buttermilk; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk; fried"
      },
      {
        "id": "snacks-16",
        "pair": [
          "Boiled sweet potato",
          "Milk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Milk",
          "fibre": "Sweet potato",
          "carbs": "Sweet potato",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-16.webp",
        "imageAlt": "Boiled sweet potato + Milk",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Boiled sweet potato + Milk; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "snacks-17",
        "pair": [
          "Boiled tapioca",
          "Chickpea sundal"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Chickpeas, tapioca",
          "carbs": "Tapioca",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-17.webp",
        "imageAlt": "Boiled tapioca + Chickpea sundal",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Boiled tapioca + Chickpea sundal; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "snacks-18",
        "pair": [
          "Kara paniyaram",
          "Chutney"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal",
          "fibre": "Onion, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-18.webp",
        "imageAlt": "Kara paniyaram + Chutney",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Kara paniyaram + Chutney; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Check chutney ingredients"
      },
      {
        "id": "snacks-19",
        "pair": [
          "Egg omelette",
          "Whole-wheat bread"
        ],
        "side": "",
        "nutrients": {
          "protein": "Egg, wheat",
          "fibre": "Whole-wheat bread",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-snacks-19.webp",
        "imageAlt": "Egg omelette + Whole-wheat bread",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Egg omelette + Whole-wheat bread; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Egg, wheat; non-veg"
      },
      {
        "id": "snacks-20",
        "pair": [
          "Boiled eggs",
          "Banana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Egg",
          "fibre": "Banana",
          "carbs": "Banana",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-snacks-20.webp",
        "imageAlt": "Boiled eggs + Banana",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Boiled eggs + Banana; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Egg; non-veg"
      },
      {
        "id": "snacks-21",
        "pair": [
          "Cooked sprouts",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Green gram, curd",
          "fibre": "Green gram",
          "carbs": "Green gram",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-21.webp",
        "imageAlt": "Cooked sprouts + Curd",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Cooked sprouts + Curd; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "snacks-22",
        "pair": [
          "Vegetable sandwich",
          "Milk"
        ],
        "side": "",
        "nutrients": {
          "protein": "Milk, wheat",
          "fibre": "Vegetables, whole-wheat bread",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-22.webp",
        "imageAlt": "Vegetable sandwich + Milk",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Vegetable sandwich + Milk; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, wheat"
      },
      {
        "id": "snacks-23",
        "pair": [
          "Paneer sandwich",
          "Fruit"
        ],
        "side": "",
        "nutrients": {
          "protein": "Paneer, wheat",
          "fibre": "Fruit, whole-wheat bread",
          "carbs": "Wheat, fruit",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-23.webp",
        "imageAlt": "Paneer sandwich + Fruit",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Paneer sandwich + Fruit; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, wheat"
      },
      {
        "id": "snacks-24",
        "pair": [
          "Idli takeaway",
          "Curd cup"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, curd",
          "fibre": "Limited fibre; add fruit",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-24.webp",
        "imageAlt": "Idli takeaway + Curd cup",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Idli takeaway + Curd cup; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk"
      },
      {
        "id": "snacks-25",
        "pair": [
          "Sathu maavu drink",
          "Banana"
        ],
        "side": "",
        "nutrients": {
          "protein": "Pulses in mix, milk if used",
          "fibre": "Whole grains, banana",
          "carbs": "Grains, banana",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-25.webp",
        "imageAlt": "Sathu maavu drink + Banana",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Sathu maavu drink + Banana; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Check wheat, nuts and milk"
      },
      {
        "id": "snacks-26",
        "pair": [
          "Peanut chikki",
          "Guava"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peanuts",
          "fibre": "Peanuts, guava",
          "carbs": "Jaggery, guava",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-snacks-26.webp",
        "imageAlt": "Peanut chikki + Guava",
        "where": "Office canteen / outside snack stall; store or quick-commerce ingredients (check preparation)",
        "order": "Peanut chikki + Guava; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Peanuts; contains added sugar"
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
      },
      {
        "id": "dinner-9",
        "pair": [
          "Chapati",
          "Vegetable kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Whole wheat, peas",
          "fibre": "Whole wheat, vegetables",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-9.webp",
        "imageAlt": "Chapati + Vegetable kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chapati + Vegetable kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat, coconut"
      },
      {
        "id": "dinner-10",
        "pair": [
          "Poori",
          "Potato masala"
        ],
        "side": "",
        "nutrients": {
          "protein": "Wheat; peas if included",
          "fibre": "Wheat, potato",
          "carbs": "Wheat, potato",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-10.webp",
        "imageAlt": "Poori + Potato masala",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Poori + Potato masala; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; frying oil"
      },
      {
        "id": "dinner-11",
        "pair": [
          "Parotta",
          "Vegetable salna"
        ],
        "side": "",
        "nutrients": {
          "protein": "Wheat; peas if included",
          "fibre": "Vegetables in salna",
          "carbs": "Refined wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-11.webp",
        "imageAlt": "Parotta + Vegetable salna",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Parotta + Vegetable salna; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; may contain egg or milk"
      },
      {
        "id": "dinner-12",
        "pair": [
          "Wheat parotta",
          "Channa masala"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chickpeas, wheat",
          "fibre": "Whole wheat, chickpeas",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-12.webp",
        "imageAlt": "Wheat parotta + Channa masala",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Wheat parotta + Channa masala; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; check flour blend"
      },
      {
        "id": "dinner-13",
        "pair": [
          "Veg kothu parotta",
          "Curd raita"
        ],
        "side": "",
        "nutrients": {
          "protein": "Wheat, curd",
          "fibre": "Chopped vegetables",
          "carbs": "Refined wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-13.webp",
        "imageAlt": "Veg kothu parotta + Curd raita",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Veg kothu parotta + Curd raita; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat, milk; confirm no egg"
      },
      {
        "id": "dinner-14",
        "pair": [
          "Egg kothu parotta",
          "Salna"
        ],
        "side": "",
        "nutrients": {
          "protein": "Egg",
          "fibre": "Onion, vegetables",
          "carbs": "Refined wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-dinner-14.webp",
        "imageAlt": "Egg kothu parotta + Salna",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Egg kothu parotta + Salna; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Egg, wheat; non-veg"
      },
      {
        "id": "dinner-15",
        "pair": [
          "Chicken kothu parotta",
          "Salna"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chicken, egg if included",
          "fibre": "Onion, vegetables",
          "carbs": "Refined wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-dinner-15.webp",
        "imageAlt": "Chicken kothu parotta + Salna",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chicken kothu parotta + Salna; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat, egg; non-veg"
      },
      {
        "id": "dinner-16",
        "pair": [
          "Appam",
          "Vegetable stew"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peas if included",
          "fibre": "Vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-16.webp",
        "imageAlt": "Appam + Vegetable stew",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Appam + Vegetable stew; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut milk"
      },
      {
        "id": "dinner-17",
        "pair": [
          "Idiyappam",
          "Vegetable kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Peas if included",
          "fibre": "Vegetables",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-17.webp",
        "imageAlt": "Idiyappam + Vegetable kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Idiyappam + Vegetable kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut, cashews in some recipes"
      },
      {
        "id": "dinner-18",
        "pair": [
          "Kal dosa",
          "Chicken kulambu"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chicken, urad dal",
          "fibre": "Ask for vegetable side",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": false,
        "image": "assets/images/meals/added-dinner-18.webp",
        "imageAlt": "Kal dosa + Chicken kulambu",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Kal dosa + Chicken kulambu; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Non-veg; recipe varies"
      },
      {
        "id": "dinner-19",
        "pair": [
          "Adai",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Mixed lentils",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice, lentils",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-19.webp",
        "imageAlt": "Adai + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Adai + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "dinner-20",
        "pair": [
          "Masala dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Potato, lentils",
          "carbs": "Rice, potato",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-breakfast-11.webp",
        "imageAlt": "Masala dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Masala dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "dinner-21",
        "pair": [
          "Onion rava dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Onion, lentils",
          "carbs": "Rava, rice flour",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-21.webp",
        "imageAlt": "Onion rava dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Onion rava dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat"
      },
      {
        "id": "dinner-22",
        "pair": [
          "Chapati",
          "Paneer kurma"
        ],
        "side": "",
        "nutrients": {
          "protein": "Paneer, wheat",
          "fibre": "Whole wheat, vegetables",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-22.webp",
        "imageAlt": "Chapati + Paneer kurma",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Chapati + Paneer kurma; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Milk, wheat, cashews"
      },
      {
        "id": "dinner-23",
        "pair": [
          "Roti",
          "Dal tadka"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, wheat",
          "fibre": "Lentils, whole wheat",
          "carbs": "Wheat",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-23.webp",
        "imageAlt": "Roti + Dal tadka",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Roti + Dal tadka; ask which sides are included.",
        "note": "Rich / fried choice; included for variety. Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Wheat; ghee"
      },
      {
        "id": "dinner-24",
        "pair": [
          "Veg sevai",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, peas",
          "fibre": "Vegetables, lentils",
          "carbs": "Rice sevai",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-24.webp",
        "imageAlt": "Veg sevai + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Veg sevai + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
      },
      {
        "id": "dinner-25",
        "pair": [
          "Lemon sevai",
          "Chickpea sundal"
        ],
        "side": "",
        "nutrients": {
          "protein": "Chickpeas, peanuts",
          "fibre": "Chickpeas",
          "carbs": "Rice sevai",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-25.webp",
        "imageAlt": "Lemon sevai + Chickpea sundal",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Lemon sevai + Chickpea sundal; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Peanuts, coconut"
      },
      {
        "id": "dinner-26",
        "pair": [
          "Tomato dosa",
          "Sambar"
        ],
        "side": "",
        "nutrients": {
          "protein": "Urad dal, lentils",
          "fibre": "Tomato, lentils",
          "carbs": "Rice",
          "other": "Cooking oil / ghee and micronutrients vary with the recipe."
        },
        "veg": true,
        "image": "assets/images/meals/added-dinner-26.webp",
        "imageAlt": "Tomato dosa + Sambar",
        "where": "Hotel / restaurant; office canteen (menu varies); outside food stall or mall counter",
        "order": "Tomato dosa + Sambar; ask which sides are included.",
        "note": "Availability and meal times vary by outlet. Packaged versions may require heating or cooking.",
        "allergens": "Coconut"
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
  },
  {
    "icon": "🏢",
    "title": "Office canteens",
    "items": "Chapati, poori, tiffin sets, rice meals, variety rice, snacks and dairy.",
    "tip": "Check the daily counter menu and serving times; sides and non-veg choices vary."
  },
  {
    "icon": "🥡",
    "title": "Outside stalls",
    "items": "Dosa, idli, parotta, sundal, boiled peanuts, corn, fruit and evening snacks.",
    "tip": "Ask what is freshly available and whether a companion food needs a separate purchase."
  },
  {
    "icon": "🛵",
    "title": "Quick commerce",
    "items": "Curd, milk, fruit, eggs, chana, nuts, bread, batter, frozen chapati / parotta and instant mixes.",
    "tip": "Search Blinkit, Zepto, Swiggy Instamart or a local grocery app. Stock depends on pincode. Check Ready to eat versus Ready to cook on the pack."
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
    ${meal.image ? `<div class="meal-image-wrap">
      <span class="image-fallback" aria-hidden="true">${group.icon}</span>
      <img src="${escapeHtml(meal.image)}" alt="${escapeHtml(meal.imageAlt)}" width="768" height="512" decoding="async" loading="${daily ? 'eager' : 'lazy'}" />
    </div>` : `<div class="meal-text-tile"><span aria-hidden="true">${group.icon}</span><small>Menu option</small></div>`}
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
