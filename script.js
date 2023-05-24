document.addEventListener( 'DOMContentLoaded', function() {
  const splide = new Splide( '.splide' );
  splide.mount();
} );

const acc = document.getElementsByClassName("faq__accordion");
let  i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq__panel--active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}