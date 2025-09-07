import { random_datasets } from "./data/random_30_datasets.json";
function interpolationSearch(
  dataset: string[],
  target: string
): { iterations: number; time: number; found: boolean } {
  let iterations = 0;
  let found = false;

  const targetValue = getValue(target);
  const start = performance.now();

  let low = 0;
  let high = dataset.length - 1;

  while (low <= high) {
    iterations++;

    if (!dataset[low] || !dataset[high]) break;

    const lowValue = getValue(dataset[low]);
    const highValue = getValue(dataset[high]);

    if (highValue === lowValue) {
      if (dataset[low] === target) found = true;
      break;
    }

    const pos =
      low +
      Math.floor(
        ((high - low) * (targetValue - lowValue)) / (highValue - lowValue)
      );

    if (pos < 0 || pos >= dataset.length) break;

    if (dataset[pos] === target) {
      found = true;
      break;
    } else if (getValue(dataset[pos]) < targetValue) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  const end = performance.now();
  return { iterations, time: end - start, found };
}

function getValue(str: string): number {
  if (!str) return 0;
  return Array.from(str).reduce((sum, c) => sum + c.charCodeAt(0), 0);
}

function testRandomDatasets(randomDatasets: string[][]) {
  let totalIterations = 0;
  let totalTime = 0;

  const target = "Wisata Alam Curug Pinang";

  const result = interpolationSearch(randomDatasets[0], target);
  totalIterations = result.iterations;
  totalTime = result.time;

  console.log(` Iterations: ${totalIterations.toFixed(2)}`);
  console.log(` Time: ${totalTime.toFixed(6)} ms`);
  console.log(` Found: ${result.found}`);
  console.log("----------------------------");
}

testRandomDatasets(random_datasets);

// function interpolationSearchIteration(
//   dataset: string[],
//   target: string
// ): number {
//   let iterations = 0;
//   let low = 0;
//   let high = dataset.length - 1;
//   dataset.sort((a, b) => a.localeCompare(b));

//   function stringToValue(str: string): number {
//     return str.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
//   }

//   const targetVal = stringToValue(target);

//   while (
//     low <= high &&
//     targetVal >= stringToValue(dataset[low]) &&
//     targetVal <= stringToValue(dataset[high])
//   ) {
//     iterations++;

//     // Jika hanya satu elemen yang sama
//     if (stringToValue(dataset[high]) === stringToValue(dataset[low])) {
//       if (stringToValue(dataset[low]) === targetVal) return iterations;
//       else break;
//     }

//     const pos =
//       low +
//       Math.floor(
//         ((high - low) * (targetVal - stringToValue(dataset[low]))) /
//           (stringToValue(dataset[high]) - stringToValue(dataset[low]))
//       );

//     if (dataset[pos] === target) return iterations;
//     else if (stringToValue(dataset[pos]) < targetVal) low = pos + 1;
//     else high = pos - 1;
//   }

//   return iterations;
// }

// function testInterpolationPositions(dataset: string[], trials: number = 30) {
//   const low = 0;
//   const high = dataset.length - 1;
//   const positions = [
//     { name: "Awal", index: 0 },
//     { name: "Tengah", index: Math.floor((low + high) / 2) },
//     { name: "Akhir", index: dataset.length - 1 },
//   ];

//   console.log(`Iterasi rata-rata Interpolation Search (${trials}x uji):`);
//   positions.forEach((pos) => {
//     let totalIterations = 0;
//     for (let i = 0; i < trials; i++) {
//       totalIterations += interpolationSearchIteration(
//         dataset,
//         dataset[pos.index]
//       );
//     }
//     console.log(
//       `${pos.name}: ${(totalIterations / trials).toFixed(2)} iterasi rata-rata`
//     );
//   });
// }

// testInterpolationPositions(random_list, 30);

// function interpolationSearchAll(wisatas: Array<{ title: string }>): {
//   averageIterations: number;
//   averageTime: number;
//   foundCount: number;
// } {
//   let totalIterations = 0;
//   let totalTime = 0;
//   let totalSearches = 0;
//   let foundCount = 0;

//   for (let i = 0; i < wisatas.length; i++) {
//     const target = wisatas[i].title;

//     for (let attempt = 0; attempt < 30; attempt++) {
//       let low = 0;
//       let high = wisatas.length - 1;
//       let iterations = 0;
//       let found = false;

//       const start = performance.now();
//       while (low <= high) {
//         iterations++;

//         const targetValue = Array.from(target).reduce(
//           (sum, c) => sum + c.charCodeAt(0),
//           0
//         );
//         const lowValue = Array.from(wisatas[low].title).reduce(
//           (sum, c) => sum + c.charCodeAt(0),
//           0
//         );
//         const highValue = Array.from(wisatas[high].title).reduce(
//           (sum, c) => sum + c.charCodeAt(0),
//           0
//         );

//         const pos =
//           low +
//           Math.floor(
//             ((high - low) * (targetValue - lowValue)) /
//               (highValue - lowValue === 0 ? 1 : highValue - lowValue)
//           );

//         const mid = Math.max(Math.min(pos, high), low);
//         const comparison = target.localeCompare(wisatas[mid].title);

//         if (comparison === 0) {
//           found = true;
//           break;
//         } else if (comparison > 0) {
//           low = mid + 1;
//         } else {
//           high = mid - 1;
//         }
//       }
//       const end = performance.now();

//       totalIterations += iterations;
//       totalTime += end - start;
//       totalSearches++;
//       if (found) foundCount++;
//     }
//   }

//   return {
//     averageIterations: totalIterations / totalSearches,
//     averageTime: totalTime / totalSearches,
//     foundCount: foundCount / 30,
//   };
// }

// // Urutkan array agar siap untuk search
// arrays.sort((a, b) => a.title.localeCompare(b.title));

// // Ukuran dataset
// const sizes = [500, 1000, 2000, 4000];

// console.log("Starting interpolation search performance test...");
// console.log("Each element is searched 30 times to get average runtime");
// console.log("========================================");

// for (const size of sizes) {
//   const slicedArray = arrays.slice(0, size);
//   const result = interpolationSearchAll(slicedArray);
//   console.log(
//     `Size: ${size} - Average Iterations: ${result.averageIterations.toFixed(
//       2
//     )}, Average Time: ${result.averageTime.toFixed(6)} ms, Found Count: ${
//       result.foundCount
//     }`
//   );
//   console.log("----------------------------------------");
// }
// import { arrays } from "./merged";

// function interpolationSearch(
//   wisatas: Array<{ title: string }>,
//   target: string
// ): { index: number; iterations: number } {
//   let indexFound = -1;
//   let iterations = 0;

//   let low = 0;
//   let high = wisatas.length - 1;

//   while (low <= high) {
//     iterations++;

//     const targetValue = Array.from(target).reduce(
//       (sum, c) => sum + c.charCodeAt(0),
//       0
//     );
//     const lowValue = Array.from(wisatas[low].title).reduce(
//       (sum, c) => sum + c.charCodeAt(0),
//       0
//     );
//     const highValue = Array.from(wisatas[high].title).reduce(
//       (sum, c) => sum + c.charCodeAt(0),
//       0
//     );

//     const pos =
//       low +
//       Math.floor(
//         ((high - low) * (targetValue - lowValue)) /
//           (highValue - lowValue === 0 ? 1 : highValue - lowValue)
//       );

//     const mid = Math.max(Math.min(pos, high), low);
//     const comparison = target.localeCompare(wisatas[mid].title);

//     if (comparison === 0) {
//       indexFound = mid;
//       break;
//     } else if (comparison > 0) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return {
//     index: indexFound,
//     iterations: iterations,
//   };
// }

// function findMiddleValue(
//   wisatas: Array<{ title: string }>,
//   high: number,
//   low: number
// ) {
//   const middleIndex = Math.floor((high + low) / 2);
//   return wisatas[middleIndex].title;
// }

// // Sort the array
// arrays.sort((a, b) => a.title.localeCompare(b.title));

// // Helper to run a test case
// function runTest(size: number, position: "begin" | "middle" | "end") {
//   const slicedArray = arrays.slice(0, size);
//   let target: string;
//   let low = 0;
//   let high = slicedArray.length - 1;

//   if (position === "begin") {
//     target = slicedArray[0].title;
//   } else if (position === "middle") {
//     target = findMiddleValue(slicedArray, high, low);
//   } else {
//     target = slicedArray[slicedArray.length - 1].title;
//   }

//   const result = interpolationSearch(slicedArray, target);
//   console.log(
//     `${size} data points - ${
//       position.charAt(0).toUpperCase() + position.slice(1)
//     } value: ${target}`
//   );
//   console.log(`Index: ${result.index}, Iterations: ${result.iterations}`);
//   console.log("----------------------------------------");
// }

// // Sizes to test
// const sizes = [500, 1000, 2000, 4000];
// const positions: Array<"begin" | "middle" | "end"> = ["begin", "middle", "end"];

// console.log("Starting interpolation search test...");
// console.log("Measuring number of iterations only");
// console.log("========================================");

// for (const size of sizes) {
//   for (const position of positions) {
//     runTest(size, position);
//   }
// }

// console.log("Test completed");
