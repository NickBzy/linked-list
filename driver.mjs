import { LinkedList } from "./LinkedList.mjs"

const list = new LinkedList()

list.append("dog")
list.append("cat")
list.append("parrot")
list.append("hamster")
list.append("snake")
list.append("turtle")

console.log(list.toString())

list.prepend("llama")

console.log(list.toString())
console.log("Size: " + list.size())
console.log("Head: " + list.getHead())
console.log("Tail: " + list.getTail())
console.log("Element at index 2 (3rd): " + list.at(2))
console.log("Pop: " + list.pop())
console.log("Updated List: " + list.toString())
console.log("Contains (turtle)? " + list.contains("turtle"))

console.log("Contains (cat)? " + list.contains("cat"))
console.log("What index is hamster in? " + list.find("hamster"))
