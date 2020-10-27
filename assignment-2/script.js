var anonymousCube = function(num) {
    return num * num * num;
}

console.log( "Calling anonymous function without a name: ", anonymousCube(4) );

function convertToFahrenheit(degree) {
    return (degree * 9 / 5) + 32;
}

function convertToDegree(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log( "Converting 45 degrees to fahrenheit: ", convertToFahrenheit(45) );
console.log( "Converting 45 fahrenheit to degrees: ", convertToDegree(45) );

( function() {
    alert( "Hello JavaScript ");
} )();