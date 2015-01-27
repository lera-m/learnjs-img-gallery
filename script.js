var images = document.getElementsByTagName('img');
var image;
var i;


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
	var ImageCnt = 0;

    function nextImg(){
	   ImageCnt++;
       document.getElementById("preImg").innerHTML = image[ImageCnt];
    }; 
}


   