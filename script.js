// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Array of text to display in the paragraph
    const textArray = [
        "Welcome to our online store! We are delighted to have you here and appreciate your visit. Our team is dedicated to providing you with an exceptional shopping experience, from high-quality products to top-notch customer service. Feel free to explore our wide selection of items and don't hesitate to reach out if you have any questions or need assistance. Thank you for choosing us!Happy Shopping,mery shop",
        "Greetings, valued customer! At mery shop, we believe in offering more than just products; we offer solutions to your needs and desires. Whether you're searching for the latest trends, unique gifts, or everyday essentials, you'll find them all here. Our commitment to excellence drives us to continuously improve, ensuring that your satisfaction is our top priority. Start your shopping journey with us today!Best Regards,mery shop",
        "Hello there, and welcome to mery shop! We understand that you have many choices when it comes to shopping online, and we're thrilled that you've chosen us. Our mission is to make your online shopping experience enjoyable, convenient, and secure. We're constantly updating our inventory to bring you the best products at competitive prices. Thank you for being a part of our growing community.Warm Regards,mery shop",
    ];

    const paragraph = document.getElementById("changing-paragraph");
    let currentIndex = 0;

    // Function to update the paragraph text
    function updateParagraph() {
        paragraph.textContent = textArray[currentIndex];
    }
    function nextparagraph() {
        currentIndex = (currentIndex + 1) % textArray.length; // Loop through the textArray
        updateParagraph();
    }
    function prevparagraph() {
        currentIndex = (currentIndex - 1 +textArray.length) % textArray.length; // Loop through the textArray
        updateParagraph();
    }
    // Initial update
    updateParagraph();

    const fleft=document.getElementById("fleft");
    const fright=document.getElementById("fright");

    fleft.addEventListener("click",nextparagraph);
    fright.addEventListener("click",prevparagraph);

    // Set an interval to update the paragraph every 3 seconds (3000 milliseconds)
    setInterval(updateParagraph, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const names = ["Tamara Mellon", "Coco Chanel", "Marc Jacobs", "Rebecca Hall"];
    const professions = ["Fashion Entrepreneur", "Fashion Designer", "Fashion Designer", "Actress and Director"];
    const paragraphs = [
        "Shopping is not just about buying things; it's also about discovering a piece of yourself that you didn't know existed. It's about expressing your style, your personality, and your individuality. - Tamara Mellon",
        "The best things in life are free. The second-best are very expensive. - Coco Chanel",
        "To me, clothing is a form of self-expression – there are hints about who you are in what you wear. - Marc Jacobs",
        "Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance. - Rebecca Hall"
    ];

    const h1 = document.getElementById("name");
    const small = document.getElementById("small");
    const paragraph = document.getElementById("para");

    let currentIndex = 0;

    function updateContent() {
        h1.textContent = names[currentIndex];
        small.textContent = professions[currentIndex];
        paragraph.textContent = paragraphs[currentIndex];
    }

    function nextContent() {
        currentIndex = (currentIndex + 1) % names.length;
        updateContent();
    }

    function prevContent() {
        currentIndex = (currentIndex - 1 + names.length) % names.length;
        updateContent();
    }

    // Initial update
    updateContent();

    // Set an interval to automatically change content every 6 seconds (6000 milliseconds)
    setInterval(nextContent, 6000);

    // Event listeners for manual control
    const rightArrow = document.getElementById("right");
    const leftArrow = document.getElementById("left");

    rightArrow.addEventListener("click", nextContent);
    leftArrow.addEventListener("click", prevContent);
});
function showButton(container) {
  const button = container.querySelector(".product-button");
  button.style.display = "block";
}

function hideButton(container) {
  const button = container.querySelector(".product-button");
  button.style.display = "none";
}




