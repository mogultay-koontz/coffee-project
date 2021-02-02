"use strict"

// This function renders a table for a specific coffee type including ID, Name, and Roast
// Example input: {id: 2, name: 'Half City', roast: 'light'}
// Example output: <tr class="coffee"> <td>2</td> <td>Half City</td> <td>light</td> </tr>
function renderCoffee(coffee) {
    var html = '<div class="coffee m-4">';
    html += '<h3>' + coffee.name + '<span class="font-weight-lighter">' + ' ' + coffee.roast + '</span>' + '</h3>';
    // html += ;
    html += '</div>';

    return html; // returns html code
}
// This function takes in the output table row data from the renderCoffee function
// and compiles it into a table
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// -This gives functionality to the select and option form
//  and returns a filtered array based on the roast selection
// -This function takes selected roast and returns a new array of the roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// This function will filter the coffee names when you type out characters
function searchForName(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = search.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedCoffee)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// This will add a new coffee name, roast, and id number
// To see the changes, enter the new name and roast and press the 'Add' button. And select
// 'All' roast or the roast type you specified when a creating and then hit the above submit button.
function createCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var nameOfCoffee = document.getElementById('nameOfCoffee').value;
    var typeOfRoast = document.getElementById('typeOfRoast').value;
    coffees.push({
        name: nameOfCoffee,
        roast: typeOfRoast,
        id: coffees.length + 1,
    })
    updateCoffees(e);
}

function changeBackground () {
    var selectedRoast = roastSelection.value;
    var body = document.getElementsByTagName("body")[0]
    if (selectedRoast === 'light') {
        body.style['background-color'] = "#F5F5F5";
    } else if (selectedRoast === 'medium') {
        body.style['background-color'] = "#d3d3d3";
    } else if  (selectedRoast === 'dark') {
        body.style['background-color'] = "#A9A9A9";
    } else if  (selectedRoast === 'all') {
        body.style['background-color'] = "#FFFFFF";
    }
}

// -The coffees variable is an array of objects containing the ID, name and roast values of each coffee
// -It is used in the renderCoffees function to iterate through the outputs of the renderCoffee function.
// -It is used in the updateCoffees function

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light',},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// These are used to locate/reference the proper html elements in order
// to add event listeners and modify the html
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.getElementById('search');
var newCoffee = document.getElementById('submitNewCoffee') // For adding new coffee


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitButton.addEventListener('click', changeBackground);

search.addEventListener("keyup", searchForName);

newCoffee.addEventListener("click", createCoffee); // For adding new coffee


