const wishlist = [
  "Macbook Air M2", "iPhone 13", "Apple Watch Series 7", "New gaming PC"
  // TODO: Add more items here
];

let output = "";
wishlist.forEach(item => {
  output += `<p class="wishlist-item">${item}</p>`;
});

document.querySelector('.wishlist').innerHTML = output;
/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/