    $(".top__slider").slick({
        dots: true,
        customPaging : function() {
            return '<button></button>';
            },
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        arrows: false,
    });


    $(".product__images").slick({
        dots: true,
        customPaging : function() {
            return '<button></button>';
            },
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $(".header__btn").on('click',function(){
        $(".header__drop-menu").toggleClass('header__drop-menu--active');
    })
    
    $(".drop-menu__link").on('click',function(){
        $(".header__drop-menu").toggleClass('header__drop-menu--active');
    })
    
    $('.telegram-form__tel').mask("+7(999) 999-9999");

    $('.telegram-form').on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();
    
        let form = this,
            submit = $('.submit', form)
    
        
        let data = {};
        data.name = $('[name="name"]', form).val()
        data.phone = $('[name="phone"]', form).val()

        if (data.name == "" || data.phone == "") {
            $('.telegram-form__hint').addClass('telegram-form__hint--invalid')
            $('.telegram-form__input').addClass('telegram-form__input--invalid')
            $('.telegram-form__hint').text('Заполните все поля!')
            return false;
        }
        $('.telegram-form__hint').removeClass('telegram-form__hint--invalid')
        $('.telegram-form__input').removeClass('telegram-form__input--invalid')


        $('input, textarea, button', form).attr('disabled','');

        if (window.location.pathname == "/product.html") {
            data.offer = window.location.href;
            data.objectID = getCode();
            data.agent = getAgentName();
        }

        if (window.location.pathname == "/services.html") {
            let services = [];
            if ($('[name="checkbox-1"]', form).is(':checked')) {
                services.push('Покупка квартиры');                
            }
            if ($('[name="checkbox-2"]', form).is(':checked')) {
                services.push('Помощь в получении ипотеки');                
            }
            if ($('[name="checkbox-3"]', form).is(':checked')) {
                services.push('Помощь в использовании материнского капитала');                
            }
            if ($('[name="checkbox-4"]', form).is(':checked')) {
                services.push('Продажа квартиры');                
            }
            if ($('[name="checkbox-5"]', form).is(':checked')) {
                services.push('Перевод жилого помещения в нежилое');                
            }
            if ($('[name="checkbox-6"]', form).is(':checked')) {
                services.push('Аренда квартиры или комнаты');                
            }
            if ($('[name="checkbox-7"]', form).is(':checked')) {
                services.push('Аренда коммерческой недвижимости');                
            }
            if ($('[name="checkbox-8"]', form).is(':checked')) {
                services.push('Курация квартиры');                
            }
            data.services = services;
        }

        if (window.location.pathname == "/vacancies.html") {
            let vacancy = [];
            if ($('[name="checkbox-1"]', form).is(':checked')) {
                vacancy.push('Администратор');                
            }
            if ($('[name="checkbox-2"]', form).is(':checked')) {
                vacancy.push('Офис-менеджер');                
            }
            if ($('[name="checkbox-3"]', form).is(':checked')) {
                vacancy.push('Маркетолог');                
            }
            if ($('[name="checkbox-4"]', form).is(':checked')) {
                vacancy.push('Программист');                
            }
            if ($('[name="checkbox-5"]', form).is(':checked')) {
                vacancy.push('Руководитель головного офиса');                
            }
            if ($('[name="checkbox-6"]', form).is(':checked')) {
                vacancy.push('Руководитель отдела продаж');                
            }
            if ($('[name="checkbox-7"]', form).is(':checked')) {
                vacancy.push('Руководитель отдела аренды');                
            }
            if ($('[name="checkbox-8"]', form).is(':checked')) {
                vacancy.push('Риелторы');                
            }
            if ($('[name="checkbox-9"]', form).is(':checked')) {
                vacancy.push('Ипотечный брокер');                
            }
            data.vacancy = vacancy;
        }
       
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: data,
            error: function( jqXHR, textStatus ) {
                console.log(textStatus);
            },
            complete: function( jqXHR, textStatus ) {
                console.log(textStatus);
                $('.telegram-form__hint').text('Заявка успешно отправлена!')
                $('.telegram-form__hint').addClass('telegram-form__hint--succes')
            }
        });
    
        return false;
    });