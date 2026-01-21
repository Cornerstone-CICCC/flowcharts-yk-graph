import readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output })

const totalQuestions = Number(await rl.question("Enter total number of questions: "))
const correctAnswers = Number(await rl.question("Enter number of correct answers: "))

let marks = correctAnswers / totalQuestions

if (marks >= 0.8) {
  console.log("Grade A")
} else if (marks >= 0.6) {
  console.log("Grade B")
} else if (marks >= 0.4) {
  console.log("Grade C")
} else {
  console.log("No Grade")
}

rl.close()