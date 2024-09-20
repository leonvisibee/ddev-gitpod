/**
 * @file
 * Responsive Green Toggle Menu Javascript.
 *
 */
var mobileMenuBreakPoint = 1084;
 
(function ($) {
	function initRollOverMenu() {
		$('#main-menu li ul').stop(true, true).css('display', 'none');
		/* $('#main-menu li').mouseenter(function() {
			$(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
		});
		$('#main-menu li').mouseleave(function() {
			$(this).children('ul').stop(true, true).fadeOut(250).css('display', 'none');
		}); */
		$('#main-menu li').on('mouseenter', function() {
			$(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
		});
		$('#main-menu li').on('mouseleave', function() {
			$(this).children('ul').stop(true, true).fadeOut(250).css('display', 'none');
		});
	}

	function initMobileMenu() {
		$('#main-menu li').off('mouseenter');
		$('#main-menu li').off('mouseleave');
		$('li.expanded').each(function() {
			var a = $(this);
			var u = $(this).children('ul').first();
			a.find(".drop-down-toggle").remove();
			a.append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>');
			a.on("click", function(e) {
				if(e.target.nodeName!="A" || $(e.target).hasClass("nolink")) {
					u.slideToggle(250);
					return false;
				}
			});
			/* hide drop-down-toggle if children are sidebar-only items */
			if($(this).children('ul').find("li.sidebar-only").length > 0) {
				var p = $(this).children('ul').find("li.sidebar-only").parent().parent();
				p.find(".drop-down-toggle").hide();
			}
		});
		
			
		$('.region-sidebar-second').appendTo($('#sidebar-second-mobile'));
		$(".btnFilter").show();
		if($(".node-type-events").length > 0 || $(".node-type-news").length>0 || $(".node-type-resources").length>0) {
			$("#post-content").after($('#sidebar-second-mobile'));
		}
		
		$(".views-submit-button").addClass("float-left");
		$(".views-reset-button").addClass("float-left");
		/* not share css in album page 
		$(".page-album .views-submit-button").removeClass("float-left");
		$(".page-album-en .views-submit-button").removeClass("float-left");
		$(".page-album .views-reset-button").removeClass("float-left");
		$(".page-album-en .views-reset-button").removeClass("float-left");*/

		//$('#sidebar-second-mobile').html(html());
	}
	
	/* filter menu */
	function initFilterMenu() {
		var strHTML = "<div class='btnFilter'> </div>";
		
		if($.trim( $('#sidebar-second-mobile').html() ).length){
			$(".btnFilter").remove();
			$("#sidebar-second-mobile").before(strHTML);
			$("#sidebar-second-mobile").css("display","none");
			$(".btnFilter").on("click", function() {
				$("#sidebar-second-mobile").toggle();
			});
			
		}
	}
	
	
	Drupal.behaviors.menu = {
		attach: function (context, settings) {
			var menuHTML = $(".menu_wrapper").html();		
			$("#mobile-menu").html(menuHTML);

			$('.nav-toggle').click(function() {
				$('#main-menu div ul:first-child').slideToggle(250);

				return false;
			});
			if(( ($(document).outerWidth() > mobileMenuBreakPoint))) {
				initRollOverMenu();
			} else {
				initMobileMenu();
				
				// if(($(".page-event-list").length>0) || ($(".page-event-list-en").length>0) || ($(".page-news-list").length>0) || ($(".page-news-list-en").length>0) || ($(".page-resources-list").length>0) || ($(".page-resources-list-en").length>0)) {
				if($(".ctools-auto-submit-full-form .views-exposed-form").length > 0){
						initFilterMenu();
				}				
			}
			
			var windowWidth = $(document).outerWidth();
			
			$(window).resize(function() {
				if (!$("input").is(":focus")) {
					$('#main-menu li').off("click");
					/* console.log($(document).outerWidth() +"!="+ windowWidth + " || " + $(window).width()); */
				
					if((($(document).outerWidth() > mobileMenuBreakPoint))) {
						initRollOverMenu();
						$("aside#sidebar-second").show();
						$('.region-sidebar-second').appendTo($('#sidebar-second'));
						$(".views-submit-button").removeClass("float-left");
						$(".views-reset-button").removeClass("float-left");
					} else {
						initMobileMenu();
						if ($(document).outerWidth() != windowWidth) {
							// if(($(".page-event-list").length>0) || ($(".page-event-list-en").length>0) || ($(".page-news-list").length>0) || ($(".page-news-list-en").length>0) || ($(".page-resources-list").length>0) || ($(".page-resources-list-en").length>0)) {
							if($(".ctools-auto-submit-full-form .views-exposed-form").length > 0){
								initFilterMenu();
							}

						}
					
					}
					windowWidth = $(document).outerWidth();
				}
			});
		}
	};
})(jQuery);
