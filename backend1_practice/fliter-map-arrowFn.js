let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }

const new_arr = arr.map((val) => val * 2);

console.log(arr);
console.log(new_arr);

const even_arr = arr.filter((val) => val % 2 == 0);
console.log(even_arr);
