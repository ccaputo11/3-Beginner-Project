const drinks = [
    { name: "Pumpkin Banana Bread", type: "Shake", emoji: "🥤" },
    { name: "Pumpkin Cinnamon Roll", type: "Shake", emoji: "🎃" },
    { name: "White Chocolate Pumpkin Pretzel", type: "Shake", emoji: "🥨" },
    { name: "Sweater Weather", type: "Tea", emoji: "🍁" },
    { name: "Fall Breeze", type: "Tea", emoji: "🍂" },
    { name: "Pumpkin Spice Latte", type: "Coffee", emoji: "☕" }
];

const drinkList = document.getElementById("drink-list");

drinks.forEach((drink) => {
    drinkList.innerHTML += `
        <div class="card">
            <div class="emoji">${drink.emoji}</div>
            <h2>${drink.name}</h2>
            <p>${drink.type}</p>
        </div>
    `;
});

