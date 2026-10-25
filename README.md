# Healthy Food

A minimal English menu for South Indian restaurant meals and easy store-bought snacks.

- 36 choices: 9 breakfast, 9 lunch, 9 dinner and 9 snacks.
- Three symmetrical columns with aligned cards and centred partial rows under the vegetarian filter.
- Expand **Details** for the example order, buying options, availability, protein, fibre, carbs, other nutrient sources and ingredients to check.
- **Where to buy** covers South Indian hotels, restaurants, department stores, supermarkets and mall food courts.
- **Store list** has 24 grocery items with aisle and preparation information. Ready-to-eat food is distinguished from batter, flour and dry pulses that require cooking.
- Local AI-generated photos show the named meal pairs. A repeated meal uses the same photo at breakfast and dinner.
- Daily picks change at midnight in India. Shuffle, vegetarian filtering and saved selections work without a server.

Open `index.html` or serve the folder with any static web server. Live: https://vignesh-s-github.github.io/healthy-food/

Run `node --test tests/menu.test.cjs`.

## Content and image audit

Nutrient descriptions identify food sources; they are not calculated nutrient totals or individual serving prescriptions. Availability varies by outlet. Sides may need to be bought separately. Ingredient notes are examples, not an exhaustive allergy guarantee.

Reference examples:

- [South Indian restaurant menu](https://www.sangeethaveg.com/post/sangeetha-veg-restaurant-delivers-chennai-s-most-reliable-veg-dining-every-day)
- [Supermarket breakfast mixes and batter](https://www.bigbasket.com/pb/batter-box/breakfast-snack-mixes/)
- [ICMR–NIN Dietary Guidelines 2024](https://www.nin.res.in/dietaryguidelines2024.html)

The dish photos in `assets/images/meals/` were generated with the built-in image tool and saved as optimised WebP assets. Exact image prompts are recorded in `assets/images/meals/prompts.json`. Photos are illustrative, not photographs of named restaurants or measured portions.
