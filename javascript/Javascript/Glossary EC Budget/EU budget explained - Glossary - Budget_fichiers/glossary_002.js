  
  // Tabs presentation.
  $(document).ready(function () {
      $('#tabs').tabs({
          fx: { opacity: 'toggle' }
      });
  });

  // disable index letter if no content.
  
	$("#glossaryIndex a").each(function(){
		val = $(this).attr("href").replace("#","");
		if( $("div[id='" + val + "']").length == 0 )
		$(this).parent().addClass("inactive").end().replaceWith(this.childNodes)
	});
$(function() {

	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#glossaryIndex').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#glossaryIndex').css({ 'position': 'fixed', 'top':0, 'max-width':'750px'});
		} else {
			$('#glossaryIndex').css({ 'position': 'relative'}); 
		}   
	};
	 
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});
	
});

	      
      
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
        }, 500);
          return false;
        }
      }
    });