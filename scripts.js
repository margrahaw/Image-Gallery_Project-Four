
//Additional options to the lightbox plugin

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'maxWidth': 600,
  'maxHeight': 375,
  'positionFromTop': 100,
  'wrapAround': true,
  'showImageNumberLabel': false
})

//Implementing the search box functionality

$('#image-filter').on('keyup', function() {

	var current_query = $('#image-filter').val();

	if (current_query !=""){

		$('#imageGallery a').hide();

		$("#imageGallery a").each(function(){

			var current_keyword = $(this).attr('data-keywords');

			if (current_keyword.indexOf(current_query) >= 0){
				$(this).show();
			}
		});
	} else {
		$('#imageGallery a').show();
	}	
});



















