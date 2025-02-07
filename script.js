function calculateIngredients() 
{
    const quantity = parseInt(document.getElementById('quantity').value);
    const ingredientsList = document.getElementById('ingredients');

    // Error handling: ensure quantity is a positive integer
    if (!quantity || quantity <= 0) 
    {
        alert('Please enter a positive number of servings.');
        return;
    }

    let baseServings;
    let ingredients = [];

    // Check the page (recipe type) based on the title of the page
    const pageTitle = document.title.toLowerCase();

    // Define recipes based on the page title
    if (pageTitle.includes("brownies")) 
    {
        baseServings = 6; // Adjust based on brownie pan size
        ingredients = 
        [
            { name: 'Unsalted butter', amount: 2, unit: 'cups' },
            { name: 'Granulated sugar', amount: 1, unit: 'cups' },
            { name: 'Eggs', amount: 2, unit: 'large' },
            { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
            { name: 'All-purpose flour', amount: 2, unit: 'cups' },
            { name: 'Unsweetened cocoa powder', amount: 3, unit: 'cups' },
            { name: 'Salt', amount: 1, unit: 'tsp' },
            { name: 'Baking powder', amount: 1, unit: 'tsp' }
        ];
    } 
    else if (pageTitle.includes("cookies")) 
    {
        baseServings = 15; // Adjust based on cookie batch size
        ingredients = 
        [
            { name: 'Unsalted butter, softened', amount: 1, unit: 'cups' },
            { name: 'Granulated sugar', amount: 1, unit: 'cups' },
            { name: 'Packed brown sugar', amount: 1, unit: 'cups' },
            { name: 'Eggs', amount: 2, unit: 'large' },
            { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
            { name: 'All-purpose flour', amount: 3, unit: 'cups' },
            { name: 'Baking soda', amount: 1, unit: 'tsp' },
            { name: 'Salt', amount: 2, unit: 'tsp' },
            { name: 'Semi-sweet chocolate chips', amount: 2, unit: 'cups' }
        ];
    } 
    else if (pageTitle.includes("chocolate muffins")) 
    {
        baseServings = 6; // Adjust based on muffin batch size
        ingredients = 
        [
            { name: 'All-purpose flour', amount: 4, unit: 'cups' },
            { name: 'Unsweetened cocoa powder', amount: 2, unit: 'cups' },
            { name: 'Baking powder', amount: 1, unit: 'tsp' },
            { name: 'Baking soda', amount: 2, unit: 'tsp' },
            { name: 'Salt', amount: 1, unit: 'tsp' },
            { name: 'Granulated sugar', amount: 3, unit: 'cups' },
            { name: 'Packed brown sugar', amount: 1, unit: 'cups' },
            { name: 'Eggs', amount: 2, unit: 'large' },
            { name: 'Milk', amount: 1, unit: 'cups' },
            { name: 'Unsalted butter, melted', amount: 1, unit: 'cups' },
            { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
            { name: 'Semi-sweet chocolate chips', amount: 1, unit: 'cups' }
        ];
    }

    const multiplier = quantity / baseServings;
    ingredientsList.innerHTML = '';

    // Recalculate and display the adjusted ingredients
    ingredients.forEach(ingredient => {
        const newAmount = (ingredient.amount * multiplier).toFixed(1);
        const li = document.createElement('li');
        li.textContent = `${ingredient.name}: ${newAmount} ${ingredient.unit}`;
        ingredientsList.appendChild(li);
    });
}