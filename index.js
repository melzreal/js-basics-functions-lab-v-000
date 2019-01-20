// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  return someValue > 42 ? someValue - 42 : 42 % someValue;
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(block1, block2) {
    return -(distanceFromHqInFeet(block1) - distanceFromHqInFeet(block2));
}

function calculatesFarePrice(start, destination){

  const diTravel = distanceTravelledInFeet(start, destination);

  switch (diTravel > 0) {
    case diTravel > 2500:
     return 'cannot travel that far';
     break;
    case diTravel<= 400:
      return 0;
      break;
    case diTravel <= 2000:
      return (diTravel - 400) * 0.02;
      break;
    case diTravel>2000:
      return 25;
      break;
  }

}
