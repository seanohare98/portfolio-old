//Smooth Scroll Effect
//Underscore Flash Effect
$(document).ready(function() {
  $('#top-nav .nav-link-page').on('click', function(e) {
    //Prevent Default Behavior
    e.preventDefault;
    const hash = this.hash;
    //Animate Page
    $('html, body').animate(
      { scrollTop: $(hash).offset().top },
      500,
      function() {
        window.location.hash = hash;
      }
    );
  });

  var und = document.getElementById('underscore');
  setInterval(function() {
    und.style.display = und.style.display == 'none' ? '' : 'none';
  }, 500);

  $('.msu-migration-card').on('click', function(event) {
    window.open('http://msumigration.tk', '_blank');
  });

  $('.hospital-api-card').on('click', function(event) {
    window.open('https://github.com/seanohare98/hospital-api', '_blank');
  });

  $('.avl-tree-card').on('click', function(event) {
    window.open('https://github.com/seanohare98/avl-tree', '_blank');
  });
});
