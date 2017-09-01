import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// p2pkh
const P2PKH_RAW_TX = "0100000001893a4dcefe943a472110185a0df6ef26296525f0a9c65979b4843a1c253e871a000000006b483045022100b50d5f3aeb4ae622f84c5094eda8b5af365259722d14944da5d0419b4abdddd4022037b0471ece3834cecb331731598379a80320fe85f863d1972301f75222287628012103234e4bff961481082757ae63b952f4bddbce0d36b529a52bb8bc0f33b556476affffffff02404b4c00000000001976a91495cd25978ee574b6826e66c0bad2ce0688a118a088ac60a4ab9a000000001976a914bdc0c9a9ffc22453b7470baddcc8079f2b628b5388ac00000000"


// const RAW_TX =  "0100000000010115e180dc28a2327e687facc33f10f2a20da717e5548406f7ae8b4c811072f8560100000000ffffffff0100b4f505000000001976a9141d7cd6c75c2e86f4cbf98eaed221b30bd9a0b92888ac02483045022100df7b7e5cda14ddf91290e02ea10786e03eb11ee36ec02dd862fe9a326bbcb7fd02203f5b4496b667e6e281cc654a2da9e4f08660c620a1051337fa8965f727eb19190121038262a6c6cec93c2d3ecd6c6072efea86d02ff8e3328bbd0242b20af3425990ac00000000"

// # version (4 byte, hex, little-endian)
// 01000000

// # marker (1 byte, hex)
// 00

// # flag (1 byte, hex)
// 01

// input count (VarInt)
// 01

// # txid (32 bytes, hex, little-endian)
// 15e180dc28a2327e687facc33f10f2a20da717e5548406f7ae8b4c811072f856

// # vout (4 bytes, hex, little-endia)
// 01000000

// # scriptSig size (VarInt)
// 00

// # sequence (4 bytes, hex, little-endian)
// ffffffff

// # output count (VarInt)
// 01

// # value (8 bytes, hex, little-endian)
// 00b4f50500000000

// # scriptPubKey size (VarInt)
// 19

// # scriptPubKey (hex)
// 76a9141d7cd6c75c2e86f4cbf98eaed221b30bd9a0b92888ac

// 02
// 48
// 3045022100df7b7e5cda14ddf91290e02ea10786e03eb11ee36ec02dd862fe9a326bbcb7fd02203f5b4496b667e6e281cc654a2da9e4f08660c620a1051337fa8965f727eb191901
// 21
// 038262a6c6cec93c2d3ecd6c6072efea86d02ff8e3328bbd0242b20af3425990ac

// # locktime (4 bytes, hex, little-endian)
// 00000000

function decodeRawTx(text) {
  const rawTx = text.slice().split("")
  const version = rawTx.splice(0, 8).join("")
  const inputCount = rawTx.splice(0, 2).join("")

  let inputs = []
  for (let i = 0; i < parseInt(inputCount, 16); i++) {
    const txId = rawTx.splice(0, 64).join("")
    const vout = rawTx.splice(0, 8).join("")
    const scriptSigSize = rawTx.splice(0, 2).join("")
    const scriptSig = rawTx.splice(0, 2 * parseInt(scriptSigSize, 16)).join("")
    const sequence = rawTx.splice(0, 8).join("")

    inputs.push({
      txId,
      vout,
      scriptSigSize,
      scriptSig,
      sequence
    })
  }

  const outputCount = rawTx.splice(0, 2).join("")

  let outputs = []
  for (let i = 0; i < parseInt(outputCount, 16); i++) {
    const value = rawTx.splice(0, 16).join("")
    const scriptPubKeySize = rawTx.splice(0, 2).join("")
    const scriptPubKey = rawTx.splice(0, 2 * parseInt(scriptPubKeySize, 16)).join("")

    outputs.push({
      value,
      scriptPubKeySize,
      scriptPubKey
    })
  }

  const locktime = rawTx.slice(0, 8).join("")

  return {
    version,
    inputCount,
    inputs,
    outputCount,
    outputs,
    locktime,
  }
}

function groupBy(n, xs) {
  return xs.reduce((z, x, i) => {
    if (i % n  == 0) {
      return [[x], ...z]
    } else {
      z[0].push(x)
      return z
    }
  }, []).reverse()
}

function swapEndian(hexStr) {
  return groupBy(2, hexStr.split("")).map(xs => xs.join("")).reverse().join("")
}

const Row = ({title, subtitle, children}) => (
  <div style={{display: "flex", flexDirection: "column"}}>
    <div style={{
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: "rgb(128, 128, 128)",
      borderStyle: "solid",
      color: "rgb(55, 61, 66)",
      fontSize: 15,
      fontWeight: "bold",
    }}>
      {title}
      <span style={{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "normal",
        color: "grey"
      }}>
        {subtitle}
      </span>
    </div>
    {children}
  </div>
)

const Examples = ({onClick}) => (
  <ul>
    <li>
      <span style={{
        color: "rgb(55, 61, 66)",
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 10,
      }}>
        P2PKH
      </span>
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          onClick(P2PKH_RAW_TX)
        }}
      >
        {P2PKH_RAW_TX.substring(0, 70)}...
      </a>
    </li>
  </ul>
)

const RawTxForm = ({onChange, value, onSubmit,}) => (
  <form onSubmit={onSubmit}>
    <div className="form-group">
      <label
        htmlFor="rawTx"
        style={{
          color: "rgb(55, 61, 66)",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Raw Tx
      </label>
      <textarea
        id="rawTx"
        className="form-control"
        rows={5}
        onChange={onChange}
        value={value}
      />
    </div>
    <button
      type="button"
      className="btn btn-success"
      onClick={onSubmit}
    >
      Decode
    </button>
  </form>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rawTx: P2PKH_RAW_TX,
      ...decodeRawTx(P2PKH_RAW_TX)
    }
  }

  render() {
    const {
      version,
      inputCount,
      inputs,
      outputCount,
      outputs,
      locktime,
    } = this.state

    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Decode Raw Transaction</h2>
        </div>

        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 20,
          }}
        >

          <h4>Examples</h4>
          <Examples
            onClick={rawTx => this.setState({
              rawTx,
              ...decodeRawTx(rawTx)
            })}
          />

          <RawTxForm
            value={this.state.rawTx}
            onChange={e => this.setState({rawTx: e.target.value})}
            onSubmit={e => {
              e.preventDefault
              this.setState({
                ...decodeRawTx(this.state.rawTx)
              })
            }}
          />

          <Row
            title="Version"
            subtitle="4 bytes"
          >
            {version}
          </Row>
          <Row
            title="Input Count"
            subtitle="VarInt"
          >
            {inputCount}
          </Row>

          <Row title="Inputs">
            <div style={{marginLeft: 25}}>
              {inputs.map((input, i) => (
                <Row key={i} title={i}>
                  <div style={{marginLeft: 25}}>
                    <Row
                      title="txid"
                      subtitle="32 bytes"
                    >
                      <div style={{
                        display: "flex",
                        flexDirection: "column",
                      }}>
                        <span>{input.txId}</span>
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "grey"
                          }}
                        >
                          (Big Endian)
                        </span>
                        <span>{swapEndian(input.txId)}</span>
                      </div>
                    </Row>
                    <Row
                      title="vout"
                      subtitle="4 bytes"
                    >
                      {input.vout}
                    </Row>
                    <Row
                      title="scriptSig size"
                      subtitle="VarInt"
                    >
                      {input.scriptSigSize}
                    </Row>
                    <Row
                      title="scriptSig"
                    >
                      <div style={{
                        maxWidth: 600,
                        wordWrap: "break-word"
                      }}>
                        {input.scriptSig}
                      </div>
                    </Row>
                    <Row
                      title="sequence"
                      subtitle="4 bytes"
                    >
                      {input.sequence}
                    </Row>
                  </div>
                </Row>
              ))}
            </div>
          </Row>

          <Row
            title="Output Count"
            subtitle="VarInt"
          >
            {outputCount}
          </Row>

          <Row title="Outputs">
            <div style={{marginLeft: 25}}>
              {outputs.map((output, i) => (
                <Row key={i} title={i}>
                  <div style={{marginLeft: 25}}>
                    <Row
                      title="value"
                      subtitle="8 bytes"
                    >
                      {output.value}
                    </Row>
                    <Row
                      title="scriptPubKey Size"
                      subtitle="VarInt"
                    >
                      {output.scriptPubKeySize}
                    </Row>
                    <Row
                      title="scriptPubKey"
                    >
                      {output.scriptPubKey}
                    </Row>
                  </div>
                </Row>
              ))}
            </div>
          </Row>

          <Row
            title="Locktime"
            subtitle="4 bytes"
          >
            {locktime}
          </Row>

        </div>
      </div>
    )
  }
}

export default App
