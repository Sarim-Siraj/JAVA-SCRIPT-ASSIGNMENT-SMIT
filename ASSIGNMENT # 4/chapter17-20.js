// Question 1

// var arr=[[],[]];

// Question 2
// for(var i=3; i>=0; i--){
//     document.write(i)
// }

// document.write("<br>")
// for(var i=0; i<=3; i++){
//     document.write(i)
// }

// // Question 3
// for(var i =0 ; i<=10;i++){
//     document.write(i+"</br>")
// }



// Question 4
// var table=+prompt("Enter a number show its multiplication table")
// var len=+prompt("Enter a multiplication lenght")
// document.write(`<h2>Mulitication of ${table}</h2>`)
// for(var i=1;i<=len; i++){
//     document.write(`

//         <p>${table}x ${i}=${i*table}</p>
//         `)
// }


// Question 5
// var fruits=["apple","Banana","Mango","Orange","Strawberry"]

// for (var i=0 ;  i<fruits.length ; i++){

//     document.write(`
//         ${fruits[i]}<br>

//         Element at index${i} is ${fruits[i]}<br>
//         `)
// }
// // Question 6
// document.write(`<h3>Counting</h3> <br>`)
// for(var i=1; i<=15 ; i++){
//     document.write(`${i},`)

// }

// document.write(`<h3>Reverse</h3> <br>`)
// for(var i=10; i>=1 ; i--){
//     document.write(`${i},`)

// }


// document.write(`<h3>Even</h3> <br>`)
// for(var i=0; i <=20 ; i++){
//     if(i%2==0)
//     document.write(`${i},`)

// }

// document.write(`<h3>odd</h3> <br>`)
// for(var i=0; i <=20 ; i++){
//     if(i%2!=0)
//     document.write(`${i},`)

// }

// document.write(`<h3>Counting</h3> <br>`)
// for(var i=1; i<=20 ; i++){
//     if(i%2==0)
//     document.write(`${i}k,`)

// }
// Question 7
// var item = ["cake", "apple pie", "cookie", "chips", " patties"];
// var userInput = prompt("Enter Your item do you want");
// var foundIt = "Nahi"
// var indexnum;
// for (var i = 0; i < item.length; i++) {
//     if (userInput == item[i]) {
//         foundIt = "Han"
//         indexnum = i;
//     }
// }
// if (foundIt) {
//     alert(`${userInput} is Aviavle in index ${i} in our bakery.`)
// }
// else {
//     alert(`We are sorry .${userInput} in not aviable in our bakery.`)
// }

// Question 8
var num =[20,55,42,33,125];
var largestnum=num[0];

for(var i =0; i <largestnum; i++){
    if(num[i]>largestnum){
        largestnum=num[i]
    }
}

document.write(`
    <p>Array item: ${num}</p>
    <p>The Largest Number is ${largestnum}</p>
    `)


// Question 9
var num =[20,55,42,33,125];
var smallestnum=num[0];

for(var i =0; i >smallestnum; i++){
    if(num[i]>smallestnum){
        smallestnum=num[i]
    }
}

document.write(`
    <p>Array item: ${num}</p>
    <p>The smallest Number is ${smallestnum}</p>
    `)


// Question 10

for(var i=1; i <=100 ; i++){
    if(i%5==0)
    document.write(`${i},`)

}


