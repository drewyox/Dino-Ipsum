
// tama.introduction = function() {
//   console.log("Name in the outer function: " + this.name);
//   let doThis = () => {
//     console.log("Name in the inner function: " + this.name);
//     return `My name is ${this.name}`
//   }
//   return doThis()
// }
// tama.introduction();

export class Tama{

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sportLevel = 10;
    this.sleep = 10;
  }
  // setHunger() {
  //   setInterval(() => {
  //     this.foodLevel--;
  //   }, 1000);
  // }
  setValueTimer(level, time) {
    setInterval(() => {
      this[level]--;
    }, time);
  }

  didYouGetStarved() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  // setSportLevel() {
  //   setInterval(() => {
  //     this.sportLevel--;
  //   }, 2000);
  // }

  didYouGetBored() {
    if (this.sportLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  setValue(level, levelValue) {
    this[level] = 10;
    console.log("this is NOT a closure");
  }
}





// export let closure = {
//   foodLevel: 10,
//   setHunger: function() {
//     const hungerInterval = setInterval(() => {
//       this.foodLevel--;
//       if (this.didYouGetEaten() == true) {
//         clearInterval(hungerInterval);
//         return "You got eaten!";
//       }
//     }, 1000);
//   },
//   setValue: function(level, setValue) {
//     let that = this;
//     return function(){
//       that.level = setValue;
//       console.log("this is a closure")
//     }
//   }
// };
  // export closure.setHunggg = closure.setValue(foodLevel);
  // didYouGetEaten: function() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // },
  // feed: function(amount) {
  //   let that = this;
  //   return function(food) {
  //     that.foodLevel += amount
  //     return `The bear ate the ${food}! Food level goes up ${amount}!`
  //   }
  // }
// };
