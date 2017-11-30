import React, { Component, Children } from 'react'

class Loading extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var loadingClasses = 'container loading-screen'

    if (this.props.web3.status === 'failed')
    {
      return(
        <main className={loadingClasses}>
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>!!!</h1>
              <h2>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.</h2>
            </div>
          </div>
        </main>
      )
    }

    if (this.props.drizzleStatus.initialized)
    {
      var loadingClasses = 'container loading-screen loaded'
      return Children.only(this.props.children)
    }

    return(
      <main className={loadingClasses}>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Loading Dapp...</h1>
          </div>
        </div>
      </main>
    )
  }
}

export default Loading
