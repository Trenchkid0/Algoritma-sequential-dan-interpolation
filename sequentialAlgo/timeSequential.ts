import { arrays } from "../wisata";

function sequentialSearch(array: Array<any>, target: string): any {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name_wisata === target) {
      return array[i].name_wisata;
    }
  }
}

const target = "Wisata Kraton Jogja";

let start = performance.now();
const result = sequentialSearch(arrays, target);

let end = performance.now();
let runtime = end - start;

console.log(`Algorithm memory: ${runtime} ms`);
if (result !== -1) {
  console.log(`Found '${target}' at index ${result}`);
} else {
  console.log(`'${target}' not found in the array.`);
}
