let cart = 0;

function showSection(id, element) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active-link");
    });

    if (element) {
        element.classList.add("active-link");
    }
}

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
    alert("Item added to cart!");
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting GlowSkin!");
    this.reset();
});

function bookService() {
    alert("Your service has been booked successfully!");
}

function readMore() {
    alert("Full blog content coming soon!");
}