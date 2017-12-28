var round = 1;

for (var i=0; i<9; i++) {
	document.getElementById("container").innerHTML += "<div class='block' style='height:" + 100 + "px;width:" + 100 + "px;display:inline-block;vertical-align:top'></div>"
}

$('.block').click(function() {
	if ($(this).hasClass("red") || $(this).hasClass("blue")) return;
	if (round%2==0) {
		$(this).css("background-color", "#ef5350");
		$(this).addClass("red");
	}
	else {
		$(this).css("background-color", "#2196f3");
		$(this).addClass("blue");
	}
	round++;
	if ($(".block").length == $(".blue").length + $(".red").length) gameEnd();
});

function gameEnd() {
	$("body").append("<div id='end-screen' style='display:none;top:0;left:0;vertical-align:top;z-index:999;position:absolute;height:300px;width:300px;background-color:rgba(255, 255, 255, 0.7)'><div style='top:140px'><center>Game Over!</center></div></div>")
	$("#end-screen").fadeIn("slow");
	console.log("end");
}