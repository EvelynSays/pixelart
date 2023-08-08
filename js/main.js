// main.js
document.addEventListener('DOMContentLoaded', () => {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    imageWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const imageUrl = wrapper.querySelector('img').src;
            openImageModal(imageUrl);
        });
    });
});

function openImageModal(imageUrl) {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const modalImage = document.createElement('img');
    modalImage.src = imageUrl;
    modalContent.appendChild(modalImage);

    modalOverlay.appendChild(modalContent);

    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });
}

