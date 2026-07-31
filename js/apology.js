const apologyText = document.getElementById("apologyText");

const apology = `My Love,

I'm truly sorry for every moment I hurt you, whether through my words, my actions, or my silence.

You never deserved those tears.

Thank you for loving me despite my imperfections.

I promise to learn from my mistakes, cherish you more, and spend every day giving you the love, respect, and happiness you truly deserve.

Forever Yours,

ujjwal  ❤️`;

if (apologyText) {

    let i = 0;

    apologyText.innerHTML = "";

    function type() {

        if (i < apology.length) {

            apologyText.innerHTML += apology.charAt(i);

            i++;

            setTimeout(type, 28);

        }

    }

    type();

}
