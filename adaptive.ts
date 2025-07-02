import { arrays } from "./merged";

function adaptiveSearch(
  wisatas: Array<{ nama: string }>,
  target: string
): { index: number; iterations: number } {
  let left = 0;
  let right = wisatas.length - 1;
  let iterations = 0;

  while (left <= right) {
    iterations++;

    const pos =
      left +
      Math.floor(
        (target.localeCompare(wisatas[left].nama) /
          wisatas[right].nama.localeCompare(wisatas[left].nama)) *
          (right - left)
      );

    const mid = Math.max(Math.min(pos, right), left);

    const comparison = target.localeCompare(wisatas[mid].nama);

    if (comparison === 0) {
      return { index: mid, iterations };
    } else if (comparison > 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (iterations > Math.log2(wisatas.length)) {
      while (left <= right) {
        iterations++;
        const binaryMid = Math.floor((left + right) / 2);
        const binaryComparison = target.localeCompare(wisatas[binaryMid].nama);

        if (binaryComparison === 0) {
          return { index: binaryMid, iterations };
        } else if (binaryComparison > 0) {
          left = binaryMid + 1;
        } else {
          right = binaryMid - 1;
        }
      }
      break;
    }
  }

  return { index: -1, iterations };
}

arrays.sort((a, b) => a.nama.localeCompare(b.nama));
// Test with 10 data points - Begin value
// const slicedArray10 = arrays.slice(0, 10);
// const result10 = adaptiveSearch(slicedArray10, slicedArray10[0].nama);
// console.log(`10 data points - Begin value: ${slicedArray10[0].nama}`);
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// const result10 = adaptiveSearch(
//   slicedArray10,
//   slicedArray10[Math.floor(slicedArray10.length / 2)].nama
// );
// console.log(
//   `10 data points - Begin value: ${
//     slicedArray10[Math.floor(slicedArray10.length / 2)].nama
//   }`
// );
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// const result10 = adaptiveSearch(
//   slicedArray10,
//   slicedArray10[slicedArray10.length - 1].nama
// );
// console.log(
//   `10 data points - Begin value: ${
//     slicedArray10[slicedArray10.length - 1].nama
//   }`
// );
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// Test with 100 data points
const slicedArray100 = arrays.slice(0, 100);
let result100 = adaptiveSearch(slicedArray100, slicedArray100[0].nama);
console.log(`100 data points - Begin: ${slicedArray100[0].nama}`);
console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

result100 = adaptiveSearch(
  slicedArray100,
  slicedArray100[Math.floor(slicedArray100.length / 2)].nama
);
console.log(
  `100 data points - Middle: ${
    slicedArray100[Math.floor(slicedArray100.length / 2)].nama
  }`
);
console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

result100 = adaptiveSearch(
  slicedArray100,
  slicedArray100[slicedArray100.length - 1].nama
);
console.log(
  `100 data points - End: ${slicedArray100[slicedArray100.length - 1].nama}`
);
console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

// Test with 1000 data points
const slicedArray1000 = arrays.slice(0, 1000);
let result1000 = adaptiveSearch(slicedArray1000, slicedArray1000[0].nama);
console.log(`1000 data points - Begin: ${slicedArray1000[0].nama}`);
console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

result1000 = adaptiveSearch(
  slicedArray1000,
  slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama
);
console.log(
  `1000 data points - Middle: ${
    slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama
  }`
);
console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

result1000 = adaptiveSearch(
  slicedArray1000,
  slicedArray1000[slicedArray1000.length - 1].nama
);
console.log(
  `1000 data points - End: ${slicedArray1000[slicedArray1000.length - 1].nama}`
);
console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

// Test with 2000 data points
const slicedArray2000 = arrays.slice(0, 2000);
let result2000 = adaptiveSearch(slicedArray2000, slicedArray2000[0].nama);
console.log(`2000 data points - Begin: ${slicedArray2000[0].nama}`);
console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

result2000 = adaptiveSearch(
  slicedArray2000,
  slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama
);
console.log(
  `2000 data points - Middle: ${
    slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama
  }`
);
console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

result2000 = adaptiveSearch(
  slicedArray2000,
  slicedArray2000[slicedArray2000.length - 1].nama
);
console.log(
  `2000 data points - End: ${slicedArray2000[slicedArray2000.length - 1].nama}`
);
console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

// Test with 3000 data points
const slicedArray3000 = arrays.slice(0, 3000);
let result3000 = adaptiveSearch(slicedArray3000, slicedArray3000[0].nama);
console.log(`3000 data points - Begin: ${slicedArray3000[0].nama}`);
console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);

result3000 = adaptiveSearch(
  slicedArray3000,
  slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama
);
console.log(
  `3000 data points - Middle: ${
    slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama
  }`
);
console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);

result3000 = adaptiveSearch(
  slicedArray3000,
  slicedArray3000[slicedArray3000.length - 1].nama
);
console.log(
  `3000 data points - End: ${slicedArray3000[slicedArray3000.length - 1].nama}`
);
console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);
