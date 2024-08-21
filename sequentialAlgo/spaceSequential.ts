import { arrays } from "../wisata";

function sequentialSearch(array: Array<any>, target: string): any {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name_wisata === target) {
      return array[i].name_wisata;
    }
  }
}

const targetName = "Wisata Kraton Jogja";

const initialMemory = process.memoryUsage().heapUsed; //menandakan penggunaan memory usage v8

const resultIndex = sequentialSearch(arrays, targetName);

const finalMemory = process.memoryUsage().heapUsed; //menandakan penggunaan memory usage v8
const usedMemoryMB = (finalMemory - initialMemory) / 1024 / 1024;
const toMb = usedMemoryMB.toFixed(6);
console.log(`Algorithm memory: ${toMb} mb`);
if (resultIndex !== -1) {
  console.log(`Found '${targetName}' at index ${resultIndex}`);
} else {
  console.log(`'${targetName}' not found in the array.`);
}
