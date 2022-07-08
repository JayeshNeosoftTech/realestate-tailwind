$(document).ready(function () {
  $(".slider").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      navText:["<img src='./main/images/left-arrow.png' alt=''>","<img src='./main/images/right-arrow.png' alt=''>"],
      dots:false,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true
  });
  $('.autoplay').slick({
    slidesToShow: 2.8,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    varaibleWidth:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
});
var t_btn = document.getElementById('triangle_btn');
var t_div=document.getElementById('triangle_div');
var filter_active= document.getElementById('filter-active');

var search= document.getElementById('search_div');
var btnS= document.getElementById('search_btn');

var toggle_btn= document.getElementById('toggle_btn');
var toggle_menu= document.getElementById('toggle_menu');
var span = document.getElementsByClassName('close')[0];

var video_div = document.getElementById('video_div');
var span1 = document.getElementsByClassName('close1')[0];

function filter(){
    filter_active.style.backgroundColor='transparent';
    filter_active.style.color='#444444';
}
function hover(){
    filter_active.style.backgroundColor='#5559A7';
    filter_active.style.color='white';
}
function btn(){
    t_btn.style.backgroundColor='white';
    t_btn.style.color='black';
    t_div.style.display='none';
}
function btn_buy(){
    t_btn.style.backgroundColor='#FF8484';
    t_btn.style.color='white';
    t_div.style.display='block';
}

btnS.onclick = function() {
      search.style.display = "block";
    }
window.onclick = function(event) {
    if (event.target == search) {
        search.style.display = "none";
    }
    else if(event.target == toggle_menu){
        toggle_menu.style.display = "none";
    }
    else if(event.target == video_div){
      video_div.style.display = "none";
  }
}

toggle_btn.onclick= function(event){
    toggle_menu.style.display = "block";
}
span.onclick = function() {
      toggle_menu.style.display = "none";
}

function trigger(){
    document.getElementById('trigger').scrollIntoView({behavior: "smooth"});
    document.getElementById('trigger').style.transition= '1000';
}
$('#readM_btn').click(function() {
  $('#read_more').slideDown("slow");
  $('#readM_btn').css({'display' : 'none'});
  $('#readM_btn2').css({'display' : 'block'});
});
$('#readM_btn2').click(function() {
  $('#readM_btn2').css({'display' : 'none'});
  $('#readM_btn').css({'display' : 'block'});
  $('#read_more').toggle("slow");
});

function video_btn(){
  video_div.style.display = "block";
}
span1.onclick = function() {
  video_div.style.display = "none";
}