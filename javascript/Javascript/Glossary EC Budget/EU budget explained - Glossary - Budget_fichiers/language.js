$(document).ready(function(){
	initLanguage();					   
})
function initLanguage(){
	if($("#languages2").length == 0){return false};
	
	
	
	curLang = new Array();
	curLang["en"] = "Current language";
	curLang["fr"] = "Langue actuelle";
	curLang["de"] = "Aktuelle Sprache";
	
	stateClosed = true;
	mouseOver=false;
	
	list = $("#languages2 li");
	
	clicked = false;
	
	$("#languages2").bind("mouseover", function(){
		mouseOver = true;	
	});
	$("#languages2").bind("mouseout", function(){
		mouseOver = false;
		setTimeout(function(){
			if(!mouseOver && !clicked){
				$("#languages2 li+li").css("display", "none");
				$("#languages2 li:first-child").removeClass("open").addClass("closed");
				stateClosed = true;	
			}					
		}, 1000);
	});
			
			
	$("#languages2 li").each(function(i,el){
		
		$(el).find("a").attr("href", "javascript:void(0)");	
		
		if($(this).find("a").attr("hreflang") == lang){
			$("#languages2 ul").prepend(
				$(this).remove().addClass("closed").append($('<span class="off-screen">' + curLang[lang] +'</span>'))
			);
			
			$(this).bind("click", function(){
				if(stateClosed){
					$(this).removeClass("closed").addClass("open");
					$("#languages2 li").css("display", "block");
					stateClosed = false;
				}
				else{
					$(this).removeClass("open").addClass("closed");
					$("#languages2 li+li").css("display", "none");
					stateClosed = true;
				}
			});
		}
		else{
			$(this).css("display","none").bind("click", function(){
				 clicked = true;
				 window.location = window.location.href.replace('_'+ lang +'.cfm','_'+ $(this).find("a").attr("hreflang") +'.cfm')	
			});
		}
	});
	
	if($.browser.msie && $.browser.version < 7){
		$("#languages2").bind("mouseout", function(){
			$("#languages2 li").css("display","block");
		});
	}
}




