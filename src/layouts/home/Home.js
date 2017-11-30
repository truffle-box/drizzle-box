import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  constructor(props, context) {
    super(props)

    this.contracts = context.drizzle.contracts
    this.handleSetButton = this.handleSetButton.bind(this)
    this.handleSendTokens = this.handleSendTokens.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      tokenRecipientAddress: '',
      tokenTransferAmount: 0
    }
  }

  componentDidMount() {
    window.addEventListener('DrizzleReady', () => {
      // `Children.only` enables us not to add a <div /> for nothing
      return this.setState({ contractsReady: true })
    })
  }

  handleSetButton() {
    this.contracts.SimpleStorage.methods.set(8).send()
  }

  handleSendTokens() {
    this.contracts.TutorialToken.methods.transfer(this.state.tokenRecipientAddress, this.state.tokenTransferAmount).send()
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    // Loading states
    var storedData = 'Loading...'
    var tokenSymbol = ''
    var tokenSupply = 'Loading...'
    var tokenBalance = 'Loading...'

    if (this.props.drizzleStatus.initialized)
    {
      // SimpleStorage Vars
      storedData = this.contracts.SimpleStorage.methods.storedData.data()

      // TutorialToken Vars
      tokenSymbol = this.contracts.TutorialToken.methods.symbol.data()
      tokenSupply = this.contracts.TutorialToken.methods.totalSupply.data()
      tokenBalance = this.contracts.TutorialToken.methods.balanceOf.data(this.props.accounts[0])
    }

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Drizzle Gym</h1>
            <p>This is a React app that puts Drizzle through its paces.</p>
          </div>
        </div>

        <h2>SimpleStorage</h2>
        <p><strong>Stored Value</strong>: {storedData}</p>
        <button className="pure-button" type="button" onClick={this.handleSetButton}>Store Value of 8</button>

        <br/><br/>

        <h2>TutorialToken</h2>
        <p><strong>Total Supply</strong>: {tokenSupply} {tokenSymbol}</p>
        <p><strong>My Balance</strong>: {tokenBalance}</p>
        <h3>Send Tokens</h3>
        <form className="pure-form pure-form-stacked">
          <input name="tokenRecipientAddress" type="text" value={this.state.tokenRecipientAddress} onChange={this.handleInputChange} placeholder="Address" />
          <input name="tokenTransferAmount" type="number" value={this.state.tokenTransferAmount} onChange={this.handleInputChange} placeholder="Amount" />
          <button className="pure-button" type="button" onClick={this.handleSendTokens}>Send Tokens to {this.state.tokenRecipientAddress}</button>
        </form>
      </main>
    )
  }
}

Home.contextTypes = {
  drizzle: PropTypes.object
}

export default Home
