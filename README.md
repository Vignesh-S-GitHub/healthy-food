# Healthy Food

A minimal English menu for South Indian restaurant meals and easy store-bought snacks.

- 108 choices: 27 breakfast, 27 lunch, 27 dinner and 27 snacks.
- Three symmetrical columns with aligned cards and centred partial rows under the vegetarian filter.
- Expand **Details** for the example order, buying options, availability, protein, fibre, carbs, other nutrient sources and ingredients to check.
- **Where to buy** covers South Indian hotels, restaurants, department stores, supermarkets and mall food courts, office canteens, outside stalls and quick-commerce apps.
- **Store list** has 24 grocery items with aisle and preparation information. Ready-to-eat food is distinguished from batter, flour and dry pulses that require cooking.
- All 108 choices have local AI-generated photos showing the named meal pairs. Identical pairs reuse the same photo across meal times. Images are optimised WebP files and load as you scroll.
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
