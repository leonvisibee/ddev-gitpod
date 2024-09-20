(function ($) {
	$( document ).ready(function() {
		if($(".view-albumview").length > 0) {
			$("#edit-field-related-section-tid-wrapper label").off("click");
			$("#edit-field-events-location-tid-wrapper label").off("click");
			$("#edit-field-events-type-tid-wrapper label").off("click");
			
			$("#edit-field-related-section-tid-wrapper .views-widget").hide();
			$("#edit-field-events-location-tid-wrapper .views-widget").hide();
			$("#edit-field-events-type-tid-wrapper .views-widget").hide();
			
			$("#edit-field-related-section-tid-wrapper label:nth-child(1)")
			.addClass("arrow-down")
			.on("click", function() {
				/* $("#edit-field-related-section-tid-wrapper .views-widget").toggle(); */
				$(this).parent().find(".views-widget").toggle();
				if($(this).parent().find(".views-widget").is(":visible")) {
					$(this).addClass("arrow-up");
				} else {
					$(this).removeClass("arrow-up");
				}
			})
			;
			
			$("#edit-field-events-location-tid-wrapper label:nth-child(1)")
			.addClass("arrow-down")
			.on("click", function() {
				/* $("#edit-field-events-location-tid-wrapper .views-widget").toggle(); */
				$(this).parent().find(".views-widget").toggle();
				if($(this).parent().find(".views-widget").is(":visible")) {
					$(this).addClass("arrow-up");
				} else {
					$(this).removeClass("arrow-up");
				}
			});
			
			$("#edit-field-events-type-tid-wrapper label:nth-child(1)")
			.addClass("arrow-down")
			.on("click", function() {
				/* $("#edit-field-events-type-tid-wrapper .views-widget").toggle(); */
				$(this).parent().find(".views-widget").toggle();
				if($(this).parent().find(".views-widget").is(":visible")) {
					$(this).addClass("arrow-up");
				} else {
					$(this).removeClass("arrow-up");
				}
			});
		}
	});
		
})(jQuery);