//simple tip calculator

let enter  = prompt(`Enter your bill value!`);
let bill = enter;
let tip1 = (15/100);
let tip2 = (20/100) ;
document.body.innerText = Number(bill)>= 50 && Number(bill) <= 300?
 `Your bill value is ${Number(bill)} and your tip is ${Number(bill)* tip1} and total value
 ${(Number(bill)* tip1) + Number(bill)}`:`Your bill value is ${Number(bill)} 
 and your tip is ${Number(bill)* tip2} and total value 
 ${(Number(bill)* tip2) + Number(bill)}`;

console.log(bill); 



// //test data 1
// const markWeighs = 78;
// const markHeight = 1.69;
// const johnWeighs = 92;
// const johnHeight = 1.95;


// /*
// BMI formular
// BMI = mass/height **2 */

// // solution test data 1
// const markBmi = Math.floor(markWeighs / (markHeight**2));
// const johnBmi = Math.floor(johnWeighs / (johnHeight**2));

// // boolean check
// const marksBmihigher = markBmi > johnBmi;
// const johnBmiHigher = johnBmi > markBmi;
// console.log(marksBmihigher);
// console.log(johnBmiHigher);

// // test data 2;
// const markWeightTwo = 95;
// const markHeightTwo = 1.88;
// const johnWeightTwo = 85;
// const johnHeightTwo = 1.76;

// const 
//  markBmiTwo = Math.floor(markWeightTwo / (markHeightTwo**2));
// const johnBmitwo = Math.floor(johnWeightTwo / (johnHeightTwo**2));
// const markBmiTwoHigher =  markBmiTwo > johnBmitwo ;
// const johnBmitwoHigher =  johnBmitwo > markBmiTwo;
// console.log(markBmiTwoHigher);
// console.log(johnBmitwoHigher);

//  //test data 1
// if(marksBmihigher ){
//  console.log(`Mark's BMI ${markBmi} is higher than ${johnBmi} `);
// }
// else{
// console.log(`John's BmI (27.44) is excellent`)
// }

// // test data 2
// if(markBmiTwoHigher ){
//  console.log(`Mark BMI two ${markBmiTwo} is higher than ${johnBmitwo}` );
// }
// else{
//     console.log(`John's BMI two (${johnBmitwo}) is higher than ${markBmiTwo}`);
// }

// // const birthYear = 1991;
// // let century;
// // if(birthYear >= 2000){
// //  century = `21st century`;
// // }
// // else{
// //     century = `20th century`;
// // }
// // console.log(century);
 
// //type coercion
// let coercion = (`23` - `10`- 3);
// console.log(coercion);

// //truthy and falsy
// // console.log(Boolean(0));
// // let height =12;
// // if(height) console.log(`there is an height`);


// // let newPrompt =  prompt("whats your favourite number?");
// // if(newPrompt >= 20){
// //   document.body.innerHTML = `You are ready for marriage`;
// // }
// //  else if(newPrompt[0]=== "s"){
// //     alert(`you are named after segun`);
// //  }
// // else{
// //   alert(`Face your studies younger D:`);
// // }
// // console.log(newPrompt) 

// // const array = [1, 2 , 3 ,4,  5];
// // console.log(array.splice(2,2,"goated","messi"));

// //coding challenge 3

// //test data 1 
// //for dolphins
// // const Dolphinscore1 = 96;
// // const Dolphinscore2 = 108;
// // const Dolphinscore3 = 89;
// // const averageDolphin =  (Dolphinscore1 + Dolphinscore2 + Dolphinscore3)/ 3;
// // console.log(averageDolphin);

// // // for koales 
// //  const koalescore1 = 88;
// //  const koalescore2 = 91;1
// //  const koalescore3 = 110;
// //  const averagekoales = (koalescore1+koalescore2+koalescore3)/3;
// // console.log (Math.floor(averagekoales));

// // if(averageDolphin > averagekoales ){
// // console.log(`Dolphins warriors are the winners!`);
// // }
// // else if(averagekoales > averageDolphin ){
// //     console.log(`Koalas giants are the winners!`);
// // }
// // else if (averagekoales === averageDolphin){
// //  console.log(`Both teams ended tight the knot with a Draw!`);
// // }

// //bonus 1

// //test data 
// //for dolphins
// // const Dolphinscore1 = 97;
// // const Dolphinscore2 = 112;
// // const Dolphinscore3 = 101;
// // const averageDolphin =  (Dolphinscore1 + Dolphinscore2 + Dolphinscore3)/ 3;
// // // for koales 
// //   const koalescore1 = 109;
// //   const koalescore2 = 95;
// //   const koalescore3 = 123;
// //   const averagekoales = (koalescore1+koalescore2+koalescore3)/3;
  
// //   if(averageDolphin >= 100 && averageDolphin > averagekoales){
// //     console.log(`Dolphins warriors are the winners!`);
// //   }
// //   else if(averagekoales >= 100 && averageDolphin < averagekoales){
// // console.log(`averagekoales giants are the true giants!`)
// //   }
// //   else{
// //     console.log(`No winner!`);
// //   }

// // test data 2 

// // for dolphins
// //  const Dolphinscore1 = 97;
// //  const Dolphinscore2 = 112;
// //  const Dolphinscore3 = 101;
// //  const averageDolphin =  (Dolphinscore1 + Dolphinscore2 + Dolphinscore3)/ 3;

// //  // for koales
// //   const koalescore1 = 109;
// //   const koalescore2 = 95;
// //   const koalescore3 = 106;
// //   const averagekoales = (koalescore1+koalescore2+koalescore3)/3;

// //   if(averagekoales === averageDolphin && averageDolphin >= 100 && averagekoales >= 100){
// //  console.log(`Both teams ends in Draw`);
// //   }
// //   else if( averagekoales > averageDolphin && averagekoales >= 100){
// //   console.log(`averagekoales giants are the winnner `);
// //   }
// //   else if( averagekoales < averageDolphin && averageDolphin >= 100){
// //  console.log(`averageDolphins are the winner!`);
// //   }
// //   else if(averagekoales < 100 && averageDolphin <100 ){
// //   console.log(`Both teams couldn't reach 100points!`)
// //   }

// const day ="monday";
// if(day === 'monday'){
//  console.log(`ITS MONEYDAY!`);
// }
// else if(day === 'tuesday'){
// console.log(`You are VICTORIOUS!`);
// }
// else if(day === 'Wednesday' || day === 'thursday'){
// console.log(`Its time to make more profit before the week runs out!`);
// }
// else if(day === 'Friday'){
//     console.log(`Lets party its FriYAY!`);
// }
// else{
//     console.log(`Its the weekend already!`);
// }
// const age = prompt("what is age?");

//  document.body.innerHTML = `You can only drink ${age >= 18 ? "alcohol" : "water"}`;
//  console.log(`You can only drink ${age >= 18 ? "alcohol" : "water"}`)




// //splice**   