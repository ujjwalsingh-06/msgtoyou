const apology = `My Love,

Before you leave this page, there's one thing I want to say.

I'm sorry.

Sorry for every moment I made you feel unheard.

Sorry for every tear that ever fell because of me.

Sorry for every argument that stole your smile.

I know I can't change the past.

But I can promise you that I'll keep learning, growing, and becoming a better man every single day.

You deserve love that feels safe.

You deserve patience.

You deserve respect.

You deserve honesty.

And you deserve someone who chooses you every single day.

That is the man I want to become.

Thank you for never giving up on us.

Thank you for loving me even with my flaws.

I hope that years from now, we'll look back at these difficult moments and smile because we chose each other instead of giving up.

I love you more than words will ever be able to explain.

Forever Yours,

ujjwal  ❤️`;

const text = document.getElementById("apologyText");

let i = 0;

function typeApology(){

    if(i < apology.length){

        text.innerHTML += apology.charAt(i);

        i++;

        setTimeout(typeApology,25);

    }

}

typeApology();
