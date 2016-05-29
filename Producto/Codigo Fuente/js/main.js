$(function(){
	$(".owl-carousel.slider-items-1").owlCarousel({items: 1, loop: true});


	$(".icon-search input").on('focus', function(){
		var elm = $(this);
		var parent = elm.parents('.input-placeholder');

		parent.addClass('active');
	}).on('blur', function(){
		var elm = $(this);
		var parent = elm.parents('.input-placeholder');
		var val = elm.val().trim();

		if(val == '') {
			parent.removeClass('active');
		}
	});
});


$(function(){
	var toTop = $('.to-top');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			toTop.css({bottom: '15px'});
		} else {
			toTop.css({bottom: '-100px'});
		}
	});
	toTop.click(function () {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});


$(function(){
	var imgZoom = $('.producto .producto-imagen img');

	if(imgZoom.length == 0) return;

	imgZoom.elevateZoom({zoomType: "lens",lensShape : "round", lensSize : 150});

	$('.producto .producto-imagenes a').on('click', function(){
		var imagen = $(this).find('img:first');
		var normal = imagen.attr('src');
		var zoom = imagen.data('zoom-image');

		imgZoom.data('elevateZoom').swaptheimage(normal, zoom);

		return false;
	})
});


$(function(){
	$('.producto .producto-cantidad button').on('click', function(){
		var elm = $(this);
		var parent = elm.parent();
		var input = parent.find('input:first');
		var sumar = parseInt(input.val()) + parseInt(elm.data('sumar'));

		input.val(Math.max(1, sumar));
	}) 
});

$(function(){
	var mapContacto = $('.mapa-contacto');

	if(mapContacto.length == 0) return;

	var map = new GMaps({
		div: '#mapa-contacto',
		lat: -12.043333,
		lng: -77.028333,
		height: mapContacto.height() + 'px',
		disableDefaultUI: true
	});


	map.addMarker({
		lat: -12.043333,
		lng: -77.028333,
		title: 'Oficinas'
	});
});