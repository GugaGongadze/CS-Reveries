class QuickFindUF {
  constructor(N) {
    this.id = new Array(N)

    for (let i = 0; i < N; i++) {
      this.id[i] = i
    }
  }

  connected(p, q) {
    return this.id[p] == this.id[q]
  }

  union(p, q) {
    const pid = this.id[p]
    const qid = this.id[q]

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pid) this.id[i] = qid
    }
  }
}


const a = new QuickFindUF(6)
a.connected(3, 4)

a.union(3, 4)
