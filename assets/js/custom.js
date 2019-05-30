// applying background color a fixed navigation menu 

document.getElementById('#fullpage').ready("change",function(e) {
    var dropdown = document.getElementById('mainNav');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});


wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 2) {
      wrap.removeClass("trans-navigation")
    wrap.addClass("position-fixed w-100 bg-white color-black");
  } else {
    wrap.removeClass("position-fixed w-100 bg-white color-black");
  }
  
});
