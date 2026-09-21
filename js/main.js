document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       PRODUCT DATA
    ========================================================= */

    const products = {

        saree: {
            name: "Timeless Silk Saree",
            category: "SAREES",
            price: "₹2,499",
            priceNumber: 2499,
            image: "images/product-1.png",
            description:
                "Elegant drape with a refined finish.",
            fabric: "Premium Silk",
            occasion: "Festive & Wedding",
            details:
                "A timeless silk saree designed with a graceful drape and refined traditional detailing. Perfect for festive occasions, weddings, celebrations and elegant evening gatherings."
        },

        anarkali: {
            name: "Elegant Anarkali Set",
            category: "CHURIDARS",
            price: "₹1,899",
            priceNumber: 1899,
            image: "images/product-2.png",
            description:
                "Graceful layers designed for effortless elegance.",
            fabric: "Premium Georgette",
            occasion: "Festive & Party",
            details:
                "A beautifully layered Anarkali set featuring elegant detailing and a flowing silhouette. Designed for effortless movement and sophisticated ethnic styling."
        },

        coord: {
            name: "Modern Muse Co-ord",
            category: "CO-ORD SETS",
            price: "₹1,699",
            priceNumber: 1699,
            image: "images/product-3.png",
            description:
                "Contemporary styling with a sophisticated edge.",
            fabric: "Soft Blend Fabric",
            occasion: "Casual & Semi-Formal",
            details:
                "A contemporary co-ord set designed for modern everyday elegance. Its relaxed silhouette makes it perfect for outings, brunches and semi-formal occasions."
        },

        dress: {
            name: "Evening Statement Dress",
            category: "PARTY WEAR",
            price: "₹2,199",
            priceNumber: 2199,
            image: "images/product-4.png",
            description:
                "Designed to make every entrance unforgettable.",
            fabric: "Premium Net & Lining",
            occasion: "Party & Evening",
            details:
                "An elegant statement dress featuring delicate embellishment and a flowing silhouette. Designed for special evenings, celebrations and memorable occasions."
        }

    };


    /* =========================================================
       LOCAL STORAGE
    ========================================================= */

    let cart =
        JSON.parse(
            localStorage.getItem("evaraCart")
        ) || [];


    let wishlist =
        JSON.parse(
            localStorage.getItem("evaraWishlist")
        ) || [];


    /* =========================================================
       SAVE CART
    ========================================================= */

    function saveCart() {

        localStorage.setItem(
            "evaraCart",
            JSON.stringify(cart)
        );

    }


    /* =========================================================
       SAVE WISHLIST
    ========================================================= */

    function saveWishlist() {

        localStorage.setItem(
            "evaraWishlist",
            JSON.stringify(wishlist)
        );

    }


    /* =========================================================
       CART COUNT
    ========================================================= */

    function updateCartCount() {

        const cartCount =
            document.getElementById("cartCount");

        if (!cartCount) return;


        const total =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );


        cartCount.textContent = total;

    }


    /* =========================================================
       WISHLIST COUNT
    ========================================================= */

    function updateWishlistCount() {

        const wishlistCount =
            document.getElementById(
                "wishlistCount"
            );

        if (!wishlistCount) return;


        wishlistCount.textContent =
            wishlist.length;

    }


    /* =========================================================
       CART TOAST
    ========================================================= */

    function showMessage(message) {

        const oldMessage =
            document.querySelector(
                ".evara-cart-message"
            );


        if (oldMessage) {
            oldMessage.remove();
        }


        const messageBox =
            document.createElement("div");


        messageBox.className =
            "evara-cart-message";


        messageBox.textContent =
            message;


        document.body.appendChild(
            messageBox
        );


        setTimeout(() => {

            messageBox.classList.add(
                "show"
            );

        }, 10);


        setTimeout(() => {

            messageBox.classList.remove(
                "show"
            );


            setTimeout(() => {

                messageBox.remove();

            }, 300);

        }, 2000);

    }


    /* =========================================================
       ADD TO CART
    ========================================================= */

    function addToCart(productKey) {

        const product =
            products[productKey];


        if (!product) return;


        const existing =
            cart.find(
                item =>
                    item.productKey === productKey
            );


        if (existing) {

            existing.quantity += 1;

        }

        else {

            cart.push({

                productKey: productKey,

                name: product.name,

                price: product.price,

                priceNumber: product.priceNumber,

                image: product.image,

                quantity: 1

            });

        }


        saveCart();

        updateCartCount();


        showMessage(
            `${product.name} added to cart`
        );

    }


    /* =========================================================
       REMOVE FROM CART
    ========================================================= */

    function removeFromCart(productKey) {

        cart =
            cart.filter(
                item =>
                    item.productKey !== productKey
            );


        saveCart();

        updateCartCount();

    }


    /* =========================================================
       CHANGE CART QUANTITY
    ========================================================= */

    function changeCartQuantity(
        productKey,
        change
    ) {

        const item =
            cart.find(
                product =>
                    product.productKey === productKey
            );


        if (!item) return;


        item.quantity += change;


        if (item.quantity <= 0) {

            removeFromCart(productKey);

            return;

        }


        saveCart();

        updateCartCount();

    }


    /* =========================================================
       TOGGLE WISHLIST
    ========================================================= */

    function toggleWishlist(productKey) {

        const product =
            products[productKey];


        if (!product) return;


        const exists =
            wishlist.includes(productKey);


        if (exists) {

            wishlist =
                wishlist.filter(
                    key =>
                        key !== productKey
                );


            showMessage(
                `${product.name} removed from wishlist`
            );

        }

        else {

            wishlist.push(productKey);


            showMessage(
                `${product.name} added to wishlist`
            );

        }


        saveWishlist();

        updateWishlistCount();

        updateWishlistButtons();

        updateProductWishlistButton();

    }


    /* =========================================================
       UPDATE HOMEPAGE WISHLIST BUTTONS
    ========================================================= */

    function updateWishlistButtons() {

        document
            .querySelectorAll(
                ".product-wishlist"
            )
            .forEach(button => {

                const productKey =
                    button.dataset.product;


                const icon =
                    button.querySelector("i");


                if (
                    wishlist.includes(productKey)
                ) {

                    button.classList.add(
                        "active"
                    );


                    if (icon) {

                        icon.classList.remove(
                            "bi-heart"
                        );

                        icon.classList.add(
                            "bi-heart-fill"
                        );

                    }

                }

                else {

                    button.classList.remove(
                        "active"
                    );


                    if (icon) {

                        icon.classList.remove(
                            "bi-heart-fill"
                        );

                        icon.classList.add(
                            "bi-heart"
                        );

                    }

                }

            });

    }


    /* =========================================================
       HOMEPAGE ADD TO CART BUTTONS
    ========================================================= */

    document
        .querySelectorAll(
            ".product-cart"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productKey =
                        button.dataset.product;


                    addToCart(productKey);

                }
            );

        });


    /* =========================================================
       HOMEPAGE WISHLIST BUTTONS
    ========================================================= */

    document
        .querySelectorAll(
            ".product-wishlist"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productKey =
                        button.dataset.product;


                    toggleWishlist(
                        productKey
                    );

                }
            );

        });


    /* =========================================================
       WHATSAPP PRODUCT ENQUIRY
    ========================================================= */

    const whatsappNumber =
        "919XXXXXXXXX";


    document
        .querySelectorAll(
            ".product-enquiry"
        )
        .forEach(button => {

            const productKey =
                button.dataset.product;


            const product =
                products[productKey];


            if (!product) return;


            const message =
                `Hi Evara Boutique, I am interested in ${product.name} priced at ${product.price}. Please share more details.`;


            button.href =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            button.target = "_blank";

        });


    /* =========================================================
       PRODUCT DETAILS PAGE
    ========================================================= */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const productKey =
        urlParams.get("product");


    const currentProduct =
        products[productKey];


    if (currentProduct) {

        const productImage =
            document.getElementById(
                "productImage"
            );


        if (productImage) {

            productImage.src =
                currentProduct.image;

            productImage.alt =
                currentProduct.name;

        }


        const productCategory =
            document.getElementById(
                "productCategory"
            );


        if (productCategory) {

            productCategory.textContent =
                currentProduct.category;

        }


        const productName =
            document.getElementById(
                "productName"
            );


        if (productName) {

            productName.textContent =
                currentProduct.name;

        }


        const productPrice =
            document.getElementById(
                "productPrice"
            );


        if (productPrice) {

            productPrice.textContent =
                currentProduct.price;

        }


        const productDescription =
            document.getElementById(
                "productDescription"
            );


        if (productDescription) {

            productDescription.textContent =
                currentProduct.description;

        }


        const productFabric =
            document.getElementById(
                "productFabric"
            );


        if (productFabric) {

            productFabric.textContent =
                currentProduct.fabric;

        }


        const productOccasion =
            document.getElementById(
                "productOccasion"
            );


        if (productOccasion) {

            productOccasion.textContent =
                currentProduct.occasion;

        }


        const productFullDetails =
            document.getElementById(
                "productFullDetails"
            );


        if (productFullDetails) {

            productFullDetails.textContent =
                currentProduct.details;

        }


        /* =====================================================
           PRODUCT PAGE CART
        ===================================================== */

        const addToCartButton =
            document.getElementById(
                "addToCartButton"
            );


        if (addToCartButton) {

            addToCartButton.addEventListener(
                "click",
                () => {

                    addToCart(
                        productKey
                    );

                }
            );

        }


        /* =====================================================
           PRODUCT PAGE WISHLIST
        ===================================================== */

        const productWishlistButton =
            document.getElementById(
                "productWishlistButton"
            );


        function updateProductWishlistButton() {

            if (
                !productWishlistButton
            ) return;


            if (
                wishlist.includes(
                    productKey
                )
            ) {

                productWishlistButton.innerHTML =
                    `<i class="bi bi-heart-fill"></i> Saved to Wishlist`;

                productWishlistButton.classList.add(
                    "active"
                );

            }

            else {

                productWishlistButton.innerHTML =
                    `<i class="bi bi-heart"></i> Add to Wishlist`;

                productWishlistButton.classList.remove(
                    "active"
                );

            }

        }


        if (
            productWishlistButton
        ) {

            productWishlistButton.addEventListener(
                "click",
                () => {

                    toggleWishlist(
                        productKey
                    );

                }
            );

        }


        updateProductWishlistButton();


        /* =====================================================
           PRODUCT PAGE WHATSAPP
        ===================================================== */

        const whatsappButton =
            document.getElementById(
                "whatsappButton"
            );


        if (whatsappButton) {

            const message =
                `Hi Evara Boutique, I am interested in ${currentProduct.name} priced at ${currentProduct.price}. Please share more details.`;


            whatsappButton.href =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            whatsappButton.target =
                "_blank";

        }


        /* =====================================================
           PAGE TITLE
        ===================================================== */

        document.title =
            `${currentProduct.name} | Evara Boutique`;

    }


    /* =========================================================
       DESKTOP COLLECTION SHOWCASE
    ========================================================= */

    const mannequin =
        document.getElementById(
            "mannequin"
        );


    const cards =
        document.querySelectorAll(
            ".collection-card"
        );


    const showcaseTitle =
        document.getElementById(
            "showcaseTitle"
        );


    const showcaseDescription =
        document.getElementById(
            "showcaseDescription"
        );


    const collectionInfo = {

        saree: {
            title: "Sarees",
            description:
                "Timeless elegance for every beautiful occasion."
        },

        churidar: {
            title: "Churidars",
            description:
                "Effortless grace with a contemporary touch."
        },

        coord: {
            title: "Co-ord Sets",
            description:
                "Modern silhouettes designed for the modern muse."
        },

        kurti: {
            title: "Kurtis",
            description:
                "Everyday chic with effortless sophistication."
        },

        party: {
            title: "Party Edit",
            description:
                "Statement styles made to make an entrance."
        },

        bridal: {
            title: "Bridal Edit",
            description:
                "Elegant pieces for your most unforgettable moments."
        }

    };


    if (
        mannequin &&
        cards.length
    ) {

        cards.forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    cards.forEach(
                        c =>
                            c.classList.remove(
                                "active"
                            )
                    );


                    card.classList.add(
                        "active"
                    );


                    const dress =
                        card.dataset.dress;


                    const info =
                        collectionInfo[dress];


                    mannequin.style.opacity =
                        "0";


                    mannequin.style.transform =
                        "scale(.96)";


                    setTimeout(() => {

                        mannequin.src =
                            `images/mannequin-${dress}.png`;


                        if (
                            info &&
                            showcaseTitle &&
                            showcaseDescription
                        ) {

                            showcaseTitle.textContent =
                                info.title;


                            showcaseDescription.textContent =
                                info.description;

                        }


                        mannequin.style.opacity =
                            "1";


                        mannequin.style.transform =
                            "scale(1)";

                    }, 250);

                }
            );

        });


        const showcase =
            document.querySelector(
                ".collection-showcase"
            );


        if (showcase) {

            showcase.addEventListener(
                "mouseleave",
                () => {

                    cards.forEach(
                        card =>
                            card.classList.remove(
                                "active"
                            )
                    );


                    mannequin.style.opacity =
                        "0";


                    mannequin.style.transform =
                        "scale(.96)";


                    setTimeout(() => {

                        mannequin.src =
                            "images/mannequin-default.png";


                        if (
                            showcaseTitle
                        ) {

                            showcaseTitle.textContent =
                                "Discover Your Style";

                        }


                        if (
                            showcaseDescription
                        ) {

                            showcaseDescription.textContent =
                                "Hover over a collection to preview the look.";

                        }


                        mannequin.style.opacity =
                            "1";


                        mannequin.style.transform =
                            "scale(1)";

                    }, 250);

                }
            );

        }

    }


    /* =========================================================
       MOBILE SHOWROOM
    ========================================================= */

    const mobileImage =
        document.getElementById(
            "mobileMannequin"
        );


    const mobileButtons =
        document.querySelectorAll(
            ".mobile-category"
        );


    if (
        mobileImage &&
        mobileButtons.length
    ) {

        mobileButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    mobileButtons.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    const dress =
                        button.dataset.dress;


                    mobileImage.style.opacity =
                        "0";


                    mobileImage.style.transform =
                        "scale(.96)";


                    setTimeout(() => {

                        mobileImage.src =
                            `images/mannequin-${dress}.png`;


                        mobileImage.style.opacity =
                            "1";


                        mobileImage.style.transform =
                            "scale(1)";

                    }, 250);

                }
            );

        });

    }


    /* =========================================================
       INITIAL COUNTS
    ========================================================= */

    updateCartCount();

    updateWishlistCount();

    updateWishlistButtons();


    /* =========================================================
       AUTH MODAL
    ========================================================= */

    const loginTab =
        document.getElementById(
            "loginTab"
        );


    const registerTab =
        document.getElementById(
            "registerTab"
        );


    const loginForm =
        document.getElementById(
            "loginForm"
        );


    const registerForm =
        document.getElementById(
            "registerForm"
        );


    const switchToRegister =
        document.getElementById(
            "switchToRegister"
        );


    const switchToLogin =
        document.getElementById(
            "switchToLogin"
        );


    function showLogin() {

        if (!loginForm || !registerForm)
            return;


        loginForm.classList.remove(
            "d-none"
        );


        registerForm.classList.add(
            "d-none"
        );


        loginTab?.classList.add(
            "active"
        );


        registerTab?.classList.remove(
            "active"
        );

    }


    function showRegister() {

        if (!loginForm || !registerForm)
            return;


        registerForm.classList.remove(
            "d-none"
        );


        loginForm.classList.add(
            "d-none"
        );


        registerTab?.classList.add(
            "active"
        );


        loginTab?.classList.remove(
            "active"
        );

    }


    loginTab?.addEventListener(
        "click",
        showLogin
    );


    registerTab?.addEventListener(
        "click",
        showRegister
    );


    switchToRegister?.addEventListener(
        "click",
        showRegister
    );


    switchToLogin?.addEventListener(
        "click",
        showLogin
    );


    /* =========================================================
       PASSWORD SHOW / HIDE
    ========================================================= */

    document
        .querySelectorAll(
            ".password-toggle"
        )
        .forEach(toggle => {

            toggle.addEventListener(
                "click",
                function () {

                    const input =
                        this.parentElement
                            .querySelector(
                                "input"
                            );


                    const icon =
                        this.querySelector(
                            "i"
                        );


                    if (
                        !input ||
                        !icon
                    ) return;


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";


                        icon.classList.remove(
                            "bi-eye"
                        );


                        icon.classList.add(
                            "bi-eye-slash"
                        );

                    }

                    else {

                        input.type =
                            "password";


                        icon.classList.remove(
                            "bi-eye-slash"
                        );


                        icon.classList.add(
                            "bi-eye"
                        );

                    }

                }
            );

        });

});

function renderCartSidebar() {

    if (!sidebarContent) return;


    sidebarTitle.textContent =
        "Your Cart";


    cartSidebarFooter.style.display =
        "block";


    if (!cart.length) {

        sidebarContent.innerHTML = `

            <div class="sidebar-empty">

                <i class="bi bi-bag"></i>

                <h4>
                    Your cart is empty
                </h4>

                <p>
                    Add something beautiful
                    to your cart.
                </p>

            </div>

        `;


        cartSidebarFooter.style.display =
            "none";

        return;

    }


    sidebarContent.innerHTML =
        cart.map(item => `

            <div
                class="sidebar-product"
                data-product="${item.productKey}">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="sidebar-product-image">


                <div class="sidebar-product-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="sidebar-product-price">
                        ${item.price}
                    </div>


                    <div class="sidebar-quantity">

                        <button
                            type="button"
                            class="quantity-minus"
                            data-product="${item.productKey}">

                            −

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            class="quantity-plus"
                            data-product="${item.productKey}">

                            +

                        </button>

                    </div>


                    <button
                        type="button"
                        class="sidebar-remove"
                        data-product="${item.productKey}">

                        Remove

                    </button>

                </div>

            </div>

        `).join("");


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    item.priceNumber *
                    item.quantity
                ),
            0
        );


    document.getElementById(
        "cartSidebarTotal"
    ).textContent =
        `₹${total.toLocaleString("en-IN")}`;


    setupCartSidebarEvents();

    updateCartWhatsapp();

}

function setupCartSidebarEvents() {

    document
        .querySelectorAll(
            ".quantity-minus"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        button.dataset.product,
                        -1
                    );

                    renderCartSidebar();

                }
            );

        });


    document
        .querySelectorAll(
            ".quantity-plus"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        button.dataset.product,
                        1
                    );

                    renderCartSidebar();

                }
            );

        });


    document
        .querySelectorAll(
            ".sidebar-remove"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        button.dataset.product
                    );

                    renderCartSidebar();

                }
            );

        });

}

function setupWishlistSidebarEvents() {

    document
        .querySelectorAll(
            ".wishlist-add-cart"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addToCart(
                        button.dataset.product
                    );

                    renderWishlistSidebar();

                }
            );

        });


    document
        .querySelectorAll(
            ".wishlist-remove"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    toggleWishlist(
                        button.dataset.product
                    );

                    renderWishlistSidebar();

                }
            );

        });

}

function updateCartWhatsapp() {

    const whatsappButton =
        document.getElementById(
            "cartWhatsappButton"
        );


    if (!whatsappButton)
        return;


    if (!cart.length) {

        whatsappButton.style.display =
            "none";

        return;

    }


    whatsappButton.style.display =
        "flex";


    let message =
        "Hi Evara Boutique, I am interested in these products:%0A%0A";


    cart.forEach(item => {

        message +=
            `• ${item.name} × ${item.quantity} — ${item.price}%0A`;

    });


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    item.priceNumber *
                    item.quantity
                ),
            0
        );


    message +=
        `%0ATotal: ₹${total.toLocaleString("en-IN")}`;


    message +=
        "%0A%0APlease share availability and details.";


    const whatsappNumber =
        "919XXXXXXXXX";


    whatsappButton.href =
        `https://wa.me/${whatsappNumber}?text=${message}`;

}
