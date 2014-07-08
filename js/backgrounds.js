//Background parallax
window.onscroll = function() {
	var scrollHeight = window.pageYOffset;


	var backgrounds = document.getElementsByClassName('panel');
	for(var i = 0; i < backgrounds.length; i++) {
		backgrounds[i].style.backgroundPosition =  "center " + (scrollHeight - backgrounds[i].offsetTop + backgrounds[i].clientHeight/4) +"px";
	}
}

//Navigation

