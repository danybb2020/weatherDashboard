
var APIkey= "4a21ff43731177f977a6927c583837f2"
var weatherURL ="http://api.openweathermap.org/data/2.5/weather?q="
var date = moment().format("MMM Do YY");
var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q="


window.onload = function(){
  $("#searchBtn").click(function(){
    var searchQuery = $("#field").val();
    $("#history").append("<li>"+ searchQuery + "</li>");
$.ajax({
url: weatherURL +searchQuery + ",us&mode&appid="+ APIkey,
method: "GET",
dataType:"jsonp",
}).then(function(response){

  var temp= (response.main.temp - 273.15)*1.80 +32;
  var tempF = temp.toFixed (0);
  var icon = response.weather[0].icon;

$("#city").html("<h2>" + response.name + "(" + date + ")"+ "<img src='http://openweathermap.org/img/wn/"+icon+"@2x.png'"+"<h2>");
$("#temp").html("<p>" + "Temperature: " + tempF + "F"+"<p>");
$("#humidity").html("<p>" + "Humidity: " + response.main.humidity);
$("#wind").html("<p>" + "Wind Speed: " + response.wind.speed);
        $.ajax({
            url: forecastURL + searchQuery + "&appid=" + APIkey,
            method:"GET",
            dataType:"jsonp",
        }).then(function(response){
            console.log(response);
            var n = 0
           
            for(var i=0; i<=5; i++) {
      
            var find = response.list[n];
            var foreDate= find.dt_txt
            var foreIcon= find.weather[0].icon;
         
            console.log(foreIcon);
            var forTemp = ((find.main.temp - 273.15)*1.80 +32).toFixed(0);
           
            $("#day"+ i).html("<p>"+ foreDate + "<p>"+"<img src='http://openweathermap.org/img/wn/"+foreIcon+"@2x.png' style='width:50px;height:50px;'>"+ "<p>" + "Tempurature F: " +forTemp + "<p>"+"<p>" +"Humidity: " + find.main.humidity + "<p>");
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
          
            console.log(n);
           
            }
        })
        })
    function history(){
        $("#history").append("<li>"+ searchQuery+ "</li>");
        var searchHist = $("#history").innerText;
        console.log(searchHist);
       
    }
    
    }
)
}



