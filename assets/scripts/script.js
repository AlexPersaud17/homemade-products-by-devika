$(document).ready(function(){
  var current_page = window.location.pathname;
  var page_split = current_page.split("/");
  
  if(page_split[page_split.length - 1] == "index.html"){
    $('.welcome-intro-heading').fadeIn(1500);
    $('#welcome-intro').delay(3000).fadeOut(1500);
    page_split[page_split.length - 1] = "home.html"
    setTimeout(function(){ 
      window.location.pathname = page_split.join("/"); 
    }, 4000)
  }
  console.log("before")  
  $('.section-container').css('visibility','visible').hide().fadeIn(1000);
  console.log("after")
})