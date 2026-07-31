const giftBox = document.getElementById("giftBox");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

const letter = `My Dearest Vrityanshi ❤️,

Happy Girlfriend's Day, My Love.

If you're reading this, it means you've opened one of the most special things I've ever created.

This isn't just a website.

It's a little piece of my heart made only for you.

Before you, life was just passing by.

After you, life started feeling beautiful.

Thank you for loving me when I wasn't perfect.

Thank you for believing in me when I couldn't believe in myself.

Thank you for staying.

Thank you for choosing me.

Every smile of yours becomes my favorite memory.

Every conversation with you becomes my favorite moment.

Every second spent with you is something I'll always cherish.

You are my peace.

You are my comfort.

You are my happiness.

You are my favorite person.

If I had one thousand lives...

I would still search for you.

I would still choose you.

Again.

Again.

And Again.

I love you more than words could ever explain.

Forever Yours,

Abhishek ❤️`;

if (giftBox) {

    giftBox.onclick = function () {

        giftBox.style.display = "none";
        envelopeContainer.style.display = "block";

    };

}

if (envelope) {

    envelope.onclick = function () {

        envelopeContainer.style.display = "none";
        paper.style.display = "block";

        typeLetter();

    };

}

function typeLetter() {

    let i = 0;

    letterText.innerHTML = "";

    const speed = 28;

    function typing() {

        if (i < letter.length) {

            letterText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}
