// accessibility enhancements

// Add ARIA attributes to elements for better accessibility
function enhanceAccessibility() {
    const elements = document.querySelectorAll('[data-accessibility]');
    elements.forEach(element => {
        const attributes = JSON.parse(element.getAttribute('data-accessibility'));
        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        });
    });
}

// performance optimizations

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => {
                    img.removeAttribute('data-src');
                };
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });
}

// Helper function to highlight elements
function highlightElement(element) {
    element.style.border = '2px solid yellow';
    setTimeout(() => {
        element.style.border = '';
    }, 2000);
}

// Export functions for integration
export { enhanceAccessibility, lazyLoadImages, highlightElement };