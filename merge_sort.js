function mergeSort(arr) {
    if (arr.length > 1) {
      const mean = Math.floor(arr.length / 2);
      const leftArr = arr.slice(0, mean);
      const rightArr = arr.slice(mean, arr.length);
   
      mergeSort(leftArr);  /*124, 235*/
      mergeSort(rightArr); /*456, 123, 756*/
   
      let i = 0;/*1*/
      let j = 0; /*1*/
      let k = 0; /*2*/
   
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i]/*235*/ < rightArr[j]/*123*/) {
          arr[k] = leftArr[i];
          i += 1;
        } else {
          arr[k] = rightArr[j];
          j += 1;
        }
   
        k += 1;
      }
   
      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i += 1;
        k += 1;
      }
   
      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j += 1;
        k += 1;
      }
    }
  }
   
//   const initData0 = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];

//   const initData1 = [108, 124, 235, 456, 123, 756, 476, 285, 998, 379, ];

const initData2 = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];










  console.log(`Initial array:`, initData);
  mergeSort(initData);
  console.log(`Sorted array:`, initData);