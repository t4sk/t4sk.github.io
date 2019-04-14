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
  const title = "Solidity 入門 - パート 0 - MetaMaskの設定"
  const date = "2019-04-11"
  const lang = "jp"

  return (
    <PostLayout title={title} lang={lang} date={date}>
      <p>これは <a href="https://solidity-by-example.org" target="__blank" rel="noopener noreferrer">Solidity By Example</a> からのシリーズの最初の投稿です。
<a href="https://solidity.readthedocs.io" target="__blank" rel="noopener noreferrer">Solidity</a> を使ってスマートコントラクトのプログラミングを一緒に学びましょう。</p>
<p>Ethereum のブロックチェーンでスマートコントラクトを動かすのに Ether が必要です。
イーサリアムのウォレット <a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> をインストールしましょう。</p>
<h2 id="metamask-メタマスク-の設定">MetaMask (メタマスク) の設定</h2>
<hr/>
<p>まずはじめに <a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> をインストールしてください。</p>
<p><Image src={images["./images/1_welcome.png"]} alt="welcome to metamask"/></p>
<p>ブラウザ右上にメタマスクのアイコンが表示されます。</p>
<p><Image src={images["./images/2_meta_mask_icon.png"]} alt="metamask icon"/></p>
<p><code>CREATE A WALLET</code>をクリックしてパスワードを入力してください。</p>
<p><Image src={images["./images/3_create_wallet.png"]} alt="create a wallet"/></p>
<p><strong>重要</strong> 12 の英単語（シード）をバックアップしてください。</p>
<p><Image src={images["./images/5_seed.png"]} alt="create a wallet"/></p>
<p>おめでとうございます。これで MetaMask のセットアップは完了です。</p>
<p><Image src={images["./images/7_account.png"]} alt="account"/></p>
<h2 id="テストネットワークから-ether-の入手">テストネットワークから Ether の入手</h2>
<hr/>
<p>それでは、テストネットワークで無料の Ether を入手しましょう。<em>Ropsten Test Network</em> を選択してください。</p>
<p><Image src={images["./images/8_ropsten.png"]} alt="ropsten test net"/></p>
<p><code>DEPOSIT</code>をクリックしてください。</p>
<p><Image src={images["./images/9_deposit.png"]} alt="deposit"/></p>
<p>次に <code>GET ETHER</code> をクリックしてください。</p>
<p><Image src={images["./images/10_get_ether.png"]} alt="get ether"/></p>
<p><code>request 1 ether from faucet</code>をクリックして、数分待ちます。
トランザクションへのリンクが表示され、ウォレットに Ether が追加されます。</p>
<p><Image src={images["./images/12_faucet.png"]} alt="faucet"/></p>
<p><Image src={images["./images/13_balance.png"]} alt="balance"/></p>
<h2 id="まとめ">まとめ</h2>
<hr/>
<p><a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> は Ethereum のウォレットで、ブロックチェーン上のスマートコントラクトとやり取りすることができます。 <br />
<a href="https://metamask.io" target="__blank" rel="noopener noreferrer">MetaMask</a> のインストール、<em>Ropsten</em> テストネットワークからの Ether の入手方法を紹介いたしました。</p>

    </PostLayout>
  )
}
