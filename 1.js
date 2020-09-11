$(document).ready(function() {
	console.log('ra')
	//làm nút để mở menu,
	$('.nut-nho').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.khoi-2').addClass('khoi-2-ra');
	});
	// lam nut tat menu
	$('.phai-icon').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.khoi-2').removeClass('khoi-2-ra');
	});
	// xu ly menuphai
	$('.khoi-2 ul li:nth-child(1)').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 500)
	});
	$('.khoi-2 ul li:nth-child(2)').on('click', function(event) {
		event.preventDefault();
		console.log('log')
		$('html,body').animate({scrollTop:$('.khoi-3').offset().top}, 500)
	});
	$('.khoi-2 ul li:nth-child(3)').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.khoi-4').offset().top}, 500)
	});
	$('.khoi-2 ul li:nth-child(4)').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:$('.khoi-6').offset().top}, 500)
	});
	$('.khoi-2 ul li:nth-child(5)').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:$('.khoi-7').offset().top}, 500)
	});

var khongLap = setInterval(function(){
	alert('Cám ơn đã dành thời gian thăm trang của tui!');
	clearInterval(khongLap);
},2000)

});

// console.log($('.khoi-3').offset().top)

// $('html,body').animate({scrollTop:$('.light8').offset().top}, 700)