jQuery(document).ready(function() {
	new WOW({mobile:false}).init();
	$(window).on('mousemove', function(e) {

		var width = $(window).width();
		var height = $(window).height();

		var offsetX = 0.5 - e.pageX / width;
		var offsetY = 0.5 - e.pageY / height;

		$('.parallax').each(function(i,el) {
			var offset = parseInt($(el).data('offset'));

			var translate = "translate3d(" + Math.round(offsetX * offset)
			+ "px," + Math.round(offsetY * offset) + "px, 0px";

			 $(el).css({
			 	'transform':translate
			 });
		});
	});
	if ($(window).width() < 530) {
		$('#smartPhone_offset').attr('data-offset', 0);
	} else if ($(window).width() > 530) {
		($('#smartPhone_offset').attr('data-offset', 10))
	};
var show = true;
    var countbox = ".spincrement";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    $(".spincrement").spincrement({
    from: 0,
    to: 21,
    duration: 7000
});
show = false;
}
});
$('.smPhn_burger').on('click', function() {
	$('.smPhn_nav_menu').slideDown(200);
});
$('.close_smPhn_nav_menu').on('click', function() {
	$('.smPhn_nav_menu').slideUp(200);
});
$('.smPhn_plus').on('click', function() {
	$('.smPhn_plus_menu').slideDown(200);
});
$('.close_smPhn_wth_menu').on('click', function() {
	$('.smPhn_plus_menu').slideUp(200);
});

$('.burger').on('click', function() {
	$('.mobile_nav_bg').fadeToggle();
	$('.mobile_nav_list').fadeToggle();
	$('header').toggleClass('blur_elements');

});
jQuery(window).on('resize scroll', function() {
	$('header').removeClass('blur_elements');
	$('.mobile_nav_bg').fadeOut();
	$('.mobile_nav_list').fadeOut();
});

$('.interface_carousel').slick({
    slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1500,
	cssEase: 'ease-out',
	autoplaySpeed: 3000,
	pauseOnHover: false,
	pauseOnFocus: false,
	arrows: false,
	infinite: true,
	responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 651,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
$('.people_carousel').slick({

	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	arrows: false,
	centerMode: true,
	infinite: true,
	asNavFor: '.comments_carousel',
	focusOnSelect: true,
});
$('.comments_carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	infinite: true,
	autoplaySpeed: 8000,
	asNavFor: '.people_carousel',
	nextArrow: '<div class="slick-next"></div>',
  	prevArrow: '<div class="slick-prev"></div>',
  	responsive: [
    {
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }
  ]
  	
});

$('.company').on('click', function() {
	var individual = $(this).closest('.select_person').find('.individual');
	var company = $(this);
	var svitcher = $('.switcher_move');
	if (individual.hasClass('switch')) {
		individual.toggleClass('switch');
		company.toggleClass('switch');
		svitcher.addClass('switcher_move_right');
	} 
});
$('.individual').on('click', function() {
	var company = $(this).closest('.select_person').find('.company');
	var individual = $(this);
	var svitcher = $('.switcher_move');
	if (company.hasClass('switch')) {
		company.toggleClass('switch');
		individual.toggleClass('switch');
		svitcher.removeClass('switcher_move_right');
	}
});
$('.pro_pack').on('click', function() {
	var 
	pro_pack = $(this);
	starter_pack = $(this).closest('.select_typeProduct').find('.starter_pack');
	link_starter = $(this).closest('.select_typeProduct').find('.starter_pack a');
	link_pro = $(this).find('a');
	if (starter_pack.hasClass('selected_package')) {
		starter_pack.removeClass('selected_package');
		pro_pack.addClass('selected_package');
		link_starter.removeClass('selected_package_link');
		link_pro.addClass('selected_package_link');
	};
});
$('.starter_pack').on('click', function() {
	var
	starter_pack = $(this);
	pro_pack = $(this).closest('.select_typeProduct').find('.pro_pack');
	link_starter = $(this).find('a');
	link_pro = $(this).closest('.select_typeProduct').find('.pro_pack a');
	if (pro_pack.hasClass('selected_package')) {
		pro_pack.removeClass('selected_package');
		starter_pack.addClass('selected_package');
		link_pro.removeClass('selected_package_link');
		link_starter.addClass('selected_package_link');
	};
});
$('.pro_pack a, .starter_pack a, .btn_play_video').on('click', function(event) {
	event.preventDefault();
});
});