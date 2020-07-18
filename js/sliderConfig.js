//events
  arrowLeft.addEventListener('click', onArrowLeftClick);
  arrowRight.addEventListener('click', onArrowRightClick);
  
  //event functions
  function onArrowLeftClick() {
  if(counter === 0) {
    counter = sliderImages.length;
  }
  slideLeft();
  }
  
  function onArrowRightClick() {
    if(counter === sliderImages.length-1) {
      counter=-1;
    }
    slideRight();
  }
  
  startSlide();