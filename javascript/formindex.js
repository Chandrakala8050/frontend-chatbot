// console.log(NaN==NaN);
// console.log(Number.NaN==NaN);
// console.log(isNaN(NaN));


// Expressions and Operators....
// 1)Assignment Operators
// 2)Arithmetic Operators
// 3)Coparision Operators
// 4)Logical Operators
// 5)String Operators
// 6)Conditional Oprtaor..

// 1)An assignment operator assigns a value to its left operand based on the value of its right operand..

// var x=5;
// var y=5;

// // console.log("is both the x and y are equal or not" + x==y);
// console.log (x==y);

// 2)Arithmetic Operators

// console.log(5*20);

//Increment Operator and Decrement Operators
// Operator: x++(postincrement) or ++x(preincrement)
// the increment operator increments and returns the value before incrementing.
//post increment
// var num=15;
// var newNum=(num++);
// console.log(num);
// console.log(newNum);

//pre increment
// var num=15;
// var newNum= ++num;
// console.log(num);
// console.log(newNum);

// 3)Comparission Operator
// A comaprision operator compares its operands and returns a logical value based on whether the comparision is true.
//  var a=30;
//  var b=-20;

 //Equal(==)
//  console.log(a==b);
//  console.log(a>b);

// console.log(a>=b);

// 4)Logical Operators
//this returns boolean type of values

//Logical AND (&&)
// if all the conditions are true the it returns true


// console.log(a>b && b<-50 && b<0);

//logical OR (||)
// if one of the conditions is true the it returns true
// var a=30;
// var b=-20;
// console.log(a>b || b<0 || b>0);

//Logical NOT (!)
// var a=30;
// var b=-20;

// console.log(!((a>0) || (b<0)));

// 5)String Concatenation Operator

// console.log("Hello World");
// console.log("hello " + "world");
//  var myName ="Pranit";

//  console.log(myName +" Samal");
//  console.log(myName +" Nayak");

//what will the output of 9**2?
// console.log(9**2); //9*9=81

// Task For You
// 1)What will be the output , when we add a number and a string?
// 2)write a program to swap two numbers?
// 3)write a program to swap two numbers without using 3rd variable?

// Conditional Statements, Loops , Function in java Scripts....



function clearErrors(){

  errors = document.getElementsByClassName('formerror');

  for(let item of errors)
  {
    item.innerHTML = "";
  }

}
  
  function seterror(id, error){
    // sets error inside tag of id

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }


  function validateForm(){

    var returnval = true;
    clearErrors();
    
    //perform validation and if validation fails, set the value of returnval to false...
    var name = document.forms['myForm']["fname"].value;

    if(name.length < 5){
      seterror("name", "*length of name is too short" );

      returnval= false;
    }
   
    if(name.length ==0){
      seterror("name", "*length of name cannot be zero");
      returnval = false;
    }
     
    var email = document.forms['myForm']["femail"].value;
    if(email.length > 30){
      seterror("email", "*email length is too long" );

      returnval= false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
      seterror("phone", "*phone number should be of 10 digits" );

      returnval= false;
    }


    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 6){
      seterror("pass", "*password should be atleast 6 character long" );

      returnval= false;
    }
   
    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
      seterror("cpass", "*password and confirm password should match" );

      returnval= false;
    }
    return  returnval;

  }




