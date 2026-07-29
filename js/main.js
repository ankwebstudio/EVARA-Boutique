document.addEventListener("DOMContentLoaded", () => {

    const mannequin = document.getElementById("mannequin");

    const cards = document.querySelectorAll(".category-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            cards.forEach(c => c.classList.remove("active"));

            card.classList.add("active");

            const dress = card.dataset.dress;

            mannequin.style.opacity = ".1";
            mannequin.style.transform = "scale(.95)";
            mannequin.style.filter = "blur(4px)";

            setTimeout(() => {

                mannequin.src = `images/mannequin-${dress}.png`;

            },300);

            setTimeout(() => {

                mannequin.style.opacity = "1";
                mannequin.style.transform = "scale(1)";
                mannequin.style.filter = "blur(0px)";

            },350);

        });

    });

    document.querySelector(".category-list").addEventListener("mouseleave",()=>{

        cards.forEach(c=>c.classList.remove("active"));

        mannequin.style.opacity=".2";
        mannequin.style.transform="scale(.96)";
        mannequin.style.filter="blur(4px)";

        setTimeout(()=>{

            mannequin.src="images/mannequin-default.png";

        },300);

        setTimeout(()=>{

            mannequin.style.opacity="1";
            mannequin.style.transform="scale(1)";
            mannequin.style.filter="blur(0px)";

        },350);

    });

    // =====================
// Mobile Showroom
// =====================

const mobileImage = document.getElementById("mobileMannequin");

const mobileButtons = document.querySelectorAll(".mobile-category");

mobileButtons.forEach(button=>{

button.addEventListener("click",()=>{

mobileButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const dress=button.dataset.dress;

mobileImage.style.opacity=".2";
mobileImage.style.transform="scale(.96)";

setTimeout(()=>{

if(dress==="default"){

mobileImage.src="images/mannequin-default.png";

}else{

mobileImage.src=`images/mannequin-${dress}.png`;

}

mobileImage.style.opacity="1";
mobileImage.style.transform="scale(1)";

},300);

});

});

});