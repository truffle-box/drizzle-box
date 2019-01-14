import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import PropTypes from 'prop-types'
import logo from '../../logo.png'
import addedContractAbi from './addedContractAbi';

const contractName = "AddedToken";
class Home extends Component {
  state = {
    addedContractAddress: '',
    contractNameToDelete: ''
  }

  handleAddedContractAddressChange = (event) => this.setState({ addedContractAddress: event.target.value })
  handleContractNameToDeleteChange = (event) => this.setState({ contractNameToDelete: event.target.value })

  addContract = () => {
    if (!this.props.contracts[contractName]) {
      this.context.drizzle.addContract({
        contractName,
        web3Contract: new this.context.drizzle.web3.eth.Contract(addedContractAbi, this.state.addedContractAddress)
      })
    }
  }

  deleteContract = () => {
    if (this.props.contracts[contractName]) {
      this.context.drizzle.deleteContract(contractName)
    }
  }

  renderAddedContract = () => {
    if (!this.props.contracts[contractName]) return null;

    return (
      <span>
        <p>
          <strong>Total Supply</strong>:{" "}
          <ContractData
            contract={contractName}
            method="totalSupply"
            methodArgs={[{ from: this.props.accounts[0] }]}
          />{" "}
          <ContractData contract={contractName} method="symbol" hideIndicator />
        </p>
        <p>
          <strong>My Balance</strong>:{" "}
          <ContractData
            contract={contractName}
            method="balanceOf"
            methodArgs={[this.props.accounts[0]]}
          />{" "}
          <ContractData contract={contractName} method="symbol" hideIndicator />
        </p>
      </span>
    );
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            <br /><br />
          </div>

          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br /><br />
          </div>

          <div className="pure-u-1-1">
            <h2>SimpleStorage</h2>
            <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
            <p><strong>Stored Value</strong>: <ContractData contract="SimpleStorage" method="storedData" /></p>
            <ContractForm contract="SimpleStorage" method="set" />

            <br /><br />
          </div>

          <div className="pure-u-1-1">
            <h2>TutorialToken</h2>
            <p>Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator. We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.</p>
            <p><strong>Total Supply</strong>: <ContractData contract="TutorialToken" method="totalSupply" methodArgs={[{ from: this.props.accounts[0] }]} /> <ContractData contract="TutorialToken" method="symbol" hideIndicator /></p>
            <p><strong>My Balance</strong>: <ContractData contract="TutorialToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h3>Send Tokens</h3>
            <ContractForm contract="TutorialToken" method="transfer" labels={['To Address', 'Amount to Send']} />

            <br /><br />
          </div>

          <div className="pure-u-1-1">
            <h2>Dynamically Added Contract</h2>
            <p>
              Click the button below to dynamically add the token contract
              and check your balance (of tokens). Contract's name will be AddedToken.
            </p>
            <input type="text" placeholder="Contract to add" value={this.state.addedContractAddress} onChange={this.handleAddedContractAddressChange} />
            <button
              className="pure-button"
              onClick={this.addContract}
            >
              Add Token Contract
            </button>
            {this.renderAddedContract()}

            <input type="text" placeholder="Contract name to delete" value={this.state.contractNameToDelete} onChange={this.handleContractNameToDeleteChange} />
            <button
              className="pure-button"
              onClick={this.deleteContract}
            >
              Delete contract
            </button>

            <p>Log Drizzle object to the console to compare states before and after adding/deleting a contract.</p>
            <button
              className="pure-button"
              onClick={() => console.log(this.context.drizzle)}
            >
              Log Drizzle
            </button>
            <br />
            <br />
          </div>

          <div className="pure-u-1-1">
            <h2>ComplexStorage</h2>
            <p>Finally this contract shows data types with additional considerations. Note in the code the strings below are converted from bytes to UTF-8 strings and the device data struct is iterated as a list.</p>
            <p><strong>String 1</strong>: <ContractData contract="ComplexStorage" method="string1" toUtf8 /></p>
            <p><strong>String 2</strong>: <ContractData contract="ComplexStorage" method="string2" toUtf8 /></p>
            <strong>Single Device Data</strong>: <ContractData contract="ComplexStorage" method="singleDD" />

            <br /><br />
          </div>
        </div>
      </main >
    )
  }
}

export default Home

Home.contextTypes = {
  drizzle: PropTypes.object,
  drizzleStore: PropTypes.object
};
