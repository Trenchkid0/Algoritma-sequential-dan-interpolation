import { arrays } from "./merged";

function hybridInterpolationBinarySearch(
  wisatas: Array<{ title: string }>,
  target: string
): { iterations: number; time: number } {
  let totalTime = 0;
  let iterationsCount = 0;

  for (let attempt = 0; attempt < 30; attempt++) {
    let low = 0;
    let high = wisatas.length - 1;
    let iterations = 0;
    const maxInterpolationIterations = Math.floor(
      Math.log2(wisatas.length) / 2
    );

    const start = performance.now();

    // Interpolation phase
    while (
      low <= high &&
      target >= wisatas[low].title &&
      target <= wisatas[high].title
    ) {
      iterations++;

      const range = wisatas[high].title.localeCompare(wisatas[low].title);
      if (range === 0) break;

      const alow = wisatas[low].title;
      const ahigh = wisatas[high].title;
      const targetDiff = target.localeCompare(alow);
      const rangeDiff = ahigh.localeCompare(alow);

      let pos =
        low +
        Math.floor(
          ((high - low) * targetDiff) / (rangeDiff === 0 ? 1 : rangeDiff)
        );

      pos = Math.max(Math.min(pos, high), low);

      if (wisatas[pos].title === target) break;

      if (wisatas[pos].title < target) {
        low = pos + 1;
      } else {
        high = pos - 1;
      }

      if (iterations >= maxInterpolationIterations) break;
    }

    // Binary search phase
    while (low <= high) {
      iterations++;
      const mid = Math.floor((low + high) / 2);
      const comparison = target.localeCompare(wisatas[mid].title);

      if (comparison === 0) break;
      else if (comparison > 0) low = mid + 1;
      else high = mid - 1;
    }

    const end = performance.now();
    totalTime += end - start;
    iterationsCount += iterations;
  }

  return {
    iterations: iterationsCount / 30, // rata-rata iterasi per elemen
    time: totalTime / 30, // rata-rata waktu per elemen
  };
}

arrays.sort((a, b) => a.title.localeCompare(b.title));

type TestCase = { size: number; label: string };

const testCases: TestCase[] = [
  { size: 500, label: "500 data points" },
  { size: 1000, label: "1000 data points" },
  { size: 2000, label: "2000 data points" },
  { size: 4000, label: "4000 data points" },
];

for (const { size, label } of testCases) {
  const sliced = arrays.slice(0, size);

  let totalIterations = 0;
  let totalTime = 0;

  // 🔑 uji semua elemen
  for (const item of sliced) {
    const result = hybridInterpolationBinarySearch(sliced, item.title);
    totalIterations += result.iterations;
    totalTime += result.time;
  }

  const avgIterations = totalIterations / sliced.length;
  const avgTime = totalTime / sliced.length;

  console.log(`${label}`);
  console.log(
    `Average Iterations: ${avgIterations.toFixed(
      2
    )}, Average Time: ${avgTime.toFixed(6)} ms`
  );
  console.log("----------------------------------------");
}
// import { arrays } from "./merged";

// function hybridInterpolationBinarySearch(
//   wisatas: Array<{ title: string }>,
//   target: string
// ): { index: number; iterations: number } {
//   let indexFound = -1;
//   let iterationsCount = 0;

//   for (let attempt = 0; attempt < 30; attempt++) {
//     let low = 0;
//     let high = wisatas.length - 1;
//     let iterations = 0;
//     const maxInterpolationIterations = Math.floor(
//       Math.log2(wisatas.length) / 2
//     );

//     while (
//       low <= high &&
//       target >= wisatas[low].title &&
//       target <= wisatas[high].title
//     ) {
//       iterations++;

//       const range = wisatas[high].title.localeCompare(wisatas[low].title);
//       if (range === 0) break;

//       const alow = wisatas[low].title;
//       const ahigh = wisatas[high].title;
//       const targetDiff = target.localeCompare(alow);
//       const rangeDiff = ahigh.localeCompare(alow);

//       let pos =
//         low +
//         Math.floor(
//           ((high - low) * targetDiff) / (rangeDiff === 0 ? 1 : rangeDiff)
//         );

//       pos = Math.max(Math.min(pos, high), low);

//       if (wisatas[pos].title === target) {
//         indexFound = pos;
//         break;
//       }

//       if (wisatas[pos].title < target) {
//         low = pos + 1;
//       } else {
//         high = pos - 1;
//       }

//       if (iterations >= maxInterpolationIterations) break;
//     }

//     while (low <= high) {
//       iterations++;
//       const mid = Math.floor((low + high) / 2);
//       const comparison = target.localeCompare(wisatas[mid].title);

//       if (comparison === 0) {
//         indexFound = mid;
//         break;
//       } else if (comparison > 0) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }

//     if (attempt === 0) {
//       iterationsCount = iterations;
//     }
//   }

//   return { index: indexFound, iterations: iterationsCount };
// }

// arrays.sort((a, b) => a.title.localeCompare(b.title));

// type TestCase = {
//   size: number;
//   label: string;
// };

// const testCases: TestCase[] = [
//   { size: 500, label: "500 data points" },
//   { size: 1000, label: "1000 data points" },
//   { size: 2000, label: "2000 data points" },
//   { size: 4000, label: "4000 data points" },
// ];

// for (const { size, label } of testCases) {
//   const sliced = arrays.slice(0, size);

//   // Begin
//   const targetBegin = sliced[0]?.title;
//   if (targetBegin !== undefined) {
//     const resultBegin = hybridInterpolationBinarySearch(arrays, targetBegin);
//     console.log(`${label} - Begin value: ${targetBegin}`);
//     console.log(
//       `Index: ${resultBegin.index}, Iterations: ${resultBegin.iterations}`
//     );
//   }

//   // Middle
//   const low = 0;
//   const high = sliced.length - 1;
//   const middleIdx = Math.floor((low + high) / 2);
//   const targetMiddle = sliced[middleIdx]?.title;
//   if (targetMiddle !== undefined) {
//     const resultMiddle = hybridInterpolationBinarySearch(arrays, targetMiddle);
//     console.log(`${label} - Middle value: ${targetMiddle}`);
//     console.log(
//       `Index: ${resultMiddle.index}, Iterations: ${resultMiddle.iterations}`
//     );
//   }

//   // End
//   const targetEnd = sliced[sliced.length - 1]?.title;
//   if (targetEnd !== undefined) {
//     const resultEnd = hybridInterpolationBinarySearch(arrays, targetEnd);
//     console.log(`${label} - End value: ${targetEnd}`);
//     console.log(
//       `Index: ${resultEnd.index}, Iterations: ${resultEnd.iterations}`
//     );
//   }
// }
