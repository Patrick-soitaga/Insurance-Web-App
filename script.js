// Navigation menu toggle//

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Toggle navigation menu on click//
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

// Close navigation menu on link click (for mobile)//
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// footer year update
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Making the Hero section dynamic.


const messages = [
    "Protecting What Matters Most", 
    "Your Security is Our Priority", 
    "Comprehensive Insurance Solutions",
    "Peace of Mind for You and Your Loved Ones"];


const heroText = document.getElementById("hero-text");    

let messageIndex = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < messages[messageIndex].length){

heroText.textContent += messages[messageIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect, 80);

}

else{

setTimeout(eraseEffect, 2000);

}

}

function eraseEffect(){

if(charIndex > 0){

heroText.textContent = messages[messageIndex].substring(0, charIndex - 1);

charIndex--;

setTimeout(eraseEffect, 40);

}

else{

messageIndex++;

if(messageIndex >= messages.length){
messageIndex = 0;
}

setTimeout(typeEffect, 500);

}

}

document.addEventListener("DOMContentLoaded", function(){
setTimeout(typeEffect, 500);
});

// Quote section dynamic content

const quoteMessage = [
    "Maryann Insurance Agency Quotation Portal...", 
    "Get your insurance quote instantly..."
];


const heroQuote = document.getElementById("hero-quote");

let quoteMessageIndex = 0;

setInterval(() => {
    heroQuote.textContent = quoteMessage[quoteMessageIndex];
    quoteMessageIndex++;
    if(quoteMessageIndex === quoteMessage.length){
        quoteMessageIndex = 0;
    }
}, 3000);


// ======================== Form validation ========================


// Additional coverage options

// Show or hide rider options based on selected cover type

const comprehensiveOption = document.getElementById("comprehensive");
const thirdPartyOption = document.getElementById("thirdParty");
const tpftOption = document.getElementById("thirdPartyFireTheft");
const riderSection = document.getElementById("riderSection");

comprehensiveOption.addEventListener("change", function(){
    // Show rider options when comprehensive cover is selected
    if(this.checked){
        riderSection.style.display = "block";
    }

});

thirdPartyOption.addEventListener("change", function(){
    // Hide rider options when third party cover is selected
    if(this.checked){
        riderSection.style.display = "none";
    }

});

tpftOption.addEventListener("change", function(){
    // Hide rider options when third party fire and theft cover is selected
    if(this.checked){
        riderSection.style.display = "none";
    }

});

// Premium calculation based on cover type, vehicle age, and vehicle value

const form = document.getElementById("quoteForm");

form.addEventListener("submit", function(event){

event.preventDefault();

const vehicleValue = document.getElementById("value").value;

const coverType = document.querySelector('input[name="coverType"]:checked').value;
const additionalCoverage = document.querySelectorAll('input[name="additionalCoverage"]:checked');

let premium = 0;
// Calculate the number of years since the vehicle was manufactured
let numberOfYears = currentYear - parseInt(document.getElementById("year").value);

if(coverType === "thirdParty"){
    premium = 7500;
}

else if(coverType === "comprehensive"){
    if(vehicleValue >= 2500000 && numberOfYears <= 15){
        // if the vehicle value is greater than or equal to 2,500,000, the premium is calculated as 6% of the vehicle value minimum.
        premium = vehicleValue * 0.03;
        // Premium minimum set to Ksh.30000 default
    }
    else if(vehicleValue >= 1500000 && numberOfYears <= 15){
        premium = vehicleValue * 0.035;
    }
    else if(vehicleValue >= 1500000 && numberOfYears <= 15){
        premium = vehicleValue * 0.0375;
    }
    else if(vehicleValue >= 500000 && numberOfYears <= 15){
        premium = vehicleValue * 0.04;
    }
    else if(vehicleValue >= 400000 && numberOfYears <= 15){
        premium = vehicleValue * 0.06;
    }
    else{
        alert("Vehicle value must be at least KES 400,000 and less than 15 years old for comprehensive cover.");
    }
}

else if(coverType === "tpft"){
    premium = vehicleValue * 0.025;
}

document.getElementById("result").textContent =
"Estimated Premium: KES " + premium.toLocaleString();

});



// ======================== End of form validation ========================

// ======================== Insurance Section ========================