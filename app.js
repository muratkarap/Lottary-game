for (k=1; k<4; k++){
let list=[];
for (i=0;i<6;i++){

   let number=Math.floor(Math.random()*49+1);
    list.push(number);
    list.sort(function(a,b){return a-b});
}
//console.log(list);

let joker=Math.round(Math.random()*100+1)
          
    //console.log(joker);
for (let j=0; j<6; j++){
if (list.includes(joker)){
    continue;
}
else {
    list.push(joker);
}}
let superNumber=Math.round(Math.random()*100+1);
list.push(superNumber);
console.log(list);}