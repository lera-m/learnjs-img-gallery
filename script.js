var images = document.getElementsByTagName('img');
var image;

var i;


for (i = 0;  i < images.lenght; i++) {
	image = images[i];
	image.addEventListener('onclick', function() {
       alert('test');
	});

}