import { arr, bench, exchange } from './utils.ts'

const selectionSort = (arr: number[]) => {
  const arrayLength = arr.length

  for (let i = 0; i < arrayLength; i++) {
    let min = i
    for (let j = i + 1; j < arrayLength; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    exchange(arr, i, min)
  }
}


selectionSort(arr)

const result = bench(selectionSort, arr, 1000000)
console.log(result)
