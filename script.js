// script.js
function addFood(foodImage) {
    // Create a new image element for the food
    const foodImg = document.createElement('img');
    foodImg.src = foodImage;
    foodImg.style.position = 'absolute';
    foodImg.style.bottom = '10px'; // Adjust positioning as needed
    foodImg.style.right = '10px';  // Adjust positioning as needed
    foodImg.style.width = '100px'; // Adjust size as needed
    foodImg.style.borderRadius = '8px';
    foodImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    
    // Add the food image to the foodOverlay div
    const overlay = document.getElementById('foodOverlay');
    overlay.innerHTML = ''; // Clear any existing food image
    overlay.appendChild(foodImg);
}
