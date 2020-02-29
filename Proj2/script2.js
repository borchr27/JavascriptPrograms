var fruits = ["Apple", "Orange", true, 13];

document.write(fruits.length + " ");


//Split string into array
var things = "Apples, Oranges, Squares, Circles";
things = things.split(",");
things[1] = "Square!";
document.write(things + " " + things.length + " " + things[0]);
