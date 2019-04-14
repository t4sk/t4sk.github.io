import React from "react"
import PostLayout from "../../PostLayout"
import Image from "../../Image"

// import images
import img_10_get_ether_png from  "./images/10_get_ether.png"
import img_12_faucet_png from  "./images/12_faucet.png"
import img_13_balance_png from  "./images/13_balance.png"
import img_1_welcome_png from  "./images/1_welcome.png"
import img_2_meta_mask_icon_png from  "./images/2_meta_mask_icon.png"
import img_3_create_wallet_png from  "./images/3_create_wallet.png"
import img_5_seed_png from  "./images/5_seed.png"
import img_7_account_png from  "./images/7_account.png"
import img_8_ropsten_png from  "./images/8_ropsten.png"
import img_9_deposit_png from  "./images/9_deposit.png"

// create map from path to image
const images = {
  "./images/10_get_ether.png": img_10_get_ether_png,
  "./images/12_faucet.png": img_12_faucet_png,
  "./images/13_balance.png": img_13_balance_png,
  "./images/1_welcome.png": img_1_welcome_png,
  "./images/2_meta_mask_icon.png": img_2_meta_mask_icon_png,
  "./images/3_create_wallet.png": img_3_create_wallet_png,
  "./images/5_seed.png": img_5_seed_png,
  "./images/7_account.png": img_7_account_png,
  "./images/8_ropsten.png": img_8_ropsten_png,
  "./images/9_deposit.png": img_9_deposit_png,
}

export default function () {
  const title = "Solidity by Example - Part 0 - Setting Up MetaMask"
  const date = "2019-04-11"
  const lang = "en"

  return (
    <PostLayout title={title} lang={lang} date={date}>
      <p>This is the first post of a series from <a href="https://solidity-by-example.org" target="__blank" rel="noopener noreferrer">Solidity By Example</a>,
where we learn how to program smart contracts using <a href="https://solidity.readthedocs.io" target="__blank" rel="noopener noreferrer">Solidity</a>.</p>
<p>Interacting with smart contracts on the Ethereum blockchain costs Ether
so we need a wallet. Let&#39;s install <a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a>.</p>
<h2 id="setting-up-metamask">Setting up MetaMask</h2>
<hr/>
<p>First install <a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a>. You
should see something like this.</p>
<p><Image src={images["./images/1_welcome.png"]} alt="welcome to metamask"/></p>
<p>In the top right corner or your browser you should also see a fox icon.</p>
<p><Image src={images["./images/2_meta_mask_icon.png"]} alt="metamask icon"/></p>
<p>Click <code>CREATE A WALLET</code> and then type your password.</p>
<p><Image src={images["./images/3_create_wallet.png"]} alt="create a wallet"/></p>
<p><strong>Important</strong> Backup your secret words in a safe and secret
place. Anyone with this secret words can steal your Ether.</p>
<p><Image src={images["./images/5_seed.png"]} alt="create a wallet"/></p>
<p>Congratulations! You have successfully setup MetaMask.</p>
<p><Image src={images["./images/7_account.png"]} alt="account"/></p>
<h2 id="get-ether-from-test-network">Get Ether from Test Network</h2>
<hr/>
<p>Now let&#39;s get some free Ether available on the test network. Switch
networks to <em>Ropsten Test Network</em>.</p>
<p><Image src={images["./images/8_ropsten.png"]} alt="ropsten test net"/></p>
<p>Click <code>DEPOSIT</code></p>
<p><Image src={images["./images/9_deposit.png"]} alt="deposit"/></p>
<p>Next click <code>GET ETHER</code></p>
<p><Image src={images["./images/10_get_ether.png"]} alt="get ether"/></p>
<p>Click <code>request 1 ether from faucet</code> and wait a few minutes.
You should see a link to the transaction and your wallet should now have
1 Ether.</p>
<p><Image src={images["./images/12_faucet.png"]} alt="faucet"/></p>
<p><Image src={images["./images/13_balance.png"]} alt="balance"/></p>
<h2 id="recap">Recap</h2>
<hr/>
<p><a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> is an Ethereum wallet that will enable us to deploy and interact with smart contracts on the blockchain. <br />
We learned how to install <a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> and fund our wallet with some free Ether available on <em>Ropsten</em> test network.</p>

    </PostLayout>
  )
}
