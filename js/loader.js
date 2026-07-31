const loader = document.getElementById("loader");

const mainContent = document.getElementById("mainContent");

document.addEventListener("click", startWebsite, { once: true });

document.addEventListener("touchstart", startWebsite, { once: true });

function startWebsite() {

    playMusic();

    loader.classList.add("loader-hide");

    setTimeout(() => {

        loader.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 900);

}
