function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
   
    if (left < n && arr[i] < arr[left]) {
      largest = left;
    }
   
    if (right < n && arr[largest] < arr[right]) {
      largest = right;
    }
   
    if (largest != i) {
      const temp = arr[largest];
      arr[largest] = arr[i];
      arr[i] = temp;
   
      heapify(arr, n, largest);
    }
  }
   
  function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
   
    for (let i = arr.length - 1; i >= 1; i--) {
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
   
      heapify(arr, i, 0);
    }
  }
   
  const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
  console.log(`Initial array:`, initData);
  heapSort(initData);
  console.log(`Sorted array:`, initData);