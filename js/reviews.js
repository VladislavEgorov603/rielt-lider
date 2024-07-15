$(".reviews__list").slick({
  speed: 2000,
  autoplay: true,
  slidesToShow: 3,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.reviews__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  if (nextSlide == slick.slideCount-3) {
    $.getJSON("./reviews.json", function(data){
        addReview(data[nextSlide+3].name, data[nextSlide+3].text, data[nextSlide+3].date, data[nextSlide+3].rate, data[nextSlide+3].img)
    });
  }
});

function addReviews(){
  console.log("add");
  $.getJSON("./reviews.json", function(data){
    for (let i = 0; i < 5; i++) {
      addReview(data[i].name, data[i].text, data[i].date, data[i].rate, data[i].img)
    }
   });
}

function addReview(name, text, date, rate, img){
  if (img == "") img = '/images/placeholder.png';

  let review = '<a href="https://2gis.ru/gornoaltaysk/firm/3800440466572742/tab/reviews" class="reviews__link"><div class="reviews__item"><div class="reviews__item-inner"><div class="reviews__item-top"><img src="'+ img +'" alt="review-autor" class="reviews__img"><div class="reviews__label"><span class="reviews__name">'+name+'</span><span class="reviews__date">'+date+'</span></div></div><div class="reviews__item-rate">';
  for (let i = 0; i < rate; i++) {
    review += '<span class="reviews__item-star"></span>';
  }
  review += '</div><p class="reviews__item-text">'+text+'</p></div></div></a>';
  
  $('.reviews__list').slick('slickAdd', review);
}

addReviews();