var images = document.getElementsByTagName('img');
var image;


var i;


for (i = 0;  i < images.length; i++) {
	image = images[i];
	image.addEventListener('click', function(event) {
       var image = event.target;
       var src = image.src;
       var preImg = document.getElementById('preImg');
       preImg.src = image.src;
       console.log(src);

	});

}