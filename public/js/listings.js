$(document).ready(function() {
	$.get('/api/incidents', function(data) {
		console.log(data);
	});
});