const heart = document.getElementById("heart");

// Make the heart grow when hovered over
heart.addEventListener("mouseover", () => {
    heart.style.transform = "scale(1.5)";
});

// Return to normal size when mouse leaves
heart.addEventListener("mouseout", () => {
    heart.style.transform = "scale(1)";
});
