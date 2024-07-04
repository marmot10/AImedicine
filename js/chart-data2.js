var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["2023-05-11","2023-05-15","2023-05-20","2023-05-25","2023-06-01"],
			datasets : [
				{
					label: "步行速度（m/s)",
					fillColor : "rgba(48, 164, 166, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [55,63,72,77,85]
				}
			]

		};
		

window.onload = function(){
	var chart= document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart).Line(lineChartData, {
		responsive: true
	});
	
};