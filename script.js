const words = [
    "Fast api learner",
    "Java Developer",
    "Backend Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < words[wordIndex].length) {

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }
}


function deleteEffect() {

    if (charIndex > 0) {

        typing.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}


typeEffect();


// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thanks! Your message has been received 🚀");

    form.reset();

});