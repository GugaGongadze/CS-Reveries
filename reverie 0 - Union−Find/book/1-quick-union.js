class QuickUnionUF {
  constructor(N) {
    this.id = new Array(N)

    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  root(i) {
    while (i != this.id[i]) {
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

    this.id[i] = j
  }
}
