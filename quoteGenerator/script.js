let previousQuote = null;
let previousFont = null;

function generateQuote() {
    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost"
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
            author: "Albert Einstein"
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
        },
        {
            quote: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            quote: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
            author: "Maya Angelou"
        }
    ];


    let arrayIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[arrayIndex];

    //new quote gerated is not the same as the previous
    while (randomQuote.quote === previousQuote) {
        arrayIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[arrayIndex];
    } 
    previousQuote = randomQuote.quote;


    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;

    document.getElementById("author").innerHTML = quotes[arrayIndex].author;






    const fonts = ["Arial, sans-serif", "Georgia, serif", "Verdana, sans-serif", "Courier New, monospace"];
    let randomFont = getRandomElement(fonts)
    while (randomFont === previousFont) {
        randomFont = getRandomElement(fonts);
    } previousFont = randomFont;
    document.body.style.fontFamily = randomFont;


    console.log(`Generated quote at index ${arrayIndex} with selected font: ${randomFont}`)
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

window.onload = function () {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}



