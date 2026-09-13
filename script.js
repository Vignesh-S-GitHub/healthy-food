const mealGroups = [
  {
    id: "breakfast",
    icon: "🌅",
    label: "BREAKFAST",
    title: "Start simple",
    note: "Choose one complete breakfast combination.",
    meals: [
      {
        title: "Idli + Sambar + Boiled Eggs",
        items: ["3 idli", "sambar", "2 boiled eggs"],
        image: "https://www.arise-app.com/images/dishes/en/idli-sambar-with-boiled-eggs-xdkpr4.webp",
        alt: "Three idlis with sambar and boiled eggs"
      },
      {
        title: "Dosa + Sambar + Chutneys",
        items: ["1 dosa", "sambar", "coconut, mint and tomato chutneys"],
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/29/7d4750d1-32e9-4cc8-9192-643a41a87824_7e3a3574-16ad-4152-8659-651e6b13eb14.jpg_compressed",
        alt: "Dosa with sambar and three chutneys"
      },
      {
        title: "Oats + Banana + Almonds",
        items: ["oatmeal", "banana slices", "chopped almonds"],
        image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/mandelmilch.jpg",
        alt: "Oatmeal topped with banana and almonds"
      },
      {
        title: "Ven Pongal + Sambar + Chutney",
        items: ["ven pongal", "sambar", "coconut chutney"],
        image: "https://media.assettype.com/deccanherald%2F2025-01-14%2Fo6y3h8uc%2FVen_Pongal.jpg?rect=0%2C0%2C2359%2C3145",
        alt: "Ven pongal with sambar and coconut chutney"
      },
      {
        title: "Poha + Peanuts + Lemon",
        items: ["poha", "roasted peanuts", "lemon and coriander"],
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=900&q=82",
        alt: "Poha with peanuts lemon and coriander"
      }
    ]
  },
  {
    id: "lunch",
    icon: "☀️",
    label: "LUNCH",
    title: "Balanced office lunch",
    note: "Practical lunch plates with clear combinations.",
    meals: [
      {
        title: "Rice + Dal + Vegetables + Egg",
        items: ["white rice", "dal", "vegetable poriyal", "1 boiled egg"],
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/6/23/51f8fd99-e683-4c5e-a976-5e39a27f4640_74f8ee65-9ff1-463d-a934-b37414f49d63.jpg",
        alt: "Rice with dal vegetable poriyal and boiled egg"
      },
      {
        title: "Chapati + Dal + Vegetable Curry",
        items: ["chapati", "yellow dal", "mixed vegetable curry"],
        image: "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080",
        alt: "Chapati with yellow dal and mixed vegetable curry"
      },
      {
        title: "Rice + Fish Curry + Vegetables",
        items: ["white rice", "fish curry", "mixed vegetables"],
        image: "https://www.arise-app.com/images/dishes/en/fish-curry-with-rice-and-vegetables-auvdy7.webp",
        alt: "Rice with fish curry and vegetables"
      },
      {
        title: "Lemon Rice + Vegetable Raita",
        items: ["lemon rice", "peanuts and curry leaves", "vegetable raita"],
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2026/3/2/50908a15-d934-4feb-8c9c-3dc8cd697efa_c323faf6-62ba-4444-b44e-252c016ddb42.jpg",
        alt: "Lemon rice with vegetable raita"
      },
      {
        title: "Rajma + Rice",
        items: ["rajma curry", "steamed rice"],
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
        alt: "Rajma curry served with steamed rice"
      }
    ]
  },
  {
    id: "snacks",
    icon: "🍎",
    label: "EVENING SNACKS",
    title: "Keep evening hunger easy",
    note: "Small options that are easy to keep at work or in your room.",
    meals: [
      {
        title: "Curd + Banana + Nuts",
        items: ["plain curd", "banana slices", "chopped nuts"],
        image: "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTBfcGhvdG9fb2ZfZGVsaWNpb3VzX3lvZ3VydF93aXRoX2JhbmFuYV9pbl9icm93bl85Y2RjNDllNS1mZjJkLTRkYjgtOWIyOC1hOWEwOWFlNTkyNjhfMS5qcGc.jpg",
        alt: "Curd bowl with banana and chopped nuts"
      },
      {
        title: "Roasted Chana",
        items: ["1 bowl roasted chana"],
        image: "https://desimithas.in/cdn/shop/files/Roasted-Channa-2.jpg?v=1755067700",
        alt: "Bowl of roasted chana"
      },
      {
        title: "Spiced Buttermilk",
        items: ["1 glass buttermilk", "coriander and spices"],
        image: "https://nonprod-media.webdunia.com/public_html/_media/te/img/article/2019-03/19/full/1552984559-8653.jpg",
        alt: "Glass of spiced buttermilk"
      },
      {
        title: "Roasted Chickpea Bhel",
        items: ["roasted chickpeas", "cucumber and tomato", "carrot, herbs and lemon"],
        image: "https://img-global.cpcdn.com/steps/3ab9629c1cc5eb0e/400x400cq80/photo.jpg",
        alt: "Roasted chickpea bhel with cucumber tomato carrot herbs and lemon"
      },
      {
        title: "Fruit Bowl + Nuts",
        items: ["banana and apple", "seasonal fruit", "almonds or walnuts"],
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=82",
        alt: "Fresh fruit bowl topped with nuts"
      }
    ]
  },
  {
    id: "dinner",
    icon: "🌙",
    label: "DINNER",
    title: "Finish light and filling",
    note: "Keep dinner straightforward with one complete plate.",
    meals: [
      {
        title: "Chapati + Dal + Vegetable Curry",
        items: ["chapati", "yellow dal", "mixed vegetable curry"],
        image: "https://bangeras-online.com/cdn/shop/files/3_3f2c2a41-7ac1-4c54-a90b-d42d1f31de23.webp?v=1751004808&width=1080",
        alt: "Chapati with yellow dal and mixed vegetable curry"
      },
      {
        title: "Egg Dosa + Sambar + Chutney",
        items: ["egg dosa", "sambar", "chutney"],
        image: "https://ik.imagekit.io/fpcle7dmn/images/thumbs/0021222_egg-pepper-dosa.jpeg",
        alt: "Egg dosa with sambar and chutney"
      },
      {
        title: "Chicken + Vegetables + Rice",
        items: ["chicken", "broccoli, carrot and peppers", "white rice"],
        image: "https://images.deliveryhero.io/image/global-menu-service/OP_SE/vendor/kvxi/product/17e7c88b-4d1f-4e28-8a40-1b9063113394.jpg?width=900",
        alt: "Chicken with mixed vegetables and white rice"
      },
      {
        title: "Vegetable Upma + Chutneys + Sambar",
        items: ["vegetable upma", "coconut and tomato chutneys", "sambar"],
        image: "https://www.dakshinbhojnam.com/img/1%2811%29.jpg",
        alt: "Vegetable upma with chutneys and sambar"
      },
      {
        title: "Vegetable Khichdi + Curd",
        items: ["vegetable khichdi", "plain curd"],
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=82",
        alt: "Vegetable khichdi served with plain curd"
      }
    ]
  }
];

const mealSections = document.getElementById("mealSections");

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
            <ul>
              ${meal.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`).join("");

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
