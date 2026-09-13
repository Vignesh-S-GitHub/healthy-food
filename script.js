const meals = [
  ["Idli + Sambar + Eggs","Breakfast","3 idli, generous sambar and 2 boiled eggs. Simple, filling and easy to find in Chennai.",["hotel","protein","quick"],"Top pick","https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=82"],
  ["Dosa + Sambar + Omelette","Breakfast","Plain dosa with sambar and an omelette. Prefer plain over butter or ghee-heavy versions.",["hotel","protein"],"Hotel","https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=82"],
  ["Oats + Milk + Banana","Breakfast","Add almonds or walnuts for texture. Works well when you are eating in your room.",["room","quick"],"5 min","https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=82"],
  ["Adai + Sambar","Breakfast","A lentil-based option with more protein than many plain tiffin items.",["hotel","protein"],"Protein","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82"],
  ["South Indian Office Plate","Lunch","Rice + sambar/dal + 2 vegetables + curd. Add egg, fish or chicken if available.",["protein"],"Balanced","https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=82"],
  ["Chapati + Dal + Sabji","Lunch","A dependable office-cafeteria choice with carbs, protein and vegetables.",["protein"],"Office","https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=82"],
  ["Rice + Fish Curry + Veg","Lunch","Keep the rice moderate and make vegetables and protein a substantial part of the plate.",["protein"],"Protein","https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=82"],
  ["Fruit + Roasted Chana","Evening snack","Banana, apple or guava paired with roasted chana is easy to keep at work or in your room.",["room","quick","protein"],"Easy","https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=82"],
  ["Buttermilk + Peanuts","Evening snack","A light option for hot Chennai evenings. Choose unsalted or lightly salted peanuts.",["room","quick"],"Quick","https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=82"],
  ["Curd + Banana + Nuts","Evening snack","Works as a substantial snack when dinner will be late.",["room","quick","protein"],"Room","https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=82"],
  ["Chapati + Dal + Vegetables","Dinner","A simple repeatable dinner. Keep vegetables and dal generous rather than adding extra chapati.",["protein"],"Daily","https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=82"],
  ["Dosa + Sambar + Egg","Dinner","A convenient Chennai dinner when you are ordering from a hotel.",["hotel","protein","quick"],"Hotel","https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=82"],
  ["Chicken + Veg + Small Rice","Dinner","Choose grilled, home-style or less oily chicken over deep-fried versions.",["protein"],"Protein","https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=82"],
  ["Ready Chana + Bread + Curd","Dinner","A backup room dinner when you cannot cook and do not want to order fast food.",["room","quick","protein"],"Backup","https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=82"]
].map(([title,meal,description,tags,badge,image]) => ({title,meal,description,tags,badge,image}));

const grid = document.getElementById("mealGrid");
const filterButtons = [...document.querySelectorAll(".filter")];
const randomMealBtn = document.getElementById("randomMealBtn");
const quickPick = document.getElementById("quickPick");
const quickPickTitle = document.getElementById("quickPickTitle");
const quickPickText = document.getElementById("quickPickText");
const quickPickImage = document.getElementById("quickPickImage");
const quickPickFallback = document.getElementById("quickPickFallback");

function renderMeals(filter = "all") {
  const visible = filter === "all" ? meals : meals.filter(m => m.tags.includes(filter));
  grid.innerHTML = visible.map(m => `
    <article class="meal-card">
      <div class="meal-photo-wrap"><img class="meal-photo" src="${m.image}" alt="${m.title}" loading="lazy"></div>
      <div class="meal-body">
        <div class="meal-card-top"><span class="meal-type">${m.meal.toUpperCase()}</span><span class="badge">${m.badge}</span></div>
        <h3>${m.title}</h3><p>${m.description}</p>
        <div class="meal-tags">${m.tags.map(t => `<span>#${t}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}

filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderMeals(button.dataset.filter);
}));

randomMealBtn.addEventListener("click", () => {
  const meal = meals[Math.floor(Math.random() * meals.length)];
  quickPickTitle.textContent = `${meal.meal}: ${meal.title}`;
  quickPickText.textContent = meal.description;
  quickPickImage.src = meal.image;
  quickPickImage.alt = meal.title;
  quickPickImage.hidden = false;
  quickPickFallback.hidden = true;
  quickPick.scrollIntoView({ behavior: "smooth", block: "center" });
});

renderMeals();
