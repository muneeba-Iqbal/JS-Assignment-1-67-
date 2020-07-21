//chapter 1 : ALERTS
//Task 1
//alert("Welcome to my website")

//Tast 2
//alert("Error! Please enter a valid password")

//Tast 3
//alert("Welcome to JS Land\nHappy Coding")


//Task 4
//alert("Welcome to JS Land");



//task 5
// var a;
// a = "Helloo  i can run JS through my web browser's console";
//alert(a);

//task 6
//alert("Happy Coding")
//window.alert("windowalerts");

//task 7
// 1 : <head> <script src="name.js"></script> </head>
// 2 : before HTML body
//      <script>
//       var a;
//       a = "var1";
//       window.alert(a);
//     </script>

// 3 : <h2>inside HTML pages</h2>
//     <script>
//        var a;
//        a = "var1";
//        window.alert(a);
//      </script>

// 4 : after HTML pages
//     <script src="chpt1.js"></script>




// chapter 2 : VARIABLES FOR STRINGS

// task 1 
//var username;

//task 2 
//var myname = "Muneeba";
//var fullname = myname+" Iqbal";
//alert(fullname);

// task 3
//var message = "Hello World!";
//alert(message);

//task 4 
//var name = prompt("Enter Your name", "Your name is : ");
//var age = prompt("Enter your age", "Your age is: ");
//alert(name);
//alert(age);
//alert("Certified Mobile Application Development");

//task 5
//var b = "PIZZA";
//alert(b + "\n"+ b.slice(0,4) + "\n" + b.slice(0,3) + "\n"+ b.slice(0,2) + "\n"+ b.slice(0,1) );

//task 6
//var email = prompt("Enter your email", "Email");
//alert("My Email address is " + email);

//task 7
//var b ="A smarter way to learn JavaScript";
//alert("I am trying to learn from the Book " + b);

//task 8
//document.write("Yah! i can write HTML content throug Java script");

//tassk 9
//var b = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
//alert(b);



//chapter 3 : VARIABLES FOR NUMBER


//task 1
//var a = 23;
//alert("I am " + a + " years old");


//task 2


//task 3
//var birthyear=1996 ;
//document.write("My birth year is " + birthyear + " <br>Data type of my declared variable is "+ typeof birthyear);

//task 4
//var visitor_name = prompt("Enter Yor name", "Your name is : ");
//var product_title = prompt("Enter product title", "title :");
//var quantity = prompt("Enter quantity number ","Quantity :");
//document.write(visitor_name + " ordered "+quantity+" "+product_title+ "(s) on XYZ Clothing Store.");


// chapter 4 : VARIABLE NAMES: LEGAL & ILLEGA

//task 1
//var a,b,c;

//task 2
//var muneeba! , munee_ba , muneeba ,muneba$ , muneeba3 ;
//var muneeba.1 , muneeba% , String , typeof , alert ;

//task 3
//document.write("<h2>Rules for naming JS variables.</h2> <br> Variable names can only contain numbers, $, ! and _ . For example $my_1stVariable<br> Variables must begin with a letters, $ or _ . For example $name, _name or name <br> Variable names are case sensitive  <br>  Variable names should not be JS keywords");


//chapter 5 : MATH EXPRESSIONS


//task 1
//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var sum= a+b;
//document.write("Sum of "+a+" and "+b+" is "+ sum);

//task 2
//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var sub= a-b;
//document.write("subtraction of "+a+" and "+b+" is "+ sub);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var mul= a*b;
//document.write("multiplication of "+a+" and "+b+" is "+ mul);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var divi= a/b;
//document.write("division of "+a+" and "+b+" is "+ divi);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var mod= a%b;
//document.write("modulus of "+a+" and "+b+" is "+ mod);

//task 3
//var a;
// document.write("value of a is :" + a);
//a = 1;
// document.write("initial value is :" + a);
// a++;
//document.write("value after increament is :" + a);
//a+=31;
//document.write("value after addition is :" + a);
// a--;
//document.write("value after decrement is :" + a);
//a = a%3;
//document.write("the remainder is :" + a);


//task 4
//var ticktprice = 600;
//var total = +ticktprice*5;
//document.write("The total price of 5 tickets is :" + total);

//task 5
//var  a = 5;
//var sum=0;
//var i;
//document.write("Table of :" + a +"<br>");
//for (i=1; i<=10;i++)
//{
//   sum+=a;
//    document.write(a+"*"+i+"="+sum+"<br>");
//}

//task 6
//var af = 70;
//var C = ((af-32)*5/9);
//var dc = 25;
//var F = ((dc*9/5)+32);
//document.write(dc+"C is " +F+ "F <br>");
//document.write(af+"F is " +C+ " C ");

//task 7
//var item1 = 650; item2=100;
//var shipchrg=100;
//var q1=3; q2=7;
//var total = (q1*item1)+(q2*item2)+shipchrg;
//document.write("Price of item 1 is " +item1+"<br>Ordered quantity of item 1 is "+q1+"<br>  Price of item 2 is "+item2+"<br>Ordered quantity of item 2 is "+q2+"<br>Shipping charges "+shipchrg);
//document.write("<br><br>Total cost of your order is " +total);

//task 8
//var givenmarks = 514;
//var totalmarks = 550;
//var percentage = ((givenmarks/totalmarks)*100);
//document.write("<h2>Marks Sheet</h2> <br><br>" );
//document.write("Total Marks : "+totalmarks+"<br>Marks Obtained: "+givenmarks+"<br>Precentage : "+percentage+"%");


//task 9
//var usdolars = 10;
//var saudiriyals = 25;
//var total =  ((10*104.80)+(25*28));
//document.write("<h2>Currency in PKR</h2> <br><br>" );
//document.write("Total Currency in PKR "+total);


//task 10
//var a =5;
//var operation = (((a+5)*10)/2);

//task 11
//var curentyear = 2020;
//var birthyear = 1996;
//var age = curentyear-birthyear;
//document.write("<h2>Age Calculator</h2> <br><br>" );
//document.write("<br> current year: "+curentyear);
//document.write("<br> birth year: "+birthyear);
//document.write("<br> Your age is: "+age);

//task 12
//var radius= 20;
//var circum=(2*3.142*radius);
//var area = (3.142*radius*radius);
//document.write("<h2>The Geometrize</h2> <br><br>" );
//document.write("Radius of circle: "+radius);
//document.write("<br>The circumference is: "+circum);
//document.write("<br>The area is: "+area);

//task 13
//var snack ="kurkury"; var age = 23; var maxage= 65; var amount=3;
//var total = ((maxage-age)*amount);
//document.write("<h2>The Lifetime Supply Calculator </h2> <br><br>" );
//document.write("<br>Favourite snack: "+snack);
//document.write("<br>Current age: "+age);
//document.write("<br>Estimated Maximum age: "+maxage);
//document.write("<br>Amount of snacks per day: "+amount);
//document.write("<br>You will need "+total+" to last you until the ripe old age of "+maxage);


// chapter 6-9 :MATH EXPRESSIONS

//task 1
//var a=10;
//document.write("Results: ");
//document.write("<br> The value of a is "+a);
//document.write("<br>________________________");
//document.write("<br><br>The value of ++a is : "+ (++a));
//document.write("<br>Now the value of a is "+a);
//document.write("<br><br>The value of ++a is : "+a);
//document.write("<br>Now the value of a is : "+ (++a));
//document.write("<br><br>The value of --a is : "+(--a));
//document.write("<br>Now the value of a is : "+a);
//document.write("<br><br>The value of a-- is : "+(a--));
//document.write("<br>Now the value of a is : "+a);


//task 2
//var a=2; b = 1;
//--a;
//1
//--a - --b;
// 0 - 0
//--a - --b + ++b;
//-1 - -1 + 0
//var result = --a - --b + ++b + b--;
//-2 - -1 + 0 + 0
//document.write("a is : "+a);
//document.write("<br>b is : "+b);
//document.write("<br>Result : "+result);

//task 3
//var name = prompt("Enter Your name: ", "Name :");
//document.write("<br>"+name+" <h2>Welcome to My JS</h2>");

//task 4
//var n1 = + prompt("Enter any number for table : ","Enter number");
//var sum=0;
//if(n1!==0)
//{
//    for(var i=1;i<=10;i++)
//    {
//        sum+=n1;
//        document.write(n1+"*"+i+"="+sum+"<br>");
//    }
//}
//else
//{
//    for(var i=1;i<=10;i++)
//    {
//        sum+=5;
//        document.write(5+"*"+i+"="+sum+"<br>");
//    }
//}

//task 5
//var sub1,sub2,sub3,totalmarks=300;
//sub1 = +prompt("Enter subject 1 obtain marks :");
//sub2 = +prompt("Enter subject 2 obtain marks :");
//sub3 = +prompt("Enter subject 3 obtain marks :");
//var obtainmarks=(sub1+sub2+sub3);
//var per= ((sub1/100)*100);
//document.write("<table><th><td>Subjects</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></th></table>");
//document.write("<table><tr><td>English</td> <td></td> <td>100</td><td>"+sub1+"</td><td>"+per+"%</td></tr></table>");
//document.write("<table><tr><td>Math</td>  <td></td><td></td> <td>100</td><td>"+sub2+"</td><td>"+per+"%</td></tr></table>");
//document.write("<table><tr><td>Physics</td> <td></td> <td>100</td><td>"+sub3+"</td><td>"+per+"%</td></tr></table>");
//document.write("Total marks "+totalmarks);
//document.write(" Obtained marks "+obtainmarks);
//per=((obtainmarks/totalmarks)*100);
//document.write(" Percentage "+per+"%");


// chapter 9-11 : USER INPUT & CONDITIONAL STATEMENT

//task 1
//var city = prompt("Enter any city name : ","City name");
//if(city==="karachi")
//{document.write("Welcome to the city of lights.");}
//else{ document.write("welcome to "+city); }

//task 2
//var gender = prompt("Enter your gender : ","gender");
//if(gender==="male")
//{document.write("Good Morning sir.");}
//else{ document.write("Good Morning Ma'am" ); }

//task 3
//var signal = prompt("Enter trafic signal color name ","Color name : ");
//if(signal==="red"){
//    document.write("Must stop.");
//}
//else if(signal==="yellow"){
//    document.write("Ready to move.");
//}
//else if(signal==="green"){
//    document.write("Move now.");
//}
//else{
//    document.write("invalid trafic signal.");
//}

//task 4
//var fuel= +prompt("Enter your car fuels in litres ","fuel in litre");
//if(fuel<0.25){
//    document.write("Please refill the fuel in your car");
//}
//else{
//    document.write("keep ur travelling");
//}

//task 5
/* a
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} */

/* b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} */

// c
/* var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} */

// d
/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} */


//task e
/* if (true){
    alert("True");
   }
 if (false){
      alert("False");
 } */

//task f
/* if("car" < "cat"){
    alert("car is smaller than cat");
} */

//task 6
/* var totalmarks=+prompt("Enter total marks :");
var obtainmarks=+prompt("Enter obtained marks :");
var per= +((obtainmarks/totalmarks)*100);
document.write("<h2>Marks Sheet</h2>");
document.write("<br>Total marks : "+totalmarks);
document.write("<br>Marks obtained : "+obtainmarks);
document.write("<br>Percentage : "+per+"%");
if(per>=80){
    document.write("<br>Grade : A-One <br> Remarks : Excellent ");
}
else if(per>=70){
    document.write("<br>Grade : A<br> Remarks : Good ");
}
else if(per>=60){
    document.write("<br>Grade : B<br> Remarks : You need to improve ");
}
else{
    document.write("<br>Grade : Fail <br> Remarks : Sorry ");
} */

//task 7
/* var number = 6;
var guess=+prompt("Guess the secret number","Enter any number between 1 to 10 ");
if(guess===6){
    document.write("“Bingo! Correct answer”");
}
else if ((guess===(number+1))|| (guess===(number-1))){
    document.write("Close enough to the correct answer”");
}
else{
    document.write("Try again");
}
 */

//task 8
/*  var number = +prompt("Enter any number : ");
 if((number%3)===0){
    document.write("This number is divisible by 3");
 }
 else{
    document.write("This number is not divisible by 3");
 } */

//task 9
/* var number = +prompt("Enter any number : ");
if((number%2)===0){
   document.write("Even number");
}
else{
   document.write("Odd number");
}
*/

//task 10
/*  var T = +prompt("Enter temparature : ");
 if(T>40){
    document.write("“It is too hot outside.”");
 }
 else if(T>30){
    document.write("The Weather today is Normal.");
 }
 else if(T>20){
    document.write("Today’s Weather is cool.");
 }
 else if(T>10){
    document.write(" “OMG! Today’s weather is so Cool.”");
 } */

//task 11
/*  var num1 = +prompt("Enter 1st number : ");
 var num2 = +prompt("Enter 2nd number : ");
 var op = prompt("Enter operator : ");
 if(op==='+'){
    document.write("Sum = "+(num1+num2));
 }
 else if(op==='-'){
    document.write("Subtraction = "+(num1-num2));
 }
 else if(op==='*'){
    document.write("Multiplication = "+(num1*num2));
 }
 else if(op==='/'){
    document.write("Division = "+(num1/num2));
 }
 else if(op==='%'){
    document.write("Modulus = "+(num1%num2));
 } */


// chapter 12-13 : IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

//task 1
//var a = prompt("Enter any charachter");
//if(a>='0' && a<='9')
//{
//    document.write("you enter a number");
//}
//else if((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z'))
//{
//    document.write("you enter an alphabet");
//}
//else
//{    
//   document.write("you enter an other character");
//}

//task 2
/* var num1 = +prompt("Enter 1st number :");
var num2 = +prompt("Enter 2nd number : ");
if(num1==num2){
    document.write("Both numbers are equal");
}
else if(num1>num2){
    document.write("1st number is greater then 2nd number");
}
else{
    document.write("2nd number is greater then 1st number");
} */

//task 3
/* var a = prompt("Enter any alphabet :");
if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a=="u")
{
    document.write("You enter a vowel");
}
else if(a == 'A' || a == 'E' || a == 'I' || a == 'O' || a=="U")
{
   document.write("You enter a vowel");
}
else{
    document.write("You enter consunents");
} */

//task 4
/* var password="Muneeba";
var b= prompt("Enter your password :");
if(b==null){
    document.write("Please enter your password");
}
else if(b===password){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
} */

//task 5
/* var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
    greeting = "Good evening";
} */

//task 6
/* var time= +prompt("Enter time in 24 hours :");
if((time===000)&&(time<1200)){
    document.write("Good Morning!");
}
else if((time>1200)&&(time<1700)){
    document.write("Good Afternoon!");
}
else if ((time>1700)&&(time<2100))
{
    document.write("Good Evening!");
}
else if ((time>2100)&&(time<2359))
{
    document.write("Good night!");
} */


// chapter 14-16 : ARRAYS 
//task 1
//var myArray = [];

//task 2
//var person = {};

//task 3
//var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

//task 4
//var Array = [1, 2, 3, 4];

// task 5
//var Array = [true, false];

//task 6
//var mxdarray = [ "dob", 1, "muneeba iqbal", true];

//task 7
/* var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("  <h2>Qualification:</h2>");
for(var i=1;i<=(education.length-1);i++){
    document.write(i+") "+education[i]+"<br>");
} */

//task 8
/* var stnames = ["Ali", "Saad", "Saba"];
var stscores = [320, 230, 480];
var total = 500;
var per=0;
for(var i=0;i<=(stnames.length-1);i++){
    per=((stscores[i]/total)*100);
    document.write("Score of "+stnames[i]+" is "+stscores[i]+". Precentage: "+per+"% <br>");
}
 */

//task 9

/* var colors = ["red"];
var add = prompt("Enter color name you want to add in the beginning of array : ");
colors.unshift(add);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red" , "green"];
var add = prompt("Enter color name you want to add at the end of array : ");
colors.push(add);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red" , "green"];
colors.unshift("blue","brown");
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red","blue" , "green"];
colors.shift();
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red","blue" , "green"];
colors.pop();
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors);*/

/* var colors = ["red", "green", "blue"];
var nmbr = +prompt("At which index u want to add the color name : ","Enter index number");
var colrname = prompt("Enter color name :");
colors.splice(nmbr, 0, colrname);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red", "green", "blue" , "white", "yellow"];
var strtnmbr = +prompt("From which index you want to delete the colors : ","Enter starting index number");
var endnmbr = prompt("Enter end index number :");
colors.splice(strtnmbr, endnmbr);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

//task 10
/* var numbers = [1, 5, 12, 3, 7, 15, 9];
numbers.sort(function(a, b){return a-b});
alert(numbers); */

/* //task 11
var cities = ["karachi", "lahore", "Islamabad", "Queeta", "Peshawar"];
var selectedcities = cities.slice(2,4);
document.write("<h2>Cities List :</h2>");
    document.write(cities);
document.write("<h2>Selected Cities List : </h2>");
    document.write(selectedcities); */

//task 12
/* var arr = ["This ", "is", " my ", " cat"];
document.write("<h2>Array :</h2>");
document.write(arr);
document.write("<h2>String :</h2>");
document.write(arr.join(" ")); */

//task 13
//FIFO
/* var arr = ["Keyboard", "Mouse", "Monitor", "Printer"];
document.write("<h2>Devices :</h2>");
document.write(arr+"<br><br>");
for(var i=0;i<=(arr.length-1);i++){
    document.write("Out : <br>");
    document.write(arr[i]+"<br>");
} */

//task 14
//LIFO
/* var arr = ["Keyboard", "Mouse", "Monitor", "Printer"];
document.write("<h2>Devices :</h2>");
document.write(arr+"<br><br>");
for(var i=(arr.length-1);i>=0;i--){
    document.write("Out : <br>");
    document.write(arr[i]+"<br>");
} */

//task 15
//document.write("<div class='dropdown'><button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Phone manufacturers<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>Apple</a></li><li><a href='#'>Samsung</a></li><li><a href='#'>Motorola</a></li><li><a href='#'>Nokia</a></li><li><a href='#'>Sony</a></li></ul></div>");

//chapter 17-20 : ARRAYS AND LOOP  

//task 1
//var salary = [ [],[],[],[],];

//task 2
/* var salary = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];
for (var i = 0; i<=salary.length; i++) {
    for (var j = 0; j< salary[i].length; j++) {
        document.write( salary[i][j]);
    }
    document.write("<br>");
} */

//task 3
/* for(var i=1;i<=10;i++){
    document.write(i+"<br>");
} */

//task 4
/* var n1 = + prompt("Enter any number for table : ","Enter number");
var tblelength = + prompt("Enter length for table : ","Enter length");
var sum=0;
for(var i=1;i<=tblelength;i++){
        sum+=n1;
        document.write(n1+"X"+i+"="+sum+"<br>");
} */

//task 5
/* var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<=fruits.length-1;i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br><br>");
for(var i=0;i<=fruits.length-1;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
} */

//task 6
/* document.write("<h2>Counting : </h2><br>");
for(var i=1;i<=15;i++){
    document.write(i+", ");
}

document.write("<br><h2>Reverse Counting :</h2><br> ");
for(var i=10;i>0;i--){
    document.write(i+" ,");
}

document.write("<br><h2> Even :</h2><br> ");
for(var i=0;i<=20;i=i+2){
    document.write(i+" ,");
}

document.write("<br> <h2> Odd : </h2>");
for(var i=1;i<=20;i=i+2){
    document.write(i+", ");
}

document.write("<br><h2> Series :</h2> ");
for(var i=2;i<=20;i=i+2){
    document.write(i+"k, ");
} */

//task 7
/* var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item name you want to search : ","Enter name ");
for(var i=0;i<=A.length-1;i++){
    if(search===A[i]){
        document.write(search+" is found at index "+i+" in our bakery");
    }
    else{
        document.write(search+" is not vailable in our bakery");
        break;
    }
} */

//task 8
/* var A = [24, 53, 78, 91, 12];
document.write("Array items : "+A);
for(var i=1;i<=A.length;i++){
    if(A[0]<A[i]){
        A[0]=A[i];
    }
    else{
        document.write("<br>Lasrgest number is "+A[0]);
        break
    }
} */

//task 9
/* var sum=0,n1=5;
for(var i=1;i<=20;i++){
        sum+=n1;
        document.write(sum+",");
} */


//chapter 21-25 : STRING METHODS 

//task 1
/* var firstname = prompt("Enter your first name : ","First name");
var lastname = prompt("Enter your last name :","Last name");
var fullname= (firstname+" "+lastname);
document.write("Welcome to our website " +fullname); */

//task 2
/* var fvrt = prompt("Enter your favorite Mobile phone name : ");
document.write("My favorite phone is : " +fvrt);
document.write("<br>Length of string is : "+ (fvrt.length)); */

//task 3
/* var word = "pakistani";
document.write("String is : "+ word);
document.write("<br>Index of 'n' is : "+ word.indexOf("n")); */

//task 4
/* var word = "Hello World";
document.write("string is : "+word);
document.write("<br>Last index of 'l' is : "+word.lastIndexOf("l")); */

//task 5
/* var word = "pakistani";
document.write("String is : "+ word);
document.write("<br>Character at inex 3 is : "+ word.charAt(3)); */

//task 6
/* var firstname = prompt("Enter your first name : ","First name");
var lastname = prompt("Enter your last name :","Last name");
document.write("Welcome to our website " +firstname.concat(" " ,lastname)); */

// task 7
/* var word = "Hyderabad";
document.write("City : "+ word);
document.write("<br>After replacement : "+ word.replace("Hyder","Islam")); */

//task 8
/* var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br><br>After replacement : "+message.replace(/and/g,"&") ); */

//task 9
/* var nmbr="472";
document.write("Value : "+nmbr);
document.write("<br>Type : "+ typeof(nmbr));
document.write("<br>Value : "+parseInt(nmbr));
document.write("<br>Type : "+ typeof(parseInt(nmbr))); */

//task 10
/* var word =prompt("Enter any word to convert into uppercase : ","Enter word here");
document.write("User input : "+word);
document.write("<br>Upper case : "+ word.toUpperCase()); */

//task 11
/* var word =prompt("Enter any word : ","Enter word here");
document.write("User input : "+word);
var after = word.slice(0,1);
word = (after.toUpperCase().concat(word.slice(1)));
document.write("<br>Title case : "+word); */

//task 12
/* var nmbr = "35.36"
document.write("Number : "+nmbr);
var num2 = nmbr.replace(".","");
document.write("<br>Result : "+ num2.toString()); */

//task 13
/* var user = prompt("Enter your name : ");
for(var i=0;i<=user.length;i++){
        if((user[i]=='!') || (user[i]==',')||(user[i]=='.')||(user[i]=='@')){
                alert("Enter correct user name.");
                break;
        }
} */

//task 14
/*
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item name you want to search : ","Enter name ");
var item = A.indexOf(search.toLowerCase());
if(item>=0){
document.write(search+ " is available at index "+item+" in our bakery");
}
else{
        document.write("We are sorry "+search+" is not available in our bakery");
} */

//task 15
/* var password = prompt("Enter your password : ");
if(password.charAt(0)>=0 || password.charAt(0)<=9 ){
        document.write("Password must be start with an alphabet.");
}
else if(password.length<6){
        document.write("Password must be atleast 6 character long.");
}
for(var i=0;i<password.length; i++){
        if((password[i] >= "A" && password[i] <= "Z") || (password[i] >= "a" && password[i] <= "z") && (password[i]>="0" || password[i]<="9" ) ){
                 document.write("Password  should contain alphabets and numbers.");
                 break;
        }
}
 */

//task 16
/*  var  university = "University of Karachi";
var array = university.split("");
for(var i =0;i<array.length;i++){
        document.write(array[i]+"<br>");
} */

//task 17
/* var input = prompt("Enter any word : ");
document.write("User input : "+input);
document.write("<br> Last character of input is: "+ input.substr(input.length - 1)); */

//task 18
/* var text = "The quick brown fox jumps over the lazy dog";
var text2 = text.toLowerCase();
document.write("Text : The quick brown fox jumps over the lazy dog.")
document.write("<br> There are "+(text2.match(/the/g)).length+" of accurance(s) of word 'the' "); */

//chapter 26-30 : MATH METHODS

//task 1
/* var number = prompt("Enter any positive decimal number : ");
document.write("Number : "+number);
document.write("<br>Round of value : "+ Math.round(number));
document.write("<br>floor value : " + Math.floor(number));
document.write("<br>ceil value : "+ Math.ceil(number)); */

//task 2
/* var number = prompt("Enter any negative decimal number : ");
document.write("Number : "+number);
document.write("<br>Round of value : "+ Math.round(number));
document.write("<br>floor value : " + Math.floor(number));
document.write("<br>ceil value : "+ Math.ceil(number)); */

//task 3
/* var number = prompt("Enter any number to find absolute : ");
document.write("Absolute value of "+number+ " is : " + Math.abs(number)); */

//task 4
/* var nmber = Math.random();
nmber=Math.round(((nmber * 5) + 1));
document.write("Random dice number is : "+nmber ); */

//task 5
/* var coin = Math.random();
coin = Math.round(coin);
coin = (coin*1)+1;
if(coin === 2){
        document.write(coin);
        document.write("<br>ceil value : Heads");
}
else{
        document.write(coin);
        document.write("<br>ceil value : Tails");
} */

//task 6
/* var nmber = Math.random();
nmber=Math.round((nmber * 99)+1);
document.write("Random number beween 1 to 100 is : "+ nmber);  */

//task 7
/* var weight = prompt("Enter your age in kilogram : ");
var add ="";
for(var i=0;i<weight.length;i++){
        if(weight[i]>="0" && weight[i]<="9"){
               add= add.concat(weight[i]);
        }
}
document.write("The weight of user is "+add+ " kilograms"); */

//task 8
/* var nmber = Math.random();
nmber=Math.round((nmber * 9)+1);
var gues = +prompt("Guess the secret number form 1 to 10 ");
if(gues===nmber){
        document.write("congratulations!");
}
else{
        document.write(nmber+ " Sorry! Try again");
} */

// chapter 31-34 : DATE METHODS

//task 1
/* document.write(new Date()); */

//task 2
/* var month = new Date();
var mnthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var curentmnth = month.getMonth();
document.write("Current month is : "+mnthname[curentmnth]); */

//task 3
/* var day = new Date();
var dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curentday = day.getDay();
document.write("Current month is : "+dayname[curentday]); */

//task 4
/* var day = new Date();
var dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curentday = day.getDay();
if(dayname[curentday]==="Sunday" || dayname[curentday]==="Saturday"){
document.write("Its fun day !");
} */

//task 5
/* var date = new Date();
var curentdate = date.getDate();
if(curentdate<16){
        document.write("First fifteen days of the month");
}
else{
        document.write("Last days of the month");
} */

//task 6
/* var date = new Date();
document.write("Current date : "+ date);
var ms = date.getTime();
var mints = Math.floor(ms/60000);
document.write("<br>Elapsed miliseconds since January 1, 1970 : "+ ms);
document.write("<br>Elapsed minuts since January 1, 1970 : "+ mints); */

//task 7 
/* var time = new Date();
var hrs = time.getHours();
if(hrs>12){
        document.write("Its PM");
}
else{
        document.write("Its AM");
} */

//task 8
/* var laterdate =  new Date("dec 31, 2020");
document.write("Later Date : "+laterdate); */

//task 9
/* var d1 = new Date("jun 18, 2015");
var d2 =  new Date("jun 19, 2020");
var dfft = d2.getTime()-d1.getTime();
var dffd = dfft/(1000*60*60*24);
document.write(dffd+" days have passed since 1st Ramadan, 2015"); */


//task 10
/* var newdate = new Date();
var refdate = new Date("dec 05, 2015 20:15:16");
var dff = Math.abs(newdate-refdate)/1000;
document.write("From refrence date : "+refdate+"<br>"+ Math.ceil(dff)+" Seconds had passed since beginning of 2015");
 */

//task 14
/* var name =prompt("Enter your name : ");
var mnth = prompt("Enter curent month : ");
var units = prompt("Enter units : ");
var charges = prompt("Enter charges : ");
var billwdd = units*charges;
var billadd = billwdd+350;
document.write("Customer Name : "+name);
document.write("<br>Month : "+mnth);
document.write("<br>Number per units : "+ units);
document.write("<br><br>Net Amount Payable(within due date) : "+ billwdd.toFixed(2));
document.write("<br>Net Amount Payable (After due date) : "+billadd.toFixed(2)); */

// chapter 35-38 : Function

//task 1
/* function date(){
        document.write("Current Date : "+ new Date());
}
date(); */

//task 2
/* function greet(){
        var frstname = prompt("Enter first name : ");
        var lstname = prompt("Enter last name : ");
        document.write("Welcom to our website "+frstname+" "+lstname);
}
greet(); */

//task 3
/* function sum(){
        var n1 = + prompt("Enter first number : ");
        var n2 = + prompt("Enter second number :");
        var sum = n1+n2;
        return sum;
}
document.write("Sum : "+ sum()); */

//task 4
/* function operation(n1, n2 , op){
        if(op=='+'){
             return (n1+n2);
        }
        else if(op=='-'){
               return (n1-n2);
        }
        else if(op=='*'){
                return (n1*n2);
        }
        else if(op=='/'){
                return (n1/n2);
        }
        else if(op=='%'){
                return (n1%n2);
        }
}
var n1 = + prompt("Enter first number : ");
var n2 = + prompt("Enter second number :");
var op = prompt("Enter operator : ");
document.write("Required answer is : " +operation(n1,n2,op)); */


//task 5
/* function abc(n1){
        return (n1*n1);
}
document.write("Square of 5 is : "+abc(5)); */

//task 6
/* var fact = + prompt("Enter number for factorial : ");
function abc (fact){
        var count=1;
        for(var i=fact; i>0; i--){
                count = count*i;
        }
        return count;
}
document.write("Factorial of "+fact+" is " +abc(fact)); */

//task 7
/* function counting (strt , end){
        for(var i=strt ; i<=end;i++){
                document.write(i+"<br>");
        }
}
var strt = + prompt("Enter starting value : ");
var end = + prompt("Enter end value : ");
counting(strt,end); */

//task 8
/* var base = +prompt("Enter base : ");
var perp = +prompt("Enter perpendicular : ");
function hypo(base , perp){
        var bs2 = sqr(base);
        var pr2 = sqr(perp);
        var h1 = bs2+pr2;
        function sqr( arg1){
                return(arg1*arg1);
        }
        return h1;
}
document.write("Hypotenuse is : "+ hypo(base,perp)); */

//task 9
/* var width = +prompt("Enter width : ");
var height = +prompt("Enter height : ");
function area(width, height){
        var a = width*height
        return a;
}
document.write("Argument as variable : Area = "+ area(width,height));
document.write("<br>Argument as value : width(4) : height(5) then Area is =  "+ area(4,5)); */

//task 10
/* var a = "madam";
var b="";
function palindrome(a){
        for(var i=(a.length-1); i>=0; i--){
                b = b.concat(a[i]);
        }
        if(b===a){
                return true;
        }
        else{
                return false;
        }
}
if (palindrome(a)===true){
        document.write(a+" is palindrome");
}
else{
        document.write(a+" is not palindrom");
} */

//task 11
/* var str = "the quick brown fox";
function frstword(str)
{
  var array = str.split(' ');
  var newarray = [];

  for(var x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newarray.join(' ');
}
document.write(frstword("the quick brown fox")); */


//task 12
/* var str = "Web Development Tutorial";
function findLongestWord(str) {
        var strSplit = str.split(' ');
        var longestWord = 0;
        var word ="";
        for(var i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > longestWord){
              longestWord = strSplit[i].length;
              word = strSplit[i];
           }
        }
        return word;
      }
var lrgword = findLongestWord("Web Development Tutorial");
document.write("Given string is : " +str);
document.write("<br>Longest word is : " +lrgword); */

//task 13
/* function countletr(str ,letr){
        var occu=0;
        for(var i=0;i<str.length;i++){
                if(str[i]=== letr ){
                        occu = occu+1;
        }
   }
   return occu;
}
document.write("Sample argument: JSResourceS.com ");
document.write("<br>Number of occurance of leter a is : " + countletr("JSResourceS.com","o")); */

//task 14
/* function calcCircumference(radius){
        var cirum = 2*3.146*radius;
        return cirum;
        }
function calcArea(radius){
        var area = 3.146*radius;
        return area;
}
var radius = 5;
document.write("The circumference is : " + calcCircumference(radius));
document.write("<br>The area is : " +calcArea(radius)); */


// chapter 38-42 : FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS
//task 1
/* function power(a, b) {
    var i, value;
    value = a;
    for (i = 1; i < b; i++) {
        value = value * a;
    }
    return value;
}
var a = prompt("Enter Value of a ");
var b = prompt("Enter raised value ");
var answer = power(a,b);
alert("The value of " +a+" raised to "+b+" is "+answer);  */

//task 2
/* var year = +prompt("Enter year to check whether the year is leap year or not :");
var value = leapyear(year);
if(value==true){
    document.write(+year+" is a leap year");
}
else{
    document.write(+year+" is not a leap year");
}
function leapyear(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false
    }
} */

//task 3
/* var a = +prompt("Enter value side 1 ");
var b = +prompt("Enter value side 2 ");
var c = +prompt("Enter value side 3 ");
var s = avg(a,b,c);
var total = area(s);
function avg(a,b,c){
    var avrg = (a+b+c)/2;
    return avrg;
}
function area(s){
var val = s(s-a)(s-b)(s-c);
return val;
}
document.write("Area of triangle is "+total); */

//task 4
/* var s1 = +prompt("Enter marks of subject 1 ");
var s2 = +prompt("Enter marks of subject 2 ");
var s3 = +prompt("Enter marks of subject 3 ");
var marks = (s1+s2+s3);
main(marks);
function averg(marks){
    var avg = marks/3;
    return avg;
}
function percntg(marks){
    var per = ((marks/300)*100);
    return per;
}
function main(marks){
    var avg = averg(marks);
    var per = percntg(marks);
    document.write("Obtained Marks : "+marks);
    document.write("<br>Total Marks : 300");
    document.write("<br>Average : "+avg);
    document.write("<br>Percentage : "+per+"%");
} */

//task 5
/* var word = prompt("Enter any 1 word : ");
var find = prompt("Enter character you ");
search(word , find);
function search(word , find){
    for(var i=0 ; i<word.length ; i++){
        if(find===word[i]){
            document.write("IndexOf("+find+") is "+(i+1));
            break;
        }
    }
} */

//task 6

/* var text = "I am Muneeba Iqbal. My father name is Iqbal Saeed. We are 6 siblings.";
var Removevowels =removeVowels(text);
function removeVowels(text) {
    var remove = text.replace(/[aeiou]/ig,'');
    return remove;
}
document.write("Befor removing Vowels : "+text+"<br>After Removing Vowels : " +Removevowels);
 */


//task 7

//task 8
/*  var distance  = +prompt("Enter distance in Kilometre : ");
 meter(distance);
 feet(distance);
 inches(distance);
 cm(distance);
function meter(distance){
    document.write(distance + "Km = "+(distance*1000)+"Metres<br>");
}
function feet(distance){
    document.write(distance + "Km = "+(distance*3281)+"feet<br>");
}
function inches(distance){
    document.write(distance + "Km = "+(distance*39370)+"inches<br>");
}
function cm(distance){
    document.write(distance + "Km = "+(distance*100000)+"cm");
} */


//task 9
/* var overtime = +prompt("Enter total number of work hours : ");
pay(overtime);
function pay(overtime){
    if(overtime>40){
        overtime = (overtime-40)*12;
        document.write("Overtime Pay is : "+overtime);
    }
} */

//task 10
/* var amount = +prompt("Enter Amount to withdraw !!");
draw(amount);
function draw(amount){
    var hundered = amount / 100;
    var fifty = (amount % 100) / 50;
    var ten = ((amount % 100) % 50) / 10;
    var rs = ((amount % 100) % 50) % 10;
    document.write("You will have "+hundered.toFixed(0)+" hundred nots"+fifty.toFixed(0)+" fifty notes"+ten.toFixed(0)+" ten nots");
} */

//chapter 43-48 : Events
//task 1
/* alert("Show images "); */

//task 2
/* function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("record").deleteRow(i);
  } */

//task 3
/* function out() {
    var pic = document.getElementById("img");
    pic.src = "mb1.jpg";
}
function chnageimage() {
    var pic = document.getElementById("img");
    pic.src = "mb3.jpg";
} */


//task 4
/* var countvalue = 0;
    var hedingvalue = document.getElementById("count")
function increase(){
    var incbtn = document.getElementById("inc");
    countvalue++;
    hedingvalue.innerHTML = countvalue;
}
function decrease(){
    var decbtn = document.getElementById("dec");
    countvalue--;
    hedingvalue.innerHTML = countvalue;
} */


                            //chapter 49-52 : Events

//task 1
/* function data(){
    var val1 = document.getElementById("name");
    var val2 = document.getElementById("password");
    document.write("Name : "+val1.value+"<br>");
    document.write("Password: "+val2.value)
} */

//task 2
/* function readmore(){
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus quibusdam sit iste harum mollitia officiis atque optio officia culpa laboriosam cumque illo expedita adipisci ratione, sunt veniam perferendis minus!";
    var data = document.getElementById("data")
    data.innerHTML = text;
} */

//task 3



            //chapter 52-57 : Modal
//task 1
/* var modal = document.getElementById("myModal");
var img = document.getElementById("myimg");
var span = document.getElementsByClassName("close")[0];

function showimage(e) {
    modal.style.display = "block";
    var modalimage = document.getElementById("modalimg");
    modalimage.src = e.src
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
} */

//task 2
/* var max = 18;
var min = 8;
function zoomIn(){
    var p = document.getElementsByTagName("p")
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
          var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
          var s = 12;
        } if (s != max) {
          s += 10;
        }
        p[i].style.fontSize = s + "px"
      }

}
function zoomOut(){
    var p = document.getElementsByTagName('p');
  for (i = 0; i < p.length; i++) {
    if (p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    } if (s != min) {
      s -= 10;
    }
    p[i].style.fontSize = s + "px"
  }
}
 */

//: modal questions
//task 1
/* var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'D:\web and mobile\Js Assignment\images\7.png';

imgArray[1] = new Image();
imgArray[1].src = 'D:\web and mobile\Js Assignment\images\10.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'D:\web and mobile\Js Assignment\images\8.jpg'; */

// task 2 :logic is not cleared for pending questions


            // chapter58-67 : DOM
//task 1
//1 :var main = document.getElementById("main-content")
/*2 : var all =  document.getElementById("main-content").childNodes;
console.log(all) */

/*3 var x = document.querySelectorAll("[class='render']");
var text ="";
for (var i=0;i<x.length;i++) {
    document.write(x[i].innerHTML+"<br>") //(or textContent or innerText)
} */

/*4: var firstname = document.getElementById("first-name")
firstname.value="Muneeba"; */

/*5: var lastName = document.getElementById("last-name")
lastName.value="Iqbal";
var email = document.getElementById("email")
email.value="muneeba@gmail.com"; */

//task 2
/*1 : var x = document.getElementById("form-content").nodeType;
document.getElementById("demo").innerHTML = x; */

/*2: var childnode = document.getElementById("lastName").childNodes;
var txt = "";
var i;
for (i = 0; i < childnode.length; i++) {
  txt = txt + childnode[i].nodeType + "<br>";
}
document.getElementById("demo").innerHTML = txt; */

/*3: var list = document.getElementById("main-content").firstChild.innerHTML;
document.getElementById("demo").innerHTML = list; //If you add whitespace before the first element, the result will be "undefined".
var list = document.getElementById("main-content").lastChild.innerHTML;
document.getElementById("demo").innerHTML = list; //If you add whitespace before the closing UL element, the result will be "undefined".
 */

/*4: var x = document.getElementById("lastName").nextSibling.innerHTML;
document.getElementById("demo").innerHTML = x;
var x = document.getElementById("lastName").previousSibling.innerHTML;
document.getElementById("demo").innerHTML = x; */

/*5 var x = document.getElementById("email").parentNode.nodeName;
document.getElementById("demo").innerHTML = x;
var x = document.getElementById("email").nodeType;
document.getElementById("demo").innerHTML = x; */

