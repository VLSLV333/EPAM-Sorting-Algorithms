function partition(arr, left, right) {
    let i = left - 1;
    let key = arr[right];
   
    for (let j = left; j <= right; j++) {
      if (arr[j] < key) {
        i += 1;
   
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
   
    const temp = arr[right];
    arr[right] = arr[i + 1];
    arr[i + 1] = temp;
    return i + 1;
  }
   
  function quickSort(arr, left, right) {
    if (left < right) {
      const keyIndex = partition(arr, left, right);
      quickSort(arr, left, keyIndex - 1);
      quickSort(arr, keyIndex + 1, right);
    }
  }
   
  const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
  console.log('Initial array:', initData);
  quickSort(initData, 0, initData.length-1);
  console.log(`Sorted array:`, initData);