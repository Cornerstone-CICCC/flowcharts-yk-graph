import readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output })

async function inputNumbers() {
  const x = Number(await rl.question("Enter x: "))
  const y = Number(await rl.question("Enter y: "))
  const z = Number(await rl.question("Enter z: "))
  return { x, y, z }
}

function checkTriangle(x, y, z) {
  if (x + y > z && y + z > x && z + x > y) {
    return "possible"
  } else {
    return "not possible"
  }
}

const { x, y, z } = await inputNumbers()

console.log(checkTriangle(x, y, z))

rl.close()