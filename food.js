

// Function to handle the "Sign Up" button
function signupFunction() {
  // Replace with your sign-up logic or show a sign-up form/modal
  alert("Sign Up button clicked");
}

// Function to handle the "Login" button
function loginFunction() {
  // Replace with your login logic or show a login form/modal
  alert("Login button clicked");
}

// Function to add an item to the cart (you may need to implement cart functionality)
function addToCart(item) {
  // Replace with your cart logic
  alert("Added to cart: " + item);
}

// Function to search for food items
function searchFood() {
  var searchInput = document.getElementById("search").value.toLowerCase();
  var foodItems = document.querySelectorAll('.foodmenu .item');
  var matchingItems = [];

  foodItems.forEach(function (item) {
    var foodName = item.getAttribute('data-food').toLowerCase();
    if (foodName.includes(searchInput)) {
      matchingItems.push(item);
    }
  });

  var foodMenu = document.querySelector('.foodmenu');
  foodMenu.innerHTML = '';

  matchingItems.forEach(function (item) {
    foodMenu.appendChild(item);
  });

  foodItems.forEach(function (item) {
    if (!matchingItems.includes(item)) {
      foodMenu.appendChild(item);
    }
  });
}

// Attach event listeners to the "Add to Cart" buttons
var addCartButtons = document.querySelectorAll('.addcart');
addCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var foodItem = button.parentElement.getAttribute('data-food');
    addToCart(foodItem);
  });
});



