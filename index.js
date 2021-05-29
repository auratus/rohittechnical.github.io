//console.log("Hello world");
/*var a = 10
var b = 20
c = b
b = a          
a = c
console.log("The value of a has become " + a)
console.log("The value of b has become " + b)*/
//leap year program
// var leap = 2015
// debugger;
// if(leap % 4 === 0)
// {
//  if(leap % 100 === 0)
//  {
//    if(leap % 400 === 0)
//    {console.log("The year is a leap year")
//    }
//     else
//     console.log("The year is not a leap year")
//  }
// else
// console.log("The year is a leap year")
// }
// else
// console.log("The year is not a leap year")
// Table 
// var table = 8;
// for(multi = 1 ; multi <= 10 ; multi++)
// {
//   table * multi
//   console.log(table + "*" + multi + "=" + table * multi)
// }

//FUNCTIONS

// function sum(a,b){
// return total = a + b}
// var funcexp = sum(5,10)
// console.log("the sum is " + funcexp)



// function sum(a,b){
//   return total = a + b}
//   sum(5,10)



// 1.)Values and variables in javascript


// var myName = 'Rohit Sahu ji'; Here "var" is the variable,"myName" is the variable name and "Rohit Sahu ji" is the value .
//                               Here "Rohit Sahu ji" is the "string" hence we have written it within single quotes.Numbers can be written without quotes.
//                               "myName" is written in "camel casing".

// console.log(myName); This is a "method" and used to display output in our "node". 
//                      We will discuss methods later.



// 2.)Variable naming conventions

// (i)A variable name can only start with "alphabet","_" and "$"
// (ii)We can use a number only after above mentioned characters.
// (iii) We cannot use space between a variable name.
// (iv)A variable is case sensitive i.e., if declared it "myName" so we cannot use it as "myname".
// (v)We cannot use reserved keywords as a variable name.Like "var" is a reserved keyword and we cannot use it as variable name.
// (vi)Last but most imp point is that we cannot use any other special character other than "_" and "$".


// 3.)Data types in javascript

// The type of values we assign to our variable is called data types.

// We have 6 data types in javascript which are primitive:
// (i)String

// var myName = "Rohit Sahu Ji"
// console.log(myName);
// console.log(typeof(myName))  "typeof" is a method which is used to find the type of value we have stored in variable name.


// (ii)Number

// var myAge = 24; 
// console.log(myAge);
// console.log(typeof(myAge));

// (iii) Boolean

// "true/false" values are called boolean data types.

// var amiRohit = true; 
// console.log(amiRohit);
// console.log(typeof(amiRohit));

// (iv)Undefined data type 

// we will learn undefined data type with the help of "null vs undefined":


// null:

// when we assign "null" to any variable then it is called null

// var iamUseless = null;
// console.log(iamUseless); here output of value will be "null"
// console.log(typeof(iamUseless)); here output of data type will be "object" which is a bug in javascript.

// Undefined:

// var iamStandby;
// console.log(iamStandby); here the output of value will be "undefined"
// console.log(typeof(iamStandby)); here output of data type will be "undefined"

// dont confuse with value output and data type output both are different.


// There are 2 more data types but we will see them later.


// 4.)NaN(Not a NUmber)-NaN is a property of global object
//                      we will later see what global object is
//                      it is a variable in global scope.

// var myNumber = 9109274958;
// console.log(isNaN(myNumber)); "isNaN" is a method which is used in html forms to check whether user is entering the valid number under number section.
//                               its output will always be in boolean form
//                               here our output is false because we have entered a valid number
//                               if we are getting false output then we can proceed to our next step on html form otherwise user will get an alert. 



// var myNumber = "Rohit"
// console.log(isNaN(myNumber)); now here we are getting the output as "true" which means user has entered invalid phone Number.

// As the user has entered invalid number hence we can give an alert to the user that he has entered wrong details by writing below code.

// if(isNaN(myNumber))
// {
//   console.log("please enter a valid phone number");
// }



// 5.)Concat operator in javascript

// This "+" operator have 2 functions one is it add the arithematic values and second is it concat the two values

// console.log("Java " + "Script"); Here in output we can see the output we are getting is "Java Script".This is called concat.
//                                  For getting a space between "Java" and "Script" simply give a space between Java and its closing double inverted comma.

// console.log(5+3);    Here we are getting output "8" hence it added the two values.
// console.log("Java" + 8); Here we are getting the output "Java8".    

// var num1 = 5;
// var num2 = 5;
// console.log("Are the two numbers equal" + num1==num2); See the output.We are getting wrong output because we have used 2 operators at once hence concat is 
//                                                        not that useful.
//                                                        this problem has been solved in acmascript.

// 5.)Expressions and Operators in javascript

// console.log(5+20); Here 5 and 20 are operands and "+" is an operator.

// There are 6 operators in javascript:

// 1.)Assignment operator

// assignment operator assign the value of right operand to left operand.

// var num = 7;here 7 is assigned to "num"
// console.log(num);


// 2.)Arithematic operators

// Operators which do basic methamatics operations like plus,minus,multiplication,division are called arithematic operators.
// We have one more operator known as modulus(%) operator which give the remainder on division.Arithematic


// console.log(5+6);Output is 11
// console.log(5*3);Output is 15
// console.log(8-2);Output is 6
// console.log(9/3);Output is 3
// console.log(9%4);Output is 1 because it give remainder.

// 3.)Increment and decrement operator

// x++ - post increment operator
// It increment the value after the execution of whole expression
// var num = 5;
// var newNum = num++ + 3;
// console.log(num); Its output is 6
// console.log(newNum); Its output is 8 because post increment increased the value of "num" after adding "num+3". 
// ++x - Pre increment operator
// It increment the value before the execution of whole expression
// var num = 5;
// var newNum = ++num + 3;
// console.log(num); Its output is 6
// console.log(newNum); Its output is 9 because pre increment increased the value of "num" before adding "num+3".
// x-- - Post decrement operator
// It decrement the value after the execution of whole expression
// --x - Pre decrement operator
// It decrement the value before the execution of whole expression


// 4.)Comparison operator

// They give Boolean(true/false) output on evaluating the expression

// == - equals to
// var num = 5;
// var num1 = 6;
// console.log(num==num1); its output is false bcz 5 is not equals to 6.
// != - not equals to
// > - greater than
// < - less than
// >= - Greater than or equals to
// <= - Less than or equals to


// 5.)Logical operators

// Logical operators need 2 or more expressions to operate.
// Similar to comparison operators these also give boolean output on evaluation.

// && - Logical "and" operators.
//      In this the output will be true only if both or all the expressions are true.
  
  // var num = 10;
  // var num1 = -20;
  // console.log(num>num1 && num>0 && num1>0); Here we are getting the "false" output because "num1>0" is false.

  // || - Logical "or" operator

  // It give true value if any of the expression is true.
  // It give false output only if all the expressions are false.

  // ! - Logical "not" operator

  // It makes the true value false and false value true.


  // 6.)String concetination(operator)  +

  // This we already learnt.
  // This is used to concat 2 strings.
  // The resulting output will be the union of the two operand strings.

  // console.log("Rohit " + "Technical"); Output will be "Rohit Technical"


  // 7.)Exponentiation operator(**)

  // It is used to calculate power of its base.
  // Operand to the left of "**" will be the base and its right operand will be the power.

  // console.log(3**3);output is 27


  // 7.) Difference between "==" and "==="

  // The "==" checks only value whereas "===" checks value as well as its data typeof.Lets see with examples.

// "=="

// var num = 5;
// var num1 = '5';

// console.log(num==num1); Its output is true because both "num" and "num1" have same values i.e., "5".


// "==="

// var num = 5;
// var num1 = '5';
// console.log(num===num1); Its giving output "false" because it "num" and "num1" have same values but different data types.


// 8.)Control statements in javascript


// (i) If else

// The statement will execute if the condition under () satisfies otherwise the "else" part will be executed.

// var num = 5;
// var num2 = 15;
// var sum = num + num2;

// if(sum>20)
// {
//   console.log("sum is greater than 20");
// }
// else{
//   console.log('sum is less than 20');
// }

// Here the output is "sum is less than 20" because "(sum>20)" is false and hence "else" part is executed.


// There are 5 falsy values in "if()" it means the output will always be "false" if we use any of these values in "if()".

// (a) 0

// if(0)
// {
//   console.log('We won')
// }

// else
// {
//   console.log('We loose')
// }


// // (b) undefined

// if(undefined)
// {
//   console.log('We won')
// }

// else
// {
//   console.log('We loose')
// }

// // (c) NaN

// if(NaN)
// {
//   console.log('We won')
// }

// else
// {
//   console.log('We loose')
// }


// // (d) null

// if(null)
// {
//   console.log('We won')
// }

// else
// {
//   console.log('We loose')
// }


// // (e) false

// if(false)
// {
//   console.log('We won')
// }

// else
// {
//   console.log('We loose')
// }


// (ii)Conditional ternary operator

// It works similar as "if else" but have diif Syntax.

// var num = 17;

// console.log((num>=18)? "You can vote": "you can't vote");
//                 |               |               |
//                 v               v               v
//             condition  execute if true  execute if false
// Here output is "you cant vote" because condition is false.


// (iii)Switch conditional statement.

// Switch statement switch to the target case without checking any other cases which in turn increase execution speed.

// var pi = 3.14, r=3, l=5, b=7;

// area = 'rectangle';

// switch(area)
// {
//   case 'circle':
//     console.log("The area of circle is :" + pi*r**2);
//     break;

//     case 'rectangle':
//       console.log('The area of rectangle is :' + l*b);
//       break;

//       case 'triangle':
//         console.log('The area of triangle is :' + (l*b)/2);
//         break;
// }

// Here the user have entered the input "rectangle" hence it directly switch to "rectangle" case execute the case and exit the statement due to "break".




// 9.)Looping statement in javascript

// loops executes the statement under block scope({}) untill the test condition becomes false.

// (i) While loop

// var num = 0;  here we have initialise the variable.

// while(num<=10) here "num<=10" is the test condition.
// {
//   console.log(num);
//   num++;  Here we are incrementing the value of num after every execution so that every time value of num change.
   
// }



// (ii)do while loop

// Here in do while loop it execute the first statement and then checks the test condition as a result we always get the first output irrespective of the
// test condition.


// var num = 20;

// do
// {
//   console.log(num);
// }
// while(num<=10)

// here we are getting the output "20" which should not be there.This is the difference between while and do while loop.



// (iii) For loop


// for loop and while loop works same to same i.e., it enters block scope if and only if the test condition is fulfilled.
// in for loop we assign value,test condition and do iteration under "()".But in while and do while loop we were assigning value first then testing condition
// then under block we were iterating. By using for loop we can do these all within one "()".

// for(num=0;num<=10;num++)
// {
//   console.log(num)
// }



// 10.)Functions in javascript


// A function is a piece of code to perform a particular task.
  //  The need of function arises because we can use it anywhere in our project by simply calling it anywhere.



// (i) Function definition

// A function consists of "function" keyword" , "function name" , "function parameters(a,b)" and "function block({})" where we write our code.
// Lets see a function to add 2 numbers to get a basic understanding of functions.


// function sum()
//  {
//   var a =5,b = 8;
//   var c = a+b;
//   console.log(c);
// }

// Defining a function does not execute it.For that we have to call the function.Will see function calling in next section.


// (ii) Calling a function.

// lets consider the above sum function.

// function sum()
//  {
//   var a =5,b = 8;
//   var c = a+b;
//   console.log(c);
// }

// sum(); here we are calling the above function and we are getting output.An imp point to note that we dont need to call function under "console.log()"  
// because we already done it in our function.


// (iii) Function parameter and function argument


// in our above example we can only add the specified(fixed) values but what if we want to add 2 numbers other than "5" and "8"?.For that we have function
// parameters and function arguments.

// Function parameters are passed within the "()" of our function name in function definition.
// Function arguments are passed within "()" of our function name in function calling
// In short parameters are passed during function definition and arguments are passed during function calling.


// function sum(a,b) the variables a and b under paranthesis are called function parameters.
//  {
//   c = a+b;
//   console.log(c);
// }

// sum(10,15); the values under paranthesis are called arguments."10" will be stored in "a" and "15" will be stored in "b" of our function and we get output
// "25".



// (iv) Return type


// What will be the output of below function?

// function sum(a,b)
//  {
//   c = a+b;
//   console.log(c);  
// }

// console.log(sum(10,5) + 10);

// we are getting the output "15" and "NaN" because "sum(10,5)" is not a value rather we are calling the function indirectly.
// For using the "sum(10,5)" as a value we must use the "return" keyword.


// function sum(a,b)
//  {
//   return c = a+b; 
// }

// console.log(sum(10,5) + 10);


// now we are getting the desired output i.e., "25".Now when we call the function it returns the "c" instead of execution.


// (v) Function expression

// creating a function and assigning the value of function into a variable is called function expression.
// We use it for sake of simplicity.


// function sum(a,b)
//   {
//    return c = a+b; 
//  }

// var num = sum(10,5);

// console.log(num + 10);


// now we dont need to write "sum(10,5)" everywhere we just write "num" instead.


// (vi) Anonymous function expression

// anonymous function is a function without a function name.

// var num = function(a,b){
       
//           return c = a+b;
// }

// the above function expression is called anonymous function expression.
// now the question is where are the values? what values we are going to add when we dont have function name? how we gonna call our function?
// the answer is we can pass the arguments in "num" variable.Lets see how we can do it.



// var num = function(a,b){
       
//   return c = a+b;
// }

// console.log(num(5,10)); we can pass the arguments within paranthesis of our variable "num".



// 11.) ECMAScript 2015-Modern javascript

// javascript was created in 1996.
// ECMA International is an organisation which standarized the javascript in 1997 and hence javascript is called ECMAScript.
// The 6TH version is called ECMAScript 2015 which standarized in year 2015 and some new stuff was added. 

// Following updates are introduced in ECMAScript 2015;
//  a)let and const 
//  b)template strings
//  c)default arguments
//  d)rest operators
//  e)destructuring
//  f)object properties
//  g)arrow function
//  h)spread operators


//  we will see all of the above one by one.

//  a)let and const


//  let and const are lmited to their scope i.e., we cannot use them outside their scope(global or local).
//  now first lets see what is local and global scope.


//  function age(a)
//   {
//   var a = 19;
//    if(a>=18)
//    {
//      var b = 50;
//      console.log("You are eligible to vote")
//    }  
//  }
// the main function block({}) is our global scope and block({}) under "if" is called local scope.Now move towards our let and const.


// let

// let is similar to var but it is scope dependant.

// function age()
// {
// let a = 19;
//  if(a>=18)
//  {
//    let b = 50;
//    console.log(a); we are getting output for it because we have defined the "a" in global scope and hence we can use it in local scope.
//    console.log("You are eligible to vote")
//  }  
//  console.log(b); We are getting an error for this because we have defined the "b" in local scope and we are using it outside its scope.
// }

// age();
//  hence we have seen that let cannot be used outside its scope.Also if we have defined the let in global scope so we can use it in local scope.


// const

// similar to let,const can't be used outside its scope.IF we defined the const in global scope so we cannot use it outside the parent scope.
// Also we can't change the value of const once we have assigned its value whether it is local or global scope it doesnt matter.


// function age()
// {
// const a = 19;
//  if(a>=18)
//  {
//    const b = 50;
//    console.log("You are eligible to vote") we are getting proper output for this.
//  }  
//  a++;
//  console.log(a); we are getting error for this because we cannot change the value of a const variable.
//  console.log(b); we are getting here also because we cannot use const variable outside its scope.
// }

// age();



// b)Template literals

// "``" and "$" are template literals using which we can print a statement easily without using concat.
// lets see an example of printing a table

// const table = 8;
// for(num=0; num<=10; num++)
// {
//   console.log(table + "*" + num + "=" + table*num);
// }

// the above way is the traditional way of printing.now lets see the modern way using template literals.

// const table = 8;
// for(num=0; num<=10; num++)
// {
//   console.log(`${table} * ${num} = ${table*num}`); everything will be under back tick.For getting a variable we must use dollar and curly brackets.
// }


// c.)Fat arrow function

// lets see our traditional functions to compare it with fat arrow function.

// function sum()
//  {
//   let a = 5, b=7;
//   return `The product of 2 numbers is ${a*b}`; 
// }
// console.log(sum());

// the simplified form for above is:

// function sum()
//  {
//   return `The product of 2 numbers is ${(a=5)*(b=7)}`; 
// }
// console.log(sum());

// Now lets see how we can write the above function using fat arrow function:

// const sum = () =>
//  {
//   return `The product of 2 numbers is ${(a=5)*(b=7)}`; 
// }
// console.log(sum());
// The above is the syntax for writing the traditional function as fat arrow function.
// Just learn it we cant do much for that part.
//according to fat arrow function definition we dont need to write function keyword.
// "block({})" is same for traditional and fat arrow function.


// according to fat arrow function definition we dont have to write "return" keyword and "{}" for a "single" line "output".
// Hence our code becomes;


// const sum = () => `The product of 2 numbers is ${(a=5)*(b=7)}`; 

// console.log(sum());

// This is the beauty of fat arrow function.
// We were writing 4 5 lines for the same function using our traditional function but using fat arrow function we can do it
// in a single line.


// now we cant see further modern javascript so we will move towards our basic.


// 12.) ARRAYS in javascript

// when we have to store multiple data to a single variable then we use array.

// We can store multiple data of every data type in javascript.

// Now question arises that why we need arrays?The answer isNaN,what if we want to build bio data of a person then we can
// store its details in a single variable which saves our time of writing the long code.Lets see with an example.

// syntax
// let bioData = ['Rohit','Sahu',24,'Jabalpur']; arrays values are always written under square bracket."Rohit" has index
//                                               Number 0,"sahu" has index Number 1 and so on.
// console.log(bioData[2]); values of arrays can be accessed by its variable name followed by index number under square 
//                          brackets.


// lenght of array

// length defines the no of elements stored in our array.

// we have "length" property in javascript to determine the length of an array.

// let bioData = ['Rohit','Sahu',24,'Jabalpur'];
// console.log(bioData.length); this is the syntax to determine the length.we can say in hindi "bioData ki length".we 
                                // basically use "dot(.)" to enter under any name/statement.
//   what if an array has 100 elements? do we count the index number to access the last element?
//   Using "length" property of array we can easily access the last element.


  // let bioData = ['Rohit','Sahu',24,'Jabalpur'];
  // console.log(bioData[bioData.length-1]);
// here we were printing one element at a time.But what if we want all elements at once.for that we use loops.

// for loop

// let bioData = ['Rohit','Sahu',24,'Jabalpur'];

// for(i=0;i<(bioData.length);i++)
// {
// console.log(bioData[i]);
// }
// This is the traditional way of doing the array printing but in ECMAScript 2015 3 new ways are introduced.Lets discuss
// one by one.

// a) "for in" loop

// for in loop print the index number of the array.
// for in loop has same functionality as normal loop.only difference is of syntax.But syntax is also somewhat similar
//  consider normal loop and change same program to our for in loop.


//  let bioData = ['Rohit','Sahu',24,'Jabalpur'];

//  for(i=0;i<(bioData.length);i++)
//  {
//  console.log(bioData[i]);
//  }
//  converting above into for in loop

//  let bioData = ['Rohit','Sahu',24,'Jabalpur'];
//  for(let elements in bioData) we can learn this syntax like this:"elements" is for data under the array,"in" is for 
//                               printing the index numbers of data and "bioData" is our variable.we can interprete the 
//                               "elements in bioData" in english as "index number of elements in bioData".
//                               The "in" inside the paranthesis is the reason why we call it "for in" loop.
//  {
//   console.log(elements); here also we have to write "elements".It prints the fetched elements one by one.
//  }

//  loop will execute untill the last value gets printed.Also we cant stop the loop at a point using break or any other keyword.


// b)"for of" loop

// It print values stored in arrays.
// We use "of" instead of "in" within paranthesis.Rest syntax will be same as "for in" loop.


// let bioData = ['Rohit','Sahu',24,'Jabalpur'];
// for(let elements of bioData)
// {
//  console.log(elements);
// }

// c)"for each" loop

// actually "for each" is a method.
// methods and properties are written as variable/array name,a dot followed by method/property name.
// array.prototype.forEach()
// forEach calls a function for each element in the array.

// consider the same array as Above

// let bioData = ['Rohit','Sahu',24,'Jabalpur'];
// bioData.forEach(function(element,index,array) {
  
//              console.log(`The index number of ${element} is ${index} from array ${array}`);
// });

// we have called a "forEach" method inside our array "bioData" and inside our method we are calling function for every 
// element similar to our normal loop.function is called for each element in the array.

// when we learning anonymus functions we assigned the function into a variable but here we dont need to do that because
// we already have our array.Just learn it this Way.

// The function used here is anonymous function.Anonymus function is a function without a function name.

// The above function can also be written as fat arrow function.


// let bioData = ['Rohit','Sahu',24,'Jabalpur'];
// bioData.forEach((element,index,array)=>
// {
//   console.log(`The index number of ${element} is ${index} from array ${array}`);
// }
// );

// according to fat arrow function definition we dont need to write function keyword.
// rest syntax is same as our normal forEach using normal function.
// An imp point to note here is that we cannot further simplify the code because we can only do that when we want to
// print output of only one line but here the output consists of array of "element","index no" and "current array".


// d)Searching element in array

// (i) "indexOf()" method
// we have a method in array to search the particular element in an array.
// 'indexOf' is the method to search any data in our array.
// it return the index number of matched element and return "-1" oherwise.
// "indexOf()" method is case sensitive.If our data is in lower case and we are searching in uppercase so we will get
//  output as "1".
// "indexOf()" method search in forward direction.

// suppose we have an array with some data and we want to search a particular element from that array then we use following

// let bioData = ["rohit","sahu",24,"jabalpur"];

// console.log(bioData.indexOf("jabalpur")); we are calling a "indexOf()" method inside our array.Read this way.
//                                           here we are getting "3" in output because index number of "jabalpur" is 3.

// if we want that our search start from a particular index number so we can pass that index number inside paranthesis.
// it first switch to that particular index number and then start searching form there in forward direction.

// let bioData = ["rohit","sahu",24,"jabalpur"];

// console.log(bioData.indexOf("rohit",1));

// here we are getting "-1" output because the search started from index number "1".


// (ii)"lastIndexOf" method

// It is similar to "indexOf" method.
// The only difference is that it search  backward. 
// If we have passed index number to start searching from a particular index number so it first go to that index number and
// start searching backward.


// (iii)"includes()" method

// This method is used to search whether a particular element is present in array or not.
// It returns 'true' or "false".It return "true" if element is present and "false" if element is absent.
// It is also case sensitive.
// It also search in forward direction.


// let bioData = ["rohit","sahu",24,"jabalpur"];

// console.log(bioData.includes("sahu")); output is "true" because "sahu" is present.


// e)Filtering elements in an array


// (i)"find()" method

// It is  used as fat arrow function.
// It returns the found value.
// Unlike our previous methods where index numbers are being returned,this method retuns the element value.


// let suppose the consumers budget is less than 400 among various price segments.

// let budget = [100,200,300,400,500,600,700];

// now the consumer's budget is less than 400 then we have to show the prices below 400:

// const paisa = budget.find((element)=>{return element<400;}

// );

// console.log(paisa);here we are getting only "100" as output but what if want all products below 400?for that we have filter.

// simplified code for above code is:

// console.log(budget.find((element)=>{return element<400;})); we just copy pasted the method with function inside console.


// (ii)"findIndex()" method. 

// it is similar to "find()" method but it return index number instead of value.no need to discuss due to its ditto syntax. 


// (iii)"filter()" method

// in "find()" method it return only one value but in "filter()" method it return the new array which is a subset of main
// array.

// const price = [200,300,400,500,600];

// console.log(price.filter((elem)=>{return elem<400;}));

// syntax is same but it returns all elements less tha 400 which was not there in "find()" method.



// f)Sorting in array

// sorting means it arranges the array in ascending order.
// it returns the new sorted array
// we have "sort()" method for sorting the array.
// this method treat the array as string and hence it will consider "20" greater than "100".
// it is basically used to arrange array in alphabetical order.

// const months = ["april","july","february","december"];

// console.log(months.sort());

// we are getting the output in alphabetical order.


// const nums = [20,100,200,50,80];

// console.log(nums.sort()); we are getting output as "[100,20,200,50,80]" because it first convert the numbers to strings 
//                           and then sort it. 




// g)CRUD-create read update and delete in an array. 

// (i)"push()" method

// It is used to push/add data in an array. 
// It returns  the length of new array. 
// it adds the new element at the end.
// multiple data can be inserted in an array

// const animals = ['cat','rat','myfriends']

// console.log(animals.push('myrelatives','myneighbours')); 
// console.log(animals);


// (ii)"unshift" method

// It is similar to "push()" method except it add data at starting.Rest remain same. 

// const animals = ['cat','rat','myfriends'];
// console.log(animals.unshift('myrelatives','myneighbours')); 
// console.log(animals);


// (iii)"pop()" method 

// this method is used to pop out a data. 
// it removes the last data from an array. 
// it returns the popped data. 

// const animals = ['cat','rat','myfriends'];

// console.log(animals.pop()); here it is returning "myfriends" 
//                             dont use any value inside paranthesis of pop because it is only made to pop out last Element. 
// console.log(animals); 

// (iv)"shift()" method 

// it is similar to "pop()" method only difference is it pop out first element from array. 


// const animals = ['cat','rat','myfriends'];
// console.log(animals.shift());
// console.log(animals); 


// (v)"splice()" method 

// as on now we were only pushing and popping the data at first and last but what if we want to push or pop the data 
// somewhere between first and last element? for that we have "splice()" method 

// it returns the array of deleted element because it is basically used for deleting elements. 


// const animals = ['cat','rat','myfriends'];

// now let we want to add some element between "rat" and "myfriends"

// const added = animals.splice(2,0,"myneighbours","myrelatives");inside paranthesis "2" denotes form which index number 
//                                                                we want to add/delete element."0" denotes how many elements 
//                                                                do we want to delete and at last we write those elements which
//                                                                we want to replace with any element or add between certain
//                                                                elements.

// console.log(added); here we can see that it returned the empty array because we have'nt deleted any element.if we have
//                      had deleted some elements then it could have returned the array with deleted elements. 
// console.log(animals);

// hence like our "filter()" method "splice()" method is the key to every problem.



// (vi)"map()" method in array

// This method is very much similar to "forEach" loop. Both have slightly different behaviour. 
// Both are used to print the array. 


// lets see both methods to compare 

// const num = [100,250,500,360,194];
// lets use "forEach" and "map()" method in above array and see the output. 

// num.forEach((element) => {
//   console.log(element);
// });

// num.map((element)  =>{
//          console.log(element);
// });

// for above functions the "forEach" and "map()" method working ditto.Now lets see their return types to see the difference


// const num = [100,250,500,360,194];
// const back = num.forEach((element) => {
//   return element<400;
// });

// console.log(back);
// console.log(num);

// const back1 = num.map((element)  =>{
//   return element<400;
// });
// console.log(back1);
// console.log(num);

// Now here the "forEach()" method returning "undefined" whereas "map()" method is returning a new array with true/false.
// Also "map()" method is chainable which means we can use this method with other methods whereas "forEach()" is not
// chainable.
// This is the  difference between both. We can simply say that "forEach" is only for printing the current array.

// "map()" is the only method which we can use to do any type of operation whether it is "</>" or any mathematical
// operation like "2*5".



              //                  ************IMP NOTICE**********
              //  use that method which is specifically intended to do that particular task




// ####challenge time####

// 1)find the square root of each element in following array:

// const sroot = [25,36,49,64,81];

// // solu):
//  const sroot1 = sroot.map((element)  =>{ return Math.sqrt(element);

//  });

//  console.log(sroot1);

//  "Math.sqrt" is used to find square root. 


//  const sroot = [25,36,49,64,81];

//  const sroot1 = sroot.filter((element)  =>{ return Math.sqrt(element);

//  });

//  console.log(sroot1);
//  Most imp note-Do no try to apply "filter()" method here because "filter()" is used to filter the data and does not 
//  perform any operation. 
//  so use that method which is specifically intended to do that task.Like if we try to do filter using "map()" method so
//  we will get value "true/false".


// 2)Multiply each element by 2 and return those elements which are greater than 10.

// let arr = [2,3,4,6,8];

// solu):

// now here we have to apply 2 methods.First method multiply the each element by 2 and second method return only those
// element which are greater than 10.This can be be achieved by chaining method. 

// const newarray = arr.map((element)  =>{
//      return element*2
// }).filter((element) =>{
//   return element>10;
// });

// console.log(newarray);
// the above method is called chain method. 
// The "map" map method returned the new array whose each element is multiplied by 2.Then the "filter" method returned the
// elements greater than 10 and finally our output is stored in "newarray".


// (vii) "reduce()" method in array

// "reduce()" method is used when we want only a single value as output. 
// Lets suppose we have an array and we want to add all the elements of it then how we gonna do that?
// This can be achieved by reduce method. 
// Reduce method is used for finding sum,product or average of elements of an array. 

// let arr = [10,15,20,45,66];

// let sum = arr.reduce((accumulator,element) =>{
//                      return accumulator+=element;
// });

// console.log(sum);

// lets see the working:

// at first accumulator holds "10" and element holds '15' then at block scope the value in accumulator gets added with the 
// value of element and output(here 25) gets stored in accumulator.Now again loop runs and now we have "25" in accumulator 
// and "20" in element again at block scope the value of accumulator gets added with value of element and loop continues
// untill we get the final single value.

// initial value in "reduce()" method

// if we forget to assign a value to an array and now we want to add it so we can assign in reduce method as follows

// let arr = [10,15,20,45,66];

// let sum = arr.reduce((accumulator,element) =>{
//                      return accumulator+=element;
// } ,5 ); here add the number with comma.

// console.log(sum);


// 13.)****STRINGS in javascript****


// Strings are used to store or modify text. 
// Strings can be written within single or double quotes.

// let name11 = "Rohit";
// let name1 = 'Rohit';
// console.log(name11);
// console.log(name1);


// (i) "length" property in strings 

// It is used to find the length of a string. 

// const st = 'Rohit Sahu';
// console.log(st.length);

// our characters are 9 but we are getting 10 as output,this is because the space between words are also counted.


// (ii)escape character 

// we write our string under double or single quotes but if we want any word within double quotes then we must write 
// our whole string within single quote and vice varsa. 
// But what if want to use both single and double quotes for our words in a string?
// The alternate for this problem is using the "escape character". 

// syntax

// let nam = "my name is \"rohit\" sahu";
// console.log(nam);


// (iii) finding a string in a string


// (a) "indexOf()" method 

// it has almost similar functionality as an Array. 
// it returns the index number of string letter/word. 
// every letter is assigned an index number. 
// it search in forward direction. 
// we can assign a index number from where "indexOf()" starts searching in forward direction. 

// const naam = "rohit sahu";
// console.log(naam.indexOf("s"));
// console.log(naam.indexOf("sahu"));

// we can see for both we are getting same index number because both are starting from '6' index number. 

// const naam = "rohit sahu";
// console.log(naam.indexOf("h",3));
// here the method start finding the letter from third index number and hence we are getting index number for sercond "h". 


// (b)"lastIndexOf" method 

// this is similar as "index()" of method but it search in backward direction. 

// const naam = "rohit sahu";
// console.log(naam.lastIndexOf("h",3));
// now this time we are getting index number od first "h" because "lastIndexOf" search in backward direction. 



// (iv) searching for a string in a string

// (a)"search()" method in strings 

// it is ditto of "indexOf()" method.The only difference is that we cannot pass the starting index number where the search 
// starts from that index number. 


// (v)extracting strings parts 

// extracting is used to extract some part of a string. 

// (a)"slice()" method

// "slice()" method is used to extract some part of a string 
// It returns the extracted part. 

// syntax
// slice(start index no , end index number)
// the part of string will be extract starting from "start index no" to "end index no - 1". 
// if we dont write "end index number" then it will return remaining string starting from starting point.

// let fruits = "Apple,Banana,Orange";
// console.log(fruits.slice(0,12));


// let fruits = "Apple,Banana,Orange";
// console.log(fruits.slice(0,-7));

// "-7" means it leaves last 7 letters. 

                        

//                                          *********challenge Time********

// Question-Print only 280 letters in a String. 
// solution- Here we use "slice()" method to print only 280 letters of a String. 

// let comm = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// let reducomm = comm.slice(0,280);
// console.log(reducomm);
// console.log(reducomm.length);

// This method is used when we want to limit words in text area in our web page.

// (b)"subString()" method 

// it is ditto to "slice()" method.The only difference is we cannot use negative argument at the ending index Number. 



// (c)"substr()" method 

// It is similar to "slice()" but here the second argument is "length of extracted string". 
// Although the output will remain same in "slice()" and "substr()". 
// Here also we cannot give negative value to length. 
// We can use negative value in argument but cannot use it in length along with starting index Number.Instead we can
// use it in starting index number or we can write the negative starting index number alone.

// let fruits = "Apple,Banana,Orange";
// console.log(fruits.substr(-6,2)); here we are getting output "or" because starting index is "6" from last and string length 
//                                   is "2". 

//  let fruits = "Apple,Banana,Orange";
//   console.log(fruits.substr(-6)); here we are getting "orange" because our extraction started from 6Th postion from last 
//                                   and ending at the end of our parent String. 



// (vi) replacing string content 


// Replace is used to replace a content with a new content. 
// "replace()" is a method to replace a content in string. 
// It returns a new string which is a copy of old string except the replaced content. 
// It does not change the current string. 
// It replaces the first match found.
// It is case sensitive. 


// let rplace = "i am rohit sahu";
// let rarr = rplace.replace("rohit","Rohit");
// console.log(rarr); here we can see that it returns the new modified Array. 
// console.log(rplace); here we can see that the current array is intact.


// (vii)extracting string characters

// used for extracting characters

// (a)"charAt(index no)" method 

// it is vice varsa of "indexOf()" method. 
// it is used to return a character stored at the passed index number.
// Here we pass the index number and it return the character at that index no. 


// let ext = "i am rohit";
// let exdata = ext.charAt(3);
// console.log(exdata);
// console.log(ext);

// (b)"charCodeAt()" method 


// This method returns the "ASCII" value of the character at specified index no. 
// The returned value is called "UNICODE".

// let into = "my name is rohit sahu";
// console.log(into.charCodeAt(8)); here we are getting "105" output because "ASCII" value of "i" is 105.


    //                                   *****challenge time*****

    // Question-Return the unicode of last character of given String. 
    // let str = "we are the best";

    // Solu) Now our first problem is that how we gonna find the index number of our character. We use length property 
   // to find length and substract 1 from it we will get our index number. 
    
    // const sol = str.length-1;
    // console.log(str.charCodeAt(sol));


  // (viii)other useful methods in string 

  // (a)"toUpperCase" and "toLowerCase"-Used to change string into uppercase and lowercase characters respectively. 

  // let ulcase = "my name is rohit sahu";
  // let ulcase2 = "MY NAME IS ROHIT SAHU";

  // console.log(ulcase.toUpperCase());
  // console.log(ulcase2.toLowerCase());

  // (b)"concat()"-used to concat two strings 

  // let con = "rohit";
  // let cont = "sahu";

  // console.log(con.concat(" ",cont)); The double quotes with space is for the space between 2 words/strings. 


// (c)"trim()" method - used to remove extra space from both sides of a String. 

// let stg = "         hi        ";
// console.log(stg);
// console.log(stg.trim());


// (d) "split()" method - used to convert a string into an array. 

// **split using comma** -here we use comma in string to command the machine.Just give comma in string from where we want to split our string. 
// let spt = "my,name,is,rohit";
// console.log(spt.split(","));
// comma will automatically be inserted between 2 elements in output. The comma in output is not due to the string comma. 

// ***split using space***-give space between those 2 parts in string which we want to seperate.

// let spt = "myname isrohit";
// console.log(spt.split(" "));
// comma will automatically be inserted between 2 elements in output. 


// *****split using Bar(|)**** - give bar between those 2 parts in string which we want to seperate.

// let spt = "mynameis|rohit";
// console.log(spt.split("|"));



// 14) DATE and TIME

// we have a "Date()" object in javascript to find the date and time. 

// let crr_date = new Date(); we are creating a new instance for Date() object.
// console.log(Date());
// console.log(crr_date);
// in our browser we are getting the full date and time with only printing "crr_date" but in our editor we are getting 
// the international time so for getting full time and date we must use below methods.
// console.log(crr_date.toLocaleString());
// console.log(crr_date.toString());
// see the output for difference. 


// (ii)"Date.now()" method -it gives the time elapsed in milliseconds from 1st january 1970 to current time as output.

// console.log(Date.now());



// (iii)creating own date and time 

// Now the question is when we can print our current time so what is the need of creating our own time. 

// so the answer is if our opening ceremony is on a particular date and we need to inform people that on that particular 
// date our ceremony is on that that then we can create that time using javascript. 


// let cere_mony = new Date(year,month,day,hour,minutes,seconds,milliseconds);All the arguments will an integer. 

//                                                                            The months starts from 0 to 11
//                                                                            0 is january and 11 is december. 

//                                                                            we dont need to pass every arguement except 
//                                                                            year and month otherwise it will not work. 

// let cere_mony = new Date(2021,2,5,18,0,0);
// console.log(cere_mony.toString());

// let cereMony = new Date(2021,2); 
// console.log(cereMony.toString()); here we are getting only year and month and rest values are by default values.


// using string in argument to print the time 

// let cere_mony = new Date("october 10,2021 18:20:00");

// console.log(cere_mony.toLocaleString());


// let cere_mony = new Date("10 october 2021 18:20:00");

// console.log(cere_mony.toLocaleString());


// let cere_mony = new Date("2021 10 october 18:20:00");;

// console.log(cere_mony.toLocaleString());

// we can see from above outputs that we can use any format of date and time as a string and the machine automatically
// arrange it in a correct manner. 


// Our last way to create a date is by passing the current milliseconds time from 1st january 1970.

// lets create current time. 
// For that we need current milliseconds for that we use "Date.now()". 


// let mil_sec = Date.now();
// let cur_date = new Date(mil_sec);
// console.log(cur_date.toLocaleString());




// (iv) here we will see how to get current individual 'date'/'month'/'day'/'hour'/'minutes'/'seconds'/'milliseconds'. 


// let p_date = new Date();

// console.log(p_date.getFullYear());
// console.log(p_date.getMonth()); here also month starts from 0 and ends at 11.
// console.log(p_date.getDate());
// console.log(p_date.getDay()); day means monday/tue/wed and so on.Sunday is 0 while saturday is 6.
// console.log(p_date.getHours()); hours will be in 24 hrs fromat. 
// console.log(p_date.getMinutes());
// console.log(p_date.getSeconds());
// console.log(p_date.getMilliseconds());



// (v) In previous section we have seen how to get current individual year/month...
//     Now here in this section we will see how to set a individual specific time for opening ceremony. 

 
// let se_t = new Date();
// console.log(se_t.setFullYear(2021));
// console.log(se_t.setMonth(2));
// console.log(se_t.setDate(6));

// here in all above outputs we are getting the values in milliseconds.


// (vi) Time methods

// inprevious 2 sections we have seen methods of date now we will see methods of time. 


// getting individual time 

// let tim_e = new Date();
// console.log(tim_e.getTime()); it returns(both in webpage and editor console) the time in milliseconds elapsed since 1st january 1970.
// console.log(tim_e.getMonth());
// console.log(tim_e.getDate());

// all the "get" methods are same as the "get" methods of "date" except "getTime()".


// now we will see how to set a specific individual time. 


// const set_time = new Date();
// console.log(set_time.setTime(11,41,10)); it returns milliseconds.
// console.log(set_time.setMonth(2));
// console.log(set_time.setDate(6));

// all the methods are same as our "Date()" setting methods and also returns the same output in milliseconds. 





// (vii) getting individual date and time 

// Used to print only date(03/20/2021)  and time (12:12 PM). 

// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());



// (15) "Math" object in javascript

// we have various methods and properties under math object. 

// (i) Math.PI - returns value of pi. 

// console.log(Math.PI);

// (ii)Math.round() - returns the nearest rounded off value.

// const num = 6.499;
// const num1 = 6.51;
// const num2 = 6.5;
// console.log(Math.round(num));
// console.log(Math.round(num1));
// console.log(Math.round(num2));



// (iii)"Math.pow()" - caculates value in power 

// console.log(Math.pow(2,3)); 2 to the power 3.



// (iv)"Math.sqrt()" - used to find the sqare root of a number.

// let sq = 81;
// const sqr = 70;
// console.log(Math.sqrt(sq));
// console.log(Math.sqrt(sqr));


// (v)"Math.abs()" - used to make negative value positive.Sometimes we need only positive value hence it can be used there. 

// const ab = -96.9;
// const abc = -200;
// console.log(Math.abs(ab));
// console.log(Math.abs(abc));


// (vi) "Math.ceil()" - rounded off to the greater integer value. 

// const cl = 5.32;
// console.log(Math.ceil(cl));



// (vii) "Math.floor()" - rounded off to the lower integer value. 

// const fl = 7.99;
// const fl1 = 7.01;
// console.log(Math.floor(fl));
// console.log(Math.floor(fl1));



// (viii)"Math.min()" - used to find minimum number from various numbers. 

// console.log(Math.min(10,30,5,200,-68));


// (ix) "Math.max()" - used to find maximum number from series of numbers. 

// console.log(Math.max(10,30,5,200,-68));


// (x)"Math.random()" - gives any random number between 0 and 1.We can use it for lucky draw game.

// console.log(Math.random());



// (xi)"Math.trunc()" - it returns the integer part(value before decimal) no matter what the value is. 

// let tr = 4.96;
// let tr1 = -28;
// let tr2 = -52.01;

// console.log(Math.trunc(tr));
// console.log(Math.trunc(tr1));
// console.log(Math.trunc(tr2));




// (16)DOM - Document object model 

// (i)Window Vs Document 


// Window:
// When we open our browser whatever we can see from left to right,top to bottom is our window object or global object.
// Tabs,Url,html document(html page),search history etc, all comes under global object. 
// We dont need to give reference in global object.Like see the examples in HTML file "practice.html". 

// Document-The html file is called the document. 
//          Document is an object of window. 
//          We need to give reference to perform any operation on documents
//          See examples below:

//          document.body.style.background = "red"; we can see we have to give reference of document to perform any operation 
//                                                on document. 

// also see html example in "practice.html".



// (ii)DOM Navigation - defines how we can navigate through our document for various operations. 

// here we will learn that how to access the individual elements of a document for various operations. 
// refer "practice.html" for example and usage in webpage.
// (a)"document"

// Used to refer to the whole elements of the document. 
// it returns all the elements including "<!doctype html>".
// Basically it is visible in browser console. 
// Just write "document" in browser console with any html document and it will return all the tags from top to bottom.

// (b)"document.documentElement" - used to navigate to the root element of a document.
//                                 it returns the root element and its childs of the document i.e., "<html>" in case of webpage. 
//                                 Basically it is visible in browser console. 



// (c)"document.head" - used to navigate to "<head>" element 
//                     It returns the "<head>" tag and all its childs in browser console. 


// (d) "document.body" - Used to navigate to body tag
//                       We can change or apply the properties of css by navigating to body tag. 
//                       See html for example. 


// (e) "document.body.childNodes" - Used to navigate to the childs of "body tag". 

//                                  Child nodes includes all the element inside "body" tag including the "enter" and all 
//                                  other elements, "enter" is returned as "text" in childNodes and childNodes returns all of these in 
//                                  browser console. 

// (f) "document.body.children" - it is similar to "document.body.childNodes" except it does not return "text" as childs. 
//                                It only returns the elements like "div/p/h". 


// (g) "document.body.hasChildNodes()" - Used to find whether the specified element(here body tag) has child nodes or not.



// (h) "document.body.firstChild" - used to navigate to the first child of "body". 
//                                  But similar to "document.body.childNodes" it considers the "enter" as child and hence 
//                                  returns "text" as its first child.

// (i) "document.body.firstElementChild" - it is similar to "document.body.firstChild" but it returns the actual html 
//                                         element as its child and can be used to style the same child. 


// (j) "document.body.querySelector('#Id/.Class')" - This is the easiest way to navigate to a particular element inside body tag. 



// (k) "document.body.parentNode"  and  "document.body.parentNode" - returns the parent element i.e., "<html>" with all 
//                                                                   its child. 


// (l) "document.head.nextSibling" and "document.body.previousSibling"

// Used to navigate and return the next and previous sibling of any child.
// But similar to "childNodes" it also considers "enter" as an element. 


// (m) "document.body.firstElementChild.firstElementChild.nextElementSibling" and "document.body.firstElementChild.firstElementChild.previousElementSibling"

// It is same as "nextSibling" and "previousSibling" but it only returns actual elements instead of "enter" as "text". 




// (iii) How to search the element and reference 


// (a) searching element by its id name
// document.getElementById('id name').innerHTML = 'any data here which we want to write under tag of specified id'; 

// document(html) ke andar "id name"  wale tag ki jagah 'any data here which we want to write under tag of specified id'
// print karvana. innerHTML means we want to print between that specified tag. 

// (b) Searching element by its class name 

// document.getElementsByClassName('class name').innerHTML = 'any data here which we want to write under tag of specified class';


// (c) searching element by tag itself

// document.getElementsByTagName('p').innerHTML = 'any data here which we want to print under "p" tags of html';


// (d) searching element/input by its name

// document.getElementsByName('input tag name here').innerHTML = 'male';
// document.getElementsByName('input tag name here').innerHTML = 'female';

// remember we have "name="gender"" attribute in css input tag. 

// (e) searching element using query selector - Here we can pass class/id/tag name all in query selector. 
//                                              But it only perform specified operation to first searched class/id/tag. 


//   document.querySelector('.class name / #id name / tag name').innerHTML = 'any operation we want to perform.'


// (f) searching element by "querySelectorAll()" - it returns all the elements specified with  id/class/tag. 
//                                                 cannot be used to alter or perform operation in html documents
//                                                 just return in browser. 




// 17) EVENTS in javascript - Events are something browser do or user do. 
//                            Events are things that happens to html elements. 
//                            Events are executed using javascript when they are detected.
                           
// Some important events :

// onchange="" - An HTML element has been changed
// onclick=""  - The user clicks an HTML element
// onmouseover="" - The user moves the mouse over an HTML element
// onmouseout="" - The user moves the mouse away from an HTML element
// onkeydown="" - The user pushes a keyboard key
// onload="" - The browser has finished loading the page

  
//     There are 4 ways of writing an event in javascript :

//     (a) using inline events alert()
//     (b) by calling a function 
//     (c)Using inline events - where we write "onclick=""" and pass some functionality in value.Almost same as first one. 
//     (d) using event listners. 

//     see the "practice.html" for examples and its explaination. 


//     18)"EVENT" object in javascript 

//     Actually events which we use are child of "EVENT" object just like new instance of a "Date()" object. 
//      we have some properties which give us data about our events:

//      (a) event - return the all data about event 
//      (b) event.target - returns the targeted event i.e., the element which we have clicked. 
//      (c) event.type - returns the type of event viz. click.


//      19) Mouse events in javascript - events related to mouse are mouse events. 
//                                       When mouse interacts with the html then those events are called mouse events. 
                                      
                                      
//       (a) onmousedown() - events fire when we click and hold the target element are called onmousedown() events 

//       see "practice.html" for example. 

//       (b)onmouseup - events fire when we release after holding the target element are called onmouseup events. 

       
//       (c) onmouseenter - event fires when mouse hover on element. 

//       (d) onmouseleave - event fires when mouse leave the element after hover.


//       20) keyboard events in javascript - need input/text field to use 
                                           

//       (a) onkeypress - An event is fired up when we press any keyboard key. 
//       (b) onkeydown - An event gets fired when we press and hold any keyboard key. 
//       (c)  onkeyup - An event is fired up when we release key after pressing it.  


//       21)input events in javascript 

//       (a)onchange event - this event is fired up when any input is changed. 



//       22)Timing based events in javascript 
        
//       timing based events allows execution of code at specified time intervals. 

//       (a)setTimeout(function,milliseconds) -when an event is fired it executes the function after waiting for specified
//                                             no of milliseconds.  

//       (b)clearTimeout(Id of setTimeout) - It stops the execution of setTimeout() method. 
//                                           Argument will be the Id of setTimeout() method.
//                                           Without Id cearlTimeout will not work.

//       (c)setInterval(() => {
        
//       }, interval);

//       It is similar to setTimeout but the only difference is that it executes infinite times. 
//       We can use it to create timer. 
//       Here also we must give an Id to further use it in clearInterval() as argument. 




//       23)OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT (OOPS)

//       Object is that container where we can store multiple data and function.
//       It is somewhat similar to array where we store data in a variable. 


//       (a)Object Literal 

//     object literal is simply "key:value" pair. 
//     Remember "key" is not a variable 
//     The variable which is used to store multiple data is called Object Literal. 
//     Refer next section to see the example. 


//      (b) 1st way of writing the object 


    //  let bioData = {
    //    myName : 'Rohit', Here 'myName' is key and 'Rohit' is value. 
    //    myAge : 24, the key:value pair will always terminate by comma.
    //    sampleFunc : function(){ it is anonymus function
    //                   console.log(`My name is ${bioData.myName} and My age is ${bioData.myAge}`);
    //    }
    //  }

    //  console.log(bioData.myName);
    //  console.log(bioData.myAge);
    //  bioData.sampleFunc();


    // (c) 2nd way of writing the object 

    //   let bioData = {
    //    myName : 'Rohit', 
    //    myAge : 24,
    //    sampleFunc (){
    //                   console.log(`My name is ${bioData.myName} and My age is ${bioData.myAge}`);
    //    }
    //  }

    //  bioData.sampleFunc();

    //  The second way says that we dont need to write colon and function keyword.Rest remain same. 



    // (d)using object inside object 

    
    //   let bioData = {
    //    myName : {
    //      myFirstName : 'Rohit',
    //      myLastName : 'Sahu', 
    //    },
    //    myAge : 24,
    //    sampleFunc (){
    //                   console.log(`My name is ${bioData.myName} and My age is ${bioData.myAge}`);
    //    }
    //  }

    //  console.log(bioData.myName.myLastName);


    // (e) "this" object in javascript 

    // The definition of "this" object is that it contains the current contex 

    // "this" object can have different values depending on where it is placed. 

    // it contains the data of scope where it is used. Lets see examples to understand it. 

    // (I) console.log(this);
    //  see the output of above code in browser console we are getting "window" object as output because for now "this"
    //  object belongs to global object and it can be used for window functions like "alert()".See below example to 
    //  understand:

    //  console.log(this.alert('Hello'));

    //  It has less significance for global object function because we can directly access the methods and properties
    //  of window object. 

    // (II) 
    // function thi_s(){
    //   console.log(this);
    // }

    // thi_s();

    // here also it returns the window object. Hence it is clear that under function also "this" suppose itself as a
    // window object.

    // (III) 
    // var obj_this = 'Rohit';
    // function funct(){
    //   console.log(this.obj_this);
    // }

    // funct();

    // As we can see from above we can use "this" to print the value of "obj_this" because the variable "obj_this" is declared 
    // in global scope and we have already seen from our previous example that under function also "this" belongs to the 
    // context of window object. 
    
    // This code is not executing in vs code editor console but it will work in browser console. This is because
    // window object does not work in document i.e., in our node.js console.

    


    // function thi_s(){
    //  console.log(this);
    //  }
  
    //   thi_s();


    // (IV) using "this" inside any object 

    // let myObj = {
    //   myName : 'Rohit',
    //   funct(){
    //     console.log(this.myName);
    //   }
    // }

    // myObj.funct();

    // Upto our previous sections we have seen that when we use "this" inside any function then its context was window
    // but here in our above object we can see that we can use it print value of "myName" because here it changed its 
    // context to object.



    // (V) "this" does not work with fat arrow function
            // we cannot get the values and properties of object using fat arrow function


    
    // let myObj = {
    //   myName : 'Rohit',
    //   funct:() => {
    //     console.log(this.myName);
    //   }
    // }

    //  myObj.funct();

    //  wooo wooo woo here also we are getting the output "undefined" in node.js because context of "this" is window object 
    //  hence "this" does not work with fat arrow function.See the browser console it will return window object. 



    // in short it can be used in objects where we dont need to write object instead we write this. 



    // 24)DESTRUCTURING in javascript 

// (a)array destructuring

    // suppose we have a array:

    // let arr_ay = ['Rohit','Sahu',24];

    // Traditional way of getting the above array 
    // let arr_ay = ['Rohit','Sahu',24];
    // let myName = arr_ay[0];
    // let mySirName = arr_ay[1];
    // let myAge = arr_ay[2];

    // console.log(myName);
    // console.log(mySirName);
    // console.log(myAge);

    // Using array destructuring:

    // let arr_ay = ['Rohit','Sahu',24];
    // let [ myName,mySirName,myAge] = arr_ay; 0 index number value from array "arr_ay" will stored in "myName" 1 index 
    // console.log(mySirName);                 number in "mySirName"  and so on.   
    
    // What if want to make changes to our array.We can do that too...

    // let arr_ay = ['Rohit','Sahu',24];
    // let [ myName,mySirName,myAge,myCity='Jabalpur'] = arr_ay;  value of "myCity" variable will automatically saved 
    // console.log(myCity);                                       in index number "3" of array "arr_ay". 



    // (b)object destructuring

    // Traditional way of getting an object 

    // let ob_j = {
    //   myName:'Rohit',
    //   mySurName:'Sahu',
    //   myAge:24
    // }

    // let get_name=ob_j.myName;
    // let get_age=ob_j.myAge;
    // console.log(get_name);
    // console.log(get_age);


  // Getting values of object using destructuring

  // let ob_j = {
  //   myName:'Rohit',
  //   mySurName:'Sahu',
  //   myAge:24
  // }

  // let {myName,mySurName,myAge,myCity='Jabalpur'} = ob_j; syntax is almost similar to array destructuring just write 
  // console.log( myName);                                  the keys of an object within curly braces and we can directly
  // console.log(mySurName);                                get it my calling the key name.
  // console.log(myAge);
  // console.log(myCity);




//   25) OBJECT PROPERTIES

// (I) WE can add dynamic data inside an object 


// let dyn = 'Hello';
//   let ob_j = {
//     myName:'Rohit',
//     [dyn]:'Sahu', here we are getting the value of "dyn" variable.For getting value always use square bracket.
//     myAge:24     
//   }
// console.log(ob_j); Basically we are using value of "dyn" from global scope in place of object key.
                      // we are getting output { myName: 'Rohit', Hello: 'Sahu', myAge: 24 }.Here we can see "[dyn]" is replaced 
//                    by the value of "dyn" variable.

// we can perform any mathematical operation dynamically



// let dyn = 'Hello';
//   let ob_j = {

//     myName:'Rohit',

//     [dyn]:'Sahu',

//     [40+50]:'Clients',

//     myAge:24,
//   }
// console.log(ob_j);

// We are getting output { '90': 'Clients', myName: 'Rohit', Hello: 'Sahu', myAge: 24 } hence we can do methamatical
// operations inside square brackets. 


// (II) suppose we have a situation where we want to use our variable which is declared in global object as a value for 
//      key:value pair in object,and if the variable name and key name is same then second property says that we dont need 
//      to write key:value pair.We just need to write that same name one time. 

// let car1 = 'Rohit';
// let car2= 'Sahu';

// let myIntro = {
//   car1:car1,
//   car2:car2,
// }

// console.log(myIntro);
// in above code we are using value of "car1" from global scope in value of "car1:car1" key value pair but using the 
// above captioned property we can write it as follows:

// let car1 = 'Rohit';
// let car2= 'Sahu';

// let myIntro = {
//   car1,
//   car2,
// }
// console.log(myIntro);
// Hence we are getting same output as our traditional key value pair.



// 26) SPREAD operator in javascript

// suppose we have an array:

// let oldArr = ['Apple','Mango','Pineapple','Grapes'];

// now if we need to create another array which contains elements of "oldArr" and some new elements. 
// Then we have option to do it with traditional way but what if the "oldArr" have more than 100 elements?Then
// how will we manage to write more than 100 elements? Also what will you do if any of the elements get changed
// in "oldArr"?Then we will need to make changes to new array also. 

// The solution for all the problem is "spread" oeprator. 

// let oldArr = ['Apple','Mango','Pineapple','Grapes'];
// let newArr= [...oldArr,'Banana','Orange']
// console.log(newArr);
// "...oldArr" will add all the elements of "oldArr" to our new array.


// 27) ECMA script 2017/ES8

// It introduced some methods:

// (I) "padStart()" and "padEnd()" - These methods are used to add padding before a string and after a string respectively
//                                   It will not work in node js because it is a part of html css 
//                                   See the output in browser console. 
// syntax 

// let str = "My Name Is Rohit Sahu".padStart(30);"30" does not means it give padding of 30 spaces then it will start printing 
// let str2 = "I Am A Web Developer".padEnd(10);  the string rather it means '30-string length = 9' spaces from left. 
// console.log(str);                              similar is applicable for "padEnd()".
// console.log(str2);


// (II) 


// (a) "Object.values(object name)"
 

// Previously in objects we can get any one value at once but now in ES8 we can get all the values of an object. 
// It returns an array with all the values of specified object.
// "O" is capital in  Object.values(object name).


// let jectobj = {
//   naam:"Rohit",
//   umar : "24",
// }

// console.log(Object.values(jectobj));


// (b)"Object.entries(object name)"

// It returns the "keys" and "values" both. 
// It retuns an array which contains arrays of individual key:value array.

// let jectobj = {
//     naam:"Rohit",
//     umar : "24",
//   }
  
//   console.log(Object.entries(jectobj));



// 28) ECMA script 2018/ES9

// In ES9 we can use spread operator for objects also 

// let jectobj = {
//       naam:"Rohit",
//       umar : "24",
//     }
// console.log(jectobj);

//     let jectobj1 = {
//       ...jectobj,
//     }
//     console.log(jectobj1);
// Hence we can get data of another object in another object by using spread operator.



// 29) ECMA script 2019/ES10


// (a)
// It introduced "flat(level)" method 
// This method reduces an nested array to a single array. 
// We also have "reduce()" method for this problem but its complicated.
// "level" argument defines upto which level we want to reduce the array.

// let arr_red = [ [a,b] , [c,d] , [e,f] , [ g, [h,i] ] ] ;
// The above array is a level 2 array. 
// Lets reduce it with the reduce method :

// let arr_red = [ ['a','b'] , ['c','d'] , ['e','f'] , [ 'g', ['h','i'] ] ] ;

// let arr_done = arr_red.reduce((accumulator,currVal)=>{
//   return accumulator.concat(currVal);
// });
// console.log(arr_done);

// As we can see we are getting output "[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', [ 'h', 'i' ] ]" for above program also it 
// includes complex coding.Hence "reduce()" method cannot reduce level 2 array even after complex coding.

// The simple solution for above complex problem is "flat(level)" method

// let arr_red = [ ['a','b'] , ['c','d'] , ['e','f'] , [ 'g', ['h','i'] ] ] ;
// let arr_done = arr_red.flat(2);
// console.log(arr_done);

// ****Set "level" "infinity" for flattening "x" levels. 


// (b) In ECMA script 2017/ES8 we have seen "object.entries()" where we can convert the key:value pair into an array. 
//     Now here in ECMA script 2019/ES10 we can convert that array back to key:value pair by using Object.fromEntries()
//     method. 

//   consider the same example 

//     let jectobj = {
//     naam:"Rohit",
//     umar : "24",
//   }
  
//   console.log(Object.entries(jectobj));
// let back = Object.entries(jectobj);
// console.log(Object.fromEntries(back)); we can see the array is converted back to its original form. 




// 30) ECMA script 2020/ES11

// ES11 introduced "big int". 
// WE can only store a value upto a specified limit. 

// let limit = Number.MAX_SAFE_INTEGER; It gives the maximum number upto which we can store value in variable. 
// console.log(limit);  output is "9007199254740991".Hence only upto this number we can store any data in a variable. 

// Big int allows us to store beyond that limit. 
// Just add "n" after a number to make it big int 
 

// let limit = Number.MAX_SAFE_INTEGER;
// console.log(9007199254740991n + 9007199254740991n); now we can go beyond the limit and add any 2 numbers without any 
//                                                     restriction. 




// 31) use strict 

// We have seen througout the javascript that even if we dont define the data type of a variable even though it works fine. 
// So if we use "use strict" at starting of javascript then it will give an error. 

// n = "checking";
// console.log(n); here we can see we are getting output even after not declaring the type of data. 


// "use strict";
// n = "checking";
// console.log(n); now we are getting an error because we have used "use strict" at starting.Now to get the output we must 
//                 first declare the data type. 


// "use strict";
// const n = "checking";
// console.log(n); Hence we are getting output. 



                                        // *********ADVANCED JAVASCRIPT********



// 32) EVENT PROPOGATION IN JAVASCRIPT 


// Suppose we have a parent div and its child div and we have added an event to both of them then if we child div event 
// then both events will be fired up in a specified sequence(top to bottom and bottom to top). 
// When child div fired first and then parent div then its called EVENT BUBBLING. 
// And when parent fired first and then child then its called EVENT CAPTURING. 
// This mode of propagation is applicalbe only when we click child only.
// If we click on parent div then only parent div event will be fired up.

// We can mannualy set the direction of propogation by passing the argument in 
// "addEventListner(type of event,function,true/false)". 

// "true" argument defines event capturing while "false" argument defines bubbling. 
// If we dont pass any argument then by default its false. 

// we can stop the propogation using "event.stopPropagation()" inside the call back function of "addEventListner()".

// see "prectice.html" for example.



// 33) HIGHER LEVEL FUNCTION AND CALL BACK FUNCTION 

// The below code is just a normal function to perform some operations or we can say a calculator. 
// Its just an example to explain about "HIGHER ORDER FUNCTIONS" and "CALL BACK FUNCTIONS" its not a specific syntax
// which we need to learn,its totally logical. 

// let add = (a,b)=>{
//   return a+b;
// }

// let subs = (a,b)=>{
//   return a-b;
// }

// let mul = (a,b)=>{
//   return a*b;
// }


// let calculator = (value1,value2,operator)=>{
//   return operator(value1,value2);
// };

// console.log(calculator(10,20,add)); Here when the function is called it goes to that specified function and returns 
//                                     "operator(=add)(10,20)" which is nothing but our "add" function which we passed as an 
//                                      argument while calling "calculator()".Simply we can say that it returns 
//                                      "add(10,20)" and hence indirectly we are calling it inside "console.log". 
//                                      Inshort "console.log(add(10,20))". 


// In expression "calculator(10,20,add)" whole expression is called "higher order function" and "add" is called call back 
// functio.A call back function is nothing but a function which itself passed as an argument to another function.

// And the higher order function is which whose argument is a call back function.



// 34) HOW JAVASCRIPT WORKS AND ASYNCHRONAS JAVASCRIPT

// (I) HOISTING in javascript 

// In any code there are 2 phases,1st is creation and second is execution phase. 
// In Hoisting the creation part is moved at top of the scope.  

// consider a code to understand:

// var num_ber = 22; This part is called creation phase 
// console.log(num_ber); This part is called exection phase 

// Now suppose we have written execution part first and then creation part:

// console.log(num_ber);
// var num_ber = 22;

// If we had been running the above code before ES6 we would have got output "22" as in hoisting creation part moves to top 
// of the scope. 
// Here we are getting "undefined" because in ECMA script 2015/ES6 the hoisting had been removed.


// (II) Scope chaining


// The scope chain is used to resolve the value of variable names in javascript. 

// Scope chain in javascript is lexically defined,which means that we can see what the scope chain will be by looking
// at the code.

// Lexically meaning we can assume the  expected output of the code.



// (III) LEXICAL SCOPING 


// Lexical scoping means that the inner function can get the access to their parent function variables but the vice-versa 
// is not trues. 
// consider an example to understand:


// let glob = 10;
// let globa = 30;
// function parent(){
//     let pvar = 20;
//     return glob+pvar;

// }
// console.log(parent()); Here we are getting output
// console.log(globa+pvar); Here we are getting error. 

// This is lexical scoping where child can use its parent variable whereas parent cannot access form its child.
// This is basically because let and const are scope dependant.



// (IV) SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPT

// Suppose we have 3 tasks to do and first and third takes same time to complete and 2nd takes more time than both 1st and
// 3rd then after 1st one is executed the third one has to wait for the 2nd one to complete its execution and after 2nd
// one completed its execution then only 3rd one can execute.This is called synchronous javascript.   

// Whereas in Asynchronous the 3rd one will be executed before 2nd one without waiting for the 2nd one to complete its 
// execution. 

// Lets understand Asynchronous with an example 


// function outer_fun(){
//   setTimeout(()=>{
//     console.log("Dont wait for me");
//   },2000);
// }

// function inner_fun(){
//   console.log("I am the first");
//   outer_fun();
//   console.log("I am independant of previous one");
// }

// inner_fun();

// As we can see that when we called "inner_fun" the first block statement is executed as expected but the third is executed 
// without waiting for the second one to finish its execution.This is asynchronous. 


// (V) Working in javascript and EVENT LOOP


// ****see akshay saini video on "how javascript code is executed" for better explaination****

// consider the example of synchronous and asynchronous to understand:


// function outer_fun(){
//   setTimeout(()=>{
//     console.log("Dont wait for me");
//   },2000);
// }

// function inner_fun(){
//   console.log("I am the first");
//   outer_fun();
//   console.log("I am independant of previous one");
// }

// inner_fun();

// Now lets see the working of above code to understand how javascript works:

// We have execution context in execution stack.We have web API and Message queue so when a function is called an execution 
// context is creted for it in execution stack.And when the function execution gets over that context gets removed from 
// execution stack.Actually for every statement having paranthesis the execution context is creted and gets removed when 
// execution ends. 

// Now when "inner_fun()" is called an execution context is created then it moves forward and see the first console.log 
// and creates an execution context for it and after printing "I am the first" the execution context gets removed.Now process 
// moves forward and when it reached "outer_fun()" an execution context is creted for it as well.Now inside "outer_fun()"
// when it moves towards "setTimeout()" an execution context is created for it as well but "setTimeout()" call it immediately
// because there is a timer of 2000 milliseconds and hence the timer along with call back function of "setTimeout()" is 
// passed/moved to the web api(setTimeout is a part of web api) and execution context of "setTimeout()" gets removed from execution stack and 
// wait there for 2 secs.After passing stTimeout to web api the javascript continues its execution(due to asynchronous behaviour) and executes the remaining statements of "inner_fun()" where the execution 
// context is created for it and after printing  "I am independant of previous one" its execution context gets clear from 
// execution stack. Now when 2 secs of timer and call back function gets over both moved to "message queue" from where 
// it is moved to  execution stack and after execution it gets removed from execution stack. 

// When the timer and call back function moved to execution stack then it is called EVENT LOOP. 


// See vinod thapa video of javascript from 13:06:00 to 13:14:40 for explaination.



// (VI) CLOSURE

// *****see akshay saini video on "closures in javascript" for better explaination*****.

// A closure gives us access to outer function's scope from inner function.
// A closure is created every time when a function is created at the time of creation phase.

// lets see an example to understand:


// const fumction = (a)=>{

//        const b = 10;

//        const vmro = ()=>{
                
//               let c=a+b;
//               console.log(c);

//        }
 
//        vmro();
// }


// fumction(15);


// Their is no rocket science in closure. 
// Closer can be defined as how lexical scoping works where child have access to parent whereas vice versa is not true. 
// When we created the function a closer is created with variable "a" and "b" and when we called the "fumction(15)" the 
// specified values get stored in their containers in closure and hence when we called "vmro()" then inner function gets 
// executed and have access to its parent variables using closure.That's it. This is what closure is.Nothing complicated. 



//                 ****************************self notes on above topics***************************
                                 
//                          first of all follow akshay saini tutorial for depth explaination

//  1)The concept of lexical scoping is only true for functions. 
//  2)In the concept of call/execution stack the new execution context is only created for function and not for any other. 
//  3)Do not confuse with scope dependancy of var/let/const with lexical scoping as lexical scoping only applicable
//    with functions,consider below example to understand:
   
   
//    var a=10;
//    {
//      var b=20;
//      console.log(a);                       this is basic concept of scope dependency of var/let/const 
//    }                                       here we can use var inside and outside block.
// console.log(b);


// var a=10;
// function funct(){
//   var b=20;
//   console.log(a);                          Now here parent cannot access child data. 
// }                                          This is lexical scoping and only applicable for functions.
// console.log(b);

// // 4)We cannot use a variable before initializing it.We get "undefined" if try to access "var" and we get
//      "reference error:cannot access a before initialization" this is because "var" is a part of global scope(window object)
//      whereas "let/const" are part of "script(memory location other than global memeory)"      

// debugger;
//   console.console.log(a);
//   var a=10;
//   debugger;
//   console.log(a);
//   let a=10;
// //                                   ********practice for concept clearing******** 
// var b=20;
// function func(){
//   debugger;
//   var a=40;
//   // console.log(b+c);
//   function childfunc() {
//     var c=50;
//     console.log(a+b);
//   }
//   childfunc();
// }
// func();

// console.log(a+b+c);

// debugger;
// let a=10;
// console.log(b);
// var b=20;


// debugger;
// const a=10;
// {
//   var b=20;
//   console.log(b);
// }

// console.log(a);

// debugger;
// var a=10;
// if(true){
//   var b=20;
//   console.log("I am always true");
// }
// console.log(b);



// // x=4;
// console.log(x);
// let x;


// let a;
// console.log(a);





// 35) FUNCTION CURRYING

// lets consider a function to sum 3 numbers and converting it into function currying to understand the conscept:

// function sum(a,b,c){
//   return `${a+b+c}`;
// }
// console.log(sum(10,20,30));

// lets convert above function into function currying:

// function sum(a){
//   return function sum1(b) {
//     return function sum2(c) {
//       return `${a+b+c}`;
//     }
//   }
// }

// console.log(sum(10)(20)(30));

// When we invoked the parent function with series of functions the "sum" function takes the argument "10" and returned
// "function sum1(b) {          ". When the "sum1" is returned it takes argument "20" and returns 
//   return function sum2(c) {       
//     return `${a+b+c}`;
//   }
// }

// "function sum2(c) {   "  and finally this function takes "30" as argument and retuns "a+b+c" where we called the function.
//   return `${a+b+c}`;
// }

// the above can be understood by following method also:


// function sum(a){
//   return function sum1(b) {
//     return function sum2(c) {
//       return `${a+b+c}`;
//     }
//   }
// }

// let result1 = sum(10); when parent is invoked with "10" as argument it returned "sum1" along with its child.  
// let result2 = result1(20); When "sum1" is invoked with "20" as argument it returned "sum2". 
// let final = result2(30); when finally "sum2" is invoked with "30" as argument it returned sum of all 3 variables. 
// console.log(final);




// let a="";
// function sample() {
//   a=10;
// }
// // sample();
// console.log(a);


let arrChar = [1,2];
let arrChar2 = [5,6];
console.log(arrChar*arrChar2);