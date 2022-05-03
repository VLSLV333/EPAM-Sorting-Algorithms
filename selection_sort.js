// let count = 0
// function selectionSort(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//       let min = i;
   
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[min] > arr[j]) {
//           min = j;
//         }
//       }
   
//       const temp = arr[min];
//       arr[min] = arr[i];
//       arr[i] = temp;
//       count += 1
//     }
//     return count
//   }
   
//   const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
//   console.log(`Initial array:`, initData);
//   selectionSort(initData);
//   console.log(`Sorted array:`, initData);





// let count = 0
// function v (arr){
//     for (let i = 0; i < arr.length; i++){
//         let min = i
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[min] > arr[j]){
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//         count += 1
//     }
//     return count
// }

// const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];



// let count = 0;
// function v (arr){
//     for (let i = 0; i < arr.length; i++){
//         let min = i
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[min] > arr[j]){
//                 min = j
//             }
//         }
//         [arr[min],arr[i]] = [arr[i], arr[min]]
//         count +=1
//     }
//     return count
// }

// const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];