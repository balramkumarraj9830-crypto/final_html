document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider2");

    if (!slider) {
        return;
    }


    /*
    ==========================================
    SETTINGS
    ==========================================
    */

    // Speed increase karne ke liye value badhayein
    // 0.5 = slow
    // 1   = normal
    // 1.5 = fast
    // 2   = very fast

    const speed = 9;


    /*
    ==========================================
    VARIABLES
    ==========================================
    */

    let position = 0;
    let animationFrame = null;

    // Original images ki quantity
    const originalItems = 14;


    /*
    ==========================================
    LOOP WIDTH CALCULATION
    ==========================================
    */

    function getLoopWidth() {

        const firstItem = slider.children[0];
        const secondItem = slider.children[1];

        if (!firstItem || !secondItem) {
            return 0;
        }


        const firstWidth =
            firstItem.getBoundingClientRect().width;


        const firstLeft =
            firstItem.getBoundingClientRect().left;

        const secondLeft =
            secondItem.getBoundingClientRect().left;


        const gap =
            secondLeft -
            (firstLeft + firstWidth);


        return (firstWidth + gap) * originalItems;
    }


    /*
    ==========================================
    ANIMATION
    ==========================================
    */

    function animateCarousel() {

        position -= speed;


        const loopWidth = getLoopWidth();


        if (loopWidth > 0 && Math.abs(position) >= loopWidth) {

            /*
            First 14 images complete ho gayi hain.

            Position ko wapas starting point
            par la rahe hain.

            User ko jump visible nahi hoga
            kyunki same images ka duplicate
            already available hai.
            */

            position += loopWidth;
        }


        slider.style.transform =
            `translate3d(${position}px, 0, 0)`;


        animationFrame =
            requestAnimationFrame(animateCarousel);
    }


    /*
    ==========================================
    START
    ==========================================
    */

    animateCarousel();


    /*
    ==========================================
    RESIZE HANDLING
    ==========================================
    */

    let resizeTimeout;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimeout);


        resizeTimeout = setTimeout(function () {

            position = 0;

            slider.style.transform =
                "translate3d(0, 0, 0)";

        }, 150);

    });


    /*
    ==========================================
    OPTIONAL:
    HOVER PAR PAUSE
    ==========================================
    */

    const carousel =
        document.getElementById("infiniteCarousel");


    carousel.addEventListener("mouseenter", function () {

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }

    });


    carousel.addEventListener("mouseleave", function () {

        if (!animationFrame) {
            animateCarousel();
        }

    });

});