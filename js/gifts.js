/* ==========================================
   GIFT CARD ANIMATION
========================================== */

const giftCards = document.querySelectorAll(".gift-card");

giftCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

    card.addEventListener("click", (e) => {

        e.preventDefault();

        // Ripple Effect
        const ripple = document.createElement("span");

        ripple.classList.add("gift-ripple");

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        card.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

            window.location.href = card.href;

        }, 500);

    });

});
