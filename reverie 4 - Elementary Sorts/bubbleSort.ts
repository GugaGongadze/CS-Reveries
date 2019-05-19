import { exchange } from './utils.ts'

const bubbleSort = (arr: number[]) => {
  let noSwaps: boolean

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        exchange(arr, i, j)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
