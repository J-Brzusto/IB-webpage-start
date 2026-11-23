
// GRANADA EEF WEBSITE
// Navigation Functionality

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    // Mobile navigation menu

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const isOpen = navigation.classList.contains("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "&times;" : "☰";

        });

    }

    // Close menu when a navigation link is clicked

    const navigationLinks = document.querySelectorAll(".navigation a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navigation && menuToggle) {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = "☰";

            }

        });

    });

});

