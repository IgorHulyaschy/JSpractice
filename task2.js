// get through array without any for/while, map, forEach, reduce, etc. functions. You can only use getting element of an array by it's index and getting array's length, self-made functions.
let arr = [1, 2, 3, 4, 5, 6];
let i = -1;
function cycle(arr){
  i++;
  if (i < arr.length){
    console.log(arr[i])
    cycle(arr);
  }
}
cycle(arr);