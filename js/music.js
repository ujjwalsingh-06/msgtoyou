const bgMusic = document.getElementById("bgMusic");

function playMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0.45;

    bgMusic.play().catch(() => {

        console.log("Autoplay blocked until user interaction.");

    });

}
