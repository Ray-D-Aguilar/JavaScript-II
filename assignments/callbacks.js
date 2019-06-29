// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, (lengthItem) => {
  console.log(lengthItem);
});

// ``````````Last array````````````````````

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[3]);
}

last(items, (lastItem) => {
  console.log(lastItem);
})

//````````````Adding two numbers``````````````````````

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function add(num1, num2) {
  return num1 + num2;
}

let product = sumNums(9, 3, add);
console.log(product);

//````````````Multiply two numbers`````````````````

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(num1, num2) {
  return num1 * num2;
}

let product2 = multiplyNums(2, 10, multiply);
console.log(product2);

//````````````true/false callback``````````


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  const checkArr = () => {
    for (let i = 0; i < item.length; i++)
      if (item[i] === list) {
        return true;
      } else {
        return false;
      }
  };
  cb(checkArr);
};

contains(items, 'Pencil', result => {
  console.log(result ? 'Pencil is in the array': 'Pencil is not in the array');
})








/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
