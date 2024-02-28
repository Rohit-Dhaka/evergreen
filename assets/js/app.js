
// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    navMenu.classList.toggle("active");
})
 

// ----------year
const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;


// -------------------slick
$('.hero-slick').slick({    
    infinite: true,
    speed: 300,
    arrow: true,
    prevArrow: '.pre-btn',
    nextArrow: '.next-btn',    
    slidesToShow: 1,
    slidesToScroll: 1,
  
  });

  $('.slick-slider-two').slick({
    dots: false,
    infinite: true,
    speed: 8000,
    cssEase: 'linear',
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,                   
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }                  
    ]
  });
  $('.slick-slider-third').slick({    
    infinite: true,    
    autoplay: true,
    slidesToShow: 3,
    speed: 8000,
    rtl : true,    
    cssEase: 'linear',    
    variableWidth: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,                    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }                  
    ]
  });
  
  $('.slick-slider-for').slick({
    
    infinite: true,
    slidesToShow: 3,
    autoplay: true,    
    
    cssEase: 'linear',    
    variableWidth: true,
    slidesToScroll: 3,
    slidesToScroll: 1,    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,                    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }                
    ]
  });
  



  // prelorer
  $(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(4000).queue(function() {
        $(this).remove();
      });}
  }, 3000);});