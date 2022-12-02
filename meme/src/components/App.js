import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Meme from '../abis/Meme.json'
import Navbar from './Navbar';
import Login from './Login';
import Regi from './Regi';
import Info from './Info';


const projectId = "2EDokLKSoFyQlXvH3oEcFrUcxnT";   
const projectSecret = "a05b10b7eee81c270111c3a45cf92aee";  
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const ipfsClient = require('ipfs-http-client')


const ipfs = ipfsClient({ 
  host: "ipfs.infura.io",
   port: 5001, 
   protocol: "https",
   apiPath: "/api/v0",
   headers: {
       authorization: auth,
   }, 
  });



class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.eth_requestAccounts
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Meme.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Meme.abi, networkData.address)
      this.setState({ contract })
      const memeHash = await contract.methods.get().call()
      this.setState({ memeHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      memeHash: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }
       this.state.contract.methods.set(result[0].hash).send({ from: this.state.account }).then((r) => {
        console.log("Successful..")
         return this.setState({ memeHash: result[0].hash })
         
       })
    })
  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="www.jnu.ac.bd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jagannath University
          </a>
          <ul className='navbar-nav px-3'>
            <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
              <small className='text-white'>{this.state.account}</small>
            </li>
          </ul>
        </nav>
       
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.jnu.ac.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {/* <img src={'https://ipfs.infura.io/ipfs/${this.state.memeHash}'} />  */}
                </a>
                <p>&nbsp;</p>
               
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
        <Login />
        <Regi />
        <Info />
      </div>
    );
  }
}

export default App;