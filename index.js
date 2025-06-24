function toggleMenu() {
  var header = document.getElementById("myHeader");
  var icon = document.getElementById("menuIcon");

  header.classList.toggle("responsive");

  // Toggle icon between hamburger and cross
  if (header.classList.contains("responsive")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

  let slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].classList.add("active");
  }
  setInterval(() => {plusDivs(1);}, 5000);
