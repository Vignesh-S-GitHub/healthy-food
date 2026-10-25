"use strict";

// Nutrient sources are qualitative, not calculated nutrition totals.
const mealGroups = [
  {
    "id": "breakfast",
    "icon": "🌅",
    "title": "காலை",
    "meals": [
      {
        "id": "breakfast-0",
        "pair": [
          "இட்லி",
          "வேகவைத்த முட்டை"
        ],
        "side": "காய்கறிச் சாம்பார்",
        "nutrients": {
          "protein": "முட்டை, பருப்பு",
          "fibre": "சாம்பார் காய்கறிகள், பருப்பு",
          "carbs": "இட்லி",
          "other": "முட்டை மஞ்சளில் கொழுப்பு"
        },
        "veg": false,
        "image": "https://www.arise-app.com/images/dishes/en/idli-sambar-with-boiled-eggs-xdkpr4.webp"
      },
      {
        "id": "breakfast-1",
        "pair": [
          "தோசை",
          "சாம்பார்"
        ],
        "side": "கேரட், தேங்காய்ச் சட்னி",
        "nutrients": {
          "protein": "சாம்பார் பருப்பு",
          "fibre": "கேரட், சாம்பார் காய்கறிகள்",
          "carbs": "தோசை",
          "other": "தேங்காயில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/29/7d4750d1-32e9-4cc8-9192-643a41a87824_7e3a3574-16ad-4152-8659-651e6b13eb14.jpg_compressed"
      },
      {
        "id": "breakfast-2",
        "pair": [
          "ஓட்ஸ் கஞ்சி",
          "பால்"
        ],
        "side": "வாழைப்பழம், பாதாம்",
        "nutrients": {
          "protein": "பால், ஓட்ஸ், பாதாம்",
          "fibre": "ஓட்ஸ், வாழைப்பழம்",
          "carbs": "ஓட்ஸ், வாழைப்பழம்",
          "other": "பாலில் கால்சியம்; பாதாமில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/mandelmilch.jpg"
      },
      {
        "id": "breakfast-3",
        "pair": [
          "வெண் பொங்கல்",
          "சாம்பார்"
        ],
        "side": "காய்கறிகள், தேங்காய்ச் சட்னி",
        "nutrients": {
          "protein": "பாசிப்பருப்பு, சாம்பார் பருப்பு",
          "fibre": "சாம்பார் காய்கறிகள், பருப்பு",
          "carbs": "பொங்கல் அரிசி",
          "other": "தேங்காயில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://media.assettype.com/deccanherald%2F2025-01-14%2Fo6y3h8uc%2FVen_Pongal.jpg?rect=0%2C0%2C2359%2C3145"
      },
      {
        "id": "breakfast-4",
        "pair": [
          "அவல்",
          "வேகவைத்த கொண்டைக்கடலை"
        ],
        "side": "வேர்க்கடலை, கேரட், எலுமிச்சை",
        "nutrients": {
          "protein": "கொண்டைக்கடலை, வேர்க்கடலை",
          "fibre": "கொண்டைக்கடலை, கேரட்",
          "carbs": "அவல்",
          "other": "வேர்க்கடலையில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/8259a19f-a269-4113-a17c-646c8882163c_955838.jpg"
      },
      {
        "id": "breakfast-5",
        "pair": [
          "அடை",
          "சாம்பார்"
        ],
        "side": "கேரட், தேங்காய்ச் சட்னி",
        "nutrients": {
          "protein": "அடைப் பருப்புகள், சாம்பார் பருப்பு",
          "fibre": "பருப்புகள், கேரட்",
          "carbs": "அடையில் அரிசி, பருப்பு",
          "other": "பருப்புகளில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://www.vishalam.com/cdn/shop/files/instant-adai-dosa-readymix-1463074_1024x.jpg?v=1774389431"
      },
      {
        "id": "breakfast-6",
        "pair": [
          "ராகி தோசை",
          "சாம்பார்"
        ],
        "side": "காய்கறிகள், சட்னி",
        "nutrients": {
          "protein": "சாம்பார் பருப்பு",
          "fibre": "ராகி, சாம்பார் காய்கறிகள்",
          "carbs": "ராகி தோசை",
          "other": "ராகியில் கால்சியம்"
        },
        "veg": true,
        "image": "https://i0.wp.com/naturallynidhi.com/wp-content/uploads/2021/07/Ragi-Dosa-Cover.jpg?fit=840%2C560&ssl=1"
      },
      {
        "id": "breakfast-7",
        "pair": [
          "இடியாப்பம்",
          "கொண்டைக்கடலைக் குருமா"
        ],
        "side": "கேரட், பீன்ஸ்",
        "nutrients": {
          "protein": "கொண்டைக்கடலை",
          "fibre": "கொண்டைக்கடலை, காய்கறிகள்",
          "carbs": "இடியாப்பம்",
          "other": "கொண்டைக்கடலையில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://img-global.cpcdn.com/recipes/3e90d11cc4ef2940/680x781f0.5_0.5_1.0q80/idiyappam-with-vegetable-curry-recipe-main-photo.jpg"
      }
    ]
  },
  {
    "id": "lunch",
    "icon": "☀️",
    "title": "மதியம்",
    "meals": [
      {
        "id": "lunch-0",
        "pair": [
          "சாதம்",
          "பருப்பு, முட்டை"
        ],
        "side": "காய்கறிப் பொரியல்",
        "nutrients": {
          "protein": "பருப்பு, முட்டை",
          "fibre": "பருப்பு, காய்கறிகள்",
          "carbs": "சாதம்",
          "other": "முட்டை மஞ்சளில் கொழுப்பு"
        },
        "veg": false,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/6/23/51f8fd99-e683-4c5e-a976-5e39a27f4640_74f8ee65-9ff1-463d-a934-b37414f49d63.jpg"
      },
      {
        "id": "lunch-1",
        "pair": [
          "முழுக்கோதுமைச் சப்பாத்தி",
          "பருப்பு"
        ],
        "side": "காய்கறிக் கூட்டு",
        "nutrients": {
          "protein": "பருப்பு",
          "fibre": "முழுக்கோதுமை, பருப்பு, காய்கறிகள்",
          "carbs": "சப்பாத்தி",
          "other": "பருப்பில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080"
      },
      {
        "id": "lunch-2",
        "pair": [
          "சாதம்",
          "மீன் குழம்பு"
        ],
        "side": "காய்கறிப் பொரியல்",
        "nutrients": {
          "protein": "மீன்",
          "fibre": "காய்கறிகள்",
          "carbs": "சாதம்",
          "other": "மீனில் கொழுப்பு; வகைக்கு ஏற்ப மாறும்"
        },
        "veg": false,
        "image": "https://www.arise-app.com/images/dishes/en/fish-curry-with-rice-and-vegetables-auvdy7.webp"
      },
      {
        "id": "lunch-3",
        "pair": [
          "எலுமிச்சை சாதம்",
          "கொண்டைக்கடலைச் சுண்டல்"
        ],
        "side": "வெள்ளரித் தயிர்ப்பச்சடி",
        "nutrients": {
          "protein": "கொண்டைக்கடலை, தயிர்",
          "fibre": "கொண்டைக்கடலை, வெள்ளரி",
          "carbs": "சாதம்",
          "other": "தயிரில் கால்சியம்"
        },
        "veg": true,
        "image": "https://nurrish.in/meals/south/lemon-rice-cucumber-raita-papad.webp"
      },
      {
        "id": "lunch-4",
        "pair": [
          "சாதம்",
          "ராஜ்மா குழம்பு"
        ],
        "side": "வெள்ளரி, தக்காளி",
        "nutrients": {
          "protein": "ராஜ்மா",
          "fibre": "ராஜ்மா, காய்கறிகள்",
          "carbs": "சாதம், ராஜ்மா",
          "other": "ராஜ்மாவில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://b.zmtcdn.com/data/dish_photos/8ca/0ea878f2f888e008b7f28028eb1558ca.png"
      },
      {
        "id": "lunch-5",
        "pair": [
          "தயிர் சாதம்",
          "கொண்டைக்கடலைச் சுண்டல்"
        ],
        "side": "மாதுளை, வெள்ளரி",
        "nutrients": {
          "protein": "தயிர், கொண்டைக்கடலை",
          "fibre": "கொண்டைக்கடலை, மாதுளை, வெள்ளரி",
          "carbs": "சாதம்",
          "other": "தயிரில் கால்சியம்"
        },
        "veg": true,
        "image": "https://assets-jpcust.jwpsrv.com/thumbnails/6ksgyxm8-720.jpg"
      },
      {
        "id": "lunch-6",
        "pair": [
          "சாம்பார் சாதம்",
          "கீரைப் பருப்புக் கூட்டு"
        ],
        "side": "கேரட், முருங்கைக்காய்",
        "nutrients": {
          "protein": "சாம்பார் பருப்பு, கூட்டுப் பருப்பு",
          "fibre": "கீரை, பருப்பு, காய்கறிகள்",
          "carbs": "சாதம்",
          "other": "கீரையில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/27/cab61206-196b-419d-bb92-39a9db03feff_b19a7967-17fb-4848-bfdf-6466831068c2.jpg"
      },
      {
        "id": "lunch-7",
        "pair": [
          "சிறுதானியப் புலாவ்",
          "கொண்டைக்கடலை"
        ],
        "side": "பட்டாணி, கேரட், தயிர்ப்பச்சடி",
        "nutrients": {
          "protein": "கொண்டைக்கடலை, தயிர்",
          "fibre": "சிறுதானியம், கொண்டைக்கடலை, காய்கறிகள்",
          "carbs": "சிறுதானியம்",
          "other": "தயிரில் கால்சியம்"
        },
        "veg": true,
        "image": "https://gramiyum.in/wp-content/uploads/2023/12/Millet-Veggie-Pulao.webp"
      }
    ]
  },
  {
    "id": "snacks",
    "icon": "🍎",
    "title": "சிற்றுண்டி",
    "meals": [
      {
        "id": "snacks-0",
        "pair": [
          "தயிர்",
          "வாழைப்பழம்"
        ],
        "side": "பாதாம், வால்நட்",
        "nutrients": {
          "protein": "தயிர், பருப்புவகைகள்",
          "fibre": "வாழைப்பழம், பருப்புவகைகள்",
          "carbs": "வாழைப்பழம்",
          "other": "தயிரில் கால்சியம்; பருப்புவகைகளில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://images.squarespace-cdn.com/content/v1/6238ad0b6eee8a52050c5bdc/a4cd04bc-3925-4ffe-ad05-31d72a6791e2/Greek%2Byogurt%2Bwith%2BUnsalted%2BNuts%2Band%2BBanana.png"
      },
      {
        "id": "snacks-1",
        "pair": [
          "பொட்டுக்கடலை",
          "கொய்யாப்பழம்"
        ],
        "side": "",
        "nutrients": {
          "protein": "பொட்டுக்கடலை",
          "fibre": "பொட்டுக்கடலை, கொய்யா",
          "carbs": "பொட்டுக்கடலை, கொய்யா",
          "other": "கொய்யாவில் வைட்டமின் சி"
        },
        "veg": true,
        "image": "https://plantigo.in/cdn/shop/articles/Roasted_Chana_Protein_Feature_Img_jpg.jpg?v=1781085834&width=1400"
      },
      {
        "id": "snacks-2",
        "pair": [
          "மோர்",
          "பொட்டுக்கடலை"
        ],
        "side": "",
        "nutrients": {
          "protein": "மோர், பொட்டுக்கடலை",
          "fibre": "பொட்டுக்கடலை",
          "carbs": "பொட்டுக்கடலை",
          "other": "மோரில் கால்சியம்"
        },
        "veg": true,
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/amul_masala_buttermilk.jpg"
      },
      {
        "id": "snacks-3",
        "pair": [
          "கொண்டைக்கடலை",
          "காய்கறிக் கலவை"
        ],
        "side": "மாதுளை, எலுமிச்சை",
        "nutrients": {
          "protein": "கொண்டைக்கடலை",
          "fibre": "கொண்டைக்கடலை, காய்கறிகள்",
          "carbs": "கொண்டைக்கடலை, மாதுளை",
          "other": "காய்கறிகளில் வைட்டமின்கள்"
        },
        "veg": true,
        "image": "https://img-global.cpcdn.com/recipes/184aad47154200f9/680x781f0.5_0.5_1.0q80/roasted-chickpea-bhel-in-just-10-minutes-recipe-main-photo.jpg"
      },
      {
        "id": "snacks-4",
        "pair": [
          "ஆப்பிள், வாழைப்பழம்",
          "வேர்க்கடலை"
        ],
        "side": "",
        "nutrients": {
          "protein": "வேர்க்கடலை",
          "fibre": "பழங்கள், வேர்க்கடலை",
          "carbs": "பழங்கள்",
          "other": "வேர்க்கடலையில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/banana_apple_peanut_salad.jpg"
      },
      {
        "id": "snacks-5",
        "pair": [
          "கொண்டைக்கடலைச் சுண்டல்",
          "கொய்யாப்பழம்"
        ],
        "side": "தேங்காய்த் துருவல்",
        "nutrients": {
          "protein": "கொண்டைக்கடலை",
          "fibre": "கொண்டைக்கடலை, கொய்யா",
          "carbs": "கொண்டைக்கடலை, கொய்யா",
          "other": "கொய்யாவில் வைட்டமின் சி"
        },
        "veg": true,
        "image": "https://aahaaramonline.com/wp-content/uploads/2013/08/Guggillu_Sundal-1024x683.jpg"
      },
      {
        "id": "snacks-6",
        "pair": [
          "வேகவைத்த வேர்க்கடலை",
          "வெள்ளரி"
        ],
        "side": "",
        "nutrients": {
          "protein": "வேர்க்கடலை",
          "fibre": "வேர்க்கடலை, வெள்ளரி",
          "carbs": "வேர்க்கடலை",
          "other": "வேர்க்கடலையில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://nanaschana.com/cdn/shop/files/BoiledRoastedsing1.jpg?v=1759096963&width=3840"
      },
      {
        "id": "snacks-7",
        "pair": [
          "இளநீர்",
          "பொட்டுக்கடலை"
        ],
        "side": "",
        "nutrients": {
          "protein": "பொட்டுக்கடலை",
          "fibre": "பொட்டுக்கடலை",
          "carbs": "பொட்டுக்கடலை, இளநீர்",
          "other": "இளநீரில் பொட்டாசியம்"
        },
        "veg": true,
        "image": "https://images.hindustantimes.com/tamil/img/2023/04/23/960x540/main_1682236359444_1682236368745.jpg"
      }
    ]
  },
  {
    "id": "dinner",
    "icon": "🌙",
    "title": "இரவு",
    "meals": [
      {
        "id": "dinner-0",
        "pair": [
          "முழுக்கோதுமைச் சப்பாத்தி",
          "பருப்பு"
        ],
        "side": "காய்கறிக் கூட்டு",
        "nutrients": {
          "protein": "பருப்பு",
          "fibre": "முழுக்கோதுமை, பருப்பு, காய்கறிகள்",
          "carbs": "சப்பாத்தி",
          "other": "பருப்பில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080"
      },
      {
        "id": "dinner-1",
        "pair": [
          "முட்டை தோசை",
          "சாம்பார்"
        ],
        "side": "காய்கறிகள், சட்னி",
        "nutrients": {
          "protein": "முட்டை, சாம்பார் பருப்பு",
          "fibre": "சாம்பார் காய்கறிகள், பருப்பு",
          "carbs": "தோசை",
          "other": "முட்டை மஞ்சளில் கொழுப்பு"
        },
        "veg": false,
        "image": "https://ik.imagekit.io/fpcle7dmn/images/thumbs/0021222_egg-pepper-dosa.jpeg"
      },
      {
        "id": "dinner-2",
        "pair": [
          "சாதம்",
          "கோழிக்கறி"
        ],
        "side": "கேரட், பீன்ஸ், குடைமிளகாய்",
        "nutrients": {
          "protein": "கோழிக்கறி",
          "fibre": "காய்கறிகள்",
          "carbs": "சாதம்",
          "other": "காய்கறிகளில் வைட்டமின்கள்"
        },
        "veg": false,
        "image": "https://cdn.foodfaithfitness.com/uploads/2024/07/Chicken-Stir-Fry-A_FFF_Chicken_Stir_Fry_Feature_2-635x635.jpg"
      },
      {
        "id": "dinner-3",
        "pair": [
          "காய்கறி உப்புமா",
          "சாம்பார்"
        ],
        "side": "தேங்காய்ச் சட்னி",
        "nutrients": {
          "protein": "சாம்பார் பருப்பு",
          "fibre": "காய்கறிகள், பருப்பு",
          "carbs": "உப்புமா ரவை",
          "other": "தேங்காயில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://www.dakshinbhojnam.com/img/1%2811%29.jpg"
      },
      {
        "id": "dinner-4",
        "pair": [
          "காய்கறிப் பருப்புக் கிச்சடி",
          "தயிர்"
        ],
        "side": "",
        "nutrients": {
          "protein": "கிச்சடி பருப்பு, தயிர்",
          "fibre": "பருப்பு, காய்கறிகள்",
          "carbs": "கிச்சடி அரிசி",
          "other": "தயிரில் கால்சியம்"
        },
        "veg": true,
        "image": "https://cdn.shopify.com/s/files/1/0702/7218/8719/files/khicdi_with_yogurt_480x480.jpg?v=1721389760"
      },
      {
        "id": "dinner-5",
        "pair": [
          "ஆப்பம்",
          "கொண்டைக்கடலைக் குருமா"
        ],
        "side": "காய்கறிகள்",
        "nutrients": {
          "protein": "கொண்டைக்கடலை",
          "fibre": "கொண்டைக்கடலை, காய்கறிகள்",
          "carbs": "ஆப்பம்",
          "other": "கொண்டைக்கடலையில் இரும்புச்சத்து"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/7/90067657-de1a-4ff7-8d09-b269e8b03489_bdb1dff9-36b5-4ee8-9c8c-538abc5cec32.jpg_compressed"
      },
      {
        "id": "dinner-6",
        "pair": [
          "காய்கறி ஊத்தப்பம்",
          "சாம்பார்"
        ],
        "side": "தேங்காய்ச் சட்னி",
        "nutrients": {
          "protein": "சாம்பார் பருப்பு",
          "fibre": "காய்கறிகள், பருப்பு",
          "carbs": "ஊத்தப்பம்",
          "other": "தேங்காயில் கொழுப்பு"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/ajuphvampmwkqegpqymt"
      },
      {
        "id": "dinner-7",
        "pair": [
          "காய்கறிச் சூப்",
          "கொண்டைக்கடலைச் சுண்டல்"
        ],
        "side": "முழுக்கோதுமை ரொட்டி",
        "nutrients": {
          "protein": "கொண்டைக்கடலை",
          "fibre": "காய்கறிகள், கொண்டைக்கடலை, முழுக்கோதுமை",
          "carbs": "முழுக்கோதுமை ரொட்டி, கொண்டைக்கடலை",
          "other": "காய்கறிகளில் வைட்டமின்கள்"
        },
        "veg": true,
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/yd0yeaq44pdgbjidafcp"
      }
    ]
  }
];

const storePicks = [
  ["🍌", "வாழைப்பழம், கொய்யா"], ["🥚", "முட்டை"], ["🥛", "பால், தயிர்"], ["🧃", "மோர்"], ["🥥", "இளநீர்"],
  ["🫘", "பொட்டுக்கடலை"], ["🥜", "வேர்க்கடலை"], ["🌱", "வேகவைத்த முளைப்பயறு"], ["🌰", "பாதாம், வால்நட்"],
  ["🥒", "வெள்ளரி, கேரட்"], ["🍞", "முழுக்கோதுமை ரொட்டி"], ["🥣", "ஓட்ஸ்"], ["🥣", "சர்க்கரை சேர்க்காத தானியக் கலவை"],
  ["🫓", "இட்லி, தோசை மாவு"], ["🌾", "ராகி மாவு"], ["🫘", "அடை மாவு"],
  ["🥫", "கொண்டைக்கடலை, ராஜ்மா"], ["🌽", "வேகவைத்த சோளம்"], ["🧀", "பனீர்"], ["🥣", "சத்துமாவு"], ["🌾", "ராகி சேமியா"],
  ["🌾", "சிறுதானிய அவல்"], ["🍘", "வறுத்த தாமரை விதை"], ["🫙", "சர்க்கரை சேர்க்காத வேர்க்கடலை விழுது"]
];
const nutrientLabels = {protein: "புரதம்", fibre: "நார்ச்சத்து", carbs: "மாவுச்சத்து", other: "பிற சத்துகள்"};
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
  return `<details class="nutrition"><summary>சத்துகள்</summary><dl>${Object.entries(nutrientLabels).map(([key, label]) => `<div><dt>${label}</dt><dd>${escapeHtml(meal.nutrients[key])}</dd></div>`).join("")}</dl></details>`;
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
      ${meal.side ? `<p class="side">${escapeHtml(meal.side)}</p>` : ""}
      <div class="nutrient-tags"><span>புரதம்</span><span>நார்ச்சத்து</span></div>
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
  document.getElementById("dailySnack").innerHTML = `<strong>🍎 சிற்றுண்டி</strong><span class="snack-food">${escapeHtml(snack.pair.join(' + '))}${snack.side ? ` + ${escapeHtml(snack.side)}` : ''}</span>${nutritionHtml(snack)}`;
  const date = new Date(`${activeDay}T12:00:00+05:30`);
  const time = document.getElementById("todayDate");
  time.dateTime = activeDay;
  time.textContent = new Intl.DateTimeFormat("ta-IN", {timeZone:"Asia/Kolkata", day:"numeric", month:"long", weekday:"short"}).format(date);
  document.getElementById("planStatus").textContent = message;
}

function renderCatalogue() {
  document.getElementById("mealSections").innerHTML = ["breakfast", "lunch", "dinner", "snacks"].map(id => {
    const group = mealGroups.find(group => group.id === id);
    const meals = group.meals.filter(meal => diet !== "veg" || meal.veg);
    return `<section class="section meal-section" id="${group.id}" aria-labelledby="${group.id}-heading">
      <div class="section-heading"><h2 id="${group.id}-heading">${group.icon} ${group.title}</h2><span class="option-count">${meals.length} தேர்வுகள்</span></div>
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
  renderDaily("இன்றைய புதிய உணவுகள் தயார்.");
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
  renderDaily("வேறு உணவுகள் தேர்ந்தெடுக்கப்பட்டன.");
});

document.querySelectorAll('input[name="diet"]').forEach(input => input.addEventListener("change", () => {
  refreshDay();
  diet = input.value;
  restorePlan();
  saveState();
  renderDaily(diet === "veg" ? "சைவ உணவுகள் தேர்ந்தெடுக்கப்பட்டன." : "அனைத்து உணவுகளும் காட்டப்படுகின்றன.");
  renderCatalogue();
}));

setInterval(refreshDay, 30000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshDay(); });
window.addEventListener("pageshow", refreshDay);
