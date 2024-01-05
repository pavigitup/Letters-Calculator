import './index.css'

const LettersCalculator = props => {
  const {count} = props

  return (
    <div className="main-con">
      <div className="card-1">
        <h1 className="card-head">Calculate the Letters you enter</h1>
        <p className="card-para">Enter the phrase</p>
        <input
          type="text"
          className="input-calc"
          placeholder="Enter the phrase"
        />
        <div>
          <button className="btn-3" type="button">
            No.of letters: {count}
          </button>
        </div>
      </div>
      <div className="card-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="images"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
