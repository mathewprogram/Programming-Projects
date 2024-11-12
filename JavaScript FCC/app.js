/* 
    Data Types:
undefined is something that is no defined;
null is something that is nothing;
boolean is true or false;
string is a series of characters; 
symbol is a unique identifier; 
number is a whole number or decimal that can be positive, negative or zero;
object is something that has properties and methods.


    ***variable is a label to point to data - is like a box that can hold data.*** 

var myName = 'Jon' 
myName = 8
let ourName = "Math"
const pi = 3,14

a = a - 9 is the same as a -= 9
a = 9 + a is the same as a += 9
a = 5 * a is the same as a *= 5
a = a / 12 is the same as a /= 12 

    ***to escape a quotation use \" or use a single quote ' "like this" ' or use a 
    backsticks `'like this'`***
    

    Shortcuts:
//  comment
\\  backslash
\'  single quote
\"  double quote
\n  new line
\t  tab
\r  carriage return
\b  backspace
\f  form feed
\v  vertical tab


    To concatenate you can use + 
Example:
var ourStr = "I come first. " + "I go second."

to append variables use the same +
Example:
var ourStr = "i come first. "
ourStr += "I go second."

var myStr

    To append a variable to a string use the += operator
Append means to add something to the end of the string.
So when you use += you add both the value of the variable and the string.
Example: 
var someAdjective = "worthwhile"
var myStr = "Learning to code is "
myStr += someAdjective

    Find lenght of string
var firstNameLength = 0
var firstName = "Jon"

firstNameLength = firstName.length

    Bracket Notation to Find First Character in String
[] computer start counting at 0 - zero based indexing.

One of the most powerful tools is your developer console. 
Depending on your browser, this might be opened by pressing F12 or Ctrl+Shift+I. 
On Mac, you can press Option + ⌘ + C and select "Console". You can also click the 
"Console" button above the preview window to see our built-in console.

The developer console will include errors that are produced by your code, but you 
can also use it to see values of variables in your code, which is helpful for debugging.

In JavaScript, a variable is used to hold a value. To use a variable, you
must first declare it.
Variables can be assigned a value. When you do this while you declare it, this 
is called initialization.
var camperbot = "Bot" This would initialize the camperbot variable with a value of Bot, 
a string. 
Don't forget about the camelCase.
You can declare a variable with no value. You can then assign a value later.

In modern JavaScript it is best practice to use the let keyword instead of var. This 
fixes several unusual behaviors with var that can male my code difficult to debug.

JavaScript has multiple different data types.
Numbers - 0;
Strings - "World" or 'World' or `World` - used to store things like words or text.
Boolean - true/false
Null - ;
Undefined - ;

An array can hold multiple values, ex: let order = ["first", "second", "third"];
By declaring a value like this: 
let bag = [] it becomes an array capable of holding multiple values (empty at the moment).
So [] is to store values in an array.
    and
This {} to store values in an object.
And like this: 
[{}] to store objetcts in an array.

object properties are written as key: value pairs where key is the name of the property
and value is the value that property holds.
When declaring another object in the array if the word is composed of more than one word 
surround it in quotes and you can add another object that has an array as a value.

JavaScript interacts with the HTML using DOM - Document Object Model. This is a tree 
of objects that represents the structure of the HTML. A method for finding specific
elements is using querySelector() method. The querySelector() method takes a 
CSS selector as an argument and returns the first element that matches that selector.

So that the JavaScript can find and read the entire HTML the script code HAS to be at 
the end of body element. Make sure that is capable of reading everithing you want it 
to read and place it there. 

When you have a variable that is not going to be reasigned use const. This is when 
you are not going to assign a new value to a variable. This will tell JavaScript to 
throw an error if you try to reassign it.

Once the variable is declared it is enough to write the name of the variable to call it 
without using let or const or etc.

To create another property to an object if the name is composed of more than one word 
wrap it in quotes and separate it from the ohter object with a comma.
When adding a second object to a const array after the {} you need to add a comma.

When using an array with more than one value and you want to use one of those values at 
a time you ahve to specify the index of the value you want: myFunction(argument[0]);.

To set num equal to 5 less the num: 
num = num - 5 or the shorthand of this: 
num -= 5 the same with +:
num += 5;

To push a new item in the array of a const array use the push() method like this:
const arr = ["first"];
const next = "second";
arr.push(next);

When usied on strings, the + operator is called the concatenation operator.
concatenate = combining two or more stringhs into a single larger string.

The button element has a special property called onclick. When the button is clicked 
you can determine what happens. 
To acces this property use the dot notation like this: .onclick property.

A function is a special tool that allows me to run sections of code at specific times. 
I can declare functions using the function keyword. 
this is how to declare a function:
function functionName () {
    
}

the innerText property controls the text that appears in an HTML element.
example: const info = document.querySelector("#info");
info.innerText = "hello";
this will change the text of the element with id info to hello.

When i have repetition in functions means that i need another function. This can take
parameters, wich are values that are fiven to the function each time it is run.

Remember a string is wrapped in quotes whereas a variable is not.

The .length property returns the number of items in the array. 
To remember: the index of the las element in an array is one less than the length
of the array. (use -1 to get the last element)

When using the same name of a variable inside an if statement with let keyword it is 
scoped only to this if statement. At the close of the if statement, the old variable
will be used again.

The shift() removes the first element in an array and returns it.
like this: let currentWeapon = uinventory.shift();

when declaring a const variable with an array of objects is like this:
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
] this is how an array of objects is declared.

JavaScript offer the built-in Math utility wich oiffers a number of mathematical 
tools. Among these we have the Math.floor() method, which rounds a number down to the 
nearest integer. This is how you round a number down to the nearest integer: 
Math.floor(1.2); Math.random() returns a random number between 0 and 1. 

JavaScript has a conditional operator called the ternary operator. Can be used as a 
one-line if-else statement. 
This is how you use it: (condition) ? true : false;
Example: if (num > 5) {         
    bigger()                            
} else {                          
    smaller()
}
Would be this:    num > 5 ? bigger() : smaller();
                            true ↑      false ↑

You can use this to set a condition to be true or false. 

The logical operators are: &&, ||, and !.
This || is the or operator. 
When you use the logical or operator || (|| this means or) this will use the first 
value if it is truthy - that is, anythin apart from Nan, null, undefined, 0, -0, 0n,
"" and false. Otherwise it will use the second value.
&& is the and operator.
! is the not operator.

the condition in a function is declared in the parentheses.

.pop() removes the last element of an array and returns it.

In the if paretheses you write the condition.
In the function parentheses you write the function.

If the value is a number you want to be text use the "" around it.

This formula creates a random number from 0 to 10:
Math.floor(Math.random() * 11);

A for loop runs for a specific number of times. 
for loops are declares with three expressions separated by semicolons: 
for (a; b; c) where a is the initialization expression, b is the condition, and 
c is the final expression. 
The initialization expression is executed only once, before the loop starts, and is 
often used to define and set up the loop variable.
Many for loopse use i as the counter and start from 0. 
The second statement in a for loop, the condition statement, is evaluated at the 
beginning of every loop iteration. The loop will continue as long as the condition
evaluates to be true.
The last expression in a for loop, the final expression, is executed at the end of
each loop iteration.
So you initialize the variable, check the condition, and increment the counter.
for (let i = 0; i < 10; i++) {
    
}; something like this.. and if what you want to check is something different that
the number 10 you change it. likte if you when you modify the string into a number 
you run through the array. could be the lenght of an array. so instead of 10 you 
write: strArray.lenght if that is the name of the array.(could be anything you call it)



The indexOf() array method return the first index at wich a given element can be 
found inthe array, or -1 if it is not present.

To acces an HTML an element with a given id we can use the getElementById() method. 
<h1 id="title">Main title</h1>
const mainTitleElement = document.getElementById("title");

Declare a variable false or true by using the Boolean() constructor.

Even though you declare an element as a number JavaScript will treat it as a string.
You have to write a function to convert it to a number.
Do this with function. 
function cleanNumber(str) {
}
    
Your for loop should see if strArray[i] is found in ["+", "-", " "].
Your for loop should push strArray[i] to cleanStrArray.
// tests completed

The includes method is used to check if a value is in an array. It returns true or false.

Looping through the strings works but it is not very efficient for memory and runtime
performance. It is better to use Regular Expressions reffered to as "regex" to match
specific characters.

Regex in JavaScript is created with the /regex/ syntax.
Example: const regex = /regex/;
So, instead of this: 
function cleanInputString(str) {
  const strArray = str.split('');
  const cleanStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i])
    }
  }
}

Use this:

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return (str.replace(regex, ""));
  }

  Another loop to help the other one:
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
Remeber that you ca use a .replace() statement in a return statement so make you
vision bigger.
Declaring a variable in regex is done with /regex/. 



Using \ you escpae the use of a special character so you can use the actual character, 
like \+ or \- or \space or \". 
\s in regex will look for whitespace characters.
But if you look for more than one character not just in order in regex you have to use 
[a-z] to match any character between a and z. Without the brackets it would match any 
character in order. 

A character class is made up of one or more characters inside the brackets.
If you look for the word helo you can use const regex = /helo/; but if you search for 
h, e, l, o you will need to use const regex = /[heloo]/; Place the word in brackets.
This wil convert it in character class.
The g flag, which stand for global, will tell the pattern to continue looking after it has
found a match. Place the g after the closing /. 
The e in a number input can also be an uppercase E. Regex has a flag for it. The i flag 
whichs stands for "insensitive" will make your pattern case-insensitive.
\d in regex will match any number from 0 to 9.
The + in regex will match one or more.

A parameter in a function is what you have in the parenthesis: 
function(parameter) {

Template literals feature allows you to insert variables into strings. Are denoted with
the backtick (`) character. To add a variable to a string use ${}. That value will be 
inserted in the string. 
The use of temnplate literls makes it easier to add variables to strings without having
to declare the variable as a string.

The querySelectorAll() method returns a NodeList of all the elements that match the 
selector.
A NodeList is an array-like so you can acces the elements using square brackets notation.

A NodeList is returnerd by the following method: The childNodes() method, querySelectorAll()
method and getElementsByName() method.
This properties and methods can be used on a NodeLst:
entries()	Returns an Iterator with the key/value pairs from the list
forEach()	Executes a callback function for each node in the list
item()	Returns the node at a specified index
keys()	Returns an Iterator with the keys from the list
length	Returns the number of nodes in a NodeList
values()	Returns an Iterator with the values from the list
more info for this: https://developer.mozilla.org/en-US/docs/Web/API/NodeList;

Declare a template literal string by using backticks ``.
When using template literals accesing HTMLString you can create elements in the HTMl
by writing the code typically for Html in JavaScript.
Like this: 
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label>Entry ${entryNumber} Name</label>`;
}
}

The innerHTML property sets or returns the HTML content inside an element. 
In JavaScript, values can either be truthy or falsy. A value is truthy if it evaluates to true 
when converted to a Boolean. A value is falsy if it evaluates to false when converted to a Boolean.
null is an example of a falsy value.

To check something truthy pass the variable directly to your if condition (without a comparison
operator). An example that checks the truthiness of somethingToCheck: 
if (somethingToCheck) {

}

Remember if you retunr something: null, undefined or anything.. is return null
The return ends the execution of a function. 
To turn a value into a number use the Number() constructor. This is a function that converts
a value to a number. If the value cannot be converted, it retunrs NaN "Not a Number".
Example Number('10') will return 10.

When you declare a function using const you can not reassign it and to declare it you have to
const functionName = function() => 
When you write a function you can call it for different problems. 
Like: 
function addNumber(a,b) {
  return a+b;
}
Calling this function with arguments of 2 and 3 would retunr the value 5. But if you need 10
you can call this function with argumnets 4 and 6. The function would retunr the value 10.

Remember the template literals are the backticks. The backticks. The backticks. in this template
literal an embedded expression is written ${expression} 

empty array = const taskData = [];
empty object = let currentTask = {};
const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

setItem("key", value) is how you store a value in local storage.
JSON.stringify() this converts a JavaScript object into a JSON string, you could aply this to
the value in the setItem("key", JSON.stringify(value)) like this.. 

1. What is the base case?
2. What is the least amount of work you need to do to get closer to the base case?

Since the base case is when number is equal to 0, you need to call countdown() again while also 
lowering the value of number by 1.
Inside the else block, call countdown() and pass it number - 1 as an argument.



*/

var mS = "This is the start. " +  "\nThis is the end."
var space = "  "
console.log(mS)

mS += "This is the second sentence."
var mS = "This is the first sentence. "
console.log(mS)

var someAdjective = "worthwhile"
var myStr = "Learning to code is "
myStr += someAdjective
console.log(myStr)

var firstNameLength = 0
var lastName = "Lovelace"
firstNameLength = lastName.length
console.log(firstNameLength)


 