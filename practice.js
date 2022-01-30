

// var a = 10;

// function sum(){
//     console.log(a);
//     var a = 20;
//      function x(){
//         var a = 20;
//         console.log(a);

//     }

//     // x()
// }

// sum();


//  use of this key world

// let obj = {
//     name : 'vakil',
//     lname : 'raj',

//     sum : function (){
//        let  c = 10 + 20;
//        console.log(c);
//        console.log(this);
//     }
// }

// obj.sum()

///  call bind apply

// let name  = {
//     firstname : "vakil",
//     lastname : "raj",
//     prinfullname : function(){

//         console.log(this.firstname + " "+ this.lastname);
//     }
// }
// let name  = {
//     firstname : "vakil",
//     lastname : "raj",
// }
//    let prinfullname = function(homeTown, state){

//         console.log(this.firstname + " "+ this.lastname + " "+ homeTown + " " + state);
//     }


// name.prinfullname();

// prinfullname.call(name);


// let name2 = {
//     firstname : "sachin",
//     lastname : "tandukar",

// }

// function borrowing 

// // name.prinfullname.call(name2)
// prinfullname.call(name2)

// prinfullname.call(name2, "mumbai", "delhi");
// prinfullname.apply( name2, ['indore', 'mp']);

// bind method 

// let printDetail = prinfullname.bind(name2, "mumbai", "delhi");


// printDetail()


// let detail = {
//     name : "vakil",
//     Lname : "raj",

// }

// detail.prof = 'web developer'

// console.log(detail);


/// check array or not  ----> Array.isArray()

// let arr = [1, 2 , 3 , 4] ;

// console.log(Array.isArray(arr));

// let obj = {
//     0:1,
//     1:2,
//     2:3
// }

// console.log(Array.isArray(obj));


//

// let a = 5;
// let b = a;
//  b = b + 5

// console.log(a);
// console.log(b);


// const obj1 = {
//     user : "vakilraj121",
//     pass : "password"
// }

// const obj2 = obj1;

// obj2.pass = "kuchbhi";

// console.log(obj1);
// console.log(obj2);

// let arr = [ 1, 2, 3, 4 ];

// arr.push(5);
// console.log(arr);



// let like = 100;

// const youtube = {
//     name : "thapa",
//     subscribers : 98000,
// }

// const thapa = (a, b)=> {
//     a = 200,
//     b.subscribers = 100000;
// }

// thapa(like, youtube);

// console.log(like);
// console.log(youtube.subscribers);

// function is a first class citization 

// ----> function pass as argument

// a function pass as a argument is another function is call callbackfunction


// const myName = ()=>{
//     return "hello";
// }


// const greeting = ( sayHi, name) => {
//     console.log(sayHi() + name);
// }

// greeting( myName, " vakil raj")








//  <------ Callback function ------>

//    Any function that is passed as an argument is called a callback function

// A callback funtion that is to be executed after another funtion has finished execution ---- hence the name 'call back'.

// const funA = ()=>{

//     setTimeout( ()=>{
//         console.log( `welcome funA`);

//     }, 1000 * 3)
// }
// const funB = ()=>{
//     console.log( `welcome funb`);
// }

// funA();
// funB();

// const perOne = (friend,callback) =>{
//     console.log(`i am busy ${friend}`);
//     callback();
// }

// const perTwo = () =>{
//     console.log(`hey what's up`);
// }

// perOne("vakil", perTwo);



//     <-------- Heigher Order question  -------->

// const interviewQ = (name) =>{
//     if( name == "vakil"){
//         return function(topic){
//             console.log(`hiii ${name} what is ${topic} ? . pls explain us`);
//         }
//     }
//     if( name == "aman"){
//         return function(topic){
//             console.log(`hiii ${name} what is ${topic} ? . pls explain us`);
//         }
//     }
//     if( name == "suraj"){
//         return function(topic){
//             console.log(`hiii ${name} what is ${topic} ? . pls explain us`);
//         }
//     } else {
//         return function(){
//             console.log("welcome !");
//         }
//     }
// }

// interviewQ("aman")("full stack devloper");






///  < --------  IIFE ( Immediately invoke function expression) -------> 

// jab data private rakhna hi tab or page k refres pr automatic call ho jaye kisi or pr depend n ho



// (function (){
//     console.log('name is vakil');
// })()




// (  (name)=>{
//     console.log(name);
// })( "vakilraj")




//  <------------Closure in javaScript -------------> 


// closure in action that is inner function can have to the outer function
// variables as well as all the global variables.




// function sum(){
//     console.log(a);
//     // let a = 20;
// }

// let a = 10;

//  a = 200;
// sum();

// let  a = 5;

// const outerFun = () => {
//     let  b = 10;
//     const innerFun = () =>{
//         let sum = a + b;
//         console.log(`sum of two number ${sum}`);
//     }

//     return innerFun;

//     // innerFun()
// }

//  outerFun();

// let ans = outerFun;
// ans();

// innerFun()






///   <------------ Call Method ----------------->

//  the call() method is a predefined javascript method
// with call(), an object can use a method belonging to another object.

// const youtub1 = {
//     name : "thapatechnical",
//     content : "programing",
//     feature : function(rating){
//         console.log(`very friendly way ${this.name + this.content} this is my rating ${rating}`);
//     }

// }
// // youtub1.feature()
//  youtub1.feature(5)


// const youtube2 = {
//     name : "kuchbhi",
//     content : " web dev",
// }

// youtub1.feature.call( youtube2, 5);



///    <-------------------  Apply() function in javaScript   ------------------------>
//   the apply () method is similar to the call() method.
//  the call() method takes arguments separately.
//  the apply() method takes arguments as an array.


// const youtub1 = {
//     channelName : "vakilraj",
//     content : "mobile game ",

//     feature : function ( a, b, c){
//         console.log(`this channel only ${this.content + a  + b + c } provide`);
//     }
// }


// // youtub1.feature();

// const  youtube2 = {
//     channelName : "no start",
//     content : "in the way"
// }

// youtub1.feature.apply(youtube2, ["subscribe", "quality", "like" ] )


// let  num = [12,20,54]
//    let arrMax = Math.max.apply(num, [1,2,3,4,5]);
//    console.log(arrMax);
  


//  <--------------------------   Bind method  ----------------------------------->

//  By this method , we can bind an pbject to a common function , so that the function gives different result when its need.


// const youtub1 = {
//         name : "thapatechnical",
//         content : "programing",
//         feature : function(){
//             console.log(`very friendly way ${this.name } this is my rating `);
//         }
    
//     }

    // let youtube = youtub1.feature;   
    // youtube();                             // ====> undifine dega 

    // the bind() method takes an Object as an first argument and  create a new function.
     
   
    // let youtube = youtub1.feature.bind( youtub1);

    // youtube()



//     const  youtube1 = {
//             channelName : "no start",
//             content : "not availble"
//         }
//     const  youtube2 = {
//             channelName : " start",
//             content : "availble"
//         }
//     const  youtube3 = {
//             channelName : "on the way",
//             content : "kuchbhi"
//         }
//     const  youtube4 = {
//             channelName : "the end",
//             content : "empty"
//         }

//    function feature(){
//        console.log(`my fav youtube name is ${this.channelName}. he made video on ${this.content}`);
//    }    
   
//    //feature();

//    let you1 = feature.bind(youtube1)

//    you1()



// <--------------------- forEach() Method -------------------->

// the forEach() method calls a function once for each  element in an array, in order.

// Array.forEach( callback ( currentValue [, index [ , array]]) [, thisArg])

 

// let arr = [ 1, 2 , 3 , 5 , 6, 8, 10, 15,20];
// let newArr = arr.forEach((curr, idx)=>{
//      console.log(curr + 1000)
// })



// <-------------------------  for of Loop    ------------------------------>

//  The javaScript for/of statement loops through the value of an iterable objects
 

// for( variable of iterable){
    //  code block to be executed
//}


// const arr = [ 10, 20 , 30, 40 , 50];


// for(  item of arr){
//     console.log(item * 5);
// }


// for of iterable objects....

// it is use to only array and string



// const  details = [ "java", "javascript", "c++", "php"];

// for( item of "details"){
//     console.log( item);
// }





//   <-----------------------    For in Loop    --------------------------------->

//   for/in - allow us to loops through the properties of an object

//    for( var in object){
    //code block to be executed
//}

// obj k properties ko dekhne k liye

// const obj = {
//      name : "vakil",
//      Lname : " raj",
//      age : 24,
//      deg : "b.e"
// }


// for( prop in obj){
//     console.log(prop);
// }


// <------------------------------------  ECMA Script 6 ------------------------------------------->


/// <---------------------    Template literals   ----------------------------------->

// let  name = "vakil";
// let lname = 'Raj';

// console.log(` my name ${name}  and lname is ${lname}`);




//   <-----------------     Method in template in string    --------------------------------->

//   console.log(` ${lname}`.startsWith('R'))
//   console.log(` ${lname}`.endsWith('j'))
//   console.log(`${lname}`.includes('Ra'))


  /// <---------------------------- Swap two number without third variable    ---------------------------->

//   let a = 5;
//   let b = 10;

//   [a,b] = [ b,a]

//   let temp = a;
//    a = b;
//    b = temp;

//    console.log(a);
//    console.log(b);


// console.log(``);



//  <----------------------------  object Destructuring in ES6  ------------------------------->





////   <----------------------------- Default parameter  in javaScript ------------------------------->

// function mult(a,b){
//     b = ( typeof b !== 'undefined') ? b : 1
//     console.log(a * b);
// }

// mult(2);

// esko solve krne k liye

// function mul(a , b = 2){  // default parameter
//     console.log(a * b);     
// }

// mul(2);

// const mult = ( a, b=4) =>{          // default parameter
//     console.log(`mult of two num ${ a * b}`);
// }

// mult(4);


// <-------------------- rest parameter ------------------------------->


//  rest parameter is an improved way to handle function 
// parameter, allowing us to more easily handle various 
// input as parameter in a function the rest parameter 
// syntax allow to represent an indefinete number of 
//argumment as an array.




// function sum ( a, b){
//     return a + b;
// }

// console.log(sum( 2,5,2,5));



// function sum ( ...input){
//     let add = 0;
// //  input.forEach( (ele)=>{
// //      add += ele;
// //  })

// // for( ele of input){
// //     add += ele
// // }
  
// }
// sum(1,2,3,4,5,6)



//   <-----------------------------   Soread operator  --------------------------------->
// sperad operator allows an iterable to expand in places where 0+
// argument are expected


// function sum(...a){

//     let total = 0;
//     a.forEach( (ele)=>{
//         total += ele;
//     })

//     console.log(total);
// }

// let  x = [1,2,3,5,8,9,10];
// let y = [10,20];
// sum(...x, ...y);
// console.log(...x, ...y);



//// <---------------------  Math Object in ES 6  ------------------------------------------->

//  sign()
//  trunc()


// const a = 5.513;

// const b = NaN

// console.log(Math.sign(b));
// // console.log(b);

// console.log(Math.trunc(a));




///    <--------------------------   Exponentiation Operator    --------------------------------->

 //x + y = a

//  x,y --> operand
//  + ----> operator


// let a = 10;
// let b = 2;

// console.log(b** a);







//  <---------------------------------- Number & Global Methods in ES6  -------------------------------------->

//  The isFinite() method 
//The global isFinite() method return false if the argument is
// infinity or NaN.

// The isNaN() Method 
// the global isNaN() method returns true if the argument is NaN.
// OtherWise it return  false

// the number .isInteger() method 
// the number.isInteger() method return true 
//if the argument is an  integer.



// let num =Infinity;
// let num = 5

// console.log(isFinite(num))



// let num ='vakil';

// console.log(isNaN(num));






// <------------------------------    OOPS in JavaScript   -------------------------------------------->












 
// <--------------------------------------    Synchronus or asynchronus javascript   -------------------------------------->  
//  



























 





 






















