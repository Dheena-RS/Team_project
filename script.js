// Task 3: JavaScript Section

// Make a function that applies 3 random colours - Green, Blue, and Red.
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// When someone clicks on any h5 tags, make them change to 3 random colours repeatable
document.addEventListener('DOMContentLoaded', () => {
    const h5Tags = document.querySelectorAll('h5');

    h5Tags.forEach(h5 => {
        h5.addEventListener('click', function() {
            // Apply a random color
            this.style.color = getRandomColor();
        });
        // Optional: Set cursor to pointer to indicate clickability
        h5.style.cursor = 'pointer';
    });
});
