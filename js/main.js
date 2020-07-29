 var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2700); // Change image every 2 seconds
}





mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}








        


$(document).ready(function() {



$('.count').counterUp({
                delay: 10,
                time: 1000
            });

$(".owl-carousel").owlCarousel({

autoPlay: 3000,
items : 3,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
center: true,
nav:true,
loop:true,

responsive: {
600: {
items: 4
}
}






});

});













    $(window).on('scroll' ,function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      }

      else{
        $('nav').removeClass('black');
      }
    })












    $(document).ready(function(){

$('.box_col1').waypoint(function(direction){

    $('.box_col1').addClass(' animated fadeInLeft')
    
    
   },{
    offset:'50%'
  })



$('.about_img1').waypoint(function(direction){

    $('.about_img1').addClass(' animated fadeInLeft')
    $('.about_img2').addClass(' animated fadeInLeft')
   
    
    
   },{
    offset:'50%'
  })


$('.service_col1').waypoint(function(direction){

  $('.service_col1').addClass(' animated fadeInDown')

    $('.service_col2').addClass(' animated fadeInDown')
    $('.service_col3').addClass(' animated fadeInDown')
   
    
    
   },{
    offset:'50%'
  })


$('.menu_col').waypoint(function(direction){

  $('.menu_col').addClass(' animated fadeInLeft')


    
    
   },{
    offset:'50%'
  })


$('.chef_col1').waypoint(function(direction){

  $('.chef_col1').addClass(' animated fadeInUp')

    $('.chef_col2').addClass(' animated fadeInDown')
    
   
    
    
   },{
    offset:'50%'
  })


$('.post_col1').waypoint(function(direction){

  $('.post_col1').addClass(' animated fadeInLeft')


    $('.post_col2').addClass(' animated fadeInDown')
    $('.post_col3').addClass(' animated fadeInRight')
  
    
   
    
    
   },{
    offset:'50%'
  })







});
