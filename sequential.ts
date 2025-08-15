// import { arrays } from "./merged";

// function sequentialSearch(
//   wisatas: Array<any>,
//   target: string
// ): { index: number; iterations: number; averageTime: number } {
//   let totalTime = 0;
//   let indexFound = -1;
//   let iterationsCount = 0;

//   for (let attempt = 0; attempt < 30; attempt++) {
//     let iterations = 0;
//     const start = performance.now();

//     for (let i = 0; i < wisatas.length; i++) {
//       iterations++;
//       if (wisatas[i].title === target) {
//         indexFound = i;
//         break;
//       }
//     }

//     const end = performance.now();
//     totalTime += end - start;

//     if (attempt === 0) {
//       iterationsCount = iterations;
//     }
//   }

//   return {
//     index: indexFound,
//     iterations: iterationsCount,
//     averageTime: totalTime / 30,
//   };
// }

// // Urutkan array
// arrays.sort((a, b) => a.title.localeCompare(b.title));

// // Dataset size yang dipakai
// const testCases = [500, 1000, 2000, 4000];

// for (const size of testCases) {
//   const slicedArray = arrays.slice(0, size);

//   let totalTime = 0;
//   let totalIterations = 0;

//   // gunakan setiap data sebagai target pencarian
//   for (const item of slicedArray) {
//     const result = sequentialSearch(slicedArray, item.title);
//     totalTime += result.averageTime;
//     totalIterations += result.iterations;
//   }

//   const avgTime = totalTime / slicedArray.length;
//   const avgIterations = totalIterations / slicedArray.length;

//   console.log(`Dataset size: ${size}`);
//   console.log(
//     `Average Iterations: ${avgIterations.toFixed(
//       2
//     )}, Average Time: ${avgTime.toFixed(6)} ms`
//   );
//   console.log("-------------------------------------------------");
// }
// import { arrays } from "./merged";
import sortedTitles from "./data/4000data.json";

function sequentialSearch(
  wisatas: Array<string>,
  target: string
): { index: number; iterations: number } {
  let iterations = 0;

  for (let i = 0; i < wisatas.length; i++) {
    iterations++;
    if (wisatas[i] === target) {
      return { index: i, iterations };
    }
  }

  return { index: -1, iterations };
}

// Use sortedTitles.sorted_titles as the array of names
const wisataNames: string[] = sortedTitles.sorted_titles;

const sortedWisataNames = [...wisataNames].sort((a: string, b: string) =>
  a.localeCompare(b)
);

function testSequentialSearch(sizes: number[]) {
  for (const size of sizes) {
    const slicedArray = sortedWisataNames.slice(0, size);

    // Begin value
    const beginResult = sequentialSearch(slicedArray, slicedArray[0]);
    console.log(`${size} data points - Begin value: ${slicedArray[0]}`);
    console.log(
      `Index: ${beginResult.index}, Iterations: ${beginResult.iterations}`
    );

    // Middle value
    const low = 0;
    const high = slicedArray.length - 1;
    const middleIdx = Math.floor((low + high) / 2);
    const middleResult = sequentialSearch(slicedArray, slicedArray[middleIdx]);
    console.log(
      `${size} data points - Middle value: ${slicedArray[middleIdx]}`
    );
    console.log(
      `Index: ${middleResult.index}, Iterations: ${middleResult.iterations}`
    );

    // End value
    const endIdx = slicedArray.length - 1;
    const endResult = sequentialSearch(slicedArray, slicedArray[endIdx]);
    console.log(`${size} data points - End value: ${slicedArray[endIdx]}`);
    console.log(
      `Index: ${endResult.index}, Iterations: ${endResult.iterations}`
    );

    console.log("-------------------------------------------------");
  }
}

testSequentialSearch([500, 1000, 2000, 4000]);
