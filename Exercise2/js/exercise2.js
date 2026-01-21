import readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

function culclateArea(width, height) {
  return width * height
}

const rl = readline.createInterface({ input, output })

const widthInput = await rl.question("Enter width: ")
const width = Number(widthInput)

const lengthInput = await rl.question("Enter length: ")
const length = Number(lengthInput)

const area = culclateArea(width, length)

console.log("Area is ...", area)

rl.close()