$('form#total').submit( function(e){
	e.preventDefault();
	var x = $('form#total input[type=text]').val().split(':');
	var y = parseInt(x[0]) * 60;
	var z = parseInt(x[1]);
	var a = (y + z) / 26.2 ;
	var b = Math.floor(a);
	var c = Math.floor(60 * (a - b));
	$('.total .result').html("Your mile split is about: " + b + " minutes " + c + " seconds.")
})

$('form#split').submit( function(e){
	e.preventDefault();
	var x = $('form#split input[type=text]').val().split(':');
	var y = parseInt(x[0]);
	var z = parseInt(x[1]) / 60;
	var a = (y + z) * 26.2 / 60;
	var b = Math.floor(a);
	var c = Math.floor(60 * (a - b));
	$('.split .result').html("Your total time is about: " + b + " hours " + c + " minutes.")
})

