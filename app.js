
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        fullWidth: true,
        indicators: true
    }
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    setInterval(function(){ instances[0].next() }, 4000);
  });


//   setInterval(function(){ instance.next() }, 2000);