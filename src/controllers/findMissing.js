
function findDuplicate(arr) {
  var sorted = arr.sort();
  var results = [];
  for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] == sorted[i]) {
      results.push(sorted[i]);
    }
  }
  return results;
}

console.log(findDuplicate([1,2,3,4,5,6,6,7]))