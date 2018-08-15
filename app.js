/*
    ***    There is an external method ***
    ***    _.isEqual()                 ***
    ***    for deep object comparison  ***

    COMPARE VALUES OF OBJECTS

*/


// Declare array of objects (2 objects are the same, others are different)
let monsterArray = [
  {
    name: 'Cave Troll',
    lvl: 3,
    attack: 12,
    defence: 9,
    health: 100
  },
  
  {
    name: 'Giant Spider',
    lvl: 6,
    attack: 32,
    deffence: 12,
    health: 250
  },
  
  {
    name: 'Mountain Orc',
    lvl: 4,
    attack: 19,
    deffence: 15,
    health: 155
  },
  {
    name: 'Giant Spider',
    lvl: 6,
    attack: 32,
    deffence: 12,
    health: 250
  }
];



for (let i = 0; i < monsterArray.length; i++) {
  console.log(monsterArray[i]);
}

// Create function for this
function checkValues(a, b) {

  // Get all property names of objects
  let aProps = Object.getOwnPropertyNames(monsterArray[0]);
  let bProps = Object.getOwnPropertyNames(monsterArray[1]);

  // Check if a length of the property names of the objects are equal
  if (aProps.length != bProps.length) {
    return false;
  }

  // Via loop we assign each property name to a variable
  // Then we compare VALUES of objects
  for (let i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of even one property are not equal, return false
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  // Otherwise, if all is equal, return true
  return true;
}

// Addin refenrece of object to x variable to check later
let x = monsterArray[3];

// Comparing values of two objects
console.log(checkValues(monsterArray[1], monsterArray[3]));

// Checks the reference, not values
console.log(Object.is(monsterArray[3], x));



