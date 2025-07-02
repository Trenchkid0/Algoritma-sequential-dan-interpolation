import { arrays } from "./merged";

function binarySearch(
  wisatas: Array<any>,
  target: string
): { index: number; iterations: number } {
  let left = 0;
  let right = wisatas.length - 1;
  let iterations = 0;
  console.log(wisatas[wisatas.length - 1]);
  console.log(wisatas[Math.floor((left + right) / 2)]);

  while (left <= right) {
    iterations++;
    const mid = Math.floor((left + right) / 2);
    const comparison = target.localeCompare(wisatas[mid].nama);

    if (comparison === 0) {
      return { index: mid, iterations };
    } else if (comparison < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return { index: -1, iterations }; // Jika tidak ditemukan
}
// const target = "21 Hotel"; //awal
const target = "WISMA INDAH";
arrays.sort((a, b) => a.nama.localeCompare(b.nama));
const slicedArray = arrays.slice(0, 3000);

const result = binarySearch(slicedArray, target);
console.log(`Index: ${result.index}, Iterations: ${result.iterations}`);
