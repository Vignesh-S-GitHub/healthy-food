"use strict";

// Nutrient sources are qualitative, not calculated nutrition totals.
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
          "Boiled eggs"
        ],
        "side": "Vegetable sambar",
        "nutrients": {
          "protein": "Eggs, lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Idli",
          "other": "Fats: egg yolk"
        },
        "veg": false,
        "image": "https://www.arise-app.com/images/dishes/en/idli-sambar-with-boiled-eggs-xdkpr4.webp"
      },
      {
        "id": "breakfast-1",
        "pair": [
          "Dosa",
          "Sambar"
        ],
        "side": "Carrot, coconut chutney",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Carrot, vegetables",
          "carbs": "Dosa",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/29/7d4750d1-32e9-4cc8-9192-643a41a87824_7e3a3574-16ad-4152-8659-651e6b13eb14.jpg_compressed"
      },
      {
        "id": "breakfast-2",
        "pair": [
          "Oats",
          "Milk"
        ],
        "side": "Banana, almonds",
        "nutrients": {
          "protein": "Milk, oats, almonds",
          "fibre": "Oats, banana",
          "carbs": "Oats, banana",
          "other": "Calcium: milk · Fats: almonds"
        },
        "veg": true,
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/mandelmilch.jpg"
      },
      {
        "id": "breakfast-3",
        "pair": [
          "Ven pongal",
          "Sambar"
        ],
        "side": "Vegetables, coconut chutney",
        "nutrients": {
          "protein": "Moong dal, lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Rice",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "https://media.assettype.com/deccanherald%2F2025-01-14%2Fo6y3h8uc%2FVen_Pongal.jpg?rect=0%2C0%2C2359%2C3145"
      },
      {
        "id": "breakfast-4",
        "pair": [
          "Poha",
          "Chickpeas"
        ],
        "side": "Peanuts, carrot, lemon",
        "nutrients": {
          "protein": "Chickpeas, peanuts",
          "fibre": "Chickpeas, carrot",
          "carbs": "Poha",
          "other": "Fats: peanuts"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/8259a19f-a269-4113-a17c-646c8882163c_955838.jpg"
      },
      {
        "id": "breakfast-5",
        "pair": [
          "Adai",
          "Sambar"
        ],
        "side": "Carrot, coconut chutney",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Lentils, carrot",
          "carbs": "Rice, lentils",
          "other": "Iron: lentils"
        },
        "veg": true,
        "image": "https://www.vishalam.com/cdn/shop/files/instant-adai-dosa-readymix-1463074_1024x.jpg?v=1774389431"
      },
      {
        "id": "breakfast-6",
        "pair": [
          "Ragi dosa",
          "Sambar"
        ],
        "side": "Vegetables, chutney",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Ragi, vegetables",
          "carbs": "Ragi dosa",
          "other": "Calcium: ragi"
        },
        "veg": true,
        "image": "https://i0.wp.com/naturallynidhi.com/wp-content/uploads/2021/07/Ragi-Dosa-Cover.jpg?fit=840%2C560&ssl=1"
      },
      {
        "id": "breakfast-7",
        "pair": [
          "Idiyappam",
          "Chickpea curry"
        ],
        "side": "Carrot, beans",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Chickpeas, vegetables",
          "carbs": "Idiyappam",
          "other": "Iron: chickpeas"
        },
        "veg": true,
        "image": "https://img-global.cpcdn.com/recipes/3e90d11cc4ef2940/680x781f0.5_0.5_1.0q80/idiyappam-with-vegetable-curry-recipe-main-photo.jpg"
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
          "Dal & egg"
        ],
        "side": "Vegetable poriyal",
        "nutrients": {
          "protein": "Lentils, eggs",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Fats: egg yolk"
        },
        "veg": false,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/6/23/51f8fd99-e683-4c5e-a976-5e39a27f4640_74f8ee65-9ff1-463d-a934-b37414f49d63.jpg"
      },
      {
        "id": "lunch-1",
        "pair": [
          "Chapati",
          "Dal"
        ],
        "side": "Vegetable curry",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Whole wheat, lentils, vegetables",
          "carbs": "Whole-wheat chapati",
          "other": "Iron: lentils"
        },
        "veg": true,
        "image": "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080"
      },
      {
        "id": "lunch-2",
        "pair": [
          "Rice",
          "Fish curry"
        ],
        "side": "Vegetable poriyal",
        "nutrients": {
          "protein": "Fish",
          "fibre": "Vegetables",
          "carbs": "Rice",
          "other": "Fats: varies by fish"
        },
        "veg": false,
        "image": "https://www.arise-app.com/images/dishes/en/fish-curry-with-rice-and-vegetables-auvdy7.webp"
      },
      {
        "id": "lunch-3",
        "pair": [
          "Lemon rice",
          "Chickpea sundal"
        ],
        "side": "Cucumber raita",
        "nutrients": {
          "protein": "Chickpeas, curd",
          "fibre": "Chickpeas, cucumber",
          "carbs": "Rice",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "https://nurrish.in/meals/south/lemon-rice-cucumber-raita-papad.webp"
      },
      {
        "id": "lunch-4",
        "pair": [
          "Rice",
          "Rajma curry"
        ],
        "side": "Cucumber, tomato",
        "nutrients": {
          "protein": "Rajma",
          "fibre": "Rajma, vegetables",
          "carbs": "Rice, rajma",
          "other": "Iron: rajma"
        },
        "veg": true,
        "image": "https://b.zmtcdn.com/data/dish_photos/8ca/0ea878f2f888e008b7f28028eb1558ca.png"
      },
      {
        "id": "lunch-5",
        "pair": [
          "Curd rice",
          "Chickpea sundal"
        ],
        "side": "Pomegranate, cucumber",
        "nutrients": {
          "protein": "Curd, chickpeas",
          "fibre": "Chickpeas, fruit, cucumber",
          "carbs": "Rice",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "https://assets-jpcust.jwpsrv.com/thumbnails/6ksgyxm8-720.jpg"
      },
      {
        "id": "lunch-6",
        "pair": [
          "Sambar rice",
          "Spinach dal"
        ],
        "side": "Carrot, drumstick",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Spinach, lentils, vegetables",
          "carbs": "Rice",
          "other": "Iron: spinach"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/27/cab61206-196b-419d-bb92-39a9db03feff_b19a7967-17fb-4848-bfdf-6466831068c2.jpg"
      },
      {
        "id": "lunch-7",
        "pair": [
          "Millet pulao",
          "Chickpeas"
        ],
        "side": "Peas, carrot, raita",
        "nutrients": {
          "protein": "Chickpeas, curd",
          "fibre": "Millet, chickpeas, vegetables",
          "carbs": "Millet",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "https://gramiyum.in/wp-content/uploads/2023/12/Millet-Veggie-Pulao.webp"
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
        "side": "Almonds, walnuts",
        "nutrients": {
          "protein": "Curd, nuts",
          "fibre": "Banana, nuts",
          "carbs": "Banana",
          "other": "Calcium: curd · Fats: nuts"
        },
        "veg": true,
        "image": "https://images.squarespace-cdn.com/content/v1/6238ad0b6eee8a52050c5bdc/a4cd04bc-3925-4ffe-ad05-31d72a6791e2/Greek%2Byogurt%2Bwith%2BUnsalted%2BNuts%2Band%2BBanana.png"
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
          "carbs": "Roasted chana, guava",
          "other": "Vitamin C: guava"
        },
        "veg": true,
        "image": "https://plantigo.in/cdn/shop/articles/Roasted_Chana_Protein_Feature_Img_jpg.jpg?v=1781085834&width=1400"
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
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/amul_masala_buttermilk.jpg"
      },
      {
        "id": "snacks-3",
        "pair": [
          "Chickpeas",
          "Vegetable salad"
        ],
        "side": "Pomegranate, lemon",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Chickpeas, vegetables",
          "carbs": "Chickpeas, pomegranate",
          "other": "Vitamins: vegetables"
        },
        "veg": true,
        "image": "https://img-global.cpcdn.com/recipes/184aad47154200f9/680x781f0.5_0.5_1.0q80/roasted-chickpea-bhel-in-just-10-minutes-recipe-main-photo.jpg"
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
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/banana_apple_peanut_salad.jpg"
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
        "image": "https://aahaaramonline.com/wp-content/uploads/2013/08/Guggillu_Sundal-1024x683.jpg"
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
        "image": "https://nanaschana.com/cdn/shop/files/BoiledRoastedsing1.jpg?v=1759096963&width=3840"
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
          "carbs": "Roasted chana, coconut water",
          "other": "Potassium: coconut water"
        },
        "veg": true,
        "image": "https://images.hindustantimes.com/tamil/img/2023/04/23/960x540/main_1682236359444_1682236368745.jpg"
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
          "Chapati",
          "Dal"
        ],
        "side": "Vegetable curry",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Whole wheat, lentils, vegetables",
          "carbs": "Whole-wheat chapati",
          "other": "Iron: lentils"
        },
        "veg": true,
        "image": "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080"
      },
      {
        "id": "dinner-1",
        "pair": [
          "Egg dosa",
          "Sambar"
        ],
        "side": "Vegetables, chutney",
        "nutrients": {
          "protein": "Eggs, lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Dosa",
          "other": "Fats: egg yolk"
        },
        "veg": false,
        "image": "https://ik.imagekit.io/fpcle7dmn/images/thumbs/0021222_egg-pepper-dosa.jpeg"
      },
      {
        "id": "dinner-2",
        "pair": [
          "Rice",
          "Chicken"
        ],
        "side": "Carrot, beans, peppers",
        "nutrients": {
          "protein": "Chicken",
          "fibre": "Vegetables",
          "carbs": "Rice",
          "other": "Vitamins: vegetables"
        },
        "veg": false,
        "image": "https://cdn.foodfaithfitness.com/uploads/2024/07/Chicken-Stir-Fry-A_FFF_Chicken_Stir_Fry_Feature_2-635x635.jpg"
      },
      {
        "id": "dinner-3",
        "pair": [
          "Vegetable upma",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Semolina",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "https://www.dakshinbhojnam.com/img/1%2811%29.jpg"
      },
      {
        "id": "dinner-4",
        "pair": [
          "Dal khichdi",
          "Curd"
        ],
        "side": "",
        "nutrients": {
          "protein": "Lentils, curd",
          "fibre": "Lentils, vegetables",
          "carbs": "Rice",
          "other": "Calcium: curd"
        },
        "veg": true,
        "image": "https://cdn.shopify.com/s/files/1/0702/7218/8719/files/khicdi_with_yogurt_480x480.jpg?v=1721389760"
      },
      {
        "id": "dinner-5",
        "pair": [
          "Appam",
          "Chickpea curry"
        ],
        "side": "Vegetables",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Chickpeas, vegetables",
          "carbs": "Appam",
          "other": "Iron: chickpeas"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/7/90067657-de1a-4ff7-8d09-b269e8b03489_bdb1dff9-36b5-4ee8-9c8c-538abc5cec32.jpg_compressed"
      },
      {
        "id": "dinner-6",
        "pair": [
          "Veg uttapam",
          "Sambar"
        ],
        "side": "Coconut chutney",
        "nutrients": {
          "protein": "Lentils",
          "fibre": "Vegetables, lentils",
          "carbs": "Uttapam",
          "other": "Fats: coconut"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/ajuphvampmwkqegpqymt"
      },
      {
        "id": "dinner-7",
        "pair": [
          "Vegetable soup",
          "Chickpea sundal"
        ],
        "side": "Whole-wheat bread",
        "nutrients": {
          "protein": "Chickpeas",
          "fibre": "Vegetables, chickpeas, whole wheat",
          "carbs": "Whole-wheat bread, chickpeas",
          "other": "Vitamins: vegetables"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/yd0yeaq44pdgbjidafcp"
      }
    ]
  }
];

const storePicks = [
  [
    "🍌",
    "Banana, guava"
  ],
  [
    "🥚",
    "Eggs"
  ],
  [
    "🥛",
    "Milk, curd"
  ],
  [
    "🧃",
    "Buttermilk"
  ],
  [
    "🥥",
    "Coconut water"
  ],
  [
    "🫘",
    "Roasted chana"
  ],
  [
    "🥜",
    "Peanuts"
  ],
  [
    "🌱",
    "Cooked sprouts"
  ],
  [
    "🌰",
    "Almonds, walnuts"
  ],
  [
    "🥒",
    "Cucumber, carrot"
  ],
  [
    "🍞",
    "Whole-wheat bread"
  ],
  [
    "🥣",
    "Oats"
  ],
  [
    "🥣",
    "Unsweetened muesli"
  ],
  [
    "🫓",
    "Idli / dosa batter"
  ],
  [
    "🌾",
    "Ragi flour"
  ],
  [
    "🫘",
    "Adai mix"
  ],
  [
    "🥫",
    "Chickpeas, rajma"
  ],
  [
    "🌽",
    "Boiled corn"
  ],
  [
    "🧀",
    "Paneer"
  ],
  [
    "🥣",
    "Multigrain mix"
  ],
  [
    "🌾",
    "Ragi semiya"
  ],
  [
    "🌾",
    "Millet flakes"
  ],
  [
    "🍘",
    "Roasted makhana"
  ],
  [
    "🫙",
    "Unsweetened peanut butter"
  ]
];
const nutrientLabels = {protein: "Protein", fibre: "Fibre", carbs: "Carbs", other: "Other"};
const storageKey = "nal-unavu-v3";
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
  return `<details class="nutrition"><summary>Nutrients</summary><dl>${Object.entries(nutrientLabels).map(([key, label]) => `<div><dt>${label}</dt><dd>${escapeHtml(meal.nutrients[key])}</dd></div>`).join("")}</dl></details>`;
}

function cardHtml(meal, group, daily = false) {
  return `<article class="meal-card" data-meal-id="${meal.id}">
    ${daily ? `<div class="meal-label">${group.icon} ${group.title}</div>` : ""}
    <div class="meal-image-wrap">
      <span class="image-fallback" aria-hidden="true">${group.icon}</span>
      <img src="${escapeHtml(meal.image)}" alt="${escapeHtml(meal.pair.join(' + '))}" loading="${daily ? 'eager' : 'lazy'}" />
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
document.getElementById("stockGrid").innerHTML = storePicks.map(([icon, title]) => `<article><span aria-hidden="true">${icon}</span>${escapeHtml(title)}</article>`).join("");

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
}));

setInterval(refreshDay, 30000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshDay(); });
window.addEventListener("pageshow", refreshDay);
