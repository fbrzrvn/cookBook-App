const scrollLeft = () => {
  const carousel = document.querySelector('.home__container__carousel');
  carousel.scrollLeft -= carousel.offsetWidth;
};


const scrollRight = () => {
  const carousel = document.querySelector('.home__container__carousel');
  carousel.scrollLeft += carousel.offsetWidth;
}



export { scrollLeft, scrollRight };

