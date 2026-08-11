/* =========================================
   KALYANI PORTFOLIO - SCRIPT.JS
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= CURRENT YEAR ================= */

    const footer = document.querySelector("footer");

    if (footer) {

        const paragraphs = footer.querySelectorAll("p");

        paragraphs.forEach(function (paragraph) {

            if (paragraph.textContent.includes("2026")) {

                paragraph.textContent =
                    "© " + new Date().getFullYear() +
                    " Kalyani. All Rights Reserved.";

            }

        });

    }


    /* ================= SMOOTH NAVIGATION ================= */

    const navLinks =
        document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ================= PROJECT BUTTONS ================= */

    const projectLinks =
        document.querySelectorAll(".project-links a");

    projectLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            this.style.opacity = "0.7";

            setTimeout(() => {

                this.style.opacity = "1";

            }, 300);

        });

    });


    /* ================= CONTACT LINKS ================= */

    const contactLinks =
        document.querySelectorAll(".contact-links a");

    contactLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Contact link opened: " +
                this.textContent.trim()
            );

        });

    });


    /* ================= PAGE READY ================= */

    console.log(
        "Kalyani Portfolio loaded successfully 🚀"
    );

});
