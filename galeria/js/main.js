$(document).ready(function(){
	$('.thumbnail').on('click', function(){
		$(this).next().fadeIn('slow');
		});
	$('.boton-close').on('click', function(){
		$('.full').fadeOut('slow');
		});
    });