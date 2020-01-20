$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});
});
//---------------------------------------------------
// Модальное окно
    // открыть по кнопке
    $('.js-button-campaign').click(function() { 
        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled'   );
    });
            // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();
        }
    });
//--------------------------------------------------
//Плавный скрол
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
        });
    });
//--------------------------------------------------
//Animete in price list
    $(document).ready(function() {
        $('input.animated').hover(
        function() {
        $(this).addClass('pulse'); // Добавляем класс pulse
        },
        function() {
        $(this).removeClass('pulse'); // Убираем класс
        }
    )});
//--------------------------------------------------
//button top 
$(function() {
    
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
            } else {
    $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    });
//----------------------------------------------------------------
//Карта
function initMap() {
    var coordinates = {lat: 59.910277, lng: 30.288487}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
  
     // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: false, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
        
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

    // Отцентровка карты при ресайзе
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}
// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 