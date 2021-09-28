$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
});



const changePic = (e)=>{
    document.getElementById("main_image").src = e;
}