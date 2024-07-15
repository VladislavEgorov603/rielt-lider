let katalogCategory = 'apartment';

let minPrice = 0; 
let maxPrice = 999999999999999; 
let minArea = 0;
let maxArea = 999999999999999;
let roomsFilter = [];
let isFiltered = false;
let towns = [];

function addTown(town){
  for (let i = 0; i < towns.length; i++) {
    if (towns[i] == town) return;
  }
  towns.push(town);
}


function addTownsInList(){
  $('.filter__place-list').empty();
  for (let i = 0; i < towns.length; i++) {
    let newTown = '<option class="filter__place-item">'+towns[i]+'</option>'
    $('.filter__place-list').append(newTown);
  }
}


$(".katalog-menu__item").on('click', function(){
  $(".katalog-menu__item").attr('class', 'katalog-menu__item');
  $(this).attr('class', 'katalog-menu__item katalog-menu__item--active');
  katalogCategory = $(this).attr('id');

  if (katalogCategory != 'apartment') {
    $('.filter-apartment__rooms').css('display','none')
  } else {
    $('.filter-apartment__rooms').css('display','block')
  }

  isFiltered = false;

  outputKatalogs();
})


$(".filter-apartment__rooms-btn").on('click',function(){
  $(this).toggleClass('filter-apartment__rooms-btn--active');
})


$(".filter__btn").on('click', function(){
  if ($(".filter__price-min").val() != "") minPrice = $(".filter__price-min").val(); else minPrice = 0;
  if ($(".filter__price-max").val() != "") maxPrice = $(".filter__price-max").val(); else maxPrice = 999999999999999;
  if ($(".filter__area-min").val() != "") minArea = $(".filter__area-min").val(); else minArea = 0;
  if ($(".filter__area-max").val() != "") maxArea = $(".filter__area-max").val(); else maxArea = 999999999999999;

  roomsFilter = [];

  if ($(".filter-apartment__rooms-btns").children(".filter-apartment__rooms-btn--active").length != 0){
    $(".filter-apartment__rooms-btns").children(".filter-apartment__rooms-btn--active").each(function(index){
      roomsFilter.push($( this ).attr("id"));
    })
  } else roomsFilter = [0, 1, 2, 3, 4];

  isFiltered = true;
  outputKatalogs();  
})


function outputKatalogs(){
  $('.katalog__inner').empty();
  if (katalogCategory == 'apartment') {
    addCategory('Квартиры', 'apartments');
    addCategory('Комнаты', 'rooms');
    getData('apartments');
    getData('rooms');
  }
  if (katalogCategory == 'house') {
    addCategory('Дачи и коттеджи', 'cottages');
    addCategory('Дома', 'houses');
    addCategory('Участки', 'lotAreas');
    getData('cottages')
    getData('houses')
    getData('lotAreas')
  }
  if (katalogCategory == 'rent') {
    addCategory('Жилая недвижимость', 'residentialRent');
    addCategory('Коммерческая недвижимость', 'commercialRent');
    getData('commercialRent')
    getData('residentialRent')
  }
  if (katalogCategory == 'commercial') {
    addCategory('Коммерческая недвижимость', 'commercial');    
    getData('commercial')
  }
}

function addCart(category, id, imageURL, price, priceForM2, rooms, m2, floor, address, period, number) {
  let cartDesc = '<div class="katalog__item-desc"><span class="katalog__item-price"><span class="katalog__item-price-value">' + new Intl.NumberFormat('ru-RU').format(price) + '</span>';
  if (period != undefined) {
    cartDesc += ' в ' + period;
  }
  cartDesc += '</span>';
  if (priceForM2 != undefined) cartDesc += '<span class="katalog__item-price-for-m2">'+new Intl.NumberFormat('ru-RU').format(priceForM2)+'</span>';
  cartDesc += '<div class="katalog__item-descroom"><span class="katalog__item-rooms">'+rooms+'</span>';
  if (m2 != undefined) cartDesc += '<span class="katalog__item-m2">'+m2+'</span>';
  if (floor != undefined) {
    floor += ' эт.';
    cartDesc += '<span class="katalog__item-floor">'+floor+'</span>';
  }
  cartDesc += '</div>';

  let cart = $('<div class="katalog__item"><a href="/product.html?category='+ category +'&id='+ id +'" class="katalog__item-link"><div class="katalog__item-images"><img src="'+imageURL+'" alt="" class="katalog__item-image"></div>'+cartDesc+'<span class="katalog__item-address">'+address+'</span></div></a><a class="katalog__item-btn" id="'+id+'">Показать телефон</a></div>');
  $("." + category).append(cart)
  
  $("#" + id).on('click',function(){
    $(this).text(number);
    $(this).attr('href','tel:' + number)
  })
}

function addCategory(title, categoryClass) {
  let newCategory = $('<div class="katalog__category"><h1 class="katalog__title">'+title+'</h1><div class="katalog__grid '+ categoryClass +'" value="8"></div><button class="katalog__showmore" id="'+categoryClass+'">Показать ещё</button></div>');
  $(".katalog__inner").append(newCategory)

  $('.katalog__showmore').on('click', function(){
  
    let grid = $('.' + $(this).attr('id'));
    let num = Number($(grid).attr('value'));
    $(grid).attr('value', num + 4);
  
    let allItems = $(grid).children();
  
    for(j=num; j < num+4; j++){
      if (allItems[j] == undefined) {
        $(this).css('display', 'none');
        break;
      }
      $(allItems[j]).css('display','block');
    }
  })
}

function outputKatalog(categoryClass, array) {
  $("." + categoryClass).empty();
  tArray = [];
  tArray = array;
  console.log(array.length)
  
  for (i = $(tArray).length - 1; i > 0; i--) {
      let offer = tArray[i];

      let category = offer.category;
      
      let price = offer.price.value;
      
      let area;
      if (offer.area != undefined) area = offer.area.value;
      
      let priceForM2;

      if(area != undefined) {
        if (category == 'комната' && offer['living-space'] != undefined) area = offer['living-space'].value;

        priceForM2 = Math.round(price/area);
        if (offer['price-area-base'] != undefined) priceForM2 = offer['price-area-base'].value;
      }

      let rooms = 0;
      if (offer.rooms != undefined) rooms = offer.rooms;
      

      let offeredRooms;
      if (offer['rooms-offered'] != undefined) offeredRooms = offer['rooms-offered'];
      
      if (offeredRooms != undefined) rooms = offeredRooms;
      
      
      if (isFiltered) {
        if (Number(price) < Number(minPrice)) continue;
        if (Number(price) > Number(maxPrice)) continue;

        if (Number(price) < Number(minArea)) continue;
        if (Number(price) > Number(maxArea)) continue;


        if(katalogCategory == 'apartment') {
          let isValid = false;
          for (j = 0; j < roomsFilter.length; j++) {
            if (roomsFilter[j] == '0' && offer.studio != undefined) isValid = true;
            if (roomsFilter[j] == '1' && rooms == 1) isValid = true;
            if (roomsFilter[j] == '2' && rooms == 2) isValid = true;
            if (roomsFilter[j] == '3' && rooms == 3) isValid = true;
            if (roomsFilter[j] == '4' && rooms >= 4) isValid = true;
          }
          if (!isValid) continue;
        }

        if($('.filter__place-input').val() != ""){
          let town;
          if (offer.location['locality-name'] != undefined) {
            town = offer.location['locality-name'];
            if (town.toUpperCase().indexOf($('.filter__place-input').val().toUpperCase()) == -1) continue;
          }
        }

        
      }

      let period;

      if (offer.type == "аренда"){
        period = offer.price.period;
      }

      let floor;
      if (offer.floor != undefined) floor = offer.floor;
      
      let floorareatitle = floor;

      let floors;
      if (offer['floors-total'] != undefined) {
        floors = offer['floors-total'];
        floorareatitle += "/" +floors;
      }

      let address = "";
      if (offer.location.region != undefined) {
        address += offer.location.region + ", ";
      }

      if (offer.location.district != undefined) {
        address += offer.location.district + ", ";
      }

      if (offer.location['locality-name'] != undefined) {
        address += offer.location['locality-name'];
        addTown(offer.location['locality-name']);
      }

      if (offer.location.address != undefined) {
        address +=  ", " + offer.location.address;
      }

      if (offer.location.apartment != undefined) {
        address += ", кв. " + offer.location.apartment;
      }

      if (offer.location['address-full'] != undefined) {
        address = offer.location['address-full'];
      }


      let id = offer['@attributes']['internal-id'];

      let titleOutput;
      if (category != 'коммерческая'){
        if (rooms > 0 && category != "комната") {
          titleOutput = rooms + "-комн. " + category;
        } else {
          titleOutput = category;
        }
      } else {
        titleOutput = category;

        let purpose;
        if (offer.purpose != undefined) {
          purpose = offer.purpose.value;
        }
        if (purpose != undefined) titleOutput = purpose;
      }

      if (category == 'часть дома'){
        if (rooms > 0) {
          titleOutput = 'часть ' + rooms + "-комн. дома";
        } else {
          titleOutput = category;
        }
      }

      if(offer.studio != undefined){
        titleOutput = 'Студия'
      }

      let imageURL = '/images/placeholder.png';
      if (offer.image != undefined) { 
        if(offer.image[0].length > 1){
          imageURL = offer.image[0];
        } else {
          imageURL = offer.image;
        }
      }
      
      if (offer['main-image'] != undefined) imageURL = offer['main-image'];
      

      let agentPhone = offer['sales-agent'].phone;

      addCart(categoryClass, id, imageURL,price, priceForM2, titleOutput, area, floorareatitle, address, period,agentPhone)
  }

  let allKatalogs = $('.katalog__grid');

  for(i = 0; i < allKatalogs.length; i++){
    let allItems = $(allKatalogs[i]).children();

    for(j=8; j < allItems.length; j++){
      $(allItems[j]).css('display','none');
    }
  }
}

function getData(category){
  $.ajax({
    url: 'get_offer.php',
    type: 'GET',
    dataType: 'json',
    data: {category: category},
    success: function(response){
      outputKatalog(category, response);
    },
    error: function(error){
      console.log(error);
    }
  });
}

$( ".filter__place-input" ).focus(function() {
 addTownsInList()
});


outputKatalogs()