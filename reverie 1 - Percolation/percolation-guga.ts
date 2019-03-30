//  Estimate the value of the percolation threshold via Monte Carlo simulation. 
class PercolationGuga {
  system: boolean[][]
  private openSites: number = 0

  constructor(n: number) {
    this.system = []

    for (let i = 0; i < n; i++) {
      this.system[i] = []

      for (let j = 0; j < n; j++) {
        this.system[i][j] = false
      }
    }
  }

  open(row: number, col: number) {
    if (this.system[row][col] === false) {
      this.system[row][col] = true
      this.openSites += 1
    }
  }

  isOpen(row: number, col: number): boolean {
    return this.system[row][col]
  }

  numberOfOpenSites(): number {
    return this.openSites
  }

  percolates(): boolean {
    const lastSystemIndex = this.system.length - 1
    const lastRow = this.system[lastSystemIndex]

    for (const index in lastRow) {
      if (lastRow[index]) {
        let xIndex = index
        let yIndex = lastSystemIndex
        const indices: string[] = []
        return this.hasPercolatedNeighbor(yIndex, Number(xIndex), indices)
      }
    }

    return false
  }

  hasPercolatedNeighbor(row: number, col: number, indices: string[]): boolean {
    if (row < 0 || col < 0 || row > this.system.length - 1 || col > this.system.length - 1 || !this.system[row][col]) return false
    if (row === 0 && this.system[row][col]) return true

    const indexString = String(row) + String(col)
    if (indices.includes(indexString)) return false
    console.table(indices)

    const checkedIndices = [...indices, indexString]

    if (row === this.system.length) {
      return this.hasPercolatedNeighbor(row - 1, col, checkedIndices)
    } else {
      return (
        this.hasPercolatedNeighbor(row, col - 1, checkedIndices) ||
        this.hasPercolatedNeighbor(row - 1, col, checkedIndices) ||
        this.hasPercolatedNeighbor(row, col + 1, checkedIndices) ||
        this.hasPercolatedNeighbor(row + 1, col, checkedIndices)
      )
    }
  }
}

const percolationExperiment = (gridSize: number, testSample: number) => {
  let percolationSum = 0
  for (let i = 0; i < testSample; i++) {
    const perc = new PercolationGuga(gridSize)
    let percolatedStep = 0
    while (!perc.percolates()) {
      perc.open(Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize))
      percolatedStep = perc.numberOfOpenSites()
    }
    const percolationThreshold = percolatedStep / (gridSize * gridSize)

    percolationSum += percolationThreshold
  }


  return percolationSum / testSample
}

console.log(percolationExperiment(20, 1))
