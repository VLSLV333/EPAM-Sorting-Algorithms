function countingSort(arr, place) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);
   
    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / place) % 10] += 1;
    }
   
    for (let i = 1; i <= 10; i++) {
      count[i] += count[i - 1];
    }
   
    let i = arr.length - 1;
   
    while (i >= 0) {
      const index = Math.floor(arr[i] / place) % 10;
      output[count[index] - 1] = arr[i];
      count[index] -= 1;
   
      i -= 1;
    }
   
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  }
   
  function radixSort(arr) {
    const max = Math.max(...arr);
    let place = 1;
   
    while (Math.floor(max / place) > 0) {
      countingSort(arr, place);
      place *= 10;
    }
  }
   
  const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
  console.log(`Initial array:`, initData);
  radixSort(initData);
  console.log(`Sorted array:`, initData);