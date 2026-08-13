document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       DESKTOP COLLECTION SHOWCASE
    ========================================= */

    const mannequin = document.getElementById("mannequin");
    const cards = document.querySelectorAll(".collection-card");

    const showcaseTitle =
        document.getElementById("showcaseTitle");

    const showcaseDescription =
        document.getElementById("showcaseDescription");


    const collectionInfo = {

        saree: {
            title: "Sarees",
            description: "Timeless elegance for every beautiful occasion."
        },

        churidar: {
            title: "Churidars",
            description: "Effortless grace with a contemporary touch."
        },

        coord: {
            title: "Co-ord Sets",
            description: "Modern silhouettes designed for the modern muse."
        },

        kurti: {
            title: "Kurtis",
            description: "Everyday chic with effortless sophistication."
        },

        party: {
            title: "Party Edit",
            description: "Statement styles made to make an entrance."
        },

        bridal: {
            title: "Bridal Edit",
            description: "Elegant pieces for your most unforgettable moments."
        }

    };


    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            cards.forEach(c =>
                c.classList.remove("active")
            );

            card.classList.add("active");


            const dress = card.dataset.dress;

            const info = collectionInfo[dress];


            /* Fade out */

            mannequin.style.opacity = "0";
            mannequin.style.transform = "scale(.95)";


            setTimeout(() => {

                mannequin.src =
                    `images/mannequin-${dress}.png`;

                mannequin.style.opacity = "1";
                mannequin.style.transform = "scale(1)";


                if (info) {

                    showcaseTitle.textContent =
                        info.title;

                    showcaseDescription.textContent =
                        info.description;

                }

            }, 250);

        });

    });


    /* =========================================
       DESKTOP DEFAULT STATE
    ========================================= */

    const showcase = document.querySelector(
        ".collection-showcase"
    );


    if (showcase) {

        showcase.addEventListener("mouseleave", () => {

            cards.forEach(c =>
                c.classList.remove("active")
            );

            mannequin.style.opacity = "0";
            mannequin.style.transform = "scale(.95)";


            setTimeout(() => {

                mannequin.src =
                    "images/mannequin-default.png";

                mannequin.style.opacity = "1";
                mannequin.style.transform = "scale(1)";


                showcaseTitle.textContent =
                    "Discover Your Style";

                showcaseDescription.textContent =
                    "Hover over a collection to preview the look.";

            }, 250);

        });

    }


    /* =========================================
       MOBILE SHOWROOM
    ========================================= */

    const mobileImage =
        document.getElementById("mobileMannequin");

    const mobileButtons =
        document.querySelectorAll(".mobile-category");


    if (mobileImage && mobileButtons.length) {

        mobileButtons.forEach(button => {

            button.addEventListener("click", () => {

                mobileButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");


                const dress =
                    button.dataset.dress;


                mobileImage.style.opacity = "0";
                mobileImage.style.transform =
                    "scale(.96)";


                setTimeout(() => {

                    mobileImage.src =
                        `images/mannequin-${dress}.png`;

                    mobileImage.style.opacity = "1";
                    mobileImage.style.transform =
                        "scale(1)";

                }, 250);

            });

        });

    }

});
