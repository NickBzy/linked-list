import { Node } from "./Node.mjs"

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  prepend(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head.value
  }

  getTail() {
    return this.tail.value
  }

  at(index) {
    let trackIndex = 0
    let track = this.head
    while (trackIndex !== index) {
      track = track.next
      trackIndex += 1
    }
    return track.value
  }

  pop() {
    const last = this.tail
    let beforelast = this.head
    while (beforelast.next.next !== null) {
      beforelast = beforelast.next
    }
    beforelast.next = null
    this.tail = beforelast
    return last.value
  }

  contains(value) {
    let track = this.head
    while (track.next !== null) {
      if (track.value === value) return true
      track = track.next
    }
    return false
  }

  find(value) {
    let track = this.head
    let index = 0
    while (track.next !== null) {
      if (track.value === value) return index
      track = track.next
      index += 1
    }
  }

  toString() {
    let track = this.head
    let str = ""
    while (track !== null) {
      str += "( " + track.value + " )" + " -> "
      track = track.next
    }
    str += "null"
    return str
  }
}
