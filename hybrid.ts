import { arrays } from "./merged";

function hybridInterpolationBinarySearch(
  wisatas: Array<{ nama: string }>,
  target: string
): { index: number; iterations: number } {
  let low = 0;
  let high = wisatas.length - 1;
  let iterations = 0;
  const maxInterpolationIterations = Math.floor(Math.log2(wisatas.length) / 2);

  while (
    low <= high &&
    target >= wisatas[low].nama &&
    target <= wisatas[high].nama
  ) {
    iterations++;

    const range = wisatas[high].nama.localeCompare(wisatas[low].nama);
    if (range === 0) {
      break;
    }

    let pos =
      low +
      Math.floor(
        (target.localeCompare(wisatas[low].nama) / range) * (high - low)
      );

    pos = Math.max(Math.min(pos, high), low);

    if (wisatas[pos].nama === target) {
      return { index: pos, iterations };
    }

    if (wisatas[pos].nama < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }

    if (iterations >= maxInterpolationIterations) {
      break;
    }
  }

  while (low <= high) {
    iterations++;
    const mid = Math.floor((low + high) / 2);
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

// Penggunaan
arrays.sort((a, b) => a.nama.localeCompare(b.nama));

//begin
const slicedArray10 = arrays.slice(0, 10);
const target = slicedArray10[0].nama;

const result = hybridInterpolationBinarySearch(arrays, target);

console.log(`10 data points - Begin value: ${slicedArray10[0].nama}`);
console.log(`Index: ${result.index}, Iterations: ${result.iterations}`);

// middle

const slicedArray10Middle = arrays.slice(0, 10);
const targetMiddle =
  slicedArray10Middle[Math.floor(slicedArray10Middle.length / 2)].nama;

const resultMiddle = hybridInterpolationBinarySearch(arrays, targetMiddle);

console.log(
  `10 data points - Middle value: ${
    slicedArray10Middle[Math.floor(slicedArray10Middle.length / 2)].nama
  }`
);
console.log(
  `Index: ${resultMiddle.index}, Iterations: ${resultMiddle.iterations}`
);

// end

const slicedArray10End = arrays.slice(0, 10);
const target10End = slicedArray10End[slicedArray10End.length - 1].nama;

const result10End = hybridInterpolationBinarySearch(arrays, target10End);

console.log(
  `10 data points - End value: ${
    slicedArray10End[slicedArray10End.length - 1].nama
  }`
);
console.log(
  `Index: ${result10End.index}, Iterations: ${result10End.iterations}`
);

// 100 data points
const slicedArray100 = arrays.slice(0, 100);
// begin
const target100Begin = slicedArray100[0].nama;
const result100Begin = hybridInterpolationBinarySearch(arrays, target100Begin);
console.log(`100 data points - Begin value: ${slicedArray100[0].nama}`);
console.log(
  `Index: ${result100Begin.index}, Iterations: ${result100Begin.iterations}`
);

const target100Middle =
  slicedArray100[Math.floor(slicedArray100.length / 2)].nama;
const result100Middle = hybridInterpolationBinarySearch(
  arrays,
  target100Middle
);
console.log(
  `100 data points - Middle value: ${
    slicedArray100[Math.floor(slicedArray100.length / 2)].nama
  }`
);
console.log(
  `Index: ${result100Middle.index}, Iterations: ${result100Middle.iterations}`
);

const target100End = slicedArray100[slicedArray100.length - 1].nama;
const result100End = hybridInterpolationBinarySearch(arrays, target100End);
console.log(
  `100 data points - End value: ${
    slicedArray100[slicedArray100.length - 1].nama
  }`
);
console.log(
  `Index: ${result100End.index}, Iterations: ${result100End.iterations}`
);

// 1000 data points
const slicedArray1000 = arrays.slice(0, 1000);
const target1000Begin = slicedArray1000[0].nama;
const result1000Begin = hybridInterpolationBinarySearch(
  arrays,
  target1000Begin
);
console.log(`1000 data points - Begin value: ${slicedArray1000[0].nama}`);
console.log(
  `Index: ${result1000Begin.index}, Iterations: ${result1000Begin.iterations}`
);

const target1000Middle =
  slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama;
const result1000Middle = hybridInterpolationBinarySearch(
  arrays,
  target1000Middle
);
console.log(
  `1000 data points - Middle value: ${
    slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result1000Middle.index}, Iterations: ${result1000Middle.iterations}`
);

const target1000End = slicedArray1000[slicedArray1000.length - 1].nama;
const result1000End = hybridInterpolationBinarySearch(arrays, target1000End);
console.log(
  `1000 data points - End value: ${
    slicedArray1000[slicedArray1000.length - 1].nama
  }`
);
console.log(
  `Index: ${result1000End.index}, Iterations: ${result1000End.iterations}`
);

// 2000 data points
const slicedArray2000 = arrays.slice(0, 2000);
const target2000Begin = slicedArray2000[0].nama;
const result2000Begin = hybridInterpolationBinarySearch(
  arrays,
  target2000Begin
);
console.log(`2000 data points - Begin value: ${slicedArray2000[0].nama}`);
console.log(
  `Index: ${result2000Begin.index}, Iterations: ${result2000Begin.iterations}`
);

const target2000Middle =
  slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama;
const result2000Middle = hybridInterpolationBinarySearch(
  arrays,
  target2000Middle
);
console.log(
  `2000 data points - Middle value: ${
    slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result2000Middle.index}, Iterations: ${result2000Middle.iterations}`
);

const target2000End = slicedArray2000[slicedArray2000.length - 1].nama;
const result2000End = hybridInterpolationBinarySearch(arrays, target2000End);
console.log(
  `2000 data points - End value: ${
    slicedArray2000[slicedArray2000.length - 1].nama
  }`
);
console.log(
  `Index: ${result2000End.index}, Iterations: ${result2000End.iterations}`
);

// 3000 data points
const slicedArray3000 = arrays.slice(0, 3000);
const target3000Begin = slicedArray3000[0].nama;
const result3000Begin = hybridInterpolationBinarySearch(
  arrays,
  target3000Begin
);
console.log(`3000 data points - Begin value: ${slicedArray3000[0].nama}`);
console.log(
  `Index: ${result3000Begin.index}, Iterations: ${result3000Begin.iterations}`
);

const target3000Middle =
  slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama;
const result3000Middle = hybridInterpolationBinarySearch(
  arrays,
  target3000Middle
);
console.log(
  `3000 data points - Middle value: ${
    slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result3000Middle.index}, Iterations: ${result3000Middle.iterations}`
);

const target3000End = slicedArray3000[slicedArray3000.length - 1].nama;
const result3000End = hybridInterpolationBinarySearch(arrays, target3000End);
console.log(
  `3000 data points - End value: ${
    slicedArray3000[slicedArray3000.length - 1].nama
  }`
);
console.log(
  `Index: ${result3000End.index}, Iterations: ${result3000End.iterations}`
);
