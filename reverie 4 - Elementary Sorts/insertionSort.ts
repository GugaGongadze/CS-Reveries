import { arr, exchange } from './utils.ts'

export const insertionSort = (arr: number[]) => {
  const arrayLength = arr.length
  for (let i = 0; i < arrayLength; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        exchange(arr, j, j - 1)
      } else { break }
    }
  }
}

insertionSort(arr)
