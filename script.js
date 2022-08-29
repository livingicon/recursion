// ITERATIVE FIBONACCI
const fibsIterate = (num) => {
  let fibArray = []; n1 = 0; n2 = 1; total = '';
  for (let i = 0; i < num; i++) {
    fibArray.push(n1);
    total = (n1 + n2);
    n1 = n2;
    n2 = total;
  }
  return fibArray;
};
// console.log(fibsIterate(8));

const fibsIterate2 = (num) => {
  let array = [0, 1];
  let fibArray = [];
  for (let i = 0; i < num; i++) {
    array.push(array[0] + array[1]);
    fibArray.push(array[0]);
    array.shift();
  }
  return fibArray;
};
// console.log(fibsIterate2(8));


// RECURSIVE FIBONACCI
function fibsRec(num, arr = [0, 1]) {
  if (num <= 2) {
    return arr;
  } else {
    return fibsRec(num - 1, arr.concat(arr[arr.length - 1] + arr[arr.length - 2]));
  }
};
// console.log(fibsRec(8));

function fibsRecFancier(num, arr = [0, 1]) {
  if (num <= 2) return arr;
  return fibsRecFancier(num - 1, arr.concat(arr[arr.length - 1] + arr[arr.length - 2]));
};
// console.log(fibsRecFancier(8));

const fR2 = (n, r=[0, 1]) => (n<=2) ? r : fR2(n-1, r.concat(r[r.length-1] + r[r.length-2]));
// console.log(fR2(8));


// MERGE SORT

// Pseudocode:
// on input of n elements
  // if n < 2
    // return
  // else
    // sort left half of elements
    // sort right half of elements
    // merge sorted halves

// Pseudocode:
const mergeSort = (arr) => {
  if(arr.length < 2) {
    return arr;
  } else {
    const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
    const sortedArr = [];
    while (left.length > 0 || right.length > 0) {
      if (left.length === 0 || right[0] < left[0]) {
        sortedArr[sortedArr.length] = right.shift();
      } else {
        sortedArr[sortedArr.length] = left.shift();
      }
    }
    return sortedArr;
  }
};
console.log(mergeSort([9,1,6,7,5,3,2]));