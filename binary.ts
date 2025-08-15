import { arrays } from "./merged";

function binarySearchAll(wisatas: Array<any>): {
  averageIterations: number;
  averageTime: number;
  totalFound: number;
} {
  let totalIterations = 0;
  let totalTime = 0;
  let totalSearches = 0;
  let totalFound = 0;

  for (let i = 0; i < wisatas.length; i++) {
    const target = wisatas[i].title;

    for (let attempt = 0; attempt < 30; attempt++) {
      let left = 0;
      let right = wisatas.length - 1;
      let iterations = 0;
      let found = false;

      const start = performance.now();
      while (left <= right) {
        iterations++;
        const mid = Math.floor((left + right) / 2);
        const comparison = target.localeCompare(wisatas[mid].title);

        if (comparison === 0) {
          found = true;
          break;
        } else if (comparison < 0) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      const end = performance.now();

      totalIterations += iterations;
      totalTime += end - start;
      totalSearches++;
      if (found) totalFound++;
    }
  }

  return {
    averageIterations: totalIterations / totalSearches,
    averageTime: totalTime / totalSearches,
    totalFound: totalFound / 30,
  };
}

// Urutkan array agar siap untuk binary search
arrays.sort((a, b) => a.title.localeCompare(b.title));

// Ukuran dataset yang diuji
const sizes = [500, 1000, 2000, 4000];

sizes.forEach((size) => {
  const slicedArray = arrays.slice(0, size);
  const result = binarySearchAll(slicedArray);

  console.log(
    `Size: ${size} - Average Iterations: ${result.averageIterations.toFixed(
      2
    )}, Average Time: ${result.averageTime.toFixed(6)} ms, Total Found: ${
      result.totalFound
    }`
  );
  console.log("-------------------------------------------------");
});

// import { arrays } from "./merged";

// function binarySearch(
//   wisatas: Array<any>,
//   target: string
// ): { index: number; iterations: number } {
//   let indexFound = -1;
//   let iterationsCount = 0;

//   let left = 0;
//   let right = wisatas.length - 1;
//   let iterations = 0;

//   while (left <= right) {
//     iterations++;
//     const mid = Math.floor((left + right) / 2);
//     const comparison = target.localeCompare(wisatas[mid].title);

//     if (comparison === 0) {
//       indexFound = mid;
//       break;
//     } else if (comparison < 0) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   iterationsCount = iterations;

//   return {
//     index: indexFound,
//     iterations: iterationsCount,
//   };
// }

// arrays.sort((a, b) => a.title.localeCompare(b.title));

// const sizes = [500, 1000, 2000, 4000];

// sizes.forEach((size) => {
//   const slicedArray = arrays.slice(0, size);

//   // Cari di awal
//   const targetAwal = slicedArray[0]?.title || "";
//   const resultAwal = binarySearch(slicedArray, targetAwal);
//   console.log(
//     `Size: ${size} - Awal - Index: ${resultAwal.index}, Iterations: ${resultAwal.iterations}`
//   );

//   let low = 0;
//   let high = slicedArray.length - 1;

//   // Cari di tengah
//   const midIndex = Math.floor((low + high) / 2);
//   const targetTengah = slicedArray[midIndex]?.title || "";
//   const resultTengah = binarySearch(slicedArray, targetTengah);
//   console.log(
//     `Size: ${size} - Tengah - Index: ${resultTengah.index}, Iterations: ${resultTengah.iterations}`
//   );

//   // Cari di akhir
//   const targetAkhir = slicedArray[size - 1]?.title || "";
//   const resultAkhir = binarySearch(slicedArray, targetAkhir);
//   console.log(
//     `Size: ${size} - Akhir - Index: ${resultAkhir.index}, Iterations: ${resultAkhir.iterations}`
//   );
// });
