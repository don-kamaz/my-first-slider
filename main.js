const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = pass => {
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[pass].classList.add('active');
}

const activeDot = pass => {
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[pass].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index)
  } else {
    index++;
    console.log(index);
    prepareCurrentSlide(index)
  }
}

const autoSlider = () => {
  nextSlide();
  setTimeout(autoSlider, 2000);
}
autoSlider();


const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index)
  } else {
    index--;
    prepareCurrentSlide(index)
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index)
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
