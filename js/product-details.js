/* =====================================================
   EVARA BOUTIQUE
   PRODUCT DETAILS
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = {

    saree: {

        name: "Timeless Silk Saree",

        category: "SAREES",

        price: "₹2,499",

        image: "images/product-1.png",

        description:
            "Elegant drape with a refined finish.",

        fabric:
            "Premium Silk",

        occasion:
            "Festive & Wedding",

        details:
            "A timeless silk saree designed with a graceful drape and refined traditional detailing. Perfect for festive occasions, weddings, celebrations and elegant evening gatherings."

    },


    anarkali: {

        name: "Elegant Anarkali Set",

        category: "CHURIDARS",

        price: "₹1,899",

        image: "images/product-2.png",

        description:
            "Graceful layers designed for effortless elegance.",

        fabric:
            "Premium Georgette",

        occasion:
            "Festive & Party",

        details:
            "A beautifully layered Anarkali set featuring elegant detailing and a flowing silhouette. Designed for effortless movement and sophisticated ethnic styling."

    },


    coord: {

        name: "Modern Muse Co-ord",

        category: "CO-ORD SETS",

        price: "₹1,699",

        image: "images/product-3.png",

        description:
            "Contemporary styling with a sophisticated edge.",

        fabric:
            "Soft Blend Fabric",

        occasion:
            "Casual & Semi-Formal",

        details:
            "A contemporary co-ord set designed for modern everyday elegance. Its relaxed silhouette makes it perfect for outings, brunches and semi-formal occasions."

    },


    dress: {

        name: "Evening Statement Dress",

        category: "PARTY WEAR",

        price: "₹2,199",

        image: "images/product-4.png",

        description:
            "Designed to make every entrance unforgettable.",

        fabric:
            "Premium Net & Lining",

        occasion:
            "Party & Evening",

        details:
            "An elegant statement dress featuring delicate embellishment and a flowing silhouette. Designed for special evenings, celebrations and memorable occasions."

    }

};


/* =====================================================
   GET PRODUCT FROM URL
===================================================== */

const urlParams =
    new URLSearchParams(window.location.search);

const productKey =
    urlParams.get("product");


/* =====================================================
   SELECT PRODUCT
===================================================== */

const product =
    products[productKey];


/* =====================================================
   LOAD PRODUCT
===================================================== */

if (product) {

    document.getElementById("productImage").src =
        product.image;


    document.getElementById("productImage").alt =
        product.name;


    document.getElementById("productCategory")
        .textContent =
        product.category;


    document.getElementById("productName")
        .textContent =
        product.name;


    document.getElementById("productPrice")
        .textContent =
        product.price;


    document.getElementById("productDescription")
        .textContent =
        product.description;


    document.getElementById("productFabric")
        .textContent =
        product.fabric;


    document.getElementById("productOccasion")
        .textContent =
        product.occasion;


    document.getElementById("productFullDetails")
        .textContent =
        product.details;


    /* =================================================
       WHATSAPP
    ================================================= */

    const whatsappNumber =
        "919XXXXXXXXX";


    const whatsappMessage =
        `Hi Evara Boutique, I am interested in ${product.name} priced at ${product.price}. Please share more details.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    document.getElementById("whatsappButton").href =
        whatsappURL;


    /* =================================================
       PAGE TITLE
    ================================================= */

    document.title =
        `${product.name} | Evara Boutique`;



} else {

    /* =================================================
       INVALID PRODUCT
    ================================================= */

    document.querySelector(".product-details-page")
        .innerHTML = `

            <div class="product-not-found">

                <h2>
                    Product Not Found
                </h2>

                <p>
                    Sorry, this product is currently unavailable.
                </p>

                <a href="index.html">
                    Back to Collections
                </a>

            </div>

        `;

}
