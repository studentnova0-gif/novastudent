alert("WELCOME TO NOVA COLLAGE");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();


   alert("Thank you! Your message has been submitted.");

    this.reset();
  });
