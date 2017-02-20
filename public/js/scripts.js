$('.delete').on('click', function(event) {
	event.preventDefault();

	let id = $(this).data("id");

	$.ajax({
			url: '/?id=' + id,
			type: 'DELETE',
			data: id,
		})
		.done(function(data) {
			location.reload();
			console.log(id)
		});
});

$('form').on('submit', function(event) {

	let textarea = $('textarea');
	let formInput = $('textarea').val();
	let inputVal = { todo: formInput };

	if (formInput === "") {
		event.preventDefault();

		$('button').text('Fill form above');
		// $('button').css('border', 'solid  #ff7777 2px');
		textarea.css('border', 'solid  #ff7777 2px');

		textarea.on('keyup', function() {
			$('button').text('submit');
			// $('button').css('border', 'solid rgba(85, 226, 85, .67) 2px');
			textarea.css('border', 'solid rgba(85, 226, 85, .67) 2px');
		});
	} else {
		$.ajax({
				url: '/',
				type: 'POST',
				data: inputVal,
			})
			.done(function(data) {
				console.log(data);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	}
});
