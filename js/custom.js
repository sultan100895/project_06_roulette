$(document).ready(function(){
  'use strict';

  // ===== for FAQ =====
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
  // ===================

  // ===== for coundown =====
  $("#countdown-active").countdown("2023/05/19 24:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });





});