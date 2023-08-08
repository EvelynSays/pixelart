// Get all image wrappers
const imageWrappers = document.querySelectorAll('.image-wrapper');

// Add event listeners for mouseover and click
imageWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseover', () => {
        wrapper.classList.add('wiggle');
    });

    // Add a transitionend event listener to remove the wiggle class
    wrapper.addEventListener('transitionend', () => {
        wrapper.classList.remove('wiggle');
    });

    wrapper.addEventListener('click', () => {
        const imageUrl = wrapper.querySelector('img').src;
        openImageModal(imageUrl);
    });
});

// Open modal with the clicked image
function openImageModal(imageUrl) {
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalImage = document.createElement('img');
    modalImage.src = imageUrl;
    modalContent.appendChild(modalImage);
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.appendChild(modalContent);
    
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });
}
