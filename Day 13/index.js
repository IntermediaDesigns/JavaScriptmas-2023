/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
var dishes = [
    {name: 'Coq au Vin', lessThan4: 'Chicken Thighs', moreThan4: 'Whole Roasted Chicken'},
    {name: 'Beef Bourguignon', lessThan4: 'Beef Chuck', moreThan4: 'Beef Brisket'},
    {name: 'Seafood Paella', lessThan4: 'Shrimp and Mussels', moreThan4: 'Lobster and Clams'},
    {name: 'Roast Duck', lessThan4: 'Duck Breast', moreThan4: 'Whole Duck'},
    {name: 'Pork Chops', lessThan4: 'Boneless Pork Chops', moreThan4: 'Bone-in Pork Chops'},
    {name: 'Lamb Stew', lessThan4: 'Lamb Shoulder', moreThan4: 'Lamb Leg'}
];

var vegetarianDishes = [
    {name: 'Veggie Stir Fry', lessThan4: 'Tofu', moreThan4: 'Seitan'},
    {name: 'Vegetarian Lasagna', lessThan4: 'Spinach and Ricotta', moreThan4: 'Eggplant and Zucchini'},
    {name: 'Vegetarian Tacos', lessThan4: 'Black Beans and Corn', moreThan4: 'Grilled Portobello Mushrooms'},
    {name: 'Veggie Burger', lessThan4: 'Black Bean Burger', moreThan4: 'Mushroom Burger'},
    {name: 'Vegetarian Pizza', lessThan4: 'Margherita Pizza', moreThan4: 'Veggie Supreme Pizza'},
    {name: 'Vegetarian Pasta', lessThan4: 'Pasta Primavera', moreThan4: 'Pasta alla Norma'}
];


document.getElementById('btn').addEventListener('click', function() {
    var numGuests = document.getElementById('num-input').value;
    var isVegetarian = document.getElementById('vegetarian-input').checked;
    var foodElement = document.getElementById('food');
    var dish;

    if (isVegetarian) {
        dish = vegetarianDishes[Math.floor(Math.random() * vegetarianDishes.length)];
    } else {
        dish = dishes[Math.floor(Math.random() * dishes.length)];
    }

    if (numGuests <= 4) {
        foodElement.innerHTML = dish.name + ': ' + '<br><br>' + dish.lessThan4;
    } else {
        foodElement.innerHTML = dish.name + ': ' + '<br><br>' + dish.moreThan4;
    }
});


