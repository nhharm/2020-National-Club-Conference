/*Controls quote slider*/
	$( document ).ready(function() { $(".2").click(function(){
		$("#quote1").hide();
		$("#quote3").hide();
		$('.2').addClass('active_button')
		$('.1').removeClass('active_button')
		$('.3').removeClass('active_button')
		$("#quote2").fadeIn(1000);
		}); });
		$( document ).ready(function() { $(".1").click(function(){
		$("#quote3").hide();
		$("#quote2").hide();
		$('.1').addClass('active_button')
		$('.2').removeClass('active_button')
		$('.3').removeClass('active_button')
		$("#quote1").fadeIn(1000);
		});});
		$( document ).ready(function() { $(".3").click(function(){
		$("#quote1").hide();
		$("#quote2").hide();
		$('.3').addClass('active_button')
		$('.1').removeClass('active_button')
		$('.2').removeClass('active_button')
		$("#quote3").fadeIn(1000);
		});});
		/*Controls Speaker Pop Up Profiles on click of "View Bio"*/
	$( document ).ready(function() { $("#speaker_popup_rr").click(function(){
		$(".blur, #rr").fadeToggle();
			});});
			$( document ).ready(function() { $("#speaker_popup_sm").click(function(){
		$(".blur, #sm").fadeToggle();
			});});
			$( document ).ready(function() { $("#speaker_popup_im").click(function(){
		$(".blur, #im").fadeToggle();
			});});
			$( document ).ready(function() { $("#speaker_popup_jt").click(function(){
		$(".blur, #jt").fadeToggle();
			});});
		$( document ).ready(function() { $("#speaker_popup_tg").click(function(){
		$(".blur, #tg").fadeToggle();
			});});
		$( document ).ready(function() { $(".blur, .speaker_bio_show").click(function(){
		$(".blur, .speaker_bio_show").fadeOut();
			});});
		/*toggles mobile menu on click of hamburger icon when in mobile view*/
		$( document ).ready(function() { $('.fa-bars').on("click", () => {
			$("nav").toggle();
		  });
		 });

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('nav').addClass('solid');
          } else {
              $('nav').removeClass('solid');
          }
        });
});
