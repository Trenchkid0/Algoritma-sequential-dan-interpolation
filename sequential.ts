import { random_datasets } from "./data/random_30_datasets.json";
function sequentialSearch(
  dataset: string[],
  target: string
): { iterations: number; time: number } {
  let iterations = 0;
  const start = performance.now();

  for (let i = 0; i < dataset.length; i++) {
    iterations++;
    if (dataset[i] === target) break;
  }

  const end = performance.now();
  return { iterations, time: end - start };
}

function testRandomDatasets(randomDatasets: string[][]) {
  let totalIterations = 0;
  let totalTime = 0;

  const result = sequentialSearch(
    randomDatasets[0],
    "Wisata Alam Curug Pinang"
  );
  totalIterations = result.iterations;
  totalTime = result.time;

  console.log(` Iterations: ${totalIterations.toFixed(2)}`);
  console.log(` Time: ${totalTime.toFixed(6)} ms`);

  console.log("----------------------------");
}

testRandomDatasets(random_datasets);

// import { arrays } from "./merged";
// import sortedTitles from "./data/4000data.json";

// function sequentialSearch(
//   wisatas: Array<string>,
//   target: string
// ): { index: number; iterations: number } {
//   let iterations = 0;

//   for (let i = 0; i < wisatas.length; i++) {
//     iterations++;
//     if (wisatas[i] === "AQUARIUM BAWAH LAUT PULAU PUTRI") {
//       return { index: i, iterations };
//     }
//   }

//   return { index: -1, iterations };
// }

// // Use sortedTitles.sorted_titles as the array of names
// const wisataNames: string[] = sortedTitles.sorted_titles;

// const sortedWisataNames = [...wisataNames].sort((a: string, b: string) =>
//   a.localeCompare(b)
// );

// function testSequentialSearch(sizes: number[]) {
//   for (const size of sizes) {
//     const slicedArray = sortedWisataNames.slice(0, size);

//     // Begin value
//     const beginResult = sequentialSearch(slicedArray, slicedArray[0]);
//     console.log(
//       `${size} data points - Begin value: AQUARIUM BAWAH LAUT PULAU PUTRI`
//     );
//     console.log(
//       `Index: ${beginResult.index}, Iterations: ${beginResult.iterations}`
//     );

//     // Middle value
//     // const low = 0;
//     // const high = slicedArray.length - 1;
//     // const middleIdx = Math.floor((low + high) / 2);
//     // const middleResult = sequentialSearch(slicedArray, slicedArray[middleIdx]);
//     // console.log(
//     //   `${size} data points - Middle value: ${slicedArray[middleIdx]}`
//     // );
//     // console.log(
//     //   `Index: ${middleResult.index}, Iterations: ${middleResult.iterations}`
//     // );

//     // // End value
//     // const endIdx = slicedArray.length - 1;
//     // const endResult = sequentialSearch(slicedArray, slicedArray[endIdx]);
//     // console.log(`${size} data points - End value: ${slicedArray[endIdx]}`);
//     // console.log(
//     //   `Index: ${endResult.index}, Iterations: ${endResult.iterations}`
//     // );

//     // console.log("-------------------------------------------------");
//   }
// }

// testSequentialSearch([500, 1000, 2000, 4000]);
