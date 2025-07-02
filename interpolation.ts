import { arrays } from "./merged";

function interpolationSearch(
  wisatas: Array<{ nama: string }>,
  target: string
): { index: number; iterations: number } {
  let low = 0;
  let high = wisatas.length - 1;
  let iterations = 0;

  while (low <= high) {
    iterations++;

    const pos =
      low +
      Math.floor(
        ((high - low) / wisatas[high].nama.localeCompare(wisatas[low].nama)) *
          target.localeCompare(wisatas[low].nama)
      );

    const mid = Math.max(Math.min(pos, high), low);

    const comparison = target.localeCompare(wisatas[mid].nama);

    if (comparison === 0) {
      return { index: mid, iterations };
    } else if (comparison > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return { index: -1, iterations };
}

function findMiddleValue(wisatas: Array<{ nama: string }>) {
  const middleIndex = Math.floor(wisatas.length / 2);
  return wisatas[middleIndex].nama;
}

// Sort the array
arrays.sort((a, b) => a.nama.localeCompare(b.nama));

// Test with 10 data points - Begin value
// const slicedArray10 = arrays.slice(0, 10);
// const result10 = interpolationSearch(slicedArray10, slicedArray10[0].nama);
// console.log(`10 data points - Begin value: ${slicedArray10[0].nama}`);
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// Test with 10 data points - middle value
// const slicedArray10 = arrays.slice(0, 10);
// const middleValue10 = findMiddleValue(slicedArray10);
// const result10 = interpolationSearch(slicedArray10, middleValue10);
// console.log(`10 data points - Middle value: ${middleValue10}`);
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// Test with 10 data points - end value
// const slicedArray10 = arrays.slice(0, 10);
// const result10 = interpolationSearch(
//   slicedArray10,
//   slicedArray10[slicedArray10.length - 1].nama
// );
// console.log(
//   `10 data points - End value: ${
//     slicedArray10[slicedArray10.length - 1].nama
//   }`
// );
// console.log(`Index: ${result10.index}, Iterations: ${result10.iterations}`);

// Test with 100 data points - Begin value
// const slicedArray100 = arrays.slice(0, 100);
// const result100 = interpolationSearch(slicedArray100, slicedArray100[0].nama);
// console.log(`100 data points - Begin value: ${slicedArray100[0].nama}`);
// console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

// Test with 100 data points - middle value
// const slicedArray100 = arrays.slice(0, 100);
// const middleValue100 = findMiddleValue(slicedArray100);
// const result100 = interpolationSearch(slicedArray100, middleValue100);
// console.log(`100 data points - Middle value: ${middleValue100}`);
// console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

// Test with 100 data points - end value
// const slicedArray100 = arrays.slice(0, 100);
// const result100 = interpolationSearch(
//   slicedArray100,
//   slicedArray100[slicedArray100.length - 1].nama
// );
// console.log(
//   `100 data points - End value: ${
//     slicedArray100[slicedArray100.length - 1].nama
//   }`
// );
// console.log(`Index: ${result100.index}, Iterations: ${result100.iterations}`);

// Test with 1000 data points - Begin value
// const slicedArray1000 = arrays.slice(0, 1000);
// const result1000 = interpolationSearch(
//   slicedArray1000,
//   slicedArray1000[0].nama
// );
// console.log(`1000 data points - Begin value: ${slicedArray1000[0].nama}`);
// console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

// Test with 1000 data points - middle value
// const slicedArray1000 = arrays.slice(0, 1000);
// const middleValue1000 = findMiddleValue(slicedArray1000);
// const result1000 = interpolationSearch(slicedArray1000, middleValue1000);
// console.log(`1000 data points - Middle value: ${middleValue1000}`);
// console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

// // Test with 1000 data points - end value

// const slicedArray1000 = arrays.slice(0, 1000);
// const result1000 = interpolationSearch(
//   slicedArray1000,
//   slicedArray1000[slicedArray1000.length - 1].nama
// );
// console.log(
//   `1000 data points - End value: ${
//     slicedArray1000[slicedArray1000.length - 1].nama
//   }`
// );
// console.log(`Index: ${result1000.index}, Iterations: ${result1000.iterations}`);

// Test with 2000 data points - Begin value
// const slicedArray2000 = arrays.slice(0, 2000);
// const result2000 = interpolationSearch(
//   slicedArray2000,
//   slicedArray2000[0].nama
// );
// console.log(`2000 data points - Begin value: ${slicedArray2000[0].nama}`);
// console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

// Test with 2000 data points - middle value
// const slicedArray2000 = arrays.slice(0, 2000);
// const middleValue2000 = findMiddleValue(slicedArray2000);
// const result2000 = interpolationSearch(slicedArray2000, middleValue2000);
// console.log(`2000 data points - Middle value: ${middleValue2000}`);
// console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

// Test with 2000 data points - end value
// const slicedArray2000 = arrays.slice(0, 2000);

// const result2000 = interpolationSearch(
//   slicedArray2000,
//   slicedArray2000[slicedArray2000.length - 1].nama
// );
// console.log(
//   `2000 data points - End value: ${
//     slicedArray2000[slicedArray2000.length - 1].nama
//   }`
// );
// console.log(`Index: ${result2000.index}, Iterations: ${result2000.iterations}`);

// Test with 3000 data points - Begin value
// const slicedArray3000 = arrays.slice(0, 3000);
// const result3000 = interpolationSearch(
//   slicedArray3000,
//   slicedArray3000[0].nama
// );
// console.log(`3000 data points - Begin value: ${slicedArray3000[0].nama}`);
// console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);

// Test with 3000 data points - middle value
// const slicedArray3000 = arrays.slice(0, 3000);
// const middleValue3000 = findMiddleValue(slicedArray3000);
// const result3000 = interpolationSearch(slicedArray3000, middleValue3000);
// console.log(`3000 data points - Middle value: ${middleValue3000}`);
// console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);

// Test with 3000 data points - end value
// const slicedArray3000 = arrays.slice(0, 3000);

// const result3000 = interpolationSearch(
//   slicedArray3000,
//   slicedArray3000[slicedArray3000.length - 1].nama
// );
// console.log(
//   `3000 data points - End value: ${
//     slicedArray3000[slicedArray3000.length - 1].nama
//   }`
// );
// console.log(`Index: ${result3000.index}, Iterations: ${result3000.iterations}`);
