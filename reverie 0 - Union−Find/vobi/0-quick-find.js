class QuickFindUF {
  constructor(size) {
    this.id = new Array(size)

    for (let i = 0; i < size; i++) {
      this.id[i] = i
    }
  }

  isConnected(a, b) {
    return this.id[a] === this.id[b]
  }

  union(a, b) {
    if (a === b) return

    const idA = this.id[a]
    const idB = this.id[b]

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === idA) this.id[i] = idB
    }
  }
}
