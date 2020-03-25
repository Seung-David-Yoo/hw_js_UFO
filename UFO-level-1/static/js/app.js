// from data.js
var tableData = data;

// YOUR CODE HERE!

tbody=d3.select("tbody")
console.log("test1")

function displayData(input){
	tbody.text("");
	input.forEach(function(et_sighting){
	new_tr=tbody.append("tr")
	Object.entries(et_sighting).forEach(function([key, value]){
		new_td=new_tr.append("td").text(value)
		})
	})
}

displayData(tableData)
console.log("test2")

var submit=d3.select("#submit");

submit.on("click",function(){
	console.log("test3")

  d3.event.preventDefault();

 var dateInput=d3.select("#datetime");
 var cityInput=d3.select("#city");
 var stateInput=d3.select("#state");
 var countryInput=d3.select("#country");
 var shapeInput=d3.select("#shape");


 console.log(dateInput.property("value"));
 console.log(cityInput.property("value"));
 console.log(stateInput.property("value"));
 console.log(countryInput.property("value"));
 console.log(shapeInput.property("value"));

 var filtered =tableData.filter(et_sighting =>{
	return (et_sighting.datetime===dateInput.property("value")|| !dateInput.property("value"))&&
   			 (et_sighting.city===cityInput.property("value")|| !cityInput.property("value")) &&
			 (et_sighting.state===stateInput.property("value")|| !stateInput.property("value"))&&
			 (et_sighting.country===countryInput.property("value")|| !countryInput.property("value")) &&
			 (et_sighting.shape===shapeInput.property("value")|| !shapeInput.property("value"))
})
displayData(filtered);
});


var filterInput=d3.select('.form-control');

function clearEntries(){
	filters={};

	filterInput._groups[0].forEach(entry =>{
		if (entry.value !=0){
			d3.select('#' + entry.id).node().value="";
		}
	});
};

var clearButton=d3.select("#clear");
clearButton.on('click', function(){
	d3.event.preventDefault();
	clearEntries()
});






