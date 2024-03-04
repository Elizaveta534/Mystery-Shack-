window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
document.addEventListener("DOMContentLoaded", function (e) {
    let mainphotoimg = document.querySelector(".mainphotoimg ");
    let photos = document.querySelectorAll("img");
  
    if (photos.length != 0) {
      photos.forEach(function (item) {
        item.addEventListener("click", function (event) {
          mainphotoimg.src = item.src;
          item.classList.remove("photoselect");
  
          let photoselect = document.querySelector(".photoselect");
          photoselect.classList.remove("photoselect");
          item.classList.add("photoselect");
        });
      });
    }
  
    let buttons = document.querySelectorAll("button");
    let inftabs = document.querySelectorAll(".inftabs");
  
    if (buttons.length != 0) {
      buttons.forEach(function (item) {
        item.addEventListener("click", function (event) {
          if (inftabs.length != 0) {
            inftabs.forEach(function (inftab) {
              if (item.dataset.type == inftab.dataset.type) {
                inftab.classList.remove("nonvisable");
              } else {
                inftab.classList.add("nonvisable");
              }
            });
          }
  
          let butselect = document.querySelector(".butselect");
          butselect.classList.remove("butselect");
          item.classList.add("butselect");
        });
      });
    }
  });
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


  $(function(){
  
    var $window = $(window);    //Window object
    
    var scrollTime = 1.2;     //Scroll time
    var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
      
    $window.on("mousewheel DOMMouseScroll", function(event){
      
      event.preventDefault(); 
                      
      var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        
      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
          autoKill: true,
          overwrite: 5              
        });
            
    });
    
  });