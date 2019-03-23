class WeightedQuickUnionUF {
  constructor(size) {
    this.id = new Array(size).fill(-1)
  }

  root(a) {
    if (this.id[a] < 0) return a

    return this.root(this.id[a])
  }

  isConnected(a, b) {
    return this.root(a) === this.root(b)
  }

  union(a, b) {
    if (a === b) return
    
    const rootA = this.root(a)
    const rootB = this.root(b)
    
    if (rootA === rootB) return
    
    if (this.id[rootA] === this.id[rootB]) {
      if (a > b) {
        this.id[rootA] = rootB
        this.id[rootB] -= 1
      } else {
        this.id[rootB] = rootA
        this.id[rootA] -= 1
      }
    } else if (this.id[rootA] > this.id[rootB]) {
      this.id[rootA] = rootB
    } else {
      this.id[rootB] = rootA
    }
  }
}
