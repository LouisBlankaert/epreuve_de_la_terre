// Trié ou pas
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 2, 3, 10, 8];

if (isSorted(numbers)) {
  console.log("La liste est triée.");
} else {
  console.log("La liste n'est pas triée.");
}
