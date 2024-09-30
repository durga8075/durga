// Change navbar background color on scroll
window.onscroll = function() {
  var navbar = document.getElementById("navbar");

  // Add 'scrolled' class when page is scrolled down by 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
};
