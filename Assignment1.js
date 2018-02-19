/*******************************************************************************

 *                     WEB222 – Assignment 1

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: Fenil chetankumar shah_ Student ID: 146878160 Date: 21/09/2017

 *

 ******************************************************************************/
 /*****

 * Task 1

 *****/

var studentName ="Fenil shah";
var NOC = 3;
var program ="Computer Programmer";
var Job = true;

console.log("My name is "+studentName);
console.log("I am in "+program );
console.log("I am taking "+NOC +" courses in this semester");
console.log(" Doing job "+Job);


if (Job == true){
  var temp = "have";
}
else
{
  var temp = "do not have";
}
/*****

 * Task 2

 *****/
var year =2017;
var age= prompt("Please enter your age: ");
var Cage= year - age;
console.log("I was born in the year of "+Cage);
var study= prompt("Enter the number of year you expect to 

study in the college ");
console.log("I will graduate from Seneca college in the year of 

"+(year+eval(study)));


/*****

 * Task 3

 *****/
var celT= 100;
var Frnht=(9/5)*eval(celT)+32;
console.log(celT+"°C is "+Frnht+"°F");

var FT=60;
var ct= ((FT-32)*eval(5/9));
console.log(FT+"°F is "+ct+"°C");
/*****

 * Task 4

 *****/

var i=0;

for(i=1;i<=10;i++){
  
  if(i%2===0){
     console.log(i+" is even");
   
  }
  else
    {
      console.log(i+" is odd");      
    }
  
};
/*****

 * Task 5

 *****/

//A of task 5
function largeNum(num1,num2){
  num1=8;
  num2=9;
  if(num1>num2){
    return num1;
  }
  else
    {
      return num2;
    }
}
console.log(largeNum(9,6));
console.log(The larger number of 5 and 12 is "+largeNum(5,12) 

);

//B of Task 5

var greaterNum = function(n1,n2){
 
  if(n1>n2){
    return n1;
  }
  else
    {
      return n2;
    }
}
console.log( greaterNum(999,666));
console.log(The larger number of 5 and 12 is "+largeNum(5,12) 

);
/*****

 * Task 6

 *****/
function evaluator(){
var i=0,total=0;
  
   for(i=0;i<arguments.length;i++){
   
      total=total+arguments[i]; 
    
   }
   if(total/arguments.length>50)
      return "True";
   else
      return "False";
}

console.log(evaluator(56,25,12));
console.log(evaluator(95,38));
console.log(evaluator(41,23,63,34,43,50,67,83,38,40));
  
  
}
/*****

 * Task 7

 *****/
   
function grader(mark){
  if(mark>=80)
    grade='A';
  else if(mark >= 70)
   grade ='B';
  else if(mark >=60)
    grade='C';
  else if(mark >= 50)
    grade ='D';
  else 
    grade ='F';
  
}
console.log(grader(85));
console.log("your grade is " + grade);
console.log(grader(75));
console.log("your grade is " + grade);
console.log(grader(45));
console.log("your grade is " + grade);
  
    


/*****

 * Task 8

 *****/
function showMultiples(num,numMultiples){
  var i=0;
  for(i=1;i<=numMultiples;i++){
    
   
    console.log(num+" x "+i+" = "+(num*i));
    
    
  }
}
showMultiples(5,4);
            