const merge = (arr1: number[], arr2: number[]) => {
  const results = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

mergeSort([10, 24, 76, 73])
