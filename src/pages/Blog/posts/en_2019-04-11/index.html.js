import React from "react"
import { Divider } from "semantic-ui-react"
import Link from "../../../../components/Link"
import PostImage from "../../PostImage"
import img1 from "./1.png"
import img_2_meta_mask_icon from "./2-meta-mask-icon.png"
import img_3_create_wallet from "./3-create-wallet.png"
import img5 from "./5.png"
import img_7_account from "./7-account.png"
import img_8_ropsten from "./8-ropsten.png"
import img_9_deposit from "./9-deposit.png"
import img_10_get_ether from "./10-get-ether.png"
import img_12_faucet from "./12-faucet.png"
import img13 from "./13.png"

export default function() {
  return (
    <div>
      <h1>Solidity by Example - Part 0 - Setting Up MetaMask</h1>
      <p>
        <em>2019-04-11</em>
      </p>
      <Divider />
      <p>
        This is the first post of a series from{" "}
        <Link href="https://solidity-by-example.org">Solidity By Example</Link>,
        where we learn how to program smart contracts using{" "}
        <Link href="https://solidity.readthedocs.io">Solidity</Link>.
      </p>
      <p>
        Interacting with smart contracts on the Ethereum blockchain costs Ether
        so we need a wallet.
        <br />
        Let&#39;s install <Link href="https://metamask.io">MetaMask</Link>.
      </p>

      <h2 id="setting-up-metamask">Setting up MetaMask</h2>
      <Divider />
      <p>
        First install <Link href="https://metamask.io">MetaMask</Link>. You
        should see something like this.
      </p>
      <p>
        <PostImage src={img1} alt="welcome to metamask" />
      </p>
      <p>
        In the top right corner or your browser you should also see a fox icon.
      </p>
      <p>
        <PostImage src={img_2_meta_mask_icon} alt="metamask icon" />
      </p>
      <p>
        Click <code>CREATE A WALLET</code> and then type your password.
      </p>
      <p>
        <PostImage src={img_3_create_wallet} alt="create a wallet" />
      </p>
      <p>
        <strong>Important</strong> Backup your secret words in a safe and secret
        place. Anyone with this secret words can steal your Ether.
        <br />
      </p>
      <p>
        <PostImage src={img5} alt="seed" />
      </p>
      <p>Congratulations! You have successfully setup MetaMask.</p>
      <p>
        <PostImage src={img_7_account} alt="account" />
      </p>

      <h2 id="get-ether-from-test-network">Get Ether from Test Network</h2>
      <Divider />
      <p>
        Now let&#39;s get some free Ether available on the test network. Switch
        networks to <em>Ropsten Test Network</em>.
      </p>
      <p>
        <PostImage src={img_8_ropsten} alt="test net" />
      </p>
      <p>
        Click <code>DEPOSIT</code>
      </p>
      <p>
        <PostImage src={img_9_deposit} alt="deposit" />
      </p>
      <p>
        Next click <code>GET ETHER</code>
      </p>
      <p>
        <PostImage src={img_10_get_ether} alt="get ether" />
      </p>
      <p>
        Click <code>request 1 ether from faucet</code> and wait a few minutes.
        You should see a link to the transaction and your wallet should now have
        1 Ether.
      </p>
      <p>
        <PostImage src={img_12_faucet} alt="faucet" />
      </p>
      <p>
        <PostImage src={img13} alt="funded" />
      </p>

      <h2 id="recap">Recap</h2>
      <Divider />
      <p>
        <Link href="https://metamask.io">MetaMask</Link> is an Ethereum wallet
        that will enable us to deploy and interact with smart contracts on the
        blockchain. <br />
        We learned how to install{" "}
        <Link href="https://metamask.io">MetaMask</Link> and fund our wallet
        with some free Ether available on <em>Ropsten</em> test network.
      </p>
    </div>
  )
}
