console.log("Date Started: 18-January-2021")

function hide(xnx) { // Started using this at Tue Jan 26 2021 19:59:26 GMT+0700 (Indochina Time)
  xnx.innerHTML = ""
}

var dreamcars = ["Mercedes", "Audi", "Lexus", "Bentley"];
var dreamcars2 = ["Tesla", "Roll Royce", "BMW", "Landcruiser"];

var kars = {model: "Rolls Royce", price: 699500, year: 2013}

var cars = [
  {model: "Mercedes-AMG", price: 119800, year: 2020},
  {model: "Audi R8", price: 97500, year: 2019},
  {model: "Lexus 570", price: 219250, year: 2017},
  {model: "Bentley", price: 358900, year: 2021},
]

var years = [2001, 393, 462, 1975, 592, 851, 1029];

var color = document.getElementById('sidenav');
color.addEventListener('click', show30);

/* ===== START SECTION 1 ===== */

function displaycar1() {
  document.getElementById('favcar#1').innerHTML = "My fav car is... " + dreamcars[1] + " & " + dreamcars[2] + ".";
}

function displaycar1a() {
  document.getElementById('info1').innerHTML = "";
  document.getElementById('favcar#1').innerHTML = "My fav car is... ";
}

function displayinfo1() {
  document.getElementById('info1').innerHTML =
  "function displaycar1() {" + "<br>" +
    "document.getElementById(\'favcar#1\').innerHTML = \"My fav car is... \" \+ dreamcars[1]" + " + " + "\" & \" \+ dreamcars[2] \+ \".\"" + "<br>" +
  "}";
}


/* ===== START SECTION 2 ===== */

function displaycar2(item, index, arr) {
  document.getElementById('dreamcars#2').innerHTML += ", " + item ;
} //HTML Content

function displaycar2a() {
  dreamcars.forEach(displaycar2);
} //Function Call

function hidecar2() {
  document.getElementById('dreamcars#2').innerHTML = "Here is the list of my dream cars..."
} //Return to Normal


/* ===== START SECTION 3 ===== */

function sort3() {
  dreamcars.sort();
  document.getElementById('dreamcars#3a').innerHTML += dreamcars;
}

function hidesort3() {
  document.getElementById('dreamcars#3a').innerHTML = "Here is the sorted list: "
}


/* ===== START SECTION 4 ===== */

function sort4() {
  dreamcars.sort();
  dreamcars.reverse();
  document.getElementById('dreamcars#4a').innerHTML += dreamcars;
}

function hidesort4() {
  document.getElementById('dreamcars#4a').innerHTML = "Here is the sorted list: "
}


/* ===== START SECTION 5 ===== */

function displaydetail(item, index, arr) {
  document.getElementById('cardetails#5').innerHTML += "<li>" + "(" + cars[index].year + ") " + cars[index].model + " - $" + cars[index].price + "</li";
}

function hidedetail() {
  document.getElementById('cardetails#5').innerHTML = "Here are the details (year, model, price) of each car: "
}


/* ===== START SECTION 6 ===== */

function showprice() {
  var n = Number(cars[0].price) + Number(cars[1].price) + Number(cars[2].price) + Number(cars[3].price)
  document.getElementById('totalprice#6').innerHTML += "$" + n;
}

function hideprice() {
  document.getElementById('totalprice#6').innerHTML = "The total price is: "
}


/* ===== START SECTION 7 ===== */

function display7() {
  document.getElementById('dreamcars#7').innerHTML += dreamcars.toString();
}

function hide7() {
  document.getElementById('dreamcars#7').innerHTML = "Here is the result: ";
}


/* ===== START SECTION 8 ===== */

function display8() {
  document.getElementById('dreamcars#8').innerHTML += dreamcars.join(" * ")
} //in the join() method brackets is the way you specify what to add between each array elements.

function hide8() {
  document.getElementById('dreamcars#8').innerHTML = "Here is the result: "
}


/* ===== START SECTION 9 ===== */

function display9() {
  document.getElementById('dreamcars#9').innerHTML += dreamcars.pop();
}

function hide9() {
  document.getElementById('dreamcars#9').innerHTML = "Remove the last element of the dreamcars array and display it: "
}


/* ===== START SECTION 10 ===== */

function show10() {
  document.getElementById('p#10').innerHTML += dreamcars.push("Tesla");
}

function hide10() {
  document.getElementById('p#10').innerHTML = "Adds an element at the end of the dreamcars array and display the total number of elements in the dreamcars array: "
}


/* ===== START SECTION 11 ===== */

function show11() {
  document.getElementById('p11').innerHTML += dreamcars.shift();
}

function hide11() {
  document.getElementById('p11').innerHTML = "The arr.shift() method is just like the arr.pop() method. The only difference is that it works on the first array's element instead of the last. Here is the result: "
}


/* ===== START SECTION 12 ===== */

function show12() {
  document.getElementById('p12').innerHTML += dreamcars.length + " elements."
}

function hide12() {
  document.getElementById('p12').innerHTML = "The arr.length method shows how many elements are in the array. In the dreamcars array, there are "
}


/* ===== START SECTION 13 ===== */

function show13() {
  dreamcars[dreamcars.length]="Tesla"
  document.getElementById('p13').innerHTML += "<li>" + dreamcars.join("<li>")
}

function hide13() {
  document.getElementById('p13').innerHTML = "There are only 4 cars in the dreamcars array. Now I'm adding another car called \"Tesla\" at the end of the array. Full array: "
}


/* ===== START SECTION 14 ===== */

function show14() {
  delete dreamcars[0];
  document.getElementById('p14').innerHTML += dreamcars.join("<li>")
}

function hide14() {
  document.getElementById('p14').innerHTML = "I'm changing the first element in dreamcars to undefined. Here is the array after using the delete method: "
}


/* ===== START SECTION 15 ===== */

function show15() {
  dreamcars.splice(dreamcars.length, 0, "Rolls Royce", "Bughatti")
  document.getElementById('p15').innerHTML += "<li>" + dreamcars.join("<li>")
}

function hide15() {
  document.getElementById('p15').innerHTML = "It is used for adding new elements to an array. Now I'm adding 2 more cars to the dreamcars array:"
}


/* ===== START SECTION 16 ===== */

function show16() {
  var x = dreamcars.concat(dreamcars2);
  document.getElementById('p16').innerHTML += "<li>" + x.join("<li>")
}

function hide16() {
  document.getElementById('p16').innerHTML = "It is used to join multiple arrays' elements together. Now I'm joining the dreamcars array with the dreamcars2 array:"
}


/* ===== START SECTION 17 ===== */

function show17() {
  var x = dreamcars.concat("Tesla");
  document.getElementById('p17').innerHTML += "<li>" + x.join("<li>")
}

function hide17() {
  document.getElementById('p17').innerHTML = "In section 16, we merge an array with an array. In this section, we'll merge an array (dreamcars) with a value (Tesla):"
}


/* ===== START SECTION 18 ===== */

function show18() {
  years.sort(function(a, b){return a - b});
  document.getElementById('p18').innerHTML += "<li>" + years.join("<li>")
}

function hide18() {
  document.getElementById('p18').innerHTML = "I've created a new array called \"years\". It consists of a few random numbers. Here is the ascending sort:"
}


/* ===== START SECTION 19 ===== */
x19 = document.getElementById('p19')
function show19() {
  years.sort(function(a,b){return 0.5 - Math.random()})
  x19.innerHTML = "<li>" + years.join("<li>")
}


/* ===== START SECTION 20 ===== */
x20 = document.getElementById('p20')
function show20() {
  var i = years.length, j, k
  while(--i > 0) {
    j = Math.floor(Math.random() * (i));
    k = years[j];
    years[j] = years[i];
    years[i] = k;
  }
  x20.innerHTML = "<li>" + years.join("<li>")
}


/* ===== START SECTION 21 ===== */
x21 = document.getElementById('p21')
function show21() {
  var i, j, k;
  for(i = years.length -1; i>0; i--) {
    j = Math.floor(Math.random() * i);
    k = years[j];
    years[j] = years[i];
    years[i] = k;
  }
  x21.innerHTML = "<li>" + years.join("<li>")
}


/* ===== START SECTION 22 ===== */
x22 = document.getElementById('p22')
function show22() {
  var i,j,k;
  for(i= years.length -1; i>=0; i--) {
    years[i] = years[i] *2;
  }
  x22.innerHTML = "<li>" + years.join("<li>")
}


/* ===== START SECTION 23 ===== */
x23 = document.getElementById('p23')
function show23() {
  var a = 20; b = 35; c = 45;
  if (c > b) {
    x23.innerHTML = a*b;
  }
}


/* ===== START SECTION 24 ===== */
x24 = document.getElementById('p24')
function show24() {
  for (i = dreamcars.length-1; i>=0; i--) {
    dreamcars[i] = "x" + dreamcars[i];
  }
  x24.innerHTML = "<li>" + dreamcars.join("<li>");
}


/* ===== START SECTION 25 ===== */
x25 = document.getElementById('p25')
function show25() {
  years.sort(function(a,b){return a-b});
  x25.innerHTML = years[years.length -1];
}


/* ===== START SECTION 26 ===== */
x26 = document.getElementById('p26')
function show26() {
  var x=9; y=20; z= 93;
  x26.innerHTML = Math.max.apply(null, years);
}


/* ===== START SECTION 27 ===== */
x27 = document.getElementById('p27')
function show27() {
  var xxx = [], j, t;
  for(i=0; i <20; i++){
    j = Math.floor(Math.random()*100);
    xxx.push(j);
  }
  x27.innerHTML = "[" + xxx.join(", ") + "]" + "<br>" +
  "Minimum is " + "[" + Math.min.apply(null, xxx) + "]. Maximum numbers is " + "[" + Math.max.apply(null, xxx) + "].";
}


/* ===== START SECTION 28 ===== */
x28 = document.getElementById('p28'), xx28 = document.getElementById('pp28');
function display28() { //METHOD 1
  var arr = [], j, t;
  for (i=0; i<20; i++) {
    j = Math.floor(Math.random() *50); //49; 16; 36; 45; etc...
    t = j*2; //98; 38; 72; 90; etc...
    arr.push(t);
  }
  x28.innerHTML = "[" + arr.join(", ") + "] - Method 1";
}

function displayy28() { //METHOD 2
  var arr=[],j, t, y;
  for(i=0; i<20; i++){
    j = Math.floor(Math.random() *100);
    t= j/2;
    y = t - Math.floor(t)

    if(y==0) {
      arr.push(j)
    } else {
      i--;
    }
  }
  xx28.innerHTML = "[" + arr.join(", ") + "] - Method 2";
}

function show28() {
  display28();
  displayy28();
}

function hide28() {
  x28.innerHTML = "";
  xx28.innerHTML = "";
}


/* ===== START SECTION 29 ===== */
x29 = document.getElementById('p29')
function show29() {
  var arr=[], j, t, y;
  for (i=0; i<20; i++) {
    j = Math.floor(Math.random()*100);
    t = j/2;
    y = (t - Math.floor(t));

    if(y ==0.5){
      arr.push(j);
    } else{
      i--;
    }
  }
  x29.innerHTML = "[" + arr.join(", ") + "]";
}


/* ===== START SECTION 30 ===== */
function show30() {
  var arr = [], j, t=[], y;
  for(i=0; i<10; i++) {
    arr.push(i);
  }
  arr.push("a", "b", "c", "d", "e", "f");
  for(i=0; i<6; i++) {
    j = Math.floor(Math.random()*16);
    t.push(arr[j]);
  }
  document.getElementById('sidenav').style.background = "#" + t.join("");
  document.getElementById('p30').innerHTML = "Background color is: #" + t.join("");
}

function hide30() {
  document.getElementById('sidenav').style.background = "#000";
}

/* ===== START SECTION 31 ===== */
function display31(value, index, array) {
  return value + " Natsuki"
}

function show31() {
  var x = years.map(function(value) {return value + " Natsuki"});
  var y = years.map(display31);
  document.getElementById('p31').innerHTML = "<li>" + x.join("<li>");
  document.getElementById('pp31').innerHTML = "<li>" + y.join("<li>");
}

function hide31() {
  document.getElementById('p31').innerHTML = "";
  document.getElementById('pp31').innerHTML = "";
}

/* ===== START SECTION 32 ===== */
x32 = document.getElementById('p32')
function show32(value) {
  var x = years.filter(function(value) {return value > 1000;});
  x32.innerHTML = "<li>" + x.join("<li>");
}


/* ===== START SECTION 33 ===== */
x33 = document.getElementById('p33')
function show33(value, index, array) {
  var x = [], y, z;
  Loop: //OPTIONAL
  for (i=0; i<200; i++) {
    x.push(i);
    if(i===100){
      break Loop; //Typing "LOOP" after break is optional
    }
  }
  x33.innerHTML = x.join("; ")
}


/* ===== START SECTION 34 ===== */
x34 = document.getElementById('p34')
function show34() {
  var x = document.querySelector('#name').value;
  x34.innerHTML = "Your name is " + "\"" + x + "\".";
}


/* ===== START SECTION 35 ===== */
x35 = document.getElementById('p35')
function show35() {
  class car {
    constructor(brand, year, model, price) {
      this.brand = brand;
      this.year = year;
      this.model = model;
      this.price = price;
    }
  }
  var x1 = document.querySelector('#brand35').value;
  var x2 = document.querySelector('#year35').value;
  var x3 = document.querySelector('#model35').value;
  var x4 = document.querySelector('#price35').value;

  favCar = new car(x1, x2, x3, x4);
  x35.innerHTML = favCar.brand + " - " + favCar.year + " - " + favCar.model + " - " + favCar.price;
}


/* ===== START SECTION 36 ===== */
x36 = document.getElementById('p36')
function show36() {
  function car(brand, year, model, price) {
    this.brand = brand;
    this.year = year;
    this.model = model;
    this.price = price;
  }
  var x1 = document.querySelector('#brand36').value;
  var x2 = document.querySelector('#year36').value;
  var x3 = document.querySelector('#model36').value;
  var x4 = document.querySelector('#price36').value;

  var favCar = new car(x1, x2, x3, x4);
  x36.innerHTML = favCar.brand + " - " + favCar.year + " - " + favCar.model + " - " + favCar.price;
}


/* ===== START SECTION 37 ===== */
x37 = document.getElementById('p37')
function show37() {
  var x37 = new Date();
  var n = x37.getFullYear();
  x37.innerHTML = n;
}


/* ===== START SECTION 38 ===== */
x38 = document.getElementById('p38')
function show38() {
  class Car {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
    age() {
      var x = new Date();
      return x.getFullYear() - this.year;
    }
  }
  let myCar = new Car("Tesla", 2018);
  x38.innerHTML = "The age of my " + myCar.brand + " is " + myCar.age() + " years old.";
}


/* ===== START SECTION 39 ===== */
x39 = document.getElementById('p39')
function show39() {
  var y=[], i;
  for(i=0; i<11; i++) {
    if(i==3 || i==4){
      continue;
    }
    y.push(i);
    x39.innerHTML += "[" + i + "] ";
  }
  x39.innerHTML += "<br>" + y.join("; ");
}


/* ===== START SECTION 40 ===== */
x40 = document.getElementById('p40')
function show40() {
  var i = document.querySelector('#input40').value, x=[]
  do {
    x.push(i);
    i--;
  }
  while(i>0);
  x40.innerHTML = x;
}





/* ===== START SECTION 41 ===== */
var result, n3="", n4=[], int41=[], oprt41=[];

  /* ========= User Interface for Numbers ========= */
function showint41(x){
  x.addEventListener('click', function(){
    screen41.innerHTML += x.innerHTML
  })
}
showint41(zero41);
showint41(one41);
showint41(two41);
showint41(three41);
showint41(four41);
showint41(five41);
showint41(six41);
showint41(seven41);
showint41(eight41);
showint41(nine41);
showint41(point41);

  /* ========= Capturing Numbers using Operators ========= */
function showoprt41(x, y) {
  x.addEventListener('click', function(){
    n3 += screen41.innerHTML + y;
    screen41.innerHTML = "";
  })
}

showoprt41(plus41,'+');
showoprt41(minus41,'-');
showoprt41(multiply41,'*');
showoprt41(divide41,'/');

  /* ========= Show Result ========= */
function showequal41() {
  n3 += screen41.innerHTML
  /* ========= Arrays Seperators ========= */
  int41 = n3.split('*').join(',').split('-').join(',').split('+').join(',').split('/').join(',').split(','); // Array of numbers
  for(i=0; i<10; i++) {
    n4 = n3.split(i.toString()).join(""); // Remove numbers 0-9 from the data variable
    n3 = n4;
  }
  n4 = n4.split('.').join(""); // Remove dots from the n4 function which stores all operators as a string
  for(i=0; i<n4.length;i++) { // Push each operators into an array called oprt41
    oprt41.push(n4.substring(i,i+1));
  }
  for(i=0; i<int41.length; i++) { // Convert all int41 array elements into integers
    int41[i] = parseFloat(int41[i]);
  }

  /* ========= LTR Calculations ========= */
  result = int41[0];
  for(i=0;i<oprt41.length; i++) {
    if(oprt41[i]==="+"){
      result += int41[i+1]
    }
    if(oprt41[i]==="-"){
      result -= int41[i+1]
    }
    if(oprt41[i]==="*"){
      result *= int41[i+1]
    }
    if(oprt41[i]==="/"){
      result /= int41[i+1]
    }
  }
  if(Number.isNaN(result)==true){
    screen41.innerHTML = 'ERROR'
  } else {
    n3="";
    n4=[];
    oprt41=[];
    screen41.innerHTML = result;
  }
}

function clear41() { // Calculator Clear Function
  screen41.innerHTML = "";
  result=0, n3="", n4=[], int41=[], oprt41=[];
}

function delete41() { // Calculator Delete Function (1 Character at a time)
  del41 = screen41.innerHTML;
  del41x = del41.length - 1
  screen41.innerHTML = del41.slice(0, del41x)
}

console.log("Section 41 - Basic Calculator Project Status: Completed - Sun Jan 24 2021 22:13:13 GMT+0700 (Indochina Time)")






/* ===== START SECTION 42 ===== */
var img42 = [ //An array storing the images source. A way to add more images is to use the array.push() method to push more elements into the array
  "file:///Users/10spr/Downloads/Youtube/River%20Of%20Rhythms/Images/Anime%20Images/2.%20Naruto%20Images/Edited%20Images%2016-9/823293.jpg",
  "file:///Users/10spr/Downloads/Youtube/River%20Of%20Rhythms/Images/Anime%20Images/2.%20Naruto%20Images/Edited%20Images%2016-9/703704.jpg",
  "file:///Users/10spr/Downloads/Youtube/River%20Of%20Rhythms/Images/Anime%20Images/2.%20Naruto%20Images/Edited%20Images%2016-9/755701.jpg",
  "file:///Users/10spr/Downloads/Youtube/River%20Of%20Rhythms/Images/Anime%20Images/2.%20Naruto%20Images/Edited%20Images%2016-9/784303.jpg",
  "file:///Users/10spr/Downloads/Youtube/River%20Of%20Rhythms/Images/Anime%20Images/2.%20Naruto%20Images/Edited%20Images%2016-9/815589.jpg",
];
var x42 = 0; // Used as index for the img42 array
var l42 = img42.length; // Used as a verification criteria
var src42 = document.getElementById('img42');

  /* ===== IMAGE SWITCH ===== */
function next42() { // Next Button
  x42 += 1;
  if(x42 < l42){
    src42.src = img42[x42]
  } else{
    x42 -= l42;
    src42.src = img42[x42]
  }
  slickactive42()
  slickactive42next()
}
function prv42() { // Previous Button
  x42 -= 1;
  if(x42>-1) {
    src42.src = img42[x42];
  } else {
    x42 += l42;
    src42.src = img42[x42];
  }
  slickactive42()
  slickactive42prv();
}

  /* ===== SLICKDOTS ===== */
var slickdots42 = document.getElementById('slickdots42');

function slickloop42() { // Slickdots Generator
  for(i=0; i<l42; i++){
    a = i;
    a++;
    slickdots42.innerHTML += "<button" + " id=" + "\'slickdot42btn" + a + "\'" + " onclick=\'slickclick42x(" + a +")\'>" + "</button>"
  }
}
slickloop42()

  /* ===== SLICKDOTS ACTIVE ===== */
var numref42 = 1;

 function slickactive42() { // Change the background of all Slickdots to #ddd
   id42 =[];
   for(i=0; i<l42; i++){
     xn42 = i+1
     id42ref = 'slickdot42btn' + xn42
     id42.push("id42ref")
   }
   for(i=0; i<l42;i++){
     xn42 = i+1
     id42ref = 'slickdot42btn' + xn42
     document.getElementById(id42ref).style.background = "#ddd";
   }
 }

 function slickfirst42() { // Change the first slickdot background to #222
   document.getElementById('slickdot42btn1').style.background = "#222";
 }
 slickfirst42()

 function slickactive42next() {
   if(numref42==l42){
     numref42 = 1;
   } else{
     numref42 += 1;
   }
   id42ref = 'slickdot42btn' + numref42;
   document.getElementById(id42ref).style.background = "#222"
 }

 function slickactive42prv() {
   if(numref42==1) {
     numref42 = l42;
   } else {
     numref42 -=1
   }
   id42ref = 'slickdot42btn' + numref42
   document.getElementById(id42ref).style.background = '#222'
 }

 /* ===== TRANSITION EFFECT ===== */
var opcty42 = 100, timedecr42, timeincr42;
function decr42() {
 opcty42 -= 1;
 opcty42 = opcty42.toString();
 src42.style.opacity = opcty42 + "%";
 opcty42 = parseFloat(opcty42);
 if(opcty42===0){
   clearInterval(timedecr42)
 }
}

function decrtime42() {
 timedecr42 = setInterval(decr42, 5);
}

function incr42() {
 opcty42 += 1;
 opcty42 = opcty42.toString();
 src42.style.opacity = opcty42 + "%";
 opcty42 = parseFloat(opcty42);
 if(opcty42===100){
   clearInterval(timeincr42)
 }
}

function incrtime42() {
 timeincr42 = setInterval(incr42, 5);
}

 /* ===== EVENTS CAPTURE ===== */
function prv42x() {
 decrtime42();
 setTimeout(prv42, 515)
 setTimeout(incrtime42,532)
}

function next42x() {
 decrtime42();
 setTimeout(next42, 515)
 setTimeout(incrtime42,532)
}

  /* ===== SLICK ONCLICK() ===== */
function slickclick42() {
  for(i=0;i<l42;i++) { //scref42 is the shortcut for Slick Click Reference 42
    numref42 = i+1 //1st Button
    scref42x = 'slickdot42btn' + numref42 //1st Button ID
    scref42y = document.getElementById(scref42x).style.background //1st Button Color
    if(scref42y == "rgb(34, 34, 34)") { //If 1st button color = #222, then do the following:
      x42 = i;
      decrtime42();
      setTimeout(function(){src42.src = img42[x42]}, 515)
      setTimeout(incrtime42,532)
      break;
    }
  }
}

function slickclick42x(x) {
  slickactive42()
  scxref42 = 'slickdot42btn' + x;
  document.getElementById(scxref42).style.background = "rgb(34, 34, 34)"
  slickclick42()
}

console.log("Section 42 - Slideshow Project Status: Completed - Tue Jan 26 2021 15:13:13 GMT+0700 (Indochina Time)")




/* ===== START SECTION 43 ===== */
let x43;
function show43() {
  x43 = setTimeout(alert43, 1500)
}

function alert43() {
  alert('Hello World')
}

function stop43() {
  btnstop43.addEventListener('click', function(){
    clearTimeout(x43);
  })
}
stop43()

/* ===== START SECTION 44 ===== */
var x44;
function show44() {
  x44 = setInterval(log44, 1500);
  console.log("test")
}

function log44() {
  console.log('Hello World - 1.5s Passed')
}

function stop44() {
  clearInterval(x44);
}




/* ===== START SECTION 45 ===== */
var x45 = document.getElementById('p45');
function show45() {
  var sum45 = years.reduce(display45);
  x45.innerHTML = years;
  x45.innerHTML += "<br>" + "The sum is: " + sum45
}

function display45(total, value, index, array) {
  return total + value;
}



/* ===== START SECTION 46 ===== */
var x46 = document.getElementById('p46');
function show46() {
  var sum46 = years.reduceRight(display46);
  x46.innerHTML = years;
  x46.innerHTML += "<br>" + "The sum is: " + sum46
}

function display46(total, value, index, array) {
  return total + value;
}



/* ===== START SECTION 47 ===== */
var x47 = document.getElementById('p47')
function show47() {
  var y47 = years.every(display47)
  x47.innerHTML = years + "<br>"
  x47.innerHTML += y47
}

function display47(value, index, array) {
  return value > 1000
}



/* ===== START SECTION 48 ===== */
var x48 = document.getElementById('p48')
function show48() {
  var y48 = years.some(display48)
  x48.innerHTML = years + "<br>"
  x48.innerHTML += y48
}

function display48(value, index, array) {
  return value > 1000
}



/* ===== START SECTION 49 ===== */
x49 = document.getElementById('p49')
function show49() {
  x49.innerHTML = years + "<br>The index of 1975 is " + years.indexOf(1975,0)
}


/* ===== START SECTION 50 ===== */
x50 = document.getElementById('p50')
function show50() {
  x50.innerHTML = years + "<br>The last index of 1975 is " + years.indexOf(1975,0)
}

/* ===== START SECTION 51 ===== */
x51 = document.getElementById('p51')
function show51() {
  x51.innerHTML = years + "<br>" + "The index of the first array element that is bigger than 1500 is " + years.find(function(value){return value > 1500}) + "."
}

/* ===== START SECTION 52 ===== */
x52 = document.getElementById('p52')
function show52() {
  x52.innerHTML = years + "<br>" + "The index of the first array element that is bigger than 1500 is years[" + years.findIndex(function(value){return value > 1500}) + "]."
}



/* ===== START SECTION 53 ===== */
x53 = document.getElementById('p53'), ms53 = 0;
function show53(stopwatch) {
  ms53 += 1 // This represents 10ms
  d53 = new Date(ms53*10)
  s53 = d53.getUTCSeconds()
  min53 = d53.getUTCMinutes()
  h53 = d53.getUTCHours()
  l53 = ms53.toString().length;
  ms53x = ms53.toString().substring(l53-2,l53) // The
  if(ms53<10){ //Max is 9
    stopwatch.innerHTML = '00:' + '00:' + '00:' + ':0' + ms53;
  }

  if(ms53>9 && ms53<100) { //Min is 10
    stopwatch.innerHTML = '00:' + '00:' + '00:' + ms53;
  }

  if(ms53>99 && ms53<1000) { //Min is 100 or 1s
    stopwatch.innerHTML = '00:' + '00:' + '0' + s53 + ':' + ms53x;
  }

  if(ms53>999 && ms53<6000) { //Min is 1000 or 10s
    stopwatch.innerHTML = '00:' + '00:' + s53 + ':' + ms53x;
  }

  if(ms53>5999 && ms53<60000) { //Min is 6000 or 60s or 1min
    if(s53<10) {
      stopwatch.innerHTML = '00:' + '0' + min53 + ':0' + s53 + ':' + ms53x;
    } else {
      stopwatch.innerHTML = '00:' + '0' + min53 + ':' + s53 + ':' + ms53x;
    }
  }

  if(ms53>59999 && ms53<360000) { //Min is 60000 or 600s or 10min
    if(s53<10) {
      stopwatch.innerHTML = '00:' + min53 + ':0' + s53 + ':' + ms53x;
    } else {
      stopwatch.innerHTML = '00:' + min53 + ':' + s53 + ':' + ms53x;
    }
  }

  if(ms53>359999 && ms53<3600000) { //Min is 360000 or 3600s or 60min or 1h
    if(s53<10) { // Second is smaller than 10
      if(min53<10){ // Minute is smaller than 10
        stopwatch.innerHTML = '0' + h53 + ':0' + min53 + ':0' + s53 + ':' + ms53x;
      } else { // Minute is smaller than 10
        stopwatch.innerHTML = '0' + h53 + ':' + min53 + ':0' + s53 + ':' + ms53x;
      }
    } else { // Second is bigger or equal to 10
      if(min53<10){ // Minute is smaller than 10
        stopwatch.innerHTML = '0' + h53 + ':0' + min53 + ':' + s53 + ':' + ms53x;
      } else { // Minute is smaller than 10
        stopwatch.innerHTML = '0' + h53 + ':' + min53 + ':' + s53 + ':' + ms53x;
      }
    }
  }

  if(ms53>3599999 && ms53<36000000) { //Min is 360000 or 3600s or 60min or 1h
    if(s53<10) { // Second is smaller than 10
      if(min53<10){ // Minute is smaller than 10
        stopwatch.innerHTML = h53 + ':0' + min53 + ':0' + s53 + ':' + ms53x;
      } else { // Minute is smaller than 10
        stopwatch.innerHTML = h53 + ':' + min53 + ':0' + s53 + ':' + ms53x;
      }
    } else { // Second is bigger or equal to 10
      if(min53<10){ // Minute is smaller than 10
        stopwatch.innerHTML = h53 + ':0' + min53 + ':' + s53 + ':' + ms53x;
      } else { // Minute is smaller than 10
        stopwatch.innerHTML = h53 + ':' + min53 + ':' + s53 + ':' + ms53x;
      }
    }
  }
}

function start53() {
  xnx53 = setInterval(function(){show53(x53)},10)
}

function stop53() {
  clearInterval(xnx53)
}

function reset53(stopwatch, stopwatch2) {
  clearInterval(stopwatch2)
  stopwatch.innerHTML = "00:00:00:00"
  ms53 = 0;
}




/* ===== START SECTION 54 ===== */

a54 = document.getElementById('container54'), firstclick54='X', secondclick54='O', latest54x = '', click54 = 0, grid54 = 225, gridchange54 = grid54, sqrt54x = Math.sqrt(gridchange54), win54 = 5, winchange54 = win54, wh54 = 1000, axis54x=0, axis54y=0, axis54y2 = 0, sqrt54 = Math.sqrt(grid54), winx54x = 0, winx54o = 0, iwin54=0, winx54 = 0, loca54html='', loca54html2='', loca54 = 0, loca54a = 0, iwin54=0, loca54b = 0, loca54id2='', loca54id3='', center54fullid='';
var gridvalue54, gridsqrt54, win54no, btnid54, xwintime54=0, owintime54=0;

  /* ====== Button Generator. Status: PASSED ====== */
function showbtn54(gridvalue54, gridsqrt54, win54no) {
  a54.style.width = wh54 + "px";
  a54.style.height += wh54 + "px";
  a54.style.margin += "10px";
  a54.style.border += "1px solid black"
  ratio54 = (wh54 / gridsqrt54)
  font54 = ratio54 / 1.25

  for(i=0;i<gridvalue54;i++){
    i54 = i+1
    btnid54 = 'btn54x' + i54;
    a54.innerHTML += "<button id=\'" + btnid54 + "\' onclick=\'btn54click(" + btnid54 + ", " + gridvalue54 + ", " + gridsqrt54 + ", " + win54no + ")\' style=\'width: " + ratio54 + "px; height: " + ratio54 + "px; font-size: " + font54 + "px\'>" + "&nbsp;" + "</button>"
  }
}
showbtn54(grid54, sqrt54, win54)


  /* ====== DISPLAY X or O ====== Status: PASSED ====== */
function btn54click(x, clickscangrid54a, clickscansqrt54b, clickwin54) {
  click54w = click54 / 2 // click54 defualt value is 0
  click54x = Math.floor(click54w)

  if(click54w>click54x) { //The idea of this If Statement is to see if click54 is an even or odd number.
    if(x.innerHTML == "O" || x.innerHTML == "X") { // Prevent any overides
      click54-=1
    } else{
      x.innerHTML = secondclick54 // Main function
    }
  } else { if(x.innerHTML == "O" || x.innerHTML == "X") { // Prevent any overides
      click54-=1
    } else {
      x.innerHTML = firstclick54 // Main function
    }
  }
  click54 +=1
  document.getElementById('clicksno54').innerHTML = click54;
  scan54(clickscangrid54a, clickscansqrt54b, clickwin54)
  y = x.id // For LatestClick54 Function
  latestvar54(y) // For LatestClick54 Function
}


  /* ======== SCAN FUNCTION ======== */
function scan54(scangrid54a, scansqrt54b, scanwin54) {

  function globalHTML54a(html54) { // This is used in the scan54() function
    loca54html = document.getElementById(html54).innerHTML
  }

  function globalstyle54(style54) { // This is used in the scan54() function
    document.getElementById(style54).style.background = "#7deb34"
  }

  for(i=0; i<scangrid54a; i++) { // Loop Function Starts with Button 1 till Grid Number
    loca54 = i+1 // Button ID Number
    loca54id = 'btn54x' + loca54 // Button ID
    axis54x = loca54 % scansqrt54b //x-axis (Top to Bottom)
    if(axis54x==0) { // 56/8 remainder = 0;
      axis54x = scansqrt54b;
    }
    axis54y = Math.ceil(loca54/scansqrt54b) // y-axis (Top to Bottom)

    globalHTML54a(loca54id) // Get the innerHTML of the button

    function winner54(winner54, winx54, method54, loop54a, loop54b) {
      if(loca54html==winner54) { // If button id.... equals letter "X" or "O". Note: this is and can be determined in the function parameter.
        axis54y2 = axis54y+scansqrt54b-1; // A copy of axis54y. I'll need to edit the value of axis54y so I'm making a copy to not lose the original value.

        for(i54a=axis54x,i54b=1 ; loop54b>=i54b && i54a >= loop54a; i54a--, i54b++) {

          if(method54==1){ //Horizontal Method
            loca54a = scansqrt54b * (axis54y-1) + i54a //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==2){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==3){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x -i54b +1 //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==4){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x +i54b  -1//Find the current location. With the loop, location will always move left by 1 step at a time
          }

          loca54id2 = 'btn54x' + loca54a

          function globalHTML54b(html54a) {
            loca54html2 = document.getElementById(html54a).innerHTML
          }
          globalHTML54b(loca54id2)

          if(loca54html2==winner54) { // Scoring System. Status: Passed. Details: If winx54x = 4 (it's the value of variable scanwin54), there is a winner.
            winx54 += 1;
          } else {
            winx54 = 0;
          }

          if(winx54 == scanwin54) { // Whenever someone wins
            for(iwin54=0;iwin54<scanwin54;iwin54++) {
              if(method54==1) {
                loca54b = loca54a + iwin54
              }
              if(method54==2) {
                loca54b = loca54a + (iwin54 * scansqrt54b)
              }
              if(method54==3) {
                loca54b = loca54a + (iwin54 * scansqrt54b) +iwin54
              }
              if(method54==4) {
                loca54b = loca54a + (iwin54 * scansqrt54b) -iwin54
              }
              loca54id3 = 'btn54x' + loca54b
              globalstyle54(loca54id3) //change background color to green
            }
            someonewin54(loca54html)
            break;
          }
          if(iwin54 == scanwin54) {
            break;
          }
        }
      }
    }
    // Syntax winner54(winner54, winx54, method54, loop54a, loop54b)
    winner54('X', winx54x, 1, 1, axis54y2); //Horizontal X (Method 1)
    winner54('O', winx54o, 1, 1, axis54y2); //Horizontal O (Method 1)

    winner54('X', winx54x, 2, -scansqrt54b+2, axis54y); //Vertical X (Method 2)
    winner54('O', winx54o, 2, -scansqrt54b+2, axis54y); //Vertical O (Method 2)

    winner54('X', winx54x, 3, 1, axis54y); //Diagonal Left X (Method 3)
    winner54('O', winx54o, 3, 1, axis54y); //Diagonal Left O (Method 3)

    winner54('X', winx54x, 4, -1*scanwin54+2, axis54y); //Vertical X (Method 4)
    winner54('O', winx54o, 4, -1*scanwin54+2, axis54y); //Vertical O (Method 4)

    if(iwin54 == scanwin54) {
      break;
    }
  }
}

  /* ====== Remove all letters from all buttons (grids) ====== */
function clean54(cleangrid54) {
  for(icl54=1; icl54<=cleangrid54; icl54++) {
    clean54id = 'btn54x' + icl54;
    nbsp54(clean54id)
  }
  click54 = 0;
  iwin54 = 0;
  document.getElementById('clicksno54').innerHTML = click54;
}

document.getElementById('restart54').addEventListener('click', function() {clean54(gridchange54)})

function nbsp54(cleanid54a) {
  document.getElementById(cleanid54a).innerHTML = "&nbsp;"
  document.getElementById(cleanid54a).style.background = "#fff"
}

  /* ====== Move the screen location to the center whenever the grid is changed ====== */
function center54(centergrid54, centersqrt54) {
  center54a = Number.isInteger(centersqrt54 / 2)
  if(center54a==true) {
    center54id = (centersqrt54/2) -1
  } else {
    center54id = Math.ceil(centergrid54/2)
  }
  center54fullid = window.location.href + '#btn54x' + center54id
  window.location.assign(center54fullid)
}

/* ======== The First To Go ======== */
function firstturn54(first54x1id, first54x1, second54x2id, second54x2) {
document.getElementById(first54x1id).addEventListener('click', function() {
  firstclick54 = first54x1; // First
  secondclick54 = second54x2; // Second
  document.getElementById(first54x1id).style.opacity = '1' // First
  document.getElementById(second54x2id).style.opacity = '0.3' // Second
  clean54(gridchange54)
})
}
firstturn54('ofirst54', 'O', 'xfirst54', 'X')
firstturn54('xfirst54', 'X', 'ofirst54', 'O')

  /* ======== Latest Click ======== Note: This whole function is connected to the function btn54click()*/
function latestclick54(latest54) {
moveup54 = parseFloat(latest54.substring(6))
if(moveup54>sqrt54x) {
  moveup54 = parseFloat(latest54.substring(6)) - sqrt54x
}
latest54url = "file:///Users/10spr/Desktop/Coding/10spr/index.html#btn54x" + moveup54
window.location.assign(latest54url)
setTimeout(function(){window.location.assign('file:///Users/10spr/Desktop/Coding/10spr/index.html#confirmwin54')}, 0)
document.getElementById(latest54).style.background="#000"
setTimeout(function(){
  document.getElementById(latest54).style.background="#fff"
}, 500)
}

function latestvar54(latestvar54) {
latest54x = latestvar54
}


  /* ====== Grid Slider Range ====== Status: PASSED ====== */
function editgrid54() {
  document.getElementById('gridspan54').innerHTML = "<input type=\'range\' min=\'9\' max=\'900\' value=\'" + grid54 + "\' class=\'slider\' id=\'gridrange54\'>"
}
editgrid54()
document.getElementById('gridvaluespan54').innerHTML = document.getElementById('gridrange54').value

gridrange54.oninput = function() {
  gridvaluespan54.innerHTML = this.value;
}

  /* ====== Confirm Grid Change ====== Status: PASSED ====== */
function confirmgrid54() {
  gridchange54 = Math.pow(Math.ceil(Math.sqrt(gridrange54.value)), 2)
  a54.innerHTML = ""
  sqrt54x = Math.sqrt(gridchange54)
  showbtn54(gridchange54, sqrt54x, winchange54)
  gridvaluespan54.innerHTML = gridchange54
  center54(gridchange54, sqrt54x)
  document.getElementById('restart54').addEventListener('click', function() {clean54(gridchange54)})
}

  /* ====== Win At Slider Range ====== Status: PASSED ====== */
function editwin54() {
  document.getElementById('winspan54').innerHTML = "<input type=\'range\' min=\'3\' max=\'10\' value=\'" + win54 + "\' class=\'slider\' id=\'winrange54\'>"
}
editwin54()

document.getElementById('win54at').innerHTML = document.getElementById('winrange54').value

winrange54.oninput = function() {
  win54at.innerHTML = this.value;
  winchange54 = this.value;
}

  /* ====== Confirm Win Change ====== Status: PASSED ====== */
function confirmwin54() {
  winchange54 = parseFloat(winrange54.value)
  a54.innerHTML = ""
  showbtn54(gridchange54, sqrt54x, winchange54)
}

function wintime54(wintime54id, wintime54letter) {
  if(wintime54letter>1) {
    document.getElementById(wintime54id).innerHTML = wintime54letter + ' times';
  } else {
    document.getElementById(wintime54id).innerHTML = wintime54letter + ' time';
  }
}
wintime54('xwintime54', xwintime54)
wintime54('owintime54', owintime54)

function someonewin54(winletter54) {
  if(winletter54=='X'){
    xwintime54 +=1
    wintime54('xwintime54', xwintime54)
  }
  if(winletter54=='O'){
    owintime54 +=1
    wintime54('owintime54', owintime54)
  }
}




/* ===== START SECTION 55 ===== */

document.getElementById('show55').addEventListener('click', function(){confirm('Hello World')})

/* ===== START SECTION 56 ===== */
document.getElementById('show56').addEventListener('click', function(){
  var name54 = prompt('Please enter your name', '10spr'), txt54;
  if(name54 == null || name54 == "") {
    txt54 = "WHY DIDN'T YOU ENTER YOUR NAME!!??"
  } else {
    txt54 = "Thanks for entering your name, " + name54 + ".";
  }
  document.getElementById('p56').innerHTML = txt54
})

/* ===== START SECTION 57 ===== */
document.getElementById('show57').addEventListener('click', function(){alert("Hello\nHow are you?")})

/* ===== START SECTION 58 ===== */
var slider58 = document.getElementById("myRange58");
var output58 = document.getElementById("demo58");
output58.innerHTML = slider58.value;

slider58.oninput = function() {
  output58.innerHTML = this.value;
}

/* ===== START SECTION 59 ===== */
var d, expires, name, decodedCookie, ca, c, user;
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}










console.log("WTF")
