$(function () {

	$('.menu__btn').on('click', function () {
		$(this).toggleClass('menu__btn--active');
		$('.burger').toggleClass('burger--active');
		$('.body').toggleClass('lock');
		$('.burger__btn-close').toggleClass('burger__btn-close--active');
	});

	$('.menu__link').on('click', function () {
		$('.menu__btn').removeClass('menu__btn--active');
		$('.burger').removeClass('burger--active');
		$('.burger__btn-close').removeClass('burger__btn-close--active');
		$('.body.lock').removeClass('lock');
	});

	$('.burger__btn-close').on('click', function () {
		$('.burger').removeClass('burger--active');
		$('.burger__btn-close').removeClass('burger__btn-close--active');
		$('.body.lock').removeClass('lock');
	});

	$('.filter-box__btn').on('click', function () {
		$('.catalog__filters').toggleClass('catalog__filters--active');
		$('.burger__btn-close').toggleClass('burger__btn-close--active');
		$('.body').toggleClass('lock');
	});
	
	$('.filter-box__btn-close').on('click', function () {
		$('.catalog__filters').removeClass('catalog__filters--active');
		$('.burger__btn-close').removeClass('burger__btn-close--active');
		$('.body.lock').removeClass('lock');
	});


	$('.review__inner').slick({
		prevArrow: "<button class='review__btn review__btn--prev' type='button'><span class='sr-only'>предыдущий слайд</span><svg class='slick-prev slick-arrow' width='10' height='19'><use xlink:href='images/sprite.svg#prev-arrow'></use></svg></button>",
		nextArrow: "<button class='review__btn review__btn--next' type='button'><span class='sr-only'>следующий слайд</span><svg class='slick-next slick-arrow' width='10' height='19'><use xlink:href='images/sprite.svg#next-arrow'></use></svg></button>",
		arrows: true,
		dots: true,
		speed: 1500,
		autoplaySpeed: 5000,
		fade: true,
		responsive: [
			{
				breakpoint: 768,
				settings:
				{
					dots: false,
				}
			}
		]
	});

	$('.restaurants__list').slick({
		responsive: [
			{
				breakpoint: 9999,
				settings:
					"unslick"
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					dots: true,
					speed: 1500,
					autoplaySpeed: 5000
				}
			}
		],
	});

	$('.discounts__list').slick({
		responsive: [
			{
				breakpoint: 9999,
				settings:
					"unslick"
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					dots: true,
					speed: 1500,
					autoplaySpeed: 5000
				}
			}
		],
	});

	$('.select-style').styler();

	var $range = $(".filter-price__input"),
		$inputFrom = $(".filter-price__from"),
		$inputTo = $(".filter-price__to"),
		instance,
		min = 0,
		max = 1000,
		from = 0,
		to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 200,
		to: 800,
		onStart: updateInputs,
		onChange: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});
	});

	$inputTo.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});
	});

	var mixer = mixitup('.categories__content', {
		load: {
			filter: '.category-a'
		}
	});
});