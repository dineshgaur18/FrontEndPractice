
//--Object? 
//--1) Object Literals
var obj1 = {};
var obj2 = {
    empId: "1",
    empCode: "X0840",
    empDetail: function () {alert("Hi"); }
};

//--2) Object Constructor
var obj3 = new Object();
obj3.empId = "1";
obj3.empCode = "X0840";
obj3.empDetail = function () { };



//--Associate Array : Array with named Index are called Associative Array

//--Named Index array example
var users = [];
users["Name"] = "Dinesh";
users["Profession"] = "Software Developer";

//alert(users.length);
//var detail = users[0];
//alert(detail);
//alert(users["Name"]);

//--Number Index Array example
var usersObject = new Object();
usersObject["Name"] = "Dinesh";
usersObject["Profession"] = "Software Developer";

//alert(Object.keys(usersObject).length);

//alert(usersObject[0]);
//alert(usersObject["Name"]);


//--Array literals

var fruits = ['Apple', 'Mango', , 'Orange'];
alert(fruits.length);


//--Exception Handling

try {
    //code to run
    var a = 2;
    var b = 4;
    alert(a + b + c);
}
catch (e)
{
    alert(e);
    throw e;
}
finally {

}