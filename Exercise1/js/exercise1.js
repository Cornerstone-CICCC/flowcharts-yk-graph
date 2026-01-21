import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

function convertFeetToCentimeters(feet) {
  const centimeters = feet * 30
  return centimeters
}

const rl = readline.createInterface({ input, output })

const feetInput = await rl.question('Enter feet: ')
const lft = Number(feetInput)

const lcm = convertFeetToCentimeters(lft)

console.log('centimeters is ...', lcm)

rl.close()