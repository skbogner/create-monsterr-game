import createClient from 'monsterr'
import stages from './src/stages'

let options = {
  canvasBackgroundColor: 'blue'
}

let events = {}
let commands = {}

createClient({
  events,
  commands,
  options,
  stages
})