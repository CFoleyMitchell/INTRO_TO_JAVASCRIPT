// from data.js
var tableData = data;

// YOUR CODE HERE! Step 1

//define the tablebody
var tbody = d3.select("tbody");

function createtable(tableData) {
    //clear out html 
    tbody.html("");
    //create a loop to add the rows and data
    tableData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.values(ufoData).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
//create the table by calling the function
createtable(tableData);

//Use d3 to create filterbutton to filter the date. Note: id = #
var filterbutton = d3.select("#filter-btn");

//call our variable filter button - define 
filterbutton.on("click", function() {
    //Prevent page from refreshing
    d3.event.preventDefault();
    //write our functionality to call in a particular date    
    var inputDate = d3.select("#datetime").property("value");
    //Create a copy of the table to filter
    var filteredData = tableData;
    //use conditional statement to check to see if the date has a value
    if(inputDate) {
        //call our filter data variable and overwrite, use arrow function
        filteredData = tableData.filter(row => row.datetime === inputDate);
        }
        //create the new table with the filtered inputDate
        createtable(filteredData);
});

//Step 2 - create input right into the form for all the categories like the date. Just update onclick function
//This is an optional challenge assignment 


