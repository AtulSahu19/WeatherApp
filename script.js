async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=58f2f45e00cb1cf47fbb8ddbf0452a6d`;
	const response =await fetch(url)
	const data =await response.json();
	console.log(data)
 
}
function fetchCity()
{
	let cityName = document.getElementById("city_name");
	if(cityName.value==="")
	{
		alert("enter city name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}