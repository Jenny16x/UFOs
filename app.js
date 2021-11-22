// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Declare a variable, tbody
//Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
  }
//11.5.2
  

//loop to our data. We also added an argument (dataRow) that will represent each row of the data as we iterate through the array
data.forEach((dataRow) => {
    //create a variable that will append a row to the table body.
    let row = tbody.append("tr");
    //we'll set up another function
    Object.values(dataRow).forEach((val) => {
        //With this line, we've set up the action of appending data into a table data tag (<td>
      let cell = row.append("td");
      //extracting only the text of the value
      cell.text(val);
      }
    );
  });
