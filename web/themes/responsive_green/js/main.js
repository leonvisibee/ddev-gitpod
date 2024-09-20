(function ($) {
	$( document ).ready(function() {
		// alert(navigator.userAgent);
		//highlight calendar date
		
		var url = location.pathname.split('/');
		//console.log("Current Url ",url);
		if (url[1] == 'en') {
	    	$('.page-search-total .view-testing ul.search-results li .views-field-type').addClass("hkgga-type");
		    //$('.page-search-total .view-testing ul.search-results li .views-field-type').html($('.page-search-total .view-testing ul.search-results li .views-field-type').html().replace('最新消息','Latest News'));
		    //$('.page-search-total .view-testing ul.search-results li .views-field-type').html($('.page-search-total .view-testing ul.search-results li .views-field-type').html().replace('活動花絮','Album'));
		    //$('.page-search-total .view-testing ul.search-results li .views-field-type').html($('.page-search-total .view-testing ul.search-results li .views-field-type').html().replace('活動','Events'));
            //$('.page-search-total .view-testing ul.search-results li .views-field-type').html($('.page-search-total .view-testing ul.search-results li .views-field-type').html().replace('網頁','Basic page'));
            //$('.page-search-total .view-testing ul.search-results li .views-field-type').html($('.page-search-total .view-testing ul.search-results li .views-field-type').html().replace('資源庫','Resources'));
		}
		
		/* mabel js*/
		
        $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").each(function () {
           $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html($(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html().replace("最新消息", "Latest News"));
           $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html($(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html().replace("活動花絮", "Album"));
           $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html($(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html().replace("活動", "Events"));
           $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html($(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html().replace("網頁", "Basic page"));
           $(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html($(".page-search-total.i18n-en .content-sidebar-wrap .view-testing ul.search-results li .views-field-type .field-content").html().replace("資源庫", "Resources"));
        });
        
		var aryDate = [];
		$("#block-views-events-list-event-block-1 .views-field-field-event-time span").each( function() {
			var strDate = $(this).html();
			
			aryDate.push(new Date(strDate));
		});
		
		$("#block-views-news-list-news-block-1 .views-field-created").each( function() {
			var strDate = $(this).html();
			
			aryDate.push(new Date(strDate));
		});
		
		$("#block-views-resource-block-1 .views-field-created span").each( function() {
			var strDate = $(this).html();
			
			aryDate.push(new Date(strDate));
		});
		
		$("#block-views-albumview-album-block-1 .views-field-field-album-date span").each( function() {
			var strDate = $(this).html();
			
			aryDate.push(new Date(strDate));
		});
		
		
		var dpNews = $("div#edit-date-filter-value-datepicker-popup-1-wrapper");
		var dpEvent = $("div#edit-between-date-filter-value-datepicker-popup-1-wrapper");
		var dpAlbum = $("div#edit-date-filter-value-datepicker-popup-1-wrapper");
		
		if(dpNews.length>0) {
			dpNews.datepicker('option', 'beforeShowDay', highlightDays);
			// ui-state-default ui-state-active
			if(isSetDate() < 0) {
				dpNews.datepicker("setDate", "");
				// alert(dpNews.datepicker( "option", "prevText" ));
				
				$(".ui-datepicker-today").addClass("tday");
			} else {
				
			}
		}
		
		if(dpEvent.length>0) {
			dpEvent.datepicker('option', 'beforeShowDay', highlightDays);
			// ui-state-default ui-state-active
			if(isSetDate() < 0) {
				dpEvent.datepicker("setDate", "");
				$(".ui-datepicker-today").addClass("tday");
			} else {
			}
		}
		
		if(dpAlbum.length>0) {
			dpAlbum.datepicker('option', 'beforeShowDay', highlightDays);
			// ui-state-default ui-state-active
			if(isSetDate() < 0) {
				dpAlbum.datepicker("setDate", "");
				$(".ui-datepicker-today").addClass("tday");
			} else{
			}
		}
		
		
		function isSetDate() {
			var strPara = decodeURIComponent(window.location.search).substring(1);
			if(strPara !== "") {
				var aryPara = strPara.split("&");
				// console.log(aryPara);
				for(var cnt=0; cnt <= aryPara.length; cnt++) {
					var str = aryPara[cnt].split("=")[0];
					var val = aryPara[cnt].split("=")[1];
					// console.log(str + " " + val);
					
					if((str == "date_filter[value][date]" || str == "between_date_filter[value][date]") && val !== "") {
						return true;
						// break;
					} else {
						return -1;
					}
				}
			}
			return -1;
		}
		
		function highlightDays(date) {
			//console.log("highlightDays() ");
			for (var i = 0; i < aryDate.length; i++) {
				// console.log((aryDate[i].getMonth() == date.getMonth()) + " || " + aryDate[i].getMonth() +" == "+ date.getMonth() + " || " + aryDate[i].getYear() +" == "+ date.getYear());
				if ((aryDate[i].getDate() == date.getDate() && (aryDate[i].getMonth() == date.getMonth()) && (aryDate[i].getYear() == date.getYear()))) {
					return [true, 'highlight-date'];
				}
			}
			return [true, ''];
		}
		
		function anyCheckedBox(obj) {
			var rtn = false, i=0;
			do {
				rtn = rtn || obj[i][0].checked;
				i++;
			} while(i<obj.length && !rtn);
			return rtn;
		}
		
		//js for /content/our-history
		if($("div.yearTabs").length>0) {
			$(".yearContent > div").hide();
			var yTabs = $("div[id^=yTab]");
			yTabs.each(function() {
				// console.log($(this));
				$(this).on("click", function() {
					var tabID = this.id;
					var strYear = tabID.split("_")[1];
					var contentDiv = $("#yc_" + strYear);
					
					$(".yearContent > div").hide();
					contentDiv.toggle();
				});
			});
		}
		
		//filters selected parent item get all children
		// resources pick one by one
		/* if($("div.checkbox-depth-0").length > 0 && $("#edit-field-resources-related-section-tid-wrapper").length == 0) {
			var divParent = $("div.checkbox-depth-0");
			divParent.each(function(index) {
				var cbParent = $(this).find("input[type=checkbox]");
				cbParent.addClass("ctools-auto-submit-exclude");
				var partentID = cbParent.val();
				cbParent.on("click",function() {
					var divChild = $(".pid-" + partentID);
					//var curPara = this.name + "=" + $(this).val();
					// Check/Uncheck All
					if(this.checked) {
						$(this).parent().addClass('hilight');
						divChild.find(".form-type-checkbox").addClass('hilight');
						divChild.find("input[type=checkbox]").prop('checked', true);
					} else {
						$(this).parent().removeClass('hilight');
						divChild.find(".form-type-checkbox").removeClass('hilight');
						divChild.find("input[type=checkbox]").prop('checked', false);
					}
					// Submit Form
					$(this).parents('.ctools-auto-submit-full-form').find('.ctools-auto-submit-click').click();
//					location.href.replace("?", "?" + str);
				});
				var divChild = $(".pid-" + partentID);
				var cbChilds = [];
				divChild.each(function(index) {
					var cbThis = $(this).find("input[type=checkbox]");
					cbThis.addClass("ctools-auto-submit-exclude");
					cbChilds.push(cbThis);
				});
				cbChilds.forEach(function(cur){
					cur.on("click",function(){
						var ckParent = this.checked || anyCheckedBox(cbChilds);
						cbParent.prop('checked',ckParent);
						cbParent.toggleClass('hilight',ckParent);
						$(this).parents('.ctools-auto-submit-full-form').find('.ctools-auto-submit-click').click();
					});
				});
			});
			
			// disselect all item if all item checked
			
		} */
		
		var aryTerm = ((decodeURI(window.location.href).split("list/")[1]+"").split("/"));
		// jtrace(aryTerm);
		for(var cnt=0; cnt < aryTerm.length; cnt++) {
			var q = ("https://"+aryTerm[cnt]).replace(/^https*\:\/\/([^\/]+\/)*([^\/]+)$/,function(s,t,u){
				var strSplit = '%2B';
				if(u.indexOf('+') != -1) {
					strSplit = '+';
				}
				// jtrace(u);
				return u.replace(/-/g, ' ').replace(/_/g, '/').split(strSplit);//+
			}).split(',');
			
			// $("#views-exposed-form-news-list-page .form-type-checkbox,#views-exposed-form-news-list-page-2 .form-type-checkbox, #views-exposed-form-resource-page .form-type-checkbox,#views-exposed-form-resource-page-en-1 .form-type-checkbox, #views-exposed-form-events-list-page .form-type-checkbox, #views-exposed-form-events-list-page-1 .form-type-checkbox").each(function(){
			$(".views-exposed-form .form-type-checkbox").each(function(){
				var label = ($(this).find('label').html().replace('-','').replace(/\s*/,'')+'').trim();
				// jtrace(label);
				// jtrace(q);
				if($.inArray(label,q)!=-1) {				// Check the ckb
					$(this).find('.form-checkbox').prop('checked', true);
					$(this).addClass("hilight");
				}
			});
		}
		
		
		$(".form-type-checkboxes").each(function() {
			var cntTotalItem = $(this).find("input[type=checkbox]").length;
			var cntChecked = $(this).find(".hilight").length;
			var aryChecked = $(this).find(".hilight");
			
			// console.log($(this));
			
			// console.log("total:: " + cntTotalItem + " cur:: "+  cntChecked);
			
			if(cntChecked >= cntTotalItem) {
				// console.log(aryChecked);
				aryChecked.each(function(index) {
					$(this).removeClass("hilight");
					$(this).find("input[type=checkbox]").prop('checked', false);
				});
			}
		});
		
		/* delete query string if [item]=0 in pager */
		$(".pager li").each(function() {
			// jtrace($(this));
			var objLink = $(this).children("a");
			if(objLink.length > 0) {
				var strPara = objLink.attr("href").split("?")[1];
				var aryPara = (strPara+"").split("&");
				var delPara = [];
				
				for(var cnt=0; cnt <= aryPara.length; cnt++) {
					var tmp = ""+aryPara[cnt];
					// jtrace("tmp:: " + tmp);
					if(tmp.indexOf("=") != -1) {
						var str = tmp.split("=")[0];
						var val = tmp.split("=")[1];
						// jtrace(str + " = " + val);
						if(val == 0 || val.length < 1 || (tmp.indexOf("hidden_") != -1)){
							delPara.push(tmp);
						}
					} else if(tmp.indexOf("date_filter[value]") != -1 || tmp.indexOf("date_filter%5Bvalue%5D") != -1) {
						delPara.push(tmp);
					}
				}
				// jtrace(delPara);
				for(var cnt = 0; cnt <= delPara.length; cnt++) {
					// jtrace("del:: " + delPara[cnt]);
					objLink.attr("href", objLink.attr("href").replace(delPara[cnt]+"&", ""));
				}
			}
		});
		
		function jtrace(str) {
			console.log(str);
		}
		
		/*add fake search button for IE*/
		var strHTML = "<input type='button' class='btnFake' value='搜索' />"
		$(".form-item.form-type-textfield.form-item-combine").append(strHTML);
		
		/* re-order last update date div if news / events */
		if($(".node-type-events").length > 0) {
			$(".last-update").insertAfter($(".event_icons"));
		}
		if($(".node-type-news").length > 0) {
			$(".last-update").insertAfter($(".node-news"));
		}
		
		/* mabel js */
		
		//Add class name
    	$('.not-front #container').addClass("main-container");	
    	$('.not-front #footer').addClass("footer-container");
    	$('.not-front #content').addClass("main-content");
    	$('.not-front #header_wrapper').addClass("header-wrapper");
    	$('.not-front #breadcrumbs').addClass("breadcrumbs");
    	$('.not-front #content #post-content').addClass("post-content");
    	$('.not-front.node-type-page .main-container').addClass("basic-page-content");
    	$('.i18n-zh-hant #main-menu .menu li:nth-child(9) a').addClass("zh-hover");
        
        //Remove css class
        $('.not-front.page-frontpage-en').removeClass("sContent");
        
        //Add div wrap table
    	if($(".not-front.page-node").find('table').length) {
            $('.not-front.page-node table').wrap('<div class="table-responsive"></div>');
        } else {
            $('.not-front.page-node table').wrap('');
        }
        
        if($(".not-front.page-node").find('table').length) {
            $('.not-front.page-node table img').wrap('<span class="icon-responsive"></span>');
        } else {
            $('.not-front.page-node table img').wrap('');
        }
        
        if($(".not-front.page-node").find('table').length) {
            $('.not-front.page-node table').removeAttr("style");
        } else {
            $('.not-front.page-node table').removeAttr("");
        }
        
        // images 
        $(window).load(function () {
            var image = $('#content .content .field-items p img');
            image.each(function () {
                if($(this).width() >= 700) {
                    $(this).width('#content .content .field-items p img').addClass('xxbig-img');
                }else if($(this).width() > 500 && $(this).width() < 700) {
                    $(this).width('#content .content .field-items p img').addClass('xbig-img');
                }else if($(this).width() > 300 && $(this).width() <= 500) {
                    $(this).width('#content .content .field-items p img').addClass('big-img');
                }else if($(this).width() >= 200 && $(this).width() <= 300){
                    $(this).width('#content .content .field-items p img').addClass('mid-img');
                }else if($(this).width() > 150 && $(this).width() < 200){
                    $(this).width('#content .content .field-items p img').addClass('med-img');
                }else if($(this).width() > 130 && $(this).width() < 150){
                    $(this).width('#content .content .field-items p img').addClass('simg');
                }else if($(this).width() == 150){
                    $(this).width('#content .content .field-items p img').addClass('smimg');
                }else if($(this).width() >= 100 && $(this).width() <= 130){
                    $(this).width('#content .content .field-items p img').addClass('small-img');
                }else if($(this).width() > 15 && $(this).width() < 100){
                    $(this).width('#content .content .field-items p img').addClass('xs-img');
                }
            });
        });
        
        $(window).load(function () {
            var image = $('#content .content .field-items h2 img');
            image.each(function () {
                if($(this).width() >= 700) {
                    $(this).width('#content .content .field-items h2 img').addClass('xxbig-img');
                }else if($(this).width() > 500 && $(this).width() < 700) {
                    $(this).width('#content .content .field-items h2 img').addClass('xbig-img');
                }else if($(this).width() > 300 && $(this).width() < 500) {
                    $(this).width('#content .content .field-items h2 img').addClass('big-img');
                }else if($(this).width() >= 200 && $(this).width() <= 300){
                    $(this).width('#content .content .field-items h2 img').addClass('mid-img');
                }else if($(this).width() > 150 && $(this).width() < 200){
                    $(this).width('#content .content .field-items h2 img').addClass('med-img');
                }else if($(this).width() == 150){
                    $(this).width('#content .content .field-items h2 img').addClass('smimg');
                }else if($(this).width() > 130 && $(this).width() < 150){
                    $(this).width('#content .content .field-items h2 img').addClass('simg');
                }else if($(this).width() >= 100 && $(this).width() <= 130){
                    $(this).width('#content .content .field-items h2 img').addClass('small-img');
                }else if($(this).width() > 15 && $(this).width() < 100){
                    $(this).width('#content .content .field-items h2 img').addClass('xs-img');
                }
            });
        });
        
        $(window).load(function () {
            var image = $('.table-responsive .icon-responsive img');
            image.each(function () {
                if($(this).width() >= 700) {
                    $(this).width('.table-responsive .icon-responsive img').addClass('xxbig-img');
                }else if($(this).width() > 500 && $(this).width() < 700) {
                    $(this).width('.table-responsive .icon-responsive img').addClass('xbig-img');
                }else if($(this).width() > 300 && $(this).width() < 500) {
                    $(this).width('.table-responsive .icon-responsive img').addClass('big-img');
                }else if($(this).width() >= 200 && $(this).width() <= 300){
                    $(this).width('.table-responsive .icon-responsive img').addClass('mid-img');
                }else if($(this).width() > 150 && $(this).width() < 200){
                    $(this).width('.table-responsive .icon-responsive img').addClass('med-img');
                }else if($(this).width() == 150){
                    $(this).width('.table-responsive .icon-responsive img').addClass('smimg');
                }else if($(this).width() > 130 && $(this).width() < 150){
                    $(this).width('.table-responsive .icon-responsive img').addClass('simg');
                }else if($(this).width() >= 100 && $(this).width() <= 130){
                    $(this).width('.table-responsive .icon-responsive img').addClass('small-img');
                }else if($(this).width() > 15 && $(this).width() < 100){
                    $(this).width('.table-responsive .icon-responsive img').addClass('xs-img');
                }
            });
        });
        
        /*$('#content .content .field-items p img').each(function() {
            var minWidth = '800px';
            var maxWidth = '900px';
            var imageWidth = $('#content .content .field-items p img').css('width');
            if (imageWidth > minWidth && imageWidth < maxWidth) {
                $('#content .content .field-items p').find('img').css('width','100%');
                $('#content .content .field-items p').find('img').css('height','auto');
            } else {
                $('#content .content .field-items p').find('img').addClass('');
            }
        });*/
        
        //Add css class
        if($('.not-front.page-node .main-container .content-sidebar-wrap .main-content').height() < 700){
            $('body').addClass('sContent');
        } else{
            $('body').removeClass('sContent');
        }
        
        if($('.not-front.page-node .main-container .content-sidebar-wrap .main-content').height() > 750){
            $('body').addClass('bContent');
        } else{
            $('body').removeClass('bContent');
        }
        
        $('.page-node-7751').removeClass('sContent');
        //$('.page-node-148').removeClass('sContent');
        //$('.page-node-177').removeClass('sContent');
        
        
        if(window.innerWidth < 850){
           if($('.not-front.page-node .main-container .content-sidebar-wrap .main-content').height() < 750){
                $('body').addClass('sContent');
            } else{
                $('body').removeClass('sContent');
            } 
        }else{
            $('body').removeClass('');
        }
        
        if(window.innerWidth < 480){
            $('body').removeClass('sContent');
            $('body').removeClass('bContent');
        }else{
            $('body').addClass('');
        }
        
        if(window.innerWidth < 480){
            $('body.page-node-115').addClass('sContent');
            $('body.page-node-117').addClass('sContent');
            $('body.page-node-159').addClass('sContent');
        }else{
            $('body').removeClass('');
        }
        
        //Fix footer
        $('.sContent .main-container .content-sidebar-wrap .main-content').each(function() {    
            if($('.sContent .main-container .content-sidebar-wrap .main-content').height() < $(window).height()){
                var contentHeight = $(window).height() - $('.sContent .header-wrapper').height();
                $('.sContent .main-container')[0].style.height = contentHeight + 'px';
            }else{
                $('.sContent .main-container')[0].style.height = 'auto';
            }
        });
        
        $('.bContent .main-container .content-sidebar-wrap .main-content').each(function() {    
            if($('.bContent .main-container .content-sidebar-wrap .main-content').height() < $(window).height()){
                var contentHeight = $(window).height() - $('.bContent .header-wrapper').height();
                $('.bContent .main-container')[0].style.height = contentHeight + 'px';
            }else{
                $('.bContent .main-container')[0].style.height = 'auto';
            }
        });
        
        if(window.innerWidth < 850){
            if($('.sContent .main-container .content-sidebar-wrap .main-content').height() < $(window).height()){
                var contentHeight = $(window).height() - $('.footer-container').height();
                $('.sContent .main-container .content-sidebar-wrap')[0].style.height = contentHeight + 'px';
                $('.sContent .main-container').removeAttr("style");
            } else{
                $('.sContent .main-container .content-sidebar-wrap')[0].style.height = 'auto';
               // $('.sContent .main-container').removeAttr("style");
            } 
        }
        
        if(window.innerWidth < 600){
            if($('.sContent .main-container .content-sidebar-wrap .main-content').height() < $(window).height()){
                var contentHeight = $(window).height() - $('.footer-container').height();
                $('.sContent .main-container .content-sidebar-wrap')[0].style.height = 'auto';
                $('.sContent .main-container').removeAttr("style");
            } else{
                $('.sContent .main-container .content-sidebar-wrap')[0].style.height = contentHeight + 'px';
            } 
        }
        
        if(window.innerWidth == 1024){
            if($('.main-container .content-sidebar-wrap .main-content').height() < $(window).height()){
                var contentHeight = $(window).height() - $('.footer-container').height();
                $('.main-container .content-sidebar-wrap')[0].style.height = contentHeight + 'px';
            } else{
                $('.main-container .content-sidebar-wrap')[0].style.height = 'auto';
            } 
        }
        
        //hover project menu dropdown
        $('#main-menu .menu li:nth-child(8) a').hover(function(){
            //$(".sContent #container.main-container").css({'height': '120vh'});
            $('.main-container')[0].style.height = '130vh';
        },function(){
            var contentHeight = $(window).height() - ($('.footer-container').height() + $('.header-wrapper').height());
            $('.main-container')[0].style.height = contentHeight + 'px';
        });
        
        $('#main-menu .menu li:nth-child(9) a.zh-hover').hover(function(){
            $('.main-container')[0].style.height = '120vh';
        },function(){
            var contentHeight = $(window).height() - ($('.footer-container').height() + $('.header-wrapper').height());
            $('.main-container')[0].style.height = contentHeight + 'px';
        });
       
	});
		
})(jQuery);
