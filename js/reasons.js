const reasons = [

"I love the way you smile.",
"I love how safe I feel with you.",
"You always make my day better.",
"Your happiness means everything to me.",
"You believe in me even when I don't.",
"You make ordinary moments unforgettable.",
"Your laugh is my favorite sound.",
"You make my heart feel at home.",
"You always know how to calm me down.",
"I can be completely myself with you.",
"You make every memory beautiful.",
"You inspire me to become a better person.",
"I love the way you care for everyone.",
"Your eyes make me forget the whole world.",
"You make distance feel smaller.",
"Every conversation with you is special.",
"I love how we can laugh over the smallest things.",
"You are my peace after every storm.",
"You make my future worth dreaming about.",
"And finally... because you're simply YOU. ❤️"

];

const container = document.getElementById("reasonsContainer");

reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.className = "reason-card";

    card.innerHTML = `
        <h2>❤️ ${index + 1}</h2>
        <p>${reason}</p>
    `;

    container.appendChild(card);

});
