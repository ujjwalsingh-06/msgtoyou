const gift = document.getElementById("giftBox");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

const letter = `My Dearest Vrityanshi ❤️,

const letter = `My Dearest Vrityanshi ❤️,

Happy Girlfriend's Day, my love.

If you're reading this, it means you've opened one of the most special things I've ever created.

This isn't just a website.

It's a little piece of my heart, made only for you.

Sometimes I wonder how someone can become so important to another person's life.

Then I think of you...

And suddenly the answer becomes so simple.

You did.

Without even trying, you became my peace, my comfort, my happiness, and the most beautiful part of my life.

Before you, life was just passing by.

After you, life started feeling meaningful.

Thank you for loving me on the days when I wasn't easy to love.

Thank you for standing beside me even when things weren't perfect.

Thank you for believing in me when I couldn't believe in myself.

Thank you for making ordinary days feel extraordinary.

Every moment with you has become one of my favorite memories.

Every laugh.

Every late-night conversation.

Every silly fight.

Every smile.

Every hug.

Every "I miss you."

Every "Good Morning."

Every "Good Night."

I carry every single one of those memories in my heart.

You're not just my girlfriend.

You're my best friend.

You're my safe place.

You're the first person I want to tell everything to.

You're the first person I think about when I wake up.

And the last person on my mind before I fall asleep.

I know I haven't always been perfect.

I've made mistakes.

I've hurt you.

I've disappointed you.

There were moments when I should have understood you better.

Moments when I should have listened more.

Moments when I should have loved you the way you deserved.

And for every single one of those moments...

I'm deeply sorry.

Not because I have to say it.

But because you deserve someone who makes you smile far more than he makes you cry.

If I could go back in time...

I would erase every tear that ever fell because of me.

I can't change the past.

But I can promise you something.

I will never stop trying to become a better man.

A better boyfriend.

A better best friend.

A better listener.

A better person.

For you.

Because you are worth every single effort.

I don't know what our future will look like.

Life changes.

People grow.

Situations change.

But there's one thing I never want to change.

The way I love you.

Because loving you has become the easiest and most beautiful thing I've ever done.

If someone asked me what happiness looks like...

I would show them your smile.

If someone asked me what peace feels like...

I would tell them it's being with you.

If someone asked me what true love means...

I would simply say...

Vrityanshi.

Out of billions of people in this world...

I found you.

And that will always be my favorite miracle.

If I had the chance to live this life a thousand times...

I would still search for you.

I would still choose you.

I would still fall in love with you.

Again.

Again.

And Again.

No matter what happens tomorrow...

No matter where life takes us...

No matter how difficult things become...

There will always be one thing that will never change.

My love for you.

Thank you for being my home.

Thank you for being my peace.

Thank you for being the best thing that has ever happened to me.

I love you more than words could ever explain.

More than time could ever measure.

More than this world could ever understand.

And I promise...

As long as my heart keeps beating...

It will always beat for you.

Forever & Always,

Yours,

ujjwal ❤️`;

gift.addEventListener("click", () => {

    gift.classList.add("openGift");

    setTimeout(() => {

        gift.style.display = "none";

        envelopeContainer.style.display = "block";

    }, 700);

});

envelope.addEventListener("click", () => {

    envelopeContainer.style.display = "none";

    paper.style.display = "block";

    typeLetter();

});

function typeLetter() {

    let i = 0;

    function typing() {

        if (i < letter.length) {

            letterText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(typing, 28);

        }

    }

    typing();

}

/* Floating Hearts */

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 20 + 18 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 600);
