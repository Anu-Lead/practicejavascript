/* FIND A MISSING NUMBER
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getMissingNum(n) {
    let total = Math.floor((n+1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
    total -= a[i];
}
console.log(n);    
*/


/* CA TEST FROM MOSES

function missingNum(arr) {
    let missArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    let minNum = Math.min([1,2,3,4,5,6,7,8,9]);
    let maxNum = Math.max([1,2,3,4,5,6,7,8,9]);

    for(let i = 0; i<9; i++){
        if(arr.indexOf(i) < 9) {
            missArry.push(i);
        }
    }
    return false;
}
console.log(1,2,3,4,5,6,7,8,9);
console.log(false);
*/



/*
MUTATE AN ARRAY DECLEARED WITH CONST
Example One

const n = [5, 7, 8, 9];
function mutateArray(x=n) {
    n[0] = 10;
    n[1] = 6;
    n[2] = 4;
    n[3] = 2;
    return n;

}
console.log(mutateArray());

Example Two

let x = [
    {name: 'Anu', position: 'Governor', age: 45, networth: 'HundredBillionDollars'},
    {name: 'Tolu', position: 'Senator', age: 30, networth:1000000},
    {name: 'Gbenga', position: 'Aide', age: 42, networth: 'a million dollars'},
]
    function mutateArray(d=x){
      
        x[0] = 'Tolu';
        x[2] = 'Seyi';

        return x;
    }
    console.log(mutateArray());

*/

/*  VARIABLE FUNCTION EXAMPLES

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

##It returns 1 as the result.console
*/


/* CONCATINATION USING DOLLAR$ SIGN & CHANGING CASE LEVEL.

var firstName = 'Tolulope';
var lastName = 'Adeoluwa';
console.log(`${firstName} ${lastName}`);

console.log(`${firstName.toUpperCase()} ${lastName}`);
console.log(`${firstName} ${lastName.toUpperCase()}`);
*/


/*
LOOPING THROUGH AN ARRAY

let fruits = ['apple','grapes', 'banana', 'orange'];
for(let i = 0; i > fruits.length; i++) {
return fruits;
}
    console.log(fruits);


const fruits = ['apple','grapes', 'banana', 'orange'];
    function checkFruits() {
        return fruits = apple;
    }
    console.log(fruits);
*/




// const bonusResult = (input) => {
//     let result;
//     if (input <= 100) {
//         result = 100
//     } else if (input > 100 && input < 500) {
//         result = input * 1.5;    
//     } else if (input >= 500){
//         result = input * 2;
//     }
//     return result;
// }
// console.log(bonusResult);


/*Calculate the average of an Array in JS using Array.reduce

let values = [2, 56, 3, 41, 0, 4, 100, 23];
let arraySum = values.reduce((previous, current) => current += previous);
let avg = arraySum / values.length;

console.log(avg);


Example 2

const values = [4, 6, 3, 5, 1, 4, 5, 2, 9, 10, 4];
let arraySum = values.reduce((previous, current) => current += previous);
let avg = arraySum / values.length;

console.log(avg);
*/

// var ai = 9;
// var aii = 9;
// var addaiaii = 9 * 9 * 9 ** 2;


// console.log(addaiaii);


/*Assignment

function squareDigits (num){
    let strNum = 9 * 9;
    return strNum;

    for (let i = 0; i < 9; i++){
        let squared = parseInt(strNum[i]) * parseInt(strNum[i]);
        result = result + String(squared);
    }
    return parseInt(result);
}

squareDigits (919);
strNum = 9;



function toDoList(thelist) {
    thelist = ["Tile"
    morning: 'anu eat'; afternoon: 'anu work'; evening: 'anu refelect';
    }
    console.log(thelist);
    
}
console.log(toDoList);
*/

// /* FOR LOOP EXAMPLES
//  for (let i = 0; i < 5; i++) {
//      console.log("Loop" + i);
// }


/* 'For of' loop example 1
const names = ['segun', 'kunle', 'ay', 'macaroni', 'tola'];

 for (name of names) {
    console.log(name);

    'OR' for (name of names) console.log(name)
 }
 
 Example 2

let schoolRank = [ {ui: 1, oau: 2, futa: 3, ado: 7, abu: 5},
    {fee1: 1000, fee2: 2500, fee3: 4000, fee4: 2100, fee5: 7000}
];
for (list of schoolRank) {
     console.log(schoolRank);
}

 "OR" for (list of schoolRank) console.log(schoolRank)

*/
// SEARCHING THROUGH AN ARRAY OF OBJECT AND INTEGERS USING FOR, FOR EACH, FILTER 

/*const companies = [
    {name: "Jumia", category: "Retail", start: 1995, headquater: "SouthAfrica"},
    {name: "Coursera", category: "Education", start: 2004, headquater: "Carlifonia USA"},
    {name: "PwC", category: "Accounting & Finance", start: 1980, headquater: "Accra Ghana"},
    {name: "FirstBank", category: "Finance", start: 1894, headquater: "Abuja, Nigeria"},
    {name: "Valencia", category: "Schooling", start: 2006, headquater: "Ibadan Nigeria"},
    {name: "Deloitte", category: "Tax & Advisory", start: 1996, headquater: "London"},
    {name: "KPMG", category: "Human Resources", start: 1990, headquater: "West England"},
    {name: "Meta", category: "Social Media", start: 2005, headquater: "Washington DC"},
];

FOR

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
    console.log(companies[3].name)
};

FOR EACH 
(Explanation, note that after calling the function, 
    you can search through each property in your array of object 
    by just using .name or .any specific object you want to
    search for. Example is: 'console.log(companylist.name/category/start)').

companies.forEach(function(companylist){
    console.log(companylist);
});

*/


/* FILTER Example 1.

const ages = [33, 56, 20, 56, 34, 18, 12, 8, 21, 54, 43, 27, 62, 13, 35, 90, 64, 38, 74, 46, 62];

let canWork = [];
for(let i = 0; i < ages.length; i++) {
    if (ages[i] >= 27) {
        canWork.push(ages[i]);
    }
}

console.log(canWork);

OR 


*/

/*
const ages = [33, 56, 20, 56, 34, 18, 12, 8, 21, 54, 43, 27, 62, 13, 35, 90, 64, 38, 74, 46, 62];

const canWork = ages.filter(function(ages) {
    if(ages >= 21) {
        return true;
    }
});
console.log(canWork);

ORR

const loanQual = [
    student = "second year",
    newgradute = 50000,
    singlemother = "four kids",
    widows = "five years",
];
const qualifiedforloan = loanQual.filter(function(loanQual) {
    if(loanQual === singlemother) {
        return true;
    }
});
console.log(qualifiedforloan);
*/

// REVERSE FUNCTION

// const staffList = ['Segun', 'Tolu', 'Titi', 'Omolola', 'Arike', 'Samfred', 'Gospel'];
// // console.log(staffList.reverse());
// staffList[3] = 'Ife';
// console.log(staffList);
// // */

/* SORTING ARRAYS (Highest to Lowest, Lowest to Highest) For Reverse Method, Use    staffList.reverse();

const staffList = ['Segun', 'Tolu', 'Titi', 'Omolola', 'Arike', 'Samfred', 'Gospel'];
const staffList = [1, 4, 7, 1000, 500, 34, 23, 21, 67, 42, 36, 89, 60, 43, 10, 77, 26];
staffList.sort((a, b) => b - a);        Manipulation of array, Sorting array from lowest to higest and Highest to Lowest 
staffList.sort();                       This is a default sorting method that return the array in alphabeltical order or the integers from smallest to the biggest
console.log(staffList);
console.log(staffList.reverse());       This is to reverse the order of array
*/


/*
// USING REVERSE METHOD TO CHANGE THE ORDER OF AN ARRAY, WHILE MAINTAINING THE ORIGINAL ARRAY

let staffList = ['Korede', 'Tolulope', 'Anuoluwa', 'Bisola', 'Segun', 'Odulade', 'Pastor'];
console.log(staffList.reverse());

let employees = ['Anuoluwa', 'Bisola', 'Korede', 'Odulade', 'Pastor', 'Segun', 'Tolulope'];

let rv = [...employees];
console.log(rv.reverse());
console.log(employees);

*/
/*
find() and findIndex() Array Method 

const studentsGrade = [54, 32, 77, 95, 54, 43, 30, 67, 66, 80];

##Find a grade that is less than 60. You will have to declare a new variable that will house the function you intend to call.

let belowSixty = studentsGrade.find((element) => element > 80);
console.log(belowSixty);
*/

/*
// Exercise Challenge on Sort, Reverse, Find, FindIndex.

const patientsData = [
    { name: 'George', age: 45, status: 'Diabetes', appointment: 'October 23'},
    { name: 'Caleb', age: 25, status: 'Typhiod', appointment: 'July 4'},
    { name: 'Touch', age: 64, status: 'Bone Fracture', appointment: 'November 7'},
    { name: 'Dolapo', age: 32, status: 'High Blood Pressure', appointment: 'April 4'},
    { name: 'Taye', age: 41, status: 'Malaria', appointment: 'August 2'},
    { name: 'Sangodoyin', age: 55, status: 'Short Sightedness', appointment: 'February 2'},
];

// Question 1. Sort the array based on their age,
// in decending order(largest to smallest)

patientsData.sort((a, b) => b.age - a.age);
console.log(patientsData);



// Question 2. After sorting the array, 
// Reverse the order of the array

console.log(patientsData.reverse());


// Question 3. Find a patient in the array who has a age over 40,
// and who has diabete disease.

const aboveForty = patientsData.find((patientsData) => patientsData.age > 40);
console.log(aboveForty);

*/


/*
INCLUDE() ARRAY METHOD. It checks for a specific value, and then return Boolean Value of True/False.
Note that it is case sensitive.

// let itelList = [2, 5, 6, 12, 64, 22, 61, 23, 10, 7, 8];
const traineeNames = ['Anuoluwa', 'Bisola', 'Korede', 'Odulade', 'Pastor', 'Segun'];
console.log(traineeNames.includes('Bisola'));

*/

/* SOME(), INCLUDE() and EVERY() METHOD They all return a boolean value of the function 
called


let itelList = [2, 5, 6, 12, 64, 22, 61, 23, 10, 7, 8];

let checkList = itelList.includes(8, 10);
console.log(checkList);


const studentGrade = itelList.some((grade) => grade < 65);
console.log(studentGrade);

const allGrade = itelList.every((grade) => grade % 2 === 0);
console.log(allGrade);

*/

/*
// PUSH () AND POP() METHOD

const admissionList = [
    {name: "Jude", faculty: "Science", course: "Microbology", gender: "Male", age: 17},
    {name: "Luke", faculty: "Science", course: "Physics", gender: "Male", age: 16},
    {name: "Mark", faculty: "Art", course: "History", gender: "Male", age: 22},
    {name: "Ruth", faculty: "Education", course: "Curriculum and Instruction", gender: "Female", age: 19},
];
// admissionList.push({name: "Anuoluwa", faculty: "Technology", course: "Software Engineering", gender: "Male", age: 18});

// console.log(admissionList);

const popArray = admissionList.pop()
console.log(popArray);
console.log(admissionList);

*/

// SHIFT() and UNSHIFT() METHOD

/*
// MAP() Method.    The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order. map() does not execute the function for empty elements.
// map() does not change the original array.

const priceList = [45, 32, 56, 76, 22, 88, 50];

let newPriceList = priceList.map((price) => {
    return price + 20
});

console.log(newPriceList);
*/


// FILTER
/*
const studentsData = [
    { name: 'George', age: 25, status: 'Admitted', year: 2021},
    { name: 'Caleb', age: 21, status: 'Not Admitted', year: '2020'},
    { name: 'Touch', age: 19, status: 'Graduated', year: 2017},
];

const updateData = studentsData.filter((update) => update.year >= 2020);
console.log(updateData);
*/

/*
 ##REDUCE() Method

const marketPrice = [54, 32, 77, 95, 54, 43, 30, 67, 66, 80];

const totalMarPrice = marketPrice.reduce((a, b) => a + b);

console.log(totalMarPrice);




// Flat() + Map() Method

let nameScramble = ['GEORGE', 'TOYIN', 'ADMITTED', 'NENYE'];

let splitName = nameScramble.flatMap((game) =>game.split(''));
console.log(splitName);

*/

// function plus(a, b) {
//     let sum = a + b;
//     return sum;    
// };
// console.log(plus(4,5));

// // Using anonynmous closure
// let anu = function superrich() {
//     console.log('Super Rich');
// }();



// (function() {
//     console.log('Anu Super Rich');
// })();


/* ASSIGNMENT

Q.1  Write a JavaScript function to check whether an `input` is an array or not.

function checkAnInput(a, b) {
     let input = [];
     return true;    
 };
 console.log(checkAnInput());


//  //  OR

  const checkArray = check => {
      if (toString.call(check) == '[Array]')
      return true;
      else 
      if(toString.call(check) !== 'Array')
          return false;
      };

  console.log(checkArray());


Q.2    Write a JavaScript function to clone an array.

let carTypes = ['SUV', 'MUV', 'Coupe', 'Jeep', 'Pickup', 'Truck'];

let newCars = carTypes.map((car) => {
    return car;
});

console.log(newCars);




// Q.3    Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.

let richMen = [
    {name: 'Anu', networth: '$700,000,000,000'},
    {name: 'Akinsola', position: 'Senator'},
]
    function getFirstelement(men=richMen){
      
        richMen[0];
        return richMen;
    }
    console.log(richMen[0].networth);


    // OR


let staffSalary = ['$54,000', 32000, '$77,000 95', '$5400', 43000, '$30,000', 80000];

let staff_Salary$ = staffSalary.find((element) => element !==32000);

console.log(staff_Salary$);



// Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.
// Q.4 


const school = [56, 80, 40, 15];
let schoollist = school.filter((getNo) => getNo == 15);
console.log(schoollist);
*/




// let superMarket = [
    //  {BlockA: 
//         ['Ground Floor'] = 
//          {glorystore: 'Hair Salon', staff: 10, ceo: 'Gbemisola', rentfee: 'Annually'},
//          {mamaBStore: 'FoodStuff', staff: 5, ceo: 'Mrs Deborah', rentfee: 'Monthly'}
//      },
    
//     // {BlockB: 'First Floor' = {TonyBabingSalon: ''}

//     }


// ]


// let studentStatus = [
//     ['Seun', '100level', 'Passed', 'Male', 60000],
//     ['Tola', '300level', 'Passed', 'Female', 35000],
//     ['David', '200level', 'Failed', 'Female', 7000],
//     ['Moses', '500level', 'Graduated', 'NA', 2500],
// ];


// let age = [30, 20, 18, 19, 40];

// const ageSqr = age.map(age => Math.sqrt(age));

// console.log(ageSqr);



// console.log(studentStatus);



// const names = ['tolu', 'fiyin', 'tola', 'omolola', 'seyi'];

// console.log(names.lastIndexOf('omolola'));



// You can either use underscore sign _ or parenthesis(), for your parameters, both works.
// However, it is when you've declared your variable up. 

// let b = [80];
// let stage = _ => { return b === 63};

// console.log(stage());


// let schAge = (tolu) => {return tolu !== 45};
// console.log(schAge(10));



/*
let sumN = (b) => { return b ** b};
console.log(sumN(6));


let squareAdigit = [9, 1, 9];
console.log(squareAdigit);


let result = (c) => {return c * c};
console.log(result(9));

let result1 = (c) => {return c * c};
console.log(result1(1));


let result2 = (c) => {return c * c};
console.log(result2(9));

console.log(parseInt(result,result1,result2));
*/


// NESTED LOOPS WITH ARRAYS AND OBJECTS

// let twoDim = [
//     [5, 9, 4, 2, 9, 5, 3, 1],
//     [6, 18, 24, 42, 31, 76, 80],
//     [765, 654, 231, 976, 433, 230],
//     ];


// nested for loops

// let row = twoDim.length;
// for (let i=0; i<row; i++){
//     let item1 = twoDim[i].length;
//     console.log(i, item1);

//     for (let b = 0; b<item1; b++) {
//         console.log(twoDim[i][b]);
//     }
// }



// let largeObj = {supermarket:[
//     {blockA: 'Provision Shop', floor: 'First'},
//     {blockB: 'IT Consultancy', floor: 'Third'},
//     {blockC: 'Bookstore', floor: 'First'},
//     {blockD: 'Mini Restaurant', floor: 'Second'},
//     {blockE: 'Boutique', floor: 'Ground'}
// ]};


// let details = largeObj['supermarket'];
// for (let i=0, leng=details.length; i<leng; i++) {
//     // console.log(details[i]);  
//     console.log(details[i].blockC);
//     // console.log(details[i].blockE);  
// }

// While loop
// let tea = 7;

// while (tea <= 10) {
//     console.log(tea);
//     tea++;
// }

// Do While Loop

// let tea = 30;

// do {
//     console.log(tea);
//     tea++;
// } while (tea <= 34)


// For Loop

for (let i = 6; i <= 10; i++) {
    console.log(i);
}



