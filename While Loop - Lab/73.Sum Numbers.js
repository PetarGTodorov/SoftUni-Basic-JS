function sumNumbers(input){

let num = Number(input[0]);
let i = 1;
let sum = 0;
while ( sum < num){
       sum = sum + Number(input[i])
       i++;
}
console.log(sum)
}
sumNumbers (["20",
"1",
"2",
"3",
"4",
"5",
"6"])


