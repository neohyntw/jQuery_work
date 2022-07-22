$(document).ready(function(){
	$(".menu-dropdown").mouseenter(function(event){
		event.preventDefault();
		$('.course-menu').addClass('active');
		$(this).find('ul').slideDown();
		 event.stopPropagation();
	});

	$(".menu-dropdown").mouseleave(function(event){
		$('.course-menu').removeClass('active');
		$(this).find('ul').slideUp();
		 event.stopPropagation();
	});

	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

	const swiper = new Swiper('.swiper', {
	  // Optional parameters
	  direction: 'horizontal',
	  loop: true,
	  allowSlideNext: true,
	  allowSlidePrev: true,
	  autoplay: true,

	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

	  // And if we need scrollbar
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	});

});
