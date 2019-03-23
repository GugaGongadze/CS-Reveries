class WeightedQuickUnionPathCompressionUF {
  constructor(N) {
    this.id = new Array(N)
    this.sz = new Array(N).fill(1)

    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  root(i) {
    while (i != this.id[i]) {
      this.id[i] = this.id[this.id[i]]
      i = this.id[i]
    }

    return i
  }

  connected(p, q) {
    return this.root(p) === this.root(q)
  }

  union(p, q) {
    const i = this.root(p)
    const j = this.root(q)

    if (i === j) return
    
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    } else { 
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
  }
}
