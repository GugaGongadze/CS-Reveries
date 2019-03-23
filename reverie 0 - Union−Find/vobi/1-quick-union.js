class QuickUnionUF {
  constructor(size) {
    this.id = new Array(size)

    for (let i = 0; i < size; i++) {
      this.id[i] = i
    }
  }

  root(a) {
    if (this.id[a] === a) return a

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

    this.id[rootA] = rootB
  }
}
