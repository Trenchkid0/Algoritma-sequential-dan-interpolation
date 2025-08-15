import { arrays } from "./merged";

function adaptiveSearch(
  wisatas: Array<{ title: string }>,
  target: string
): { index: number; iterations: number; averageTime: number } {
  let totalTime = 0;
  let indexFound = -1;
  let iterationsCount = 0;

  for (let attempt = 0; attempt < 30; attempt++) {
    let low = 0;
    let high = wisatas.length - 1;
    let iterations = 0;

    const start = performance.now();
    while (low <= high) {
      iterations++;

      const targetVal = stringToValue(target);
      const lowVal = stringToValue(wisatas[low].title);
      const highVal = stringToValue(wisatas[high].title);

      if (highVal === lowVal) {
        if (targetVal === lowVal) {
          indexFound = low;
        }
        break;
      }

      const pos =
        low +
        Math.floor(((high - low) * (targetVal - lowVal)) / (highVal - lowVal));

      const mid = Math.max(Math.min(pos, high), low);
      const comparison = target.localeCompare(wisatas[mid].title);

      if (comparison === 0) {
        indexFound = mid;
        break;
      } else if (comparison > 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      // fallback ke binary search jika iterasi terlalu banyak
      if (iterations > Math.log2(wisatas.length)) {
        while (low <= high) {
          iterations++;
          const binaryMid = Math.floor((low + high) / 2);
          const binaryComparison = target.localeCompare(
            wisatas[binaryMid].title
          );

          if (binaryComparison === 0) {
            indexFound = binaryMid;
            break;
          } else if (binaryComparison > 0) {
            low = binaryMid + 1;
          } else {
            high = binaryMid - 1;
          }
        }
        break;
      }
    }

    const end = performance.now();
    totalTime += end - start;

    if (attempt === 0) {
      iterationsCount = iterations;
    }
  }

  return {
    index: indexFound,
    iterations: iterationsCount,
    averageTime: totalTime / 30,
  };
}

// Helper: convert string ke numeric value
function stringToValue(str: string): number {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

arrays.sort((a, b) => a.title.localeCompare(b.title));

function runFullTest(size: number) {
  const slicedArray = arrays.slice(0, size);

  let totalIterations = 0;
  let totalTime = 0;
  let totalFound = 0;

  for (let i = 0; i < slicedArray.length; i++) {
    const target = slicedArray[i].title;
    const result = adaptiveSearch(slicedArray, target);

    if (result.index !== -1) totalFound++;
    totalIterations += result.iterations;
    totalTime += result.averageTime;
  }

  console.log(
    `Size: ${size}, Found: ${totalFound}, Avg Iterations: ${
      totalIterations / slicedArray.length
    }, Avg Time: ${totalTime / slicedArray.length}`
  );
}

const sizes = [500, 1000, 2000, 4000];
for (const size of sizes) {
  runFullTest(size);
}

// import { arrays } from "./merged";

// function adaptiveSearch(
//   wisatas: Array<{ title: string }>,
//   target: string
// ): { index: number; iterations: number } {
//   let indexFound = -1;
//   let iterationsCount = 0;

//   let low = 0;
//   let high = wisatas.length - 1;
//   let iterations = 0;

//   while (low <= high) {
//     iterations++;

//     const targetVal = stringToValue(target);
//     const lowVal = stringToValue(wisatas[low].title);
//     const highVal = stringToValue(wisatas[high].title);

//     if (highVal === lowVal) {
//       if (targetVal === lowVal) {
//         indexFound = low;
//       }
//       break;
//     }

//     const pos =
//       low +
//       Math.floor(((high - low) * (targetVal - lowVal)) / (highVal - lowVal));

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

//     // fallback ke binary search jika terlalu banyak iterasi
//     if (iterations > Math.log2(wisatas.length)) {
//       while (low <= high) {
//         iterations++;
//         const binaryMid = Math.floor((low + high) / 2);
//         const binaryComparison = target.localeCompare(wisatas[binaryMid].title);

//         if (binaryComparison === 0) {
//           indexFound = binaryMid;
//           break;
//         } else if (binaryComparison > 0) {
//           low = binaryMid + 1;
//         } else {
//           high = binaryMid - 1;
//         }
//       }
//       break;
//     }
//   }

//   iterationsCount = iterations;

//   return {
//     index: indexFound,
//     iterations: iterationsCount,
//   };
// }

// // Helper: convert string to number
// function stringToValue(str: string): number {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
//   }
//   return sum;
// }

// // sort array dulu
// arrays.sort((a, b) => a.title.localeCompare(b.title));

// function findMiddleValue(
//   arr: Array<{ title: string }>,
//   high: number,
//   low: number
// ): string {
//   const midIdx = Math.floor((high + low) / 2);
//   return arr[midIdx].title;
// }

// function runTest(size: number, position: "begin" | "middle" | "end") {
//   const slicedArray = arrays.slice(0, size);
//   let low = 0;
//   let high = slicedArray.length - 1;
//   let target: string;

//   if (position === "begin") {
//     target = slicedArray[0].title;
//   } else if (position === "middle") {
//     target = findMiddleValue(slicedArray, high, low);
//   } else {
//     target = slicedArray[slicedArray.length - 1].title;
//   }

//   const result = adaptiveSearch(slicedArray, target);

//   console.log(
//     `${size} data points - ${
//       position.charAt(0).toUpperCase() + position.slice(1)
//     } value: ${target}`
//   );
//   console.log(`Index: ${result.index}, Iterations: ${result.iterations}`);
// }

// // Sizes and positions to test
// const sizes = [500, 1000, 2000, 4000];
// const positions: Array<"begin" | "middle" | "end"> = ["begin", "middle", "end"];

// for (const size of sizes) {
//   for (const position of positions) {
//     runTest(size, position);
//   }
// }
