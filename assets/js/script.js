var navigationValues = [];

var navigationForm = document.querySelector('#navigationForm');
var navigationInput = document.querySelector('#navigationInput');

navigationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent from submission

    var value = navigationInput.value.trim();
    if (value) {
        navigationValues.push(value);
        navigationInput.value = '' //clear input filed
        renderNavigation(); //call the function to render the navigation
        //renderNavigation() -> function to dynamically create the navigation elements
    }
});

// use the Array filter() method to remove any empty or falsy value from the array
navigationValues = navigationValues.filter(function(value) {
    return value; //return any empty or falsy values
});

// create function to render the navigation elements dynamically
function renderNavigation() {
    var navigation = document.querySelector('#navigation');
    navigation.innerHTML = ''; //clear any existing elements

    navigationValues.forEach(function(value) {
        var navItem = document.createElement('li');
        navItem.textContent = value;
        navigation.appendChild(navItem);
    });

    // save navigation values to localStorage
    localStorage.setItem('navigationValues',JSON.stringify(navigationValues));
}

// retrive the navigation value from localStorage when page load
window.addEventListener('load', function() {
    var storedNavigationValues = this.localStorage.getItem('navigationValues');
    if (storedNavigationValues) {
        navigationValues = JSON.parse(storedNavigationValues);
        renderNavigation(); //call the function to render the navigation
    }
});

