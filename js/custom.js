$(document).ready(function(){
	var mHeight = $(document).height();
    $(window).scroll(function(){
        var sPosition = $(window).scrollTop();
        if(sPosition > (mHeight/2)) {
        	$(".sticky-share").addClass('visible');
        }
    });
});
