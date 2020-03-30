//$(document).ready(function() {
//  preload_Header();
//});
//
//function preload_Header() {
//  $('<img />').attr('src', 'images/header.png').load(function() {
//	$("#header").css("background-image", "url(images/header.png)");
//	$(this).remove();
//  });
//}
$(document).ready(function() {
  $("#menu ul li").bind("click", function() {
	var ref1 = $(this).attr("ref");
	var that = this;
	$(this).siblings().each(function() {
	  if ($(this).hasClass("menuActive")) {
		var ref2 = $(this).attr("ref");
		$("#" + ref2).fadeOut();
		$("#" + ref1).fadeIn();
		$(that).addClass("menuActive")
		$(this).removeClass("menuActive")
	  }
	});
  });

  $("#flags img").bind({
	mouseover: function() {
	  $(this).clearQueue().animate({
		opacity: 1
	  });
	},
	mouseout: function() {
	  $(this).clearQueue().animate({
		opacity: 0.4
	  });
	},
	click: function() {
	  var switchTo = $(this).attr("lang");
	  var switchFrom = (switchTo == "el") ? "en" : "el";

	  $("div." + switchFrom).add($("ul." + switchFrom)).each(function() {
		$(this).fadeOut(100, function() {
		  $(this).removeClass(switchFrom).addClass(switchTo).fadeIn(100);
		});
	  });
	}
  });
  $("#facebook").bind({
	mouseover: function() {
	  $(this).clearQueue().animate({
		opacity: 1
	  });
	},
	mouseout: function() {
	  $(this).clearQueue().animate({
		opacity: 0.6
	  });
	},
	click: function() {
		window.open('https://www.facebook.com/Agapinis', '_blank');
	}
  });
});
