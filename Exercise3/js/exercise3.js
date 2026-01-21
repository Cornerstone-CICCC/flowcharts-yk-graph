import readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output })

async function inputNumbers() {
  const x = Number(await rl.question("Enter x: "))
  const y = Number(await rl.question("Enter y: "))
  const z = Number(await rl.question("Enter z: "))
  return { x, y, z }
}

while (true) {
  const { x, y, z } = await inputNumbers()

  if (x === y && y === z && z === x) {
    console.log("At least two numbers are equal. Try again.")
    continue
  }

  if (x > y && x > z) {
    console.log("The largest number is ...", x)
  } else if (y > x && y > z) {
    console.log("The largest number is ...", y)
  } else {
    console.log("The largest number is ...", z)
  }
  break
}

rl.close()