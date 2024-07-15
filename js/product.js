let params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            let a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

let agentName;
let code = params['id'];

function addCharacteristics(title, value) {
  let characteristic = $('<tr class="product__characteristics-row"><td class="product__characteristics-data">'+ title +'</td><td class="product__characteristics-data">'+ value +'</td></tr>');
  $(".product__characteristics-table").append(characteristic);
}


function addDesc(title, value) {
  let desc = $('<div class="product__area-item"><h3 class="product__area-title">'+value+'</h3><span class="product__area-subtitle">'+title+'</span></div>');
  $(".product__area-list").append(desc);
}

function addImage(url) {
  $('.product__images').slick('slickAdd', '<div class="product__images-item"><img src="'+url+'" alt="" class="product__image"></div>')
}

function addPriceForM2(value){
  $('.product__info-cost').append('<span class="product__cost-for-m2">'+ value +'</span>')
}

function addAgent(name, phone) {
  let agent = $('<h3 class="product__agent-title">Риелтор '+name+'</h3><div class="product__desc"><span class="product__agent-phone">Телефон: '+phone+'</span><a href="tel:'+phone+'" class="product__agent-btn">Позвонить</a></div>')
  $('.product__agent').append(agent);
}

function outputData(array) {
  for (i = 0; i< array.length; i++) {
      let offer = array[i];


      if (offer['@attributes']['internal-id'] != params['id']) {
        continue;
      }
      console.log(offer);


      if (offer.image != undefined) {
        let images = offer.image;
        if (images[0].length > 1) {
          for(j = 0; j < images.length; j++) {
            addImage(images[j]);
          }
        } else {
          addImage(images);
        }
      } else {
        addImage('./images/placeholder.png')
      }

      // Начало описания product


      $('.product__code-value').text(offer['@attributes']['internal-id'])


      // Категория лота
      let category = offer.category;

      // Тип лота (Продажа/Аренда)
      let type = offer.type;
      let period;

      if (type == "аренда"){
        period = offer.price.period;
      }

      let rooms;
      if (offer.rooms != undefined) {
        rooms = offer.rooms;
      }

      if (category != 'коммерческая'){
        if (rooms > 0 && category != "комната") {
          $('.product__title').text(rooms + "-комн. " + category);
        } else {
          $('.product__title').text(category);
        }
      } else {
        let purpose;
        if (offer.purpose != undefined) {
          purpose = offer.purpose.value;
        }
        if (purpose != undefined) $('.product__title').text(purpose);
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
      
      $('.product__info-address').text(address);

      let date;
      if (offer['creation-date'] != undefined) {
        date = offer['creation-date'];
      }

      let dateOutput = new Date(date);
      $('.product__info-date').text(dateOutput.toLocaleDateString() + " " + dateOutput.toLocaleTimeString());

      let price = offer.price.value;

      $('.product__cost-value').text(new Intl.NumberFormat('ru-RU').format(price));

      if (period != undefined) {
        $('.product__cost').append(" в " + period);
      }

      let area;
      if (offer.area != undefined) area = offer.area.value;

      let priceForM2;

      if(area != undefined) {
        if (category == 'комната' && offer['living-space'] != undefined) area = offer['living-space'].value;

        priceForM2 = Math.round(price/area);
        if (offer['price-area-base'] != undefined) priceForM2 = offer['price-area-base'].value;
      }

      if(priceForM2 != undefined) addPriceForM2(new Intl.NumberFormat('ru-RU').format(priceForM2));


      let livearea;
      if (offer['living-space'] != undefined) livearea = offer['living-space'].value;

      let floor;
      if (offer.floor != undefined) floor = offer.floor;
      
      let floorareatitle = floor;

      let floors;
      if (offer['floors-total'] != undefined) {
        floors = offer['floors-total'];
        floorareatitle += "/" +floors;
      }
      
      let buildtype;
      if (offer["building-type"] != undefined) buildtype = offer["building-type"];
      

      let kitchenarea;
      if (offer["kitchen-space"] != undefined) kitchenarea = offer["kitchen-space"].value;
      

      let offeredRooms;
      if (offer["rooms-offered"] != undefined) offeredRooms = offer["rooms-offered"];
      

      let description;
      if (offer["description"] != undefined) { 
        description = offer["description"];
      }
      
      agentName = offer['sales-agent'].name;
      let agentPhone = offer['sales-agent'].phone;

      

      // Краткое описание
      
      if (area != undefined) addDesc('Общая площадь, кв.м.', area);
      if (livearea != undefined) addDesc('Жилая площадь, кв.м.', livearea);
      if (kitchenarea != undefined) addDesc('Площадь кухни, кв.м.', kitchenarea);
      if (floorareatitle != undefined) addDesc('Этаж', floorareatitle);
      if (buildtype != undefined) addDesc('Тип здания', buildtype);


      // Подробное описание

      if (description != undefined) $('.product__description-text').text('').append(description); 
      

      // Характеристики
      if (type != undefined) addCharacteristics('Тип сделки', type);
      if (category != undefined) addCharacteristics('Категория', category);
      if (offeredRooms != undefined) addCharacteristics('Комнат в сделке', offeredRooms);
      if (rooms != undefined) addCharacteristics('Общее количество комнат', rooms);
      if (floor != undefined) addCharacteristics('Этаж', floor);
      if (floors != undefined) addCharacteristics('Этажей в доме', floors);
      if (livearea != undefined) addCharacteristics('Жилая площадь, кв.м.', livearea);
      if (kitchenarea != undefined) addCharacteristics('Площадь кухни, кв.м.', kitchenarea);
      if (area != undefined) addCharacteristics('Общая площадь, кв.м.', area);
      if (buildtype != undefined) addCharacteristics('Тип здания', buildtype);

      addAgent(agentName, agentPhone);

      break;
  }
  
}


function getData(category){
  $.ajax({
    url: 'get_offer.php',
    type: 'GET',
    dataType: 'json',
    data: {category: category},
    success: function(response){
      outputData(response);
    },
    error: function(error){
    }
  });
}

getData(params['category']);



function getAgentName(){
  return agentName;
}

function getCode(){
  return code;
}