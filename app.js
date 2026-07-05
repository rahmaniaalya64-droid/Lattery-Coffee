const menuProducts = [
    
    {
        id: 1,
        name: "Affogato",
        category: "coffee",
        price: 28000,
        desc: "Biji kopi pilihan khas Lattery dengan cita rasa seimbang, aroma cokelat, dan ice cream.",
        imgText: `<img src="affogato.jpg" alt="Affogato">`
    },
    {
        id: 2,
        name: "Matcha Latte",
        category: "soft-brews",
        price: 25000,
        desc: "Kombinasi sempurna antara matcha premium Jepang yang autentik dan susu segar yang creamy.",
        imgText: `<img src="best-2.jpg" alt="Matcha Latte">`
    },
    {
        id: 3,
        name: "Butterscotch Seasalt",
        category: "soft-brews",
        price: 30000,
        desc: "Kombinasi sempurna rasa manis butterscotch dan sentuhan garam laut yang unik, memberikan pengalaman rasa yang berbeda.",
        imgText: `<img src="best-3.jpg" alt="Butterscotch Seasalt">`
    },
    {
        id: 4,
        name: "Caramel Frappuccino",
        category: "soft-brews",
        price: 34000,
        desc: "Minuman dingin yang menyegarkan dengan campuran kopi, susu, es, dan saus karamel manis yang lezat.",
        imgText: `<img src="best-4.jpg" alt="Caramel Frappuccino">`
    },
    {
        id: 5,
        name: "Fudgy Brownie Ice Cream",
        category: "pastry",
        price: 25000,
        desc: "Kombinasi sempurna antara brownies cokelat yang lembut dan es krim vanilla yang creamy, memberikan sensasi manis dan lezat dalam setiap suapan.",
        imgText: `<img src="best-5.jpg" alt="Fudgy Brownie Ice Cream">`
    },
    {
        id: 6,
        name: "Burnt Cheesecake",
        category: "pastry",
        price: 30000,
        desc: "Kue keju panggang yang memiliki permukaan karamelisasi yang khas, memberikan rasa manis dan gurih yang seimbang.",
        imgText: `<img src="best-6.jpg" alt="Burnt Cheesecake">`
    },
    {
        id: 7,
        name: "Mango Breeze",
        category: "mocktails",
        price: 28000,
        desc: "Minuman segar dengan rasa manis dan asam dari mangga, memberikan sensasi tropis yang menyegarkan.",
        imgText: `<img src="best-7.jpg" alt="Mango Breeze">`
    },
    {
        id: 8,
        name: "Mozarella Cheese Stick",
        category: "western",
        price: 30000,
        desc: "Stik keju gurih renyah dengan isian keju mozarella melimpah yang meleleh sempurna saat disajikan panas.",
        imgText: `<img src="best-8.jpg" alt="Mozarella Cheese Stick">`
    },

    
    { id: 102, name: "Expresso", category: "coffee", price: 20000, desc: "Kopi hitam murni yang diseduh dengan metode espresso.", imgText: `<img src="expresso.jpg" alt="Expresso">` },
    { id: 103, name: "Americano", category: "coffee", price: 20000, desc: "Kopi hitam murni yang diseduh dengan metode americano.", imgText: `<img src="americano.jpg" alt="Americano">` },
    { id: 104, name: "Coffee Latte", category: "coffee", price: 25000, desc: "Kopi susu lembut dengan tekstur velvet.", imgText: `<img src="coffe-latte.jpg" alt="Coffee Latte">` },
    { id: 105, name: "Cappuccino", category: "coffee", price: 28000, desc: "Kopi dengan lapisan susu berbusa yang lembut.", imgText: `<img src="cappuccino.jpg" alt="Cappuccino">` },
    { id: 106, name: "Caramel Macchiato", category: "coffee", price: 33000, desc: "Kopi susu lembut dengan sirup caramel.", imgText: `<img src="caramel-macchiato.jpg" alt="Caramel Macchiato">` },
    { id: 107, name: "Kopi Susu Gula Aren", category: "coffee", price: 24000, desc: "Kopi susu lembut dengan perpaduan gula aren.", imgText: `<img src="kopi-susu-gula-aren.jpg" alt="Kopi Susu Gula Aren">` },

   
    { id: 204, name: "Pink Matcha", category: "soft-brews", price: 28000, desc: "Minuman matcha dengan rasa cerry yang lezat.", imgText: `<img src="pink-matcha.jpg" alt="Pink Matcha">` },
    { id: 205, name: "Red Velvet", category: "soft-brews", price: 24000, desc: "Minuman berwarna merah dengan rasa kue red velvet yang lezat.", imgText: `<img src="red-velvet-latte.jpg" alt="Red Velvet">` },
    { id: 206, name: "Taro Latte", category: "soft-brews", price: 25000, desc: "Rasa talas manis lembut non-coffee yang ramah di lambung.", imgText: `<img src="taro-latte.jpg" alt="Taro Latte">` },
    { id: 207, name: "Choco Milkshake", category: "soft-brews", price: 23000, desc: "Minuman susu cokelat yang lezat.", imgText: `<img src="choco-milkshake.jpg" alt="Choco Milkshake">` },

    
    { id: 302, name: "Lemon Tea", category: "mocktails", price: 20000, desc: "Teh lemon segar dengan rasa asam manis yang menyegarkan.", imgText: `<img src="lemon-tea.jpg" alt="Lemon Tea">` },
    { id: 303, name: "Lychee Tea", category: "mocktails", price: 22000, desc: "Teh leci segar dengan rasa manis yang lezat.", imgText: `<img src="lychee-tea.jpg" alt="Lychee Tea">` },
    { id: 304, name: "Clasic Virgin Mojito", category: "mocktails", price: 25000, desc: "Soda jernih dingin dengan potongan lemon asli dan daun mint.", imgText: `<img src="clasic-virgin-mojito.jpg" alt="Classic Virgin Mojito">` },
    { id: 305, name: "Strawberry Basil Lemonade", category: "mocktails", price: 27000, desc: "Minuman lemonade segar dengan rasa stroberi dan daun basil.", imgText: `<img src="strawberry-basil-lemonade.jpg" alt="Strawberry Basil Lemonade">` },
    { id: 306, name: "Blue Citrus Ocean", category: "mocktails", price: 26000, desc: "Minuman citrus segar dengan sirup blueberry, lemon, dan mint.", imgText: `<img src="blue-citrus-ocean.jpg" alt="Blue Citrus Ocean">` },
    { id: 307, name: "Berry Pop Moctail", category: "mocktails", price: 29000, desc: "Minuman berbagai buah berwarna cerah dengan rasa manis dan asam.", imgText: `<img src="berry-pop-moctail.jpg" alt="Berry Pop Mocktail">` },

    
    { id: 403, name: "Croissant", category: "pastry", price: 23000, desc: "Pastry mentega renyah dengan krim coklat manis di dalamnya.", imgText: `<img src="croisant.jpg" alt="Croissant">` },
    { id: 404, name: "Churros Chocolate Dip", category: "pastry", price: 25000, desc: "Churros manis dengan cocolan cokelat.", imgText: `<img src="churros-chocolate-dip.jpg" alt="Churros Chocolate Dip">` },
    { id: 405, name: "Cinnamon Roll", category: "pastry", price: 25000, desc: "Roti gulung kayu manis wangi dengan lelehan gula putih royal.", imgText: `<img src="cinnamon-roll.jpg" alt="Cinnamon Roll">` },
    { id: 406, name: "Waffle With Maple Syrup", category: "pastry", price: 24000, desc: "Waffle lembut dengan sirup maple yang manis.", imgText: `<img src="waffle-with-maple-syrup.jpg" alt="Waffle With Maple Syrup">` },
    { id: 407, name: "Chocolate Chips Cookie", category: "pastry", price: 20000, desc: "cookies cokelat dengan chip cokelat di dalamnya.", imgText: `<img src="chocolate-chips-cookie.jpg" alt="Chocolate Chips Cookie">` },

    
    { id: 502, name: "French Fries", category: "western", price: 25000, desc: "Kentang goreng gurih garing.", imgText: `<img src="french-fries.jpg" alt="French Fries">` },
    { id: 503, name: "Mix Platter", category: "western", price: 40000, desc: "Kombinasi dari berbagai makanan western favorit.", imgText: `<img src="mix-platter.jpg" alt="Mix Platter">` },
    { id: 504, name: "Onion Rings", category: "western", price: 23000, desc: "bawang bombay goreng renyah.", imgText: `<img src="onion-rings.jpg" alt="Onion Rings">` },
    { id: 505, name: "Sandwich", category: "western", price: 22000, desc: "Sandwich lezat dengan berbagai isian.", imgText: `<img src="sandwich.jpg" alt="Sandwich">` },
    { id: 506, name: "Spicy Chicken Wings", category: "western", price: 40000, desc: "Sayap ayam pedas yang lezat.", imgText: `<img src="spicy-chicken-wings.jpg" alt="Spicy Chicken Wings">` },
    { id: 507, name: "Beef Burger", category: "western", price: 38000, desc: "Daging patty tebal juicy, keju cheddar, bawang bombay karamel.", imgText: `<img src="beef-burger.jpg" alt=" Beef Burger">` }
];


let cart = JSON.parse(localStorage.getItem("lattery_cart")) || [];

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const cartSidebar = document.getElementById("cart-sidebar");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");

const productModal = document.getElementById("product-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalTitle = document.getElementById("modal-product-title");
const modalCategory = document.getElementById("modal-product-category");
const modalDesc = document.getElementById("modal-product-desc");
const modalPrice = document.getElementById("modal-product-price");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");

const checkoutForm = document.getElementById("checkout-form");
const checkoutSummaryItems = document.getElementById("checkout-summary-items");
const checkoutTotalPrice = document.getElementById("checkout-total-price");

 
function createCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <div class="prod-img-placeholder" style="cursor: pointer;">${product.imgText}</div>
        <p class="category-tag">${product.category.replace('-', ' ')}</p>
        <h4 class="product-title" style="cursor: pointer; font-family: 'Playfair Display', serif; margin: 5px 0;">${product.name}</h4>
        <div class="price-row">
            <strong>Rp ${product.price.toLocaleString('id-ID')}</strong>
            <button class="btn btn-primary add-to-cart-fast" data-id="${product.id}">+ Add</button>
        </div>
    `;
    card.querySelector(".prod-img-placeholder").addEventListener("click", () => openModal(product));
    card.querySelector("h4").addEventListener("click", () => openModal(product));
    card.querySelector(".add-to-cart-fast").addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });
    return card;
}


function renderBestSellers() {
    productGrid.innerHTML = "";
    
    const bestSellers = menuProducts.filter(p => p.id <= 8);
    bestSellers.forEach(prod => productGrid.appendChild(createCard(prod)));
}


function showCategoryCollection(category) {
    const collectionSection = document.getElementById("category-collection");
    const collectionTitle = document.getElementById("collection-title");
    const categoryGrid = document.getElementById("category-product-grid");

    if (category === "all" || category === "") {
        collectionSection.style.display = "none";
        return;
    }

    
    const filteredMenu = menuProducts.filter(p => p.category === category);
    
    categoryGrid.innerHTML = "";
    filteredMenu.forEach(prod => categoryGrid.appendChild(createCard(prod)));

    
    collectionTitle.textContent = category.replace('-', ' ') + " Collection";
    collectionSection.style.display = "block";
    
    collectionSection.scrollIntoView({ behavior: 'smooth' });
}


searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    productGrid.innerHTML = "";
    const matched = menuProducts.filter(p => p.id <= 8 && p.name.toLowerCase().includes(term));
    matched.forEach(prod => productGrid.appendChild(createCard(prod)));
});


cartToggleBtn.addEventListener("click", () => cartSidebar.classList.add("open"));
closeCartBtn.addEventListener("click", () => cartSidebar.classList.remove("open"));

function addToCart(productId) {
    const product = menuProducts.find(p => p.id === productId);
    const itemInCart = cart.find(item => item.id === productId);

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    cartSidebar.classList.add("open");
}

function updateCart() {
    localStorage.setItem("lattery_cart", JSON.stringify(cart));
    cartItemsContainer.innerHTML = "";
    let count = 0, total = 0;

    cart.forEach(item => {
        count += item.quantity;
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div style="max-width: 60%"><h5>${item.name}</h5><small>Rp ${item.price.toLocaleString('id-ID')}</small></div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="btn" onclick="changeQty(${item.id}, -1)" style="padding:2px 8px; background:#EEE; border:none; cursor:pointer;">-</button>
                <span>${item.quantity}</span>
                <button class="btn" onclick="changeQty(${item.id}, 1)" style="padding:2px 8px; background:#EEE; border:none; cursor:pointer;">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartCount.textContent = count;
    cartTotalPrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    updateCheckoutSummary(total);
}

function changeQty(id, amt) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += amt;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
    updateCart();
}

let activeModalId = null;
function openModal(product) {
    activeModalId = product.id;
    document.querySelector(".modal-img-placeholder").innerHTML = product.imgText;
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.category.toUpperCase();
    modalDesc.textContent = product.desc;
    modalPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    productModal.style.display = "flex";
}

closeModalBtn.addEventListener("click", () => productModal.style.display = "none");
modalAddToCartBtn.addEventListener("click", () => {
    if (activeModalId) { addToCart(activeModalId); productModal.style.display = "none"; }
});

function updateCheckoutSummary(total) {
    checkoutSummaryItems.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.style.display = "flex"; div.style.justifyContent = "space-between"; div.style.marginBottom = "10px";
        div.innerHTML = `<span>${item.name} <strong>(x${item.quantity})</strong></span><span>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>`;
        checkoutSummaryItems.appendChild(div);
    });
    checkoutTotalPrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) { alert("Keranjang kosong!"); return; }
    alert(`🎉 Pesanan Berhasil Dibuat!\nSilakan cek detail pesanan Anda di kasir.`);
    cart = []; updateCart(); checkoutForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    renderBestSellers();
    updateCart();
});



(function () {
    "use strict";

    var TRANSITION_MS = 350; 
   
    var pageGroups = {
        "hero": ["hero"],
        "catalog": ["catalog", "category-collection"],
        "gallery-section": ["gallery-section"],
        "checkout-section": ["checkout-section"]
    };

    var currentPage = null;

    function el(id) {
        return document.getElementById(id);
    }

    function getPageFromHash() {
        var hash = window.location.hash.replace("#", "");
        return pageGroups.hasOwnProperty(hash) ? hash : "hero";
    }

    function hidePage(pageKey) {
        var ids = pageGroups[pageKey] || [];
        ids.forEach(function (id) {
            var node = el(id);
            if (!node) return;

            if (id === "category-collection") {
                node.style.display = "none";
                return;
            }

            node.style.opacity = "0";
            (function (n) {
                setTimeout(function () {
                    n.style.display = "none";
                }, TRANSITION_MS);
            })(node);
        });
    }

    function showPage(pageKey) {
        var ids = pageGroups[pageKey] || [];
        ids.forEach(function (id) {
            var node = el(id);
            if (!node) return;

            if (id === "category-collection") {
                return; 
            }

            node.style.display = "";
            node.style.opacity = "0";
            void node.offsetWidth; 
            requestAnimationFrame(function () {
                node.style.opacity = "1";
            });
        });
    }

    function navigateTo(pageKey, options) {
        options = options || {};
        var push = options.push !== false;

        if (!pageGroups.hasOwnProperty(pageKey)) {
            pageKey = "hero";
        }

        if (pageKey === currentPage) {
            if (push) {
                history.pushState({ page: pageKey }, "", "#" + pageKey);
            }
            return;
        }

        var prevPage = currentPage;
        if (prevPage) {
            hidePage(prevPage);
        }

        var delay = prevPage ? TRANSITION_MS : 0;

        setTimeout(function () {
            showPage(pageKey);
            currentPage = pageKey;
        }, delay);

        if (push) {
            history.pushState({ page: pageKey }, "", "#" + pageKey);
        }

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    function setupInitialState() {
        var initialPage = getPageFromHash();

        Object.keys(pageGroups).forEach(function (key) {
            pageGroups[key].forEach(function (id) {
                if (id === "category-collection") return;

                var node = el(id);
                if (!node) return;

                if (key === initialPage) {
                    node.style.display = "";
                    node.style.opacity = "1";
                } else {
                    node.style.display = "none";
                    node.style.opacity = "0";
                }
            });
        });

        currentPage = initialPage;
        history.replaceState({ page: initialPage }, "", window.location.pathname + "#" + initialPage);
    }

    function bindLinks() {
        var links = document.querySelectorAll('a[href^="#"]');
        links.forEach(function (link) {
            var targetId = link.getAttribute("href").substring(1);
            if (!pageGroups.hasOwnProperty(targetId)) return;

            link.addEventListener("click", function (e) {
                e.preventDefault();
                navigateTo(targetId);

                var cartSidebar = el("cart-sidebar");
                if (cartSidebar) {
                    cartSidebar.classList.remove("open");
                }
            });
        });
    }

    function bindPopState() {
        window.addEventListener("popstate", function (e) {
            var pageKey = (e.state && e.state.page) || getPageFromHash();
            navigateTo(pageKey, { push: false });
        });
    }

    function initSpaRouter() {
        setupInitialState();
        bindLinks();
        bindPopState();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSpaRouter);
    } else {
        initSpaRouter();
    }
})();
