let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 4000); 

  setTimeout(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    slides[slideIndex].style.opacity = 1;
  }, 100); 
}

function prevSlide() {
  let slides = document.querySelectorAll(".slide");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  let slides = document.querySelectorAll(".slide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}





const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

const headerHeight = header.offsetHeight;

function removeHeader() {
    header.style.transform = `translateY(-${headerHeight}px)`;
}

document.querySelectorAll('.big_list').forEach(function (bigListItem) {
    bigListItem.addEventListener('mouseenter', function () {
        document.querySelectorAll('.big_list').forEach(function (item) {
            item.style.transform = 'translateY(0)';
        });
        bigListItem.style.transform = 'translateY(-' + (bigListItem.offsetHeight - 10) + 'px)';
    });
});

const burgerButton = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');

burgerButton.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("open_popup_btn").addEventListener("click", function(){
      document.querySelector(".popup").classList.add("open");
    });
  
    document.getElementById("close_popup_btn").addEventListener("click", function(){
      document.querySelector(".popup").classList.remove("open");
    });
  });

document.addEventListener("click", function (event) {
    var submenu = document.querySelector(".submenu");
    if (submenu.style.display === "block" && !event.target.closest(".big_list")) {
        submenu.style.display = "none";
    }
});

//validation
  document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector("input[name='name']");

    nameInput.addEventListener("input", function () {
        //Remove any non-letter characters
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІґҐ']/g, '');
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
