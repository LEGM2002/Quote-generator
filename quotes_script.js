//Quotes array
"use strict";

const quotesArray = [
    {
        id: 1,
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        id: 2, 
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        id: 3,
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        id: 4,
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        id: 5, 
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        id: 6,
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        id: 7, 
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe"
    },
    {
        id: 8, 
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        id: 9, 
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        id: 10, 
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    }
];

let activeId = 0; //fast accesibility using an id

function changeQuote(){
    function getRandomQuote(){
        const validIndex = Math.floor(Math.random() * quotesArray.length); //get a number between 1 and 10
        return quotesArray[validIndex];
    }
    
    let quote = getRandomQuote();
    
    while(quote.id === activeId){ //=== same value and same type
        quote = getRandomQuote(); //get another random quote
    }

    activeId = quote.id; //update the activeId

    function updateDOMQuoteElement(quote){
        const title = document.querySelector(".card .title"); //select something from the html
        const subtitle = document.querySelector(".card .subtitle");

        title.innerHTML = quote.quote;  //update the info in the html
        subtitle.innerHTML = quote.author;
    }
    
    updateDOMQuoteElement(quote);
}

changeQuote();

const changeQuoteButton = document.querySelector("#change-quote");
changeQuoteButton.addEventListener("click", changeQuote)

