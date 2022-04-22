
$(document).ready(function(){

	<!-- Capitalize properly all "Eu Budget" string on website-->
	<!-- document.body.innerHTML = document.body.innerHTML.replace(/eu budget/ig, 'EU Budget');-->

	$("#alphaList li a").each(function(){		
		val = $(this).text();		
		if( $("a[name='" + val + "']").length == 0 ||
			$(".entry h2").filter(function(){
				return $(this).text().startsWith(val, false) == true;	
			}).length == 0
		)
		$(this).replaceWith(this.childNodes)
	});
	
	
	//add zoom image functionality
	$("img.zoom").each(function(){
		$(this).bind("mouseover", function(){
			
			var zoomImg = $("<img/>")
			.attr("src", $(this).attr("data-large"))
			.attr("alt", $(this).attr("alt"))
			.addClass("zoomImage");
			
			zoomImg.css("opacity","0").animate({opacity:1}, 500);	
			
			$("body").prepend(zoomImg);	
			
			var winHeight = $(window).height();		
			var winWidth = $(window).width();	
			
			zoomImg.css({
				"left":"50%",
				'margin-left': Math.round(Math.min(winWidth-15,zoomImg.width())/-2)
				,'margin-top':Math.round((winHeight-Math.min(winHeight-15,zoomImg.height()))/3)
			});
			
		});
		
		$(this).bind("mouseout", function(){$("img.zoomImage").remove()})
		
	})
	
	
	
	
	$("img.click").each(function(){
		
		var img = $(this);
		var openButton = $("<a/>").addClass("openButton").append(
			$("<img/>").attr("src", budgetDomain + "img/open.png")
		).attr("href","javascript:void(0)")
		.bind("click", function(){ img.click()});
		
		$(this).wrap($("<div/>").css("position","relative"));
		$(this).parent().prepend(openButton);
		
		$(this).bind("click", function(){
			
				if(jQuery.browser.msie && parseInt(jQuery.browser.version) < 7){
					img.css("width","auto").parent().css("width","auto");
				}
				
				if($("img.zoomImage").length==0)
				
				var zoomImg = $("<img/>")
				.attr("src", $(this).attr("data-large")?$(this).attr("data-large"):$(this).attr("src"))
				.attr("alt", $(this).attr("alt"))
				.addClass("zoomImage").css("opacity","0");
				
				/*
				zoomImg.animate({opacity:1}, 500, function(){
					$("body").bind("click", function(){
						$("img.zoomImage").remove();
						$("body").unbind("click");
					});
				});	*/
				
				$("body").prepend(zoomImg.animate({opacity:1}, 500, function(){
					$("body").bind("click", function(){
						$("img.zoomImage").remove();
						$("body").unbind("click");
					})
				})
				);	
				
				var winHeight = $(window).height();		
				var winWidth = $(window).width();	
				/*
				zoomImg.css({
					"left":"50%",
					'margin-left': Math.round(Math.min(winWidth-15,zoomImg.width())/-2)
					,'margin-top':Math.round((winHeight-Math.min(winHeight-15,zoomImg.height()))/3)
				});*/
				
				zoomImg.css({
					"left":"50%",
					'margin-left': Math.round(Math.min(winWidth-15,zoomImg.get(0).offsetWidth)/-2)
					,'margin-top':Math.round((winHeight-Math.min(winHeight-15,zoomImg.get(0).offsetWidth))/3)
				});

		});
		
	})
	
	fixFocusIE();
	fixOddEvenTrIE();
	
	
	$("div.collapsible").each(function(){
		
		var content = $(this).html();
		var div = $("<div/>").append(content).css("display","none");
		
		var lnk = $("<a/>")
		.addClass("open_collapsible")		
		.attr("data-status","closed")
		.text($(this).attr("data-opentext"))
		.attr("data-opentext",$(this).attr("data-opentext"))
		.attr("data-closetext",$(this).attr("data-closetext"))
		.attr("href","javascript:void(0)")
		.bind("click", function(){	
				
			if($(this).attr("data-status") == "closed"){
				$(this).removeClass("open_collapsible").addClass("close_collapsible")
				.attr("data-status","open")
				.text($(this).attr("data-closetext"))
				.prev().css("display","block");	
			}
			else{
				$(this).removeClass("close_collapsible").addClass("open_collapsible")
				.attr("data-status","closed")
				.text($(this).attr("data-opentext"))
				.prev().css("display","none");
			}
		});
		
		$(this).empty();
		$(this).append(div).append(lnk);
	});
	
	//add Google analitics to pdf downloads	
	/*$("a[href$='.pdf']").bind("click", function(){
		var href = $(this).attr("href");
		var str = href + "?src=pdf";			
		_gaq.push(['_trackPageview', str ]);
	});*/
	
	//add a name attribute to all document links so that they can be used with an anchor
	$("a[href*=.pdf],a[href*=.doc],a[href*=.docx],a[href*=.ppt],a[href*=.pptx],a[href*=.xls],a[href*=.xlsx]").each(function(){
		
		var name = $(this).attr("name");
		var href = $(this).attr("href");
		var index = href.lastIndexOf("/");
		var filename = href.substr(index+1);
		filename = filename.substring(0,filename.indexOf(".")+4); //make sure you leave out any querystring after it
		
		if(typeof name == 'undefined' || name == false){
			$(this).attr("name", filename);
		}
	});
	
	
	
	
	if(window.location.href.indexOf("#") > -1){
		var index = window.location.href.indexOf("#");
		name = window.location.href.substr(index+1);			
		$("a[name="+ name + "]").each(function(i,el){			
			if($.trim($(el).text()) !== ''){
				$(this).addClass("anchorHighlight");	
			}
		});
	}
	
	$("a[href^=#]").bind("click", function(){
		
		$("a").removeClass("anchorHighlight");
				
		name = $(this).attr("href").replace("#","");		
		$("a[name="+ name + "]").each(function(i,el){			
			if($.trim($(el).text()) !== ''){
				$(this).addClass("anchorHighlight");		
			}
		});
	});
	
	
	setPopLanguages()
	
	
});

function setPopLanguages(){
	//hide all langLists
	$(".langList").css("margin-top", "-5000px")
	.css("margin-left", "-5000px");
	
	$("a.langCount").each(function(){
		$(this).bind("click", function(){
			
			//hide all langLists
			$(".langList").css("margin-top", "-5000px")
			.css("margin-left", "-5000px");
			
			langList = $(this).next(".langList");			
			langList.css("margin-top", ((langList.height()+30)*-1) + "px")
			.css("margin-left", "-" + (langList.width()/2) + "px")
			
			langList.find("a").bind("click", function(){				
				langList.css("margin-top", "-5000px")
				.css("margin-left", "-5000px")					
			});
		});
	});
}




$("#toolbox").ready(function(){
	
	if($.cookie("contrast") != "undefined" && $.cookie("contrast") == "true"){
		
		$("#contrastcss").attr("href", budgetDomain  + "css/high_contrast.css");
		$("#toLowContrast").attr("style","display:inherit");
		$("#toHighContrast").attr("style","display:none");
	}
	else{		
		$("#contrastcss").removeAttr("href");
		$("#toLowContrast").attr("style","display:none");
		$("#toHighContrast").attr("style","display:inherit");
	}
	
	
	$("#toHighContrast").bind("click", function(){
		$("#contrastcss").attr("href", budgetDomain  + "css/high_contrast.css");
		$(this).css("display","none");
		$("#toLowContrast").css("display","inherit");
		$.cookie("contrast","true", { expires: 360});
		return false;
	});
	$("#toLowContrast").bind("click", function(){
		$("#contrastcss").removeAttr("href");
		$(this).css("display","none");
		$("#toHighContrast").css("display","inherit");
		$.cookie("contrast","false");
		return false;
	});
	
	$("#toNormalSize").bind("click", function(){
		$("#topcontainer").css("font-size","1em");
	});
	$("#toLargeSize").bind("click", function(){
		$("#topcontainer").css("font-size","1.2em");
	});
	var title = $.trim($("h1").text());
	$("#emailPage").attr("href", "mailto: ?body=" + window.location.href)
	$("#printPage").bind("click", function(){
		window.print()
	});
})

$("#crumble").ready(function(){
	
	$cr = $("#crumble");
	var limit = 650; //offsetWidth pixel limit
	liWidths = new Array();
	var total = 0;
	$cr.find("li").each(function(i,el){
		liWidths[i]=el.offsetWidth;
		total += el.offsetWidth;
	})
	
	var i = 1;
	while(total > limit){
		li = $cr.find("li:nth-child("+(i+1)+")");
		a = li.find("a");
		
		a.attr("title", a.text()).text("...");
		
		total =  total - liWidths[i-1] + li.get(0).offsetWidth;
		i++;
	}

	//just in case the last item is a link
	$cr.find("li:last-child a").contents().unwrap();
})	

String.prototype.startsWith = function(str, caseSensitive){
	if(typeof caseSensitive == "undefined"){caseSensitive = true}
	
	if(caseSensitive){
		return str == this.substr(0,str.length)	;
	}
	else{
		return str.toUpperCase() == this.substr(0,str.length).toUpperCase();
	}
}
/*
String.prototype.startsWith = function(str)
{return (this.match("^"+str)==str)}*/


/*$('ul.sf-menu').ready(function(){
	//initiate menu
	$('ul.sf-menu').supersubs({
		delay:         0,
		minWidth:    20,   // minimum width of sub-menus in em units
		maxWidth:    45,   // maximum width of sub-menus in em units
		extraWidth:  2,     // extra width can ensure lines don't sometimes turn over
						   // due to slight rounding differences and font-family
		dropShadows:   false		
	}).superfish();
	

});*/

function encode_utf8( s )
{
  return unescape( encodeURIComponent( s ) );
}

function decode_utf8( s )
{
  return decodeURIComponent( escape( s ) );
}

$("link[href*='nojs.css']").remove();

function truncateText(txt, length){
	var newLength = txt.substring(0,length+1).lastIndexOf(" ");
	var newTxt = txt.substring(0,newLength);
	if(txt.length > length ){
		newTxt += "...";
	}
	return newTxt;
}

function fixFocusIE(){
	if($.browser.msie){
		$("a").focus(function(){
			  $(this).addClass("focus");
		})
		$("a").blur(function(){
			  $(this).removeClass("focus");
		})
	}
}
function fixOddEvenTrIE(){
	if($.browser.msie){
		$("tr:nth-child(even)").addClass("even");
		$("tr:nth-child(odd)").addClass("odd");
	}
}

function langButtons(){
	if(lang!="en"){
		if(lang == "fr"){
			index = 1
		}
		else{
			index = 2
		}
		
		$(langversions).each(function(i,el){
			var vals = el.split(",");
			$("a.lv[data-lang='"+ vals[0] +"']").attr("title", vals[index])						  
		})
	}
}


String.prototype.endsWith = function(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf(pattern) === d;
};

function encode_utf8( s )
{
	return unescape( encodeURIComponent( s ) );
}

function decode_utf8( s )
{
	return decodeURIComponent( unescape( s ) );
}


function qualityCheck(){
	if(window.location.href.indexOf("http://") == -1 ||
		window.location.href.indexOf("acceptance.ec.europa.eu") != -1){
		
		//check if all images have alt attributes
		var count = 0;
		$("img").each(function(i,el){
			if($.trim($(this).attr("alt")) == ""){
				count++;
			}
		});
		if(count > 0){
			alert("Quality check: You have " + count + " images without an alt value.\nPlease provide one!");
		}
		
		//check if external pages go to a _blank window
		count = 0;
		$("a").each(function(i, el){
							 
			href = $(this).attr("href");
			target = $(this).attr("target")
			
			var indexOfChar = href.indexOf("?")
			if(indexOfChar != -1){
				href = href.substring(0, indexOfChar);
			}
			indexOfChar = href.indexOf("#")
			if(indexOfChar != -1){
				href = href.substring(0, indexOfChar);
			}
			
			if((href.endsWith(".doc") || href.endsWith(".pdf")) && target != "_blank"){
				count++;	
			}
			else if (href.indexOf("http://") > -1 && href.indexOf("ec.europa.eu/budget/") == -1
					&& target != "_blank"){
				count++;
			}
		});
		if(count > 0){
			alert("Quality check: You have " + count + " external links or document links without a _blank target!\nPlease provide one !");
		}
}
}

function safe_contact(name, subject_msg, body_msg ) {
		
		un = "ec" ;
		deux = "europa";
		trois = "eu"
		quatre = "." ;
		cinq = name ;
		six = "budget" ;
		sept = "@" ;
		onyva = new String("<li><a accesskey=\"7\" href=\"mailto:") ;
		onyva = onyva.concat(six);
		onyva = onyva.concat(sept);
		onyva = onyva.concat(un);
		onyva = onyva.concat(quatre);
		onyva = onyva.concat(deux);
		onyva = onyva.concat(quatre);
		onyva = onyva.concat(trois);		
		if (subject_msg) {
			onyva = onyva.concat("?Subject=") ;
			onyva = onyva.concat(subject_msg) ;
		}
		if (subject_msg && body_msg) {
			onyva = onyva.concat("&Body=") ;
			onyva = onyva.concat(body_msg) ;
		}
		if (!subject_msg && body_msg) {
			onyva = onyva.concat("?Body=") ;
			onyva = onyva.concat(body_msg) ;
		}		
		onyva = onyva.concat("\">");
		onyva = onyva.concat(cinq);
		onyva = onyva.concat("</a>")
		onyva = onyva.concat("</li>");
		
		return onyva;
}


//this function facilitates the timed toggleing of elements.
//The first element in 
//options are...
//animate: true|default:false; fades elements in and out before and after switching
//transitionTime: milliseconds; defines the transition time between two elements when animated
//refreshPage: true|default:false; when true, there will be no transition. the page will be refreshed at each dateTime.
//mode: default:"show"|"hide"; if "show", the first element will be shown, if "hide", first element will be hidden. Subsequent toggles are adapted to this setting.

//timeToggle([arrayOfElements],[arrayOfDateTimes], {optionsObject (optional)})
function dateTimeToggle(startWith, arrayOfElements, arrayOfDateTimes, optionsObject){
	var now = new Date();
	var o = {
		animate: optionsObject === undefined ? false : optionsObject.animate || false,
		transitionTime: optionsObject === undefined ? 1000 : optionsObject.transitionTime || 1000,
		refreshPage: optionsObject === undefined ? false :  optionsObject.refreshPage || false,
		mode: optionsObject === undefined ? "show" :  optionsObject.mode || "show"
	};
	$(arrayOfDateTimes).each(function(index,date){
		if(now >= date && now < (index<arrayOfDateTimes.length?$(arrayOfDateTimes).get(index+1):new Date())){
			if(o.mode == "show"){
				$(arrayOfElements).get(index).css("display","");
			}
			else{
				$(arrayOfElements).get(index).css("display","none");
			}
		}
		else{
			
		}
	})
}

function closeNotice(noticeId){
		$("#notice").hide("blind");
		//save text to cookie to remind we've seen this message already
		
		if($.cookie("hideNotice") != null){
			noticeIdArray = $.cookie("hideNotice").split("-");
			noticeIdArray[noticeIdArray.length] = noticeId;
			while(noticeIdArray.length > 10){				
				noticeIdArray.shift();
			}
			$.cookie("hideNotice", noticeIdArray.join("-") , { path:"/", secure: false } );
		}
		else{
			$.cookie("hideNotice", noticeId , {  path: "/", secure: false } );
		}
}
function showNotice(){
	$("#notice").css("display","block");		
}

function animateNotice(){
	$("#notice").delay(1000).show("blind");
}

function compareStringLengths ( a, b )
{
  if ( a.length > b.length )
    return -1;
  if ( a.length < b.length )
    return 1;
  return 0; // a and b are the same length
}


/**
 * $.include - script inclusion jQuery plugin
 * Based on idea from http://www.gnucitizen.org/projects/jquery-include/
 * @author Tobiasz Cudnik
 * @link http://meta20.net/.include_script_inclusion_jQuery_plugin
 * @license MIT
 */
// overload jquery's onDomReady
if ( jQuery.browser.mozilla || jQuery.browser.opera ) {
	document.removeEventListener( "DOMContentLoaded", jQuery.ready, false );
	document.addEventListener( "DOMContentLoaded", function(){ jQuery.ready(); }, false );
}
jQuery.event.remove( window, "load", jQuery.ready );
jQuery.event.add( window, "load", function(){ jQuery.ready(); } );
jQuery.extend({
	includeStates: {},
	include: function(url, callback, dependency){
		if ( typeof callback != 'function' && ! dependency ) {
			dependency = callback;
			callback = null;
		}
		url = url.replace('\n', '');
		jQuery.includeStates[url] = false;
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function () {
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.onreadystatechange = function () {
			if ( this.readyState != "complete" && this.readyState != "loaded" ) return;
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.src = url;
		if ( dependency ) {
			if ( dependency.constructor != Array )
				dependency = [dependency];
			setTimeout(function(){
				var valid = true;
				$.each(dependency, function(k, v){
					if (! v() ) {
						valid = false;
						return false;
					}
				})
				if ( valid )
					document.getElementsByTagName('head')[0].appendChild(script);
				else
					setTimeout(arguments.callee, 10);
			}, 10);
		}
		else
			document.getElementsByTagName('head')[0].appendChild(script);
		return function(){
			return jQuery.includeStates[url];
		}
	},
	readyOld: jQuery.ready,
	ready: function () {
		if (jQuery.isReady) return;
		imReady = true;
		$.each(jQuery.includeStates, function(url, state) {
			if (! state)
				return imReady = false;
		});
		if (imReady) {
			jQuery.readyOld.apply(jQuery, arguments);
		} else {
			setTimeout(arguments.callee, 10);
		}
	}
});



var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();


var userAgent = navigator.userAgent.toLowerCase();
var version = jQuery.browser.version
// Figure out what browser is being used
jQuery.browser = {
	version: version,
	firefox: /firefox/.test( userAgent ),	
	chrome: /chrome/.test( userAgent ),
	safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

if(jQuery.browser.firefox){
	jQuery.browser.version = parseFloat(userAgent.substr(userAgent.indexOf("firefox") + 8, 20));	
}



$(document).ready(function(){
		
		if($.browser.msie){
			$("head").append('<link rel="stylesheet" type="text/css" href="' + budgetDomain + 'css/browser/IE/IE.css"/>');
			
			if((userAgent.indexOf("trident") != -1 && parseInt($.browser.version ) == 7)  ||
				parseInt($.browser.version ) == 8 ){
				$("head").append('<link rel="stylesheet" type="text/css" href="'+ budgetDomain +'css/browser/IE/IE8.css">');
			}
			else if(parseInt($.browser.version ) == 7){	
				
				$("head").append('<link rel="stylesheet" type="text/css" href="' + budgetDomain + 'css/browser/IE/IE7.css"/>');
				$("head").append('<link rel="stylesheet" type="text/css" href="' + budgetDomain + 'css/browser/IE/lteIE7.css"/>');
				
			}
		}
		else if($.browser.chrome){
			$("head").append('<link rel="stylesheet" type="text/css" href="'+budgetDomain+'css/browser/CHR/CHR.css">');			
		}
		else if($.browser.safari){
			$("head").append('<link rel="stylesheet" type="text/css" href="'+budgetDomain+'css/browser/SF/SF.css">');			
		}
		
		
});


function isValidDate(dateStr) {
   // regular expression to match required date format 
	re = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/; 
   	var result = true;
   
	if(dateStr != '' && !dateStr.match(re)) { 			
		result = false; 
	} 
	
	if(dateStr != '' && !dateStr.match(re)) { 
		result = false; 
	}	
	return result;
}

function isValidTime(timeStr){
	// regular expression to match required time format HH:MM	
	re = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
	var result = true;
	
	if(timeStr != '' && !timeStr.match(re)) {		
		result = false; 
	}
	
	return result;
}

function expand(lnk,targetID){
	$("#"+targetID).css("display","block");
	$(lnk).remove();
}















