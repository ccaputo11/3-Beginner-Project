
const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Change from hatching chick to baby chick
closedFace.addEventListener('click', () => {
    closedFace.style.display = 'none';
    openFace.style.display = 'block';
});

// Change back to hatching chick
openFace.addEventListener('click', () => {
    openFace.style.display = 'none';
    closedFace.style.display = 'block';
});
