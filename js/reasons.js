const reasons=[

"You make me smile.",
"You understand me.",
"You believe in me.",
"You make me feel safe.",
"You are beautiful.",
"You have the cutest smile.",
"You make ordinary days special.",
"You make my heart race.",
"You always stay in my thoughts.",
"You inspire me.",
"You support my dreams.",
"You make me laugh.",
"You are my peace.",
"You are my happiness.",
"You are my favorite person.",
"You are my home.",
"You make me feel complete.",
"You care for me.",
"You make me stronger.",
"You accept me as I am.",

// We'll add 80 more later.

];

const container=document.getElementById("reasonsContainer");

for(let i=0;i<100;i++){

const card=document.createElement("div");

card.className="reason-card";

card.innerHTML=`

<h2>${i+1}</h2>

<p>${reasons[i] || "Because you're simply you. ❤️"}</p>

`;

container.appendChild(card);

}
