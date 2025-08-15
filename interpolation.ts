import { arrays } from "./merged";

function interpolationSearchAll(wisatas: Array<{ title: string }>): {
  averageIterations: number;
  averageTime: number;
  foundCount: number;
} {
  let totalIterations = 0;
  let totalTime = 0;
  let totalSearches = 0;
  let foundCount = 0;

  for (let i = 0; i < wisatas.length; i++) {
    const target = wisatas[i].title;

    for (let attempt = 0; attempt < 30; attempt++) {
      let low = 0;
      let high = wisatas.length - 1;
      let iterations = 0;
      let found = false;

      const start = performance.now();
      while (low <= high) {
        iterations++;

        const targetValue = Array.from(target).reduce(
          (sum, c) => sum + c.charCodeAt(0),
          0
        );
        const lowValue = Array.from(wisatas[low].title).reduce(
          (sum, c) => sum + c.charCodeAt(0),
          0
        );
        const highValue = Array.from(wisatas[high].title).reduce(
          (sum, c) => sum + c.charCodeAt(0),
          0
        );

        const pos =
          low +
          Math.floor(
            ((high - low) * (targetValue - lowValue)) /
              (highValue - lowValue === 0 ? 1 : highValue - lowValue)
          );

        const mid = Math.max(Math.min(pos, high), low);
        const comparison = target.localeCompare(wisatas[mid].title);

        if (comparison === 0) {
          found = true;
          break;
        } else if (comparison > 0) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      const end = performance.now();

      totalIterations += iterations;
      totalTime += end - start;
      totalSearches++;
      if (found) foundCount++;
    }
  }

  return {
    averageIterations: totalIterations / totalSearches,
    averageTime: totalTime / totalSearches,
    foundCount: foundCount / 30,
  };
}

// Urutkan array agar siap untuk search
arrays.sort((a, b) => a.title.localeCompare(b.title));

// Ukuran dataset
const sizes = [500, 1000, 2000, 4000];

console.log("Starting interpolation search performance test...");
console.log("Each element is searched 30 times to get average runtime");
console.log("========================================");

for (const size of sizes) {
  const slicedArray = arrays.slice(0, size);
  const result = interpolationSearchAll(slicedArray);
  console.log(
    `Size: ${size} - Average Iterations: ${result.averageIterations.toFixed(
      2
    )}, Average Time: ${result.averageTime.toFixed(6)} ms, Found Count: ${
      result.foundCount
    }`
  );
  console.log("----------------------------------------");
}
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
