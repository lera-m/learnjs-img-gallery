var images = document.getElementsByTagName('img');
var image;
var i;
var next = document.getElementsByClassName('nextbutton');
var previous = document.getElementsByClassName('prebutton');
var nextbutton;
var prebutton;
var ImageCnt = 0;

for (i = 0; i < images.length; i++) {
	image = images[i];

	image.addEventListener('click', function (event) {
		var image = event.target;
		var src = image.src;
		var preImg = document.getElementById('preImg');

		src = src.replace('200', '600');
		src = src.replace('150', '450');

		preImg.src = src;
	});
}

for (i = 0; i < next.length; i++) {
     nextbutton = next[i];
     nextbutton.addEventListener('click', function (event) {
     	ImageCnt++;
     	var image = images[ImageCnt];
     	if (image){
	     	var src = image.src;
			var preImg = document.getElementById('preImg');

		    src = src.replace('200', '600');
			src = src.replace('150', '450');

			preImg.src = src;	
     	}
     	
     });
}
for (i = 0; i < previous.length; i++) {
     prebutton = previous[i];
     prebutton.addEventListener('click', function (event) {
     	ImageCnt--;
     	var image = images[ImageCnt];
     	if (image){
	     	var src = image.src;
			var preImg = document.getElementById('preImg');

		    src = src.replace('200', '600');
			src = src.replace('150', '450');

			preImg.src = src;	
     	}
     	
     });
}