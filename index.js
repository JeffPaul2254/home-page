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