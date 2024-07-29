document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const addItemButton = document.getElementById('add-item');

    addItemButton.addEventListener('click', () => {
        // Create a new grid item
        const newItem = document.createElement('div');
        newItem.className = 'grid-item';
        newItem.textContent = `Item ${grid.children.length + 1}`;
        
        // Append the new item to the grid
        grid.appendChild(newItem);
    });
});