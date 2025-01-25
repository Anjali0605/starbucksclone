// JavaScript to toggle visibility of menu items
//  based on the selected category
function showItems(categoryId) {
    // Get all menu containers
    const menuContainers = 
    document.querySelectorAll('.menu-container');

    // Loop through all containers and hide them
    menuContainers.forEach((container) => {
        if (container.id === categoryId) {
            // Show the selected category
            container.style.display = 'block';
        } else {
            // Hide the other categories
            container.style.display = 'none';
        }
    });
}

// Initially, hide all menu containers except 
// the first one (optional setup)
window.addEventListener('DOMContentLoaded', () => {
    const menuContainers = 
    document.querySelectorAll('.menu-container');
    menuContainers.forEach((container, index) => {
        container.style.display = index === 0 ? 'block' : 'none'; // Show the first container
    });
});
