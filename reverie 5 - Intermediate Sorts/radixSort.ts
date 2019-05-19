const getDigit = (num: number, i: number) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
const digitCount = (num: number) => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

const mostDigits = (nums: number[]) => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

const radixSort = (nums: number[]) => {
  const maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

radixSort([23, 345, 5467, 12, 2345, 9852])








