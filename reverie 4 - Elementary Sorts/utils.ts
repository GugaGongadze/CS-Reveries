export const exchange = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

export const bench = (func: (arr: number[]) => void, input: number[], iterations: number): number => {
  const start = Date.now()

  for (let i = 0; i < iterations; i++) {
    func(input)
  }

  const finish = Date.now()

  return (finish - start)
}

export const arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

