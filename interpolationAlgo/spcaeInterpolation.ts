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
      return pos;
    }

    if (array[pos].name_wisata.localeCompare(target) < 0) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}

const targetName = "Wisata Kraton Jogja";

const initialMemory = process.memoryUsage().heapUsed; //menandakan penggunaan memory usage v8

const resultIndex = interpolationSearch(arrays, targetName);

const finalMemory = process.memoryUsage().heapUsed; //menandakan penggunaan memory usage v8
const usedMemoryMB = (finalMemory - initialMemory) / 1024 / 1024;
const toMb = usedMemoryMB.toFixed(6);
console.log(`Algorithm memory: ${toMb} mb`);
if (resultIndex !== -1) {
  console.log(`Found '${targetName}' at index ${resultIndex}`);
} else {
  console.log(`'${targetName}' not found in the array.`);
}
