// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, 
// computes the number of ways to make the amount of money with coins of the available denominations. 

function changePossibilities(amount, coinArray) {
    var changeArr = [];
    for(var i = 0; i <=amount; i++) {
      changeArr[i] = 0 
    }
    changeArr[0] = 1;
    for(var j = 0; j < coinArray.length; j++) {
      console.log("this is the changearr for j:" + changeArr)
      for (var k = 1; k < changeArr.length; k++) {
        if (k >= coinArray[j]) {
          changeArr[k] += changeArr[k - coinArray[j]];
          console.log("this is the changeArr with inclusion of k:" + changeArr)
        }
      }
    }
    return (changeArr[amount])
    //I'm able to get the number of combinations but I can't quite have it spit out all possibile combinations. Yet. 
  }
  