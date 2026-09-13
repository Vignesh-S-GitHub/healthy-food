const meals = [
  { title: "Idli + Sambar + Eggs", meal: "Breakfast", description: "3 idli, generous sambar and 2 boiled eggs. Easy to find and filling without being heavy.", tags: ["hotel", "protein", "quick"], badge: "Top pick" },
  { title: "Dosa + Sambar + Omelette", meal: "Breakfast", description: "Plain dosa with sambar and an omelette. Prefer plain over butter or ghee-heavy versions.", tags: ["hotel", "protein"], badge: "Hotel" },
  { title: "Oats + Milk + Banana", meal: "Breakfast", description: "A fast room-friendly option. Add a few almonds or walnuts if available.", tags: ["room", "quick"], badge: "5 min" },
  { title: "Adai + Sambar", meal: "Breakfast", description: "A lentil-based breakfast with more protein than many plain tiffin choices.", tags: ["hotel", "protein"], badge: "Protein" },
  { title: "South Indian Office Plate", meal: "Lunch", description: "Rice + sambar or dal + vegetables + curd. Add egg, fish or chicken when available.", tags: ["protein"], badge: "Balanced" },
  { title: "Chapati + Dal + Sabji", meal: "Lunch", description: "A dependable office-cafeteria meal with carbs, protein and vegetables.", tags: ["protein"], badge: "Office" },
  { title: "Rice + Fish Curry + Veg", meal: "Lunch", description: "Keep rice moderate and make vegetables and protein a meaningful part of the plate.", tags: ["protein"], badge: "Protein" },
  { title: "Fruit + Roasted Chana", meal: "Evening snack", description: "Banana, apple or guava with roasted chana works well at work or in your room.", tags: ["room", "quick", "protein"], badge: "Easy" },
  { title: "Buttermilk + Peanuts", meal: "Evening snack", description: "A light option for hot evenings. Choose unsalted or lightly salted peanuts.", tags: ["room", "quick"], badge: "Quick" },
  { title: "Curd + Banana + Nuts", meal: "Evening snack", description: "Useful as a substantial snack when dinner is going to be late.", tags: ["room", "quick", "protein"], badge: "Room" },
  { title: "Chapati + Dal + Vegetables", meal: "Dinner", description: "A simple repeatable dinner. Keep vegetables and dal generous instead of adding extra chapati.", tags: ["protein"], badge: "Daily" },
  { title: "Dosa + Sambar + Egg", meal: "Dinner", description: "A convenient Chennai dinner when ordering from a nearby hotel.", tags: ["hotel", "protein", "quick"], badge: "Hotel" },
  { title: "Chicken + Veg + Small Rice", meal: "Dinner", description: "Choose grilled, home-style or less oily chicken over deep-fried versions.", tags: ["protein"], badge: "Protein" },
  { title: "Ready Chana + Bread + Curd", meal: "Dinner", description: "A backup room dinner for days when cooking is not possible and fast food is not ideal.", tags: ["room", "quick", "protein"], badge: "Backup" }
];

const grid = document.getElementById("mealGrid");
const filterButtons = [...document.querySelectorAll(".filter")];
const randomMealBtn = document.getElementById("randomMealBtn");
const quickPick = document.getElementById("quickPick");
const quickPickTitle = document.getElementById("quickPickTitle");
const quickPickText = document.getElementById("quickPickText");
const themeToggle = document.getElementById("themeToggle");

function renderMeals(filter = "all") {
  const visibleMeals = filter === "all"
    ? meals
    : meals.filter((meal) => meal.tags.includes(filter));

  grid.innerHTML = visibleMeals.map((meal) => `
    <article class="meal-card">
      <div>
        <div class="meal-card-top">
          <span class="meal-type">${meal.meal.toUpperCase()}</span>
          <span class="badge">${meal.badge}</span>
        </div>
        <h3>${meal.title}</h3>
        <p>${meal.description}</p>
      </div>
      <div class="meal-tags" aria-label="Meal tags">
        ${meal.tags.map((tag) => `<span>#${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMeals(button.dataset.filter);
  });
});

randomMealBtn.addEventListener("click", () => {
  const meal = meals[Math.floor(Math.random() * meals.length)];
  quickPickTitle.textContent = `${meal.meal}: ${meal.title}`;
  quickPickText.textContent = meal.description;
  quickPick.scrollIntoView({ behavior: "smooth", block: "center" });
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("healthy-food-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Use light mode" : "Use dark mode");
}

const savedTheme = localStorage.getItem("healthy-food-theme");
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

renderMeals();
