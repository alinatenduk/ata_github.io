const hb = document.querySelector('.header_burger_btn');
const menu = document.querySelector('.header');

hb.addEventListener('click', function(){
    menu.classList.toggle('active');
})

//menu
document.addEventListener('DOMContentLoaded', function () {
    // Get links from your menu
    var mentorsLink = document.querySelector('a[href="#mentors"]');

    // Add a click handler for scrolling and centering above
    mentorsLink.addEventListener('click', function (e) {
        e.preventDefault();
        //Get a block of mentors by its id
        var mentorsBlock = document.getElementById('mentors');
        var windowHeight = window.innerHeight;
        mentorsBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, 700);
    });
});

//validation phone
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("input[name='phone']");

    phoneInput.addEventListener("input", function () {
        //Remove any characters that are not plus (+) or numbers
        this.value = this.value.replace(/[^+\d]/g, '');
        // We limit the input to 10 digits
        if (this.value.length > 11) {
            this.value = this.value.substring(0, 11);
        }
    });
});





//block a 
let currentSlideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slider_item');
    const dots = document.querySelectorAll('.dot');
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Show the selected slide
    slides[index].style.display = 'block';
    // Add active class to the corresponding dot
    dots[index].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}
// Show the initial slide
showSlide(currentSlideIndex);

//development of sites 
document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".content_blok_b .horizontal_container");
    // Check for the number of elements
    if (containers.length > 3) {
        var currentIndex = 0;
        var itemsPerSlide = 3;
        var totalSlides = Math.ceil(containers.length / itemsPerSlide);
        function showCurrentSlide() {
            for (var i = 0; i < containers.length; i++) {
                var isVisible = i >= currentIndex * itemsPerSlide && i < (currentIndex + 1) * itemsPerSlide;
                containers[i].style.display = isVisible ? "block" : "none";
            }
        }
        showCurrentSlide();
        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showCurrentSlide();
        }
        // Setting the interval for automatic transition between slides (every 10 seconds)
        setInterval(showNextSlide, 10000);
    }
});


   $(document).ready(function(){
    $('.content_mentors').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000, // Changed to 10 seconds
      dots: true,  // Adds dots to indicate slides
      arrows: false, // Disables the "Previous" and "Next" buttons
    });
  });
  
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    var message = prompt('Введіть ваше повідомлення:');
    console.log('Ви відправили повідомлення: ' + message);
});

document.addEventListener("DOMContentLoaded", function () {
    var mentorsSlider = document.querySelector('.content_mentors');
    var totalSlides = mentorsSlider.children.length;
    var currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(showNextSlide, 10000); // Change slide every 10 seconds
});







$(document).ready(function(){
    $(".content_blok_b").slick({
        responsive:[
            {
                settings: {
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    });
});
