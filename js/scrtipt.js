let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const imageInput = document.querySelector('.image-input');
slides[0].classList.add('active');



function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
  
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
      index = index % slides.length;
      
      slides[index].classList.add('active');
    }
  

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const image = new Image();
      image.src = reader.result;
      slider.appendChild(image);
      showSlide(slideIndex);
      slideIndex++;
    });
    reader.readAsDataURL(file);
  }

});


setInterval(function() {
    slideIndex++;
    showSlide(slideIndex);
  }, 2000);
