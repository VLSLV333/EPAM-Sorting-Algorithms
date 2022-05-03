function insertionSort(arr) {
    let count = 0;
   
    for (let i = 1; i < arr.length; i++) {
      const keyItem = arr[i];
      let j = i - 1;
   
      while (j >= 0 && keyItem < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        count += 1;
        j--;
      }
    }
   return count;
  }
   
  const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
  console.log(`Initial array:`, initData);
  const iterationsTestData = insertionSort(initData);
  console.log(`The number of permutations is: ${iterationsTestData}`, `\nSorted array:`, initData);