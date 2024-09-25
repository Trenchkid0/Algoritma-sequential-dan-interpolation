import { arrays } from "../wisata";

function interpolationSearch(array: Array<any>, target: string): any {
  let low = 0;
  let high = array.length - 1;

  while (
    low <= high &&
    target >= array[low].name_wisata &&
    target <= array[high].name_wisata
  ) {
    if (low === high) {
      return array[low].name_wisata === target ? low : -1;
    }

    const pos =
      low +
      Math.floor(
        (target.localeCompare(array[low].name_wisata) /
          array[high].name_wisata.localeCompare(array[low].name_wisata)) *
          (high - low)
      );

    if (array[pos].name_wisata === target) {
      return array[pos].name_wisata;
    }

    if (array[pos].name_wisata.localeCompare(target) < 0) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}

const target = "Wisata Kraton Jogja";

//dimulainya waktu sebelum pencarian
let start = performance.now();
const result = interpolationSearch(arrays, target);

//waktu sesudah pencarian
let end = performance.now();
let runtime = end - start;

console.log(`Algorithm memory: ${runtime} ms`);
if (result !== -1) {
  console.log(`Found ${result}`);
} else {
  console.log(`'${target}' not found in the array.`);
}
