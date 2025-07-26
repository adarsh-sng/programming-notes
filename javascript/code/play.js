import ansi from 'ansi-escape-sequences'
import { setTimeout  } from 'node:timers/promises'
console.log('Pending')
await setTimeout(1000)

process.stdout.write(ansi.cursor.up(1) + ansi.erase.inLine(2))
console.log('In progress')
await setTimeout(5000)

process.stdout.write(ansi.cursor.up(1) + ansi.erase.inLine(2))
console.log('Complete')