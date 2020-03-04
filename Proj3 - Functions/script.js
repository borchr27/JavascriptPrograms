function sayHi(name, age){
    document.write("<h1>Hello "+ name + " Man</h1>");
    document.write("<h1> You are "+ age + " .</h1>");
    //alert("Sup dog!");
}

sayHi("Steve Joobs", "Moved on");
sayHi("Bill Ghaatays", 106);

function add(num1, num2){
    return num1 + num2;    
}
var addedNumbers = add(4,103);
document.write(addedNumbers + " ");
document.write(add(54, 5));