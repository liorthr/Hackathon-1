// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add 'active' class to element in view
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.2 // Trigger when 20% of the element is visible
});

// Select the elements to be observed
const columns = document.querySelectorAll('.w3-animate-left');

// Observe each column element
columns.forEach(column => {
    observer.observe(column);
});


// Get all elements with the class 'w3-animate-*'
const animatedElements = document.querySelectorAll('.w3-animate-top, .w3-animate-bottom');

// Intersection Observer options
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin around the root
  threshold: 0.2 // Trigger when 20% of the element is visible
};

// Intersection Observer callback function
const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // Add 'active' class to element in view
      observer2.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
}, options);

// Observe each animated element
animatedElements.forEach(element => {
  observer2.observe(element);
});
