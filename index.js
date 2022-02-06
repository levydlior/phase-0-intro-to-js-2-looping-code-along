// Code your solutions in this file
/*for (let age= 30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  //for with array:
  const gifts= ["teddey bear", "drone", "doll"];
  function wrapGifts(gifts){
      for(let i= 0; i< gifts.length; i++){
          console.log(`Wrapped ${gifts[i]} and added a bowl!`);
      }
      return gifts;
  }

  wrapGifts(gifts)
  */

  function writeCards (arr, eventName){
    const newArr= [];
    for (let i = 0; i<arr.length; i++){
        
newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }  
    return newArr;
  }

  function countDown(x){
let count= x;
while (x >= 0){
    console.log(x);
    x--;
}
return count
  }

  console.log(countDown(5))