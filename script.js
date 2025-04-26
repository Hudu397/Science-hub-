document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Typing Effect for Hero Text
  const heroText = document.querySelector("#hero-text");
  if (heroText) {
    let text = "Explore the Frontiers of Scientific Inquiry!";
    if (document.body.classList.contains("computer-science"))
      text = "Decode the Digital Realm with Advanced Algorithms!";
    else if (document.body.classList.contains("ict"))
      text = "Harness the Power of Digital Innovations!";
    else if (document.body.classList.contains("mathematics"))
      text = "Master Mathematical Concepts and Problem-Solving!";
    else if (document.body.classList.contains("physics"))
      text = "Unravel the Mysteries of Matter and Energy!";
    else if (document.body.classList.contains("biology"))
      text = "Delve into the Wonders of Life and Ecology!";
    else if (document.body.classList.contains("chemistry"))
      text = "Dissect Molecular Interactions and Chemical Phenomena!";
    
    let index = 0;
    function typeEffect() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 90);
      }
    }
    typeEffect();
  }
  
  // "Get Started" Button Navigation (on Homepage)
  const getStartedBtn = document.getElementById("get-started");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      window.location.href = "subjects.html";
    });
  }
  
  // Smooth scrolling for header navigation links (if using hash links)
  document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
      if(link.hash !== "") {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});