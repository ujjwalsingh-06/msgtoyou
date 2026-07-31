const typingElement = document.getElementById("typing-text");

const message = `Before we start...

I just want you to know...

No matter what happens...

No matter how much we fight...

No matter how far we are...

I will always love you.

This little surprise is only for you.

Happy Girlfriend Day ❤️`;

let index = 0;

function typeText() {

    if (!typingElement) return;

    if (index < message.length) {

        typingElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeText, 45);

    }

}

window.addEventListener("load", () => {

    typeText();

});
