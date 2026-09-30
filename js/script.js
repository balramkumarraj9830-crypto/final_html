
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Navbar ke required elements
    // ==============================

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = menuBtn.querySelector("i");


    // ==============================
    // Menu Button Click
    // ==============================

    menuBtn.addEventListener("click", (e) => {

        // Click ko document tak jaane se rokta hai
        e.stopPropagation();

        // Mobile menu ko open / close karta hai
        mobileMenu.classList.toggle("hidden");

        // Bars icon ko X aur X ko Bars mein change karta hai
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });


    // ==============================
    // Mobile Menu Links
    // ==============================

    mobileMenu.querySelectorAll("a").forEach(link => {

        // Kisi link par click karne ke baad menu close hoga
        link.addEventListener("click", closeMenu);

    });


    // ==============================
    // Outside Click
    // ==============================

    document.addEventListener("click", (e) => {

        // Agar click menu aur button ke bahar hua
        if (
            !mobileMenu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {

            // Mobile menu close karo
            closeMenu();

        }

    });


    // ==============================
    // Close Menu Function
    // ==============================

    function closeMenu() {

        // Menu ko hide karta hai
        mobileMenu.classList.add("hidden");

        // Icon ko Bars par reset karta hai
        menuIcon.classList.add("fa-bars");

        // X icon ko remove karta hai
        menuIcon.classList.remove("fa-xmark");

    }

});

