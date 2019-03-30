class PercolationSoso {
  constructor (n) {
    this.n = n
    this.system = (new Array(n*n)).fill(-1)
    this.lengths = (new Array(n*n)).fill(0)
    this.counter = 0
  }

  rand() {
    return Math.floor(Math.floor(Math.random() * this.n))
  }

  toIndex(x, y) {
    return this.n*y + x
  }

  hasLeft(i) {
    return i % this.n !== 0
  }
  hasRight(i) {
    return i % this.n !== this.n - 1
  }
  hasTop(i) {
    return i / this.n >= 1
  }
  hasBottom(i) {
    return i / this.n < this.n - 1
  }

  getLeftIndex(i) {
    return this.hasLeft(i) ? i - 1 : null
  }

  getRightIndex(i) {
    return this.hasRight(i) ? i + 1 : null
  }

  getTopIndex(i) {
    return this.hasTop(i) ? i - this.n : null
  }

  getBottomIndex(i) {
    return this.hasBottom(i) ? i + this.n : null
  }

  isOpen(i) {
    return this.system[i] !== -1
  }

  getRootIndex(i) {
    let rootIndex = i
    while (typeof this.system[rootIndex] !== 'object') {
      rootIndex = this.system[rootIndex]
    }

    return rootIndex
  }

  open(x, y) {
    const i = this.toIndex(x, y)
    
    if (!this.isOpen(i)) {
      this.counter += 1

      this.system[i] = {
        isTop: !this.hasTop(i),
        isBottom: !this.hasBottom(i),
      }

      this.lengths[i] = 1
      this.connectToNeighbors(i)
    }
  }

  connectToNeighbors(i) {
    const leftIndex = this.getLeftIndex(i)
    this.connect(i, leftIndex)

    const rightIndex = this.getRightIndex(i)
    this.connect(i, rightIndex)
    
    const topIndex = this.getTopIndex(i)
    this.connect(i, topIndex)
    
    const bottomIndex = this.getBottomIndex(i)
    this.connect(i, bottomIndex)
  }

  connect(i, neighbor) {
    if (neighbor !== null && this.isOpen(neighbor)) {
      const iRoot = this.getRootIndex(i)
      const neighborRoot = this.getRootIndex(neighbor)

      if (iRoot !== neighborRoot) {
        if (this.lengths[iRoot] > this.lengths[neighborRoot]) {
          this.system[iRoot].isTop = this.system[neighborRoot].isTop || this.system[iRoot].isTop
          this.system[iRoot].isBottom = this.system[neighborRoot].isBottom || this.system[iRoot].isBottom
  
          this.system[neighborRoot] = iRoot
        } else {
          this.system[neighborRoot].isTop = this.system[iRoot].isTop || this.system[neighborRoot].isTop
          this.system[neighborRoot].isBottom = this.system[iRoot].isBottom || this.system[neighborRoot].isBottom
  
          this.system[iRoot] = neighborRoot
  
          if (this.lengths[iRoot] === this.lengths[neighborRoot]) {
            this.lengths[neighborRoot] = this.lengths[neighborRoot] + 1
          }
        }
      }
    }
  }

  isPercolate() {
    for (const item of this.system) {
      if (typeof item === 'object' && item.isTop === true && item.isBottom === true) {
        return this.counter
      }
    }

    return false
  }
}

const start = Date.now()
const length = 20
const p = new Percolation(length)

let counter = 0
while (!counter) {
  p.open(p.rand(), p.rand())
  counter = p.isPercolate()
}


// const systemToTable = (system, n) => {
//   const result = new Array(n)
  
//   for (let i = 0; i < system.length; i += n) {
//     const slice = system.slice(i, i + n).map(i => i !== -1)
//     result.push(slice)
//   }

//   return result
// }
// const table = systemToTable(p.system, length)

// console.table(table)
console.log(Date.now() - start, p.counter)
