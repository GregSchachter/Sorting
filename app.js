// BubbleSort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

// Merge
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const out = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    out.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    out.push(arr2[j]);
    j++;
  }
  return out;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j > -1 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// Pivot
function pivot(arr) {
  let pivotVar = arr[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotVar) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const out = left.concat(right);
  arr.splice(0, arr.length, ...out);
  console.log(arr);
  return arr.indexOf(pivotVar);
}

// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotVar = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivotVar) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivotVar, ...quickSort(right)];
}

// Radix Sort
function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function radixSort(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  console.log(maxDigits);
  for (let j = 0; j < maxDigits; j++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let k = 0; k < arr.length; k++) {
      let digit = getDigit(arr[k], j);

      buckets[digit].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
