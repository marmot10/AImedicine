var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

var lineChartData6 = {
	labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
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

}


	var lineChartData = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "步行速度（m/s)",
					fillColor : "rgba(48, 164, 166, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [0.220,0.265,0.304,0.310,0.425]
				}
			]

		}
		var lineChartData1 = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "步行速度（m/s)",
					fillColor : "rgba(48, 164, 166, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [0.220,0.265,0.304,0.310,0.425]
				}
			]

		}
		var lineChartData2 = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "左右脚平均步长(cm)",
					fillColor : "rgba(22, 166, 255, 0.2)",
					strokeColor : "rgba(11, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [13.893,16.256,18.641,19.658,22.653]
					
				}
			]

		}
		var lineChartData3 = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "髋关节屈曲活动度(°)",
					fillColor : "rgba(77, 77, 77,0.2)",
					strokeColor : "rgba(48, 28, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [10.654,12.845,12.984,14.658,14.864]
					
				}
			]

		}
		var lineChartData4 = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "髋关节伸展活动度(°)",
					fillColor : "rgba(77, 111, 77, 0.2)",
					strokeColor : "rgba(48, 202, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [15.589,16.546,16.453,18.699,19.240]
					
				}
			]

		}
		var lineChartData5 = {
			labels : ["2023-04-11","2023-04-15","2023-05-20","2023-06-01","2023-06-24"],
			datasets : [
				{
					label: "步行速度",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [0.220,0.265,0.304,0.310,0.425]
				}
			]

		}
		
	var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Teal"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			
	var doughnutData = [
					{
						value: 300,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},
					{
						value: 100,
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Teal"
					},
					{
						value: 120,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Red"
					}
	
				];

window.onload = function(){
	
	var chart1 = document.getElementById("line-chart1").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData1, {
		responsive: true
	});
	var chart22= document.getElementById("line-chart2").getContext("2d");
	window.myLine = new Chart(chart22).Line(lineChartData2, {
		responsive: true
	});
	var chart33= document.getElementById("line-chart3").getContext("2d");
	window.myLine = new Chart(chart33).Line(lineChartData3, {
		responsive: true
	});
	var chart44= document.getElementById("line-chart4").getContext("2d");
	window.myLine = new Chart(chart44).Line(lineChartData4, {
		responsive: true
	});
	var chart66= document.getElementById("line-chart6").getContext("2d");
	window.myLine = new Chart(chart66).Line(lineChartData6 , {
		responsive: true
	});
	
	
	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};