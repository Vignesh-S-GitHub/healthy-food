const mealGroups = [
  {
    id: "breakfast",
    icon: "🌅",
    label: "BREAKFAST",
    title: "Hotel & store-friendly breakfast",
    note: "Steamed, lentil, millet and simple tiffin choices that are commonly practical in Tamil Nadu.",
    meals: [
      { title: "Idli + Sambar + Boiled Eggs", items: ["3 idli", "sambar", "2 boiled eggs"], where: "Hotel / tiffin shop", image: "https://www.arise-app.com/images/dishes/en/idli-sambar-with-boiled-eggs-xdkpr4.webp", alt: "Three idlis with sambar and boiled eggs" },
      { title: "Dosa + Sambar + Chutneys", items: ["1 plain dosa", "sambar", "coconut, mint and tomato chutneys"], where: "Hotel / tiffin shop", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/29/7d4750d1-32e9-4cc8-9192-643a41a87824_7e3a3574-16ad-4152-8659-651e6b13eb14.jpg_compressed", alt: "Dosa with sambar and three chutneys" },
      { title: "Oats + Banana + Almonds", items: ["oatmeal", "banana slices", "chopped almonds"], where: "Store / room", image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/mandelmilch.jpg", alt: "Oatmeal topped with banana and almonds" },
      { title: "Ven Pongal + Sambar + Chutney", items: ["ven pongal", "sambar", "coconut chutney"], where: "Hotel / tiffin shop", image: "https://media.assettype.com/deccanherald%2F2025-01-14%2Fo6y3h8uc%2FVen_Pongal.jpg?rect=0%2C0%2C2359%2C3145", alt: "Ven pongal with sambar and coconut chutney" },
      { title: "Poha + Peanuts + Lime", items: ["poha", "roasted peanuts", "lime and coriander"], where: "Hotel / store / room", image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/8259a19f-a269-4113-a17c-646c8882163c_955838.jpg", alt: "Poha with peanuts coriander and lime" },
      { title: "Adai + Sambar + Coconut Chutney", items: ["2 adai", "sambar", "coconut chutney"], where: "Hotel / tiffin shop", image: "https://www.vishalam.com/cdn/shop/files/instant-adai-dosa-readymix-1463074_1024x.jpg?v=1774389431", alt: "Adai dosa with sambar and coconut chutney" },
      { title: "Ragi Dosa + Sambar + Chutneys", items: ["ragi dosa", "vegetable sambar", "chutneys"], where: "Hotel / tiffin shop", image: "https://i0.wp.com/naturallynidhi.com/wp-content/uploads/2021/07/Ragi-Dosa-Cover.jpg?fit=840%2C560&ssl=1", alt: "Ragi dosa with sambar and chutneys" },
      { title: "Idiyappam + Vegetable Curry", items: ["idiyappam", "mixed vegetable coconut curry"], where: "Hotel / tiffin shop", image: "https://img-global.cpcdn.com/recipes/3e90d11cc4ef2940/680x781f0.5_0.5_1.0q80/idiyappam-with-vegetable-curry-recipe-main-photo.jpg", alt: "Idiyappam with mixed vegetable curry" }
    ]
  },
  {
    id: "lunch",
    icon: "☀️",
    label: "LUNCH",
    title: "Practical Tamil Nadu lunch choices",
    note: "Choose a clear plate with rice or chapati plus dal, vegetables, curd, egg or fish instead of adding multiple fried sides.",
    meals: [
      { title: "Rice + Dal + Vegetables + Egg", items: ["white rice", "dal", "vegetable poriyal", "1 boiled egg"], where: "Hotel / mess", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/6/23/51f8fd99-e683-4c5e-a976-5e39a27f4640_74f8ee65-9ff1-463d-a934-b37414f49d63.jpg", alt: "Rice with dal vegetable poriyal and boiled egg" },
      { title: "Chapati + Dal + Vegetable Curry", items: ["chapati", "yellow dal", "mixed vegetable curry"], where: "Hotel / mess", image: "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080", alt: "Chapati with yellow dal and mixed vegetable curry" },
      { title: "Rice + Fish Curry + Vegetables", items: ["white rice", "fish curry", "mixed vegetables"], where: "Hotel / mess", image: "https://www.arise-app.com/images/dishes/en/fish-curry-with-rice-and-vegetables-auvdy7.webp", alt: "Rice with fish curry and vegetables" },
      { title: "Lemon Rice + Cucumber Raita", items: ["lemon rice with peanuts", "cucumber raita"], where: "Hotel / store", image: "https://nurrish.in/meals/south/lemon-rice-cucumber-raita-papad.webp", alt: "Lemon rice with cucumber raita and papad" },
      { title: "Rajma + Rice", items: ["rajma curry", "steamed rice", "cucumber and tomato salad"], where: "Hotel / store", image: "https://b.zmtcdn.com/data/dish_photos/8ca/0ea878f2f888e008b7f28028eb1558ca.png", alt: "Rajma curry with steamed rice cucumber tomato and lemon" },
      { title: "Curd Rice + Pomegranate", items: ["curd rice", "pomegranate", "curry leaf tempering"], where: "Hotel / store", image: "https://assets-jpcust.jwpsrv.com/thumbnails/6ksgyxm8-720.jpg", alt: "Curd rice with pomegranate coriander and curry leaf tempering" },
      { title: "Sambar Rice + Vegetables", items: ["rice", "sambar", "drumstick and carrot"], where: "Hotel / mess", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/27/cab61206-196b-419d-bb92-39a9db03feff_b19a7967-17fb-4848-bfdf-6466831068c2.jpg", alt: "Sambar rice with drumstick and carrot" },
      { title: "Millet Vegetable Pulao + Raita", items: ["millet pulao", "peas, carrot and beans", "curd raita"], where: "Hotel / store", image: "https://gramiyum.in/wp-content/uploads/2023/12/Millet-Veggie-Pulao.webp", alt: "Millet vegetable pulao with raita" }
    ]
  },
  {
    id: "snacks",
    icon: "🍎",
    label: "EVENING SNACKS",
    title: "Easy snacks from shops and local stalls",
    note: "Prefer fruit, pulses, plain dairy and simple drinks over deep-fried snacks for everyday use.",
    meals: [
      { title: "Curd + Banana + Nuts", items: ["plain curd", "banana slices", "almonds and walnuts"], where: "Store / room", image: "https://images.squarespace-cdn.com/content/v1/6238ad0b6eee8a52050c5bdc/a4cd04bc-3925-4ffe-ad05-31d72a6791e2/Greek%2Byogurt%2Bwith%2BUnsalted%2BNuts%2Band%2BBanana.png", alt: "Plain yogurt with banana almonds and walnuts" },
      { title: "Roasted Chana", items: ["1 bowl roasted chana"], where: "Store", image: "https://plantigo.in/cdn/shop/articles/Roasted_Chana_Protein_Feature_Img_jpg.jpg?v=1781085834&width=1400", alt: "Bowl of roasted chana" },
      { title: "Spiced Buttermilk", items: ["buttermilk", "coriander", "cumin and spices"], where: "Hotel / store", image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/amul_masala_buttermilk.jpg", alt: "Glass of spiced buttermilk with coriander" },
      { title: "Roasted Chickpea Bhel", items: ["roasted chickpeas", "cucumber, tomato and carrot", "pomegranate, herbs and lemon"], where: "Store / room", image: "https://img-global.cpcdn.com/recipes/184aad47154200f9/680x781f0.5_0.5_1.0q80/roasted-chickpea-bhel-in-just-10-minutes-recipe-main-photo.jpg", alt: "Roasted chickpea bhel with cucumber tomato carrot pomegranate herbs and lemon" },
      { title: "Banana + Apple + Nuts", items: ["banana", "apple", "almonds and peanuts"], where: "Store / fruit shop", image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/banana_apple_peanut_salad.jpg", alt: "Banana apple and nuts bowl" },
      { title: "Chickpea Sundal", items: ["boiled chickpeas", "curry leaves", "grated coconut"], where: "Store / local stall", image: "https://aahaaramonline.com/wp-content/uploads/2013/08/Guggillu_Sundal-1024x683.jpg", alt: "Chickpea sundal with curry leaves coconut and spices" },
      { title: "Boiled Peanuts", items: ["boiled peanuts"], where: "Store / local stall", image: "https://nanaschana.com/cdn/shop/files/BoiledRoastedsing1.jpg?v=1759096963&width=3840", alt: "Bowl of boiled peanuts" },
      { title: "Tender Coconut", items: ["fresh tender coconut water"], where: "Fruit shop / roadside stall", image: "https://images.hindustantimes.com/tamil/img/2023/04/23/960x540/main_1682236359444_1682236368745.jpg", alt: "Fresh tender coconut with drinking straw" }
    ]
  },
  {
    id: "dinner",
    icon: "🌙",
    label: "DINNER",
    title: "Simple hotel dinners",
    note: "Keep dinner straightforward: tiffin, vegetables and a clear protein or dal source rather than heavy fried combinations.",
    meals: [
      { title: "Chapati + Dal + Vegetable Curry", items: ["chapati", "yellow dal", "mixed vegetable curry"], where: "Hotel / mess", image: "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080", alt: "Chapati with yellow dal and mixed vegetable curry" },
      { title: "Egg Dosa + Sambar + Chutney", items: ["egg dosa", "sambar", "chutney"], where: "Hotel / tiffin shop", image: "https://ik.imagekit.io/fpcle7dmn/images/thumbs/0021222_egg-pepper-dosa.jpeg", alt: "Egg dosa with sambar and chutney" },
      { title: "Chicken + Vegetables + Rice", items: ["chicken", "broccoli, carrot and peppers", "white rice"], where: "Hotel", image: "https://cdn.foodfaithfitness.com/uploads/2024/07/Chicken-Stir-Fry-A_FFF_Chicken_Stir_Fry_Feature_2-635x635.jpg", alt: "Chicken with broccoli carrots peppers and white rice" },
      { title: "Vegetable Upma + Chutneys + Sambar", items: ["vegetable upma", "coconut and tomato chutneys", "sambar"], where: "Hotel / tiffin shop", image: "https://www.dakshinbhojnam.com/img/1%2811%29.jpg", alt: "Vegetable upma with chutneys and sambar" },
      { title: "Vegetable Khichdi + Curd", items: ["vegetable khichdi", "plain curd"], where: "Hotel / store", image: "https://cdn.shopify.com/s/files/1/0702/7218/8719/files/khicdi_with_yogurt_480x480.jpg?v=1721389760", alt: "Vegetable khichdi topped with curd" },
      { title: "Appam + Vegetable Stew", items: ["appam", "mixed vegetable stew"], where: "Hotel / tiffin shop", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/7/90067657-de1a-4ff7-8d09-b269e8b03489_bdb1dff9-36b5-4ee8-9c8c-538abc5cec32.jpg_compressed", alt: "Appam with mixed vegetable stew" },
      { title: "Vegetable Uttapam + Sambar + Chutney", items: ["vegetable uttapam", "sambar", "coconut chutney"], where: "Hotel / tiffin shop", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/ajuphvampmwkqegpqymt", alt: "Vegetable uttapam with sambar and coconut chutney" },
      { title: "Vegetable Soup", items: ["vegetable soup", "carrot and mixed vegetables", "coriander"], where: "Hotel", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/yd0yeaq44pdgbjidafcp", alt: "Bowl of vegetable soup with carrot and coriander" }
    ]
  }
];

const storePicks = [
  ["🍌", "Fresh fruit", "Banana, apple, guava, orange, papaya, watermelon, pomegranate"],
  ["🥥", "Tender coconut", "Fresh tender coconut or unsweetened coconut water"],
  ["🥚", "Eggs", "Boiled eggs or eggs to boil in the room kitchen"],
  ["🥛", "Plain curd", "Unsweetened plain curd / yogurt"],
  ["🧃", "Buttermilk", "Plain or lightly spiced buttermilk; avoid sugary versions"],
  ["🥛", "Milk", "Plain milk without added sugar"],
  ["🧀", "Paneer", "Fresh paneer for an easy protein side"],
  ["🫘", "Roasted chana", "Plain or lightly salted roasted chana"],
  ["🥜", "Peanuts", "Roasted or boiled peanuts; preferably lightly salted"],
  ["🌰", "Nuts", "Almonds, walnuts and mixed unsalted nuts"],
  ["🌱", "Sprouts", "Fresh moong sprouts or mixed sprouts"],
  ["🥒", "Fresh vegetables", "Cucumber, tomato, carrot, onion and capsicum"],
  ["🍞", "Whole-wheat bread", "Choose a simple whole-wheat loaf for quick meals"],
  ["🥣", "Rolled oats", "Plain oats rather than flavoured sugary sachets"],
  ["🥣", "Unsweetened muesli", "Choose versions with little or no added sugar"],
  ["🫓", "Idli / dosa batter", "Fresh fermented batter available in many local stores"],
  ["🌾", "Ragi dosa batter / mix", "Finger-millet dosa batter or instant mix"],
  ["🫘", "Adai batter / mix", "Mixed-lentil adai batter or instant mix"],
  ["🥣", "Sathu maavu / health mix", "Plain multigrain health mix; check added sugar"],
  ["🥫", "Ready chana / rajma", "Choose plain or lower-oil versions when possible"],
  ["🌾", "Millet / ragi semiya", "Millet flakes, ragi semiya or other simple millet bases"],
  ["🌽", "Boiled corn", "Plain sweet corn with lemon and light seasoning"],
  ["🍘", "Makhana", "Plain roasted makhana rather than heavily flavoured packs"],
  ["🫙", "Peanut butter", "Unsweetened peanut butter with peanuts as the main ingredient"]
];

const mealSections = document.getElementById("mealSections");

const style = document.createElement("style");
style.textContent = `
  .availability { margin-top:12px; display:inline-flex; padding:5px 8px; border-radius:999px; background:#eef4e7; color:#276749; font-size:.72rem; font-weight:700; }
  @media(max-width:700px){.availability{margin-top:8px;font-size:.68rem;padding:4px 7px}}
`;
document.head.appendChild(style);

mealSections.innerHTML = mealGroups.map(group => `
  <section class="section meal-section" id="${group.id}">
    <div class="section-heading">
      <div>
        <span class="section-label">${group.icon} ${group.label}</span>
        <h2>${group.title}</h2>
        <p>${group.note}</p>
      </div>
      <span class="option-count">${group.meals.length} options</span>
    </div>
    <div class="meal-grid">
      ${group.meals.map((meal, index) => `
        <article class="meal-card">
          <div class="meal-image-wrap">
            <img src="${meal.image}" alt="${meal.alt}" loading="lazy" />
            <span class="option-number">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="meal-content">
            <h3>${meal.title}</h3>
            <ul>${meal.items.map(item => `<li>${item}</li>`).join("")}</ul>
            <span class="availability">${meal.where}</span>
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`).join("");

const totalMeals = mealGroups.reduce((total, group) => total + group.meals.length, 0);
const menuSummary = document.querySelector(".menu-summary");
if (menuSummary) {
  const optionCount = menuSummary.querySelector("span:nth-child(2) strong");
  if (optionCount) optionCount.textContent = totalMeals;
  if (!menuSummary.querySelector(".store-summary")) {
    menuSummary.insertAdjacentHTML("beforeend", `<span class="store-summary"><strong>${storePicks.length}</strong> store picks</span>`);
  }
}

const introText = document.querySelector(".menu-intro p");
if (introText) introText.textContent = "Tamil Nadu-friendly choices you can usually find in hotels, tiffin shops, messes, fruit shops or grocery stores. Photos match the listed dish.";

const stockSection = document.querySelector(".stock-section");
if (stockSection) {
  const label = stockSection.querySelector(".section-label");
  const heading = stockSection.querySelector("h2");
  const note = stockSection.querySelector(".section-heading p");
  const grid = stockSection.querySelector(".stock-grid");
  if (label) label.textContent = "STORE & ROOM PICKS";
  if (heading) heading.textContent = "Easy items to buy in Tamil Nadu stores";
  if (note) note.textContent = "Keep a few of these ready so you always have a simple option when hotel food is inconvenient.";
  if (grid) grid.innerHTML = storePicks.map(([icon, title, description]) => `<article><span>${icon}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join("");
}

document.querySelectorAll('.desktop-nav a[href="#stock"]').forEach(link => link.textContent = "Store picks");
document.querySelectorAll('.mobile-menu a[href="#stock"]').forEach(link => link.innerHTML = "<span>🛒</span> Store picks");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  mobileMenu.hidden = open;
  menuButton.setAttribute("aria-expanded", String(!open));
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
