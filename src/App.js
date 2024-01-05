import {Component} from 'react'
import LettersCalculator from './components/LettersCalculator'

import './App.css'

class App extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <body>
        <LettersCalculator count={count} />
      </body>
    )
  }
}

export default App
