//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentActive = 1;

    updateButtons();

    nextButton.addEventListener('click', function () {
        currentActive++;

        if (currentActive > circles.length) {
            currentActive = circles.length;
        }

        updateCircles();
        updateButtons();
    });

    prevButton.addEventListener('click', function () {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        updateCircles();
        updateButtons();
    });

    function updateCircles() {
        circles.forEach((circle, index) => {
            if (index < currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    function updateButtons() {
        prevButton.disabled = currentActive === 1;
        nextButton.disabled = currentActive === circles.length;
    }
});
