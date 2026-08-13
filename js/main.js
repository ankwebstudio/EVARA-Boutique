document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
            DESKTOP COLLECTION SHOWCASE
    ========================================= */

    const mannequin =
        document.getElementById("showcaseMannequin");

    const cards =
        document.querySelectorAll(".collection-card");

    const showcaseTitle =
        document.getElementById("showcaseTitle");

    const showcaseDescription =
        document.getElementById("showcaseDescription");


    const collectionData = {

        saree: {
            image: "images/mannequin-saree.png",
            title: "Sarees",
            description:
                "Timeless silhouettes crafted for graceful occasions."
        },

        churidar: {
            image: "images/mannequin-churidar.png",
            title: "Churidars",
            description:
                "Effortless elegance designed for everyday beauty."
        },

        coord: {
            image: "images/mannequin-coord.png",
            title: "Co-ord Sets",
            description:
                "Modern silhouettes for the contemporary woman."
        },

        kurti: {
            image: "images/mannequin-kurti.png",
            title: "Kurtis",
            description:
                "Elegant everyday styles with effortless comfort."
        },

        party: {
            image: "images/mannequin-party.png",
            title: "Party Edit",
            description:
                "Statement styles made to make an entrance."
        },

        bridal: {
            image: "images/mannequin-bridal.png",
            title: "Bridal Edit",
            description:
                "Beautifully curated pieces for your forever moments."
        }

    };


    /* =========================================
            COLLECTION CARD CLICK
    ========================================= */

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            const dress = card.dataset.dress;

            const data = collectionData[dress];

            if (!data || !mannequin) return;


            /* Active card */

            cards.forEach(c =>
                c.classList.remove("active")
            );

            card.classList.add("active");


            /* Fade out */

            mannequin.style.opacity = "0.15";
            mannequin.style.transform = "scale(.95)";
            mannequin.style.filter = "blur(4px)";


            setTimeout(() => {

                mannequin.src = data.image;

                if (showcaseTitle) {
                    showcaseTitle.textContent = data.title;
                }

                if (showcaseDescription) {
                    showcaseDescription.textContent =
                        data.description;
                }

            }, 300);


            /* Fade in */

            setTimeout(() => {

                mannequin.style.opacity = "1";
                mannequin.style.transform = "scale(1)";
                mannequin.style.filter = "blur(0)";

            }, 350);

        });

    });


    /* =========================================
            MOBILE SHOWROOM
    ========================================= */

    const mobileImage =
        document.getElementById("mobileMannequin");

    const mobileButtons =
        document.querySelectorAll(".mobile-category");


    mobileButtons.forEach(button => {

        button.addEventListener("click", () => {

            mobileButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");


            const dress =
                button.dataset.dress;


            if (!mobileImage) return;


            /* Fade out */

            mobileImage.style.opacity = ".2";
            mobileImage.style.transform = "scale(.96)";


            setTimeout(() => {

                if (dress === "default") {

                    mobileImage.src =
                        "images/mannequin-default.png";

                } else {

                    mobileImage.src =
                        `images/mannequin-${dress}.png`;

                }


                /* Fade in */

                mobileImage.style.opacity = "1";
                mobileImage.style.transform = "scale(1)";

            }, 300);

        });

    });

});
