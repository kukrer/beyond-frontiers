import { Navbar } from '../components';
import { contract_NFT_PRICE } from '../utils/constants';

export const FaqPage = () => {
	return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        
	      <section className="bg-opacity-50 bg-slate-500  flex w-full justify-center items-center">
	  		  <h1 className="text-2xl sm:text-3xl text-white  py-1">
    	Getting started&nbsp; <br/> (Quick quide)
    			</h1>
      		<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
<ul class="list-disc list-outside px-12">
<li>Before you can connect your MetaMask wallet to <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers </a>, you must first install the MetaMask extension in your browser or download the MetaMask app on your smartphone.</li>
<li>Once you have installed and set up your MetaMask wallet, you can open the <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers </a>. For mobile users, please open the website directly with the browser integrated in the MetaMask App.</li>
<li>Hit the Connect button in the navigating menu and then select MetaMask from the list.</li>
<li>This will automatically open MetaMask and you will be asked to connect your MetaMask wallet to <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers </a>.</li>
<li>Follow the prompts on the screen and you will be connected to the <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers NFT site </a>.</li>
<li>Once you are connected with your wallet, hit the buy button, and follow the steps in your MetaMask extension in your browser or in your MetaMask app on your smartphone.</li><br/>&nbsp;
</ul>
					</p>
				</section>
				
			</div>
      <div className="gradient-bg-welcome"><br/>&nbsp;
  	    <section className="bg-opacity-80 bg-slate-500  flex w-full justify-center items-center">
	  		  <h1 className="text-2xl sm:text-3xl text-white  py-1">
Detailed <br/>instructions&nbsp;
					</h1>
     		<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">

	<ul class="list-disc text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base px-20">
	<li>How to install MetaMask browser extension in 5 minutes
		<ul class="list-disc px-10">
		<li>Desktop
			<ol class="list-decimal px-10">
			<li>Visit the MetaMask website (https://metamask.io/)</li>
			<li>Install the browser extension</li>
			<li>Set your password</li>
			<li>Backup your recovery phrase (Very important!)</li>
			<li>Confirm your Recovery phrase</li>
			</ol>
		</li>
		</ul>
		<ul class="list-disc px-10">
		<li>Mobile
			<ol class="list-decimal px-10">
			<li>Visit the MetaMask website or App store (https://metamask.io/)</li>
			<li>Install the MetaMask App</li>
			<li>Set your password</li>
			<li>Backup your recovery phrase (Very important!)</li>
			<li>Confirm your Recovery phrase</li>
			</ol>
		</li>
		</ul>
	</li>
	</ul>

	<ul class="list-disc  text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base px-20">
	<li>How to connect MetaMask to <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers </a>
		<ul class="list-disc px-10">
		<li>Desktop
			<ol class="list-decimal px-10">
			<li>Go to <a href="/" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> Beyond Frontiers </a></li>
			<li>Select MetaMask</li>
			<li>Connect with MetaMask</li>
			</ol>
		</li>
		</ul>
		<ul class="list-disc px-10">
		<li>Mobile
			<ol class="list-decimal px-10">
			<li>Visit the website within the MetaMask App browser</li>
			<li>Select MetaMask</li>
			<li>Tap on <q>Connect</q></li>
			</ol>
		</li>
		</ul>
	</li>
	</ul>

<br/>&nbsp;
					</p>
				</section>
				
			</div>
      <div className="gradient-bg-welcome"><br/>&nbsp;
  	    <section className="bg-opacity-50 bg-slate-500  flex w-full justify-center items-center">
      		<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">

            <h3 className="md:text-xl text-xl  text-white-900">
What is an NFT?</h3>
NFT (Non-Fungible Tokens) are unique, easily verifiable digital assets that can represent items such as in-game assets, images, videos, music, and real-world assets. An NFT is a type of cryptographic token, but NFTs are different from cryptocurrencies because they are not interchangeable.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How do the Beyond Frontiers NFT work?</h3>
NFT (Non-Fungible Tokens) are unique, easily verifiable digital assets that can represent items such as in-game assets, images, videos, music, and real-world assets.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is the maximum quantity of Beyond Frontiers NFTs?</h3>
Beyond Frontiers NFT is limited to 4,000 NFTs<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How many Beyond Frontiers NFTs can I purchase?</h3>
This is limited to 10 NFTs per wallet.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
Will there be more NFTs from this collection in the future?</h3>
No, this is a limited edition.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
Is it useful to own more than 1 Beyond Frontiers NFT?</h3>
The more Beyond Frontiers NFTs you own, the more benefit you derive from your NFTs in light of future events.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is the price of a Beyond Frontiers NFT?</h3>
{contract_NFT_PRICE} MATIC<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is a crypto wallet?</h3>
A crypto wallet is an application or hardware device that allows individuals to store and transfer digital assets like cryptocurrencies and Non-Fungible Tokens (NFTs).<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How do crypto wallets work?</h3>
After you register and download the crypto wallet, you take control of two 42-character keys. This is a public key, known as your wallet address, and a private key. You might consider your public key to be like your shareable bank account info,so you only have to copy and paste when people ask for your address. Your private key works like a password and should always remain private, for security.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is MetaMask?</h3>
MetaMask is a cryptocurrency wallet software used to interact with several blockchains. It allows users to access their wallet through a browser extension or mobile app,which can then be used to interact with decentralized applications. MetaMask is the most common used wallet and is compatible with most of decentralized applications.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How do I start using Metamask?</h3>
Go to MetaMask.io and select from Android or iOS for mobile application and select Chrome for desktop. You can also go directly to the Chrome store, Google Play store, or Apple App Store.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How do I purchase MATIC?</h3>
Once the Polygon blockchain set up in your MetaMask you can use integrated credit card payments to buy MATIC.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is MATIC?</h3>
MATIC is the native cryptocurrency of the Polygon Network.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is a gas fee?</h3>
As the Polygon Network is a decentralized blockchain with no singular entity or authority overseeing its operation, a mechanism is put in place to avoid the network from being congested or spammed with transactions. This mechanism charges senders of transactions with a small fee called gas fee which is then used to reward validators who validate transactions on the network.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
What is Polygon?</h3>
Polygon Network is the blockchain on which Beyond Frontiers NFTs are created (<q>minted</q>).<br/>
Polygon Network is a Layer 2 scaling solution that achieves scale by utilizing sidechains for off-chain computation, while ensuring asset security and decentralization through Proof-of-Stake (PoS) validators.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
How do I connect my wallet to the platform?</h3>
You simply click on the <q>Connect Wallet</q> button in the above right corner of the website.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
Can I use a credit card to buy?</h3>
You can use credit card directly in MetaMask to buy MATIC. But you cannot use credit card on the website to acquire Beyond Frontiers NFTs.<br/>&nbsp;

            <h3 className="md:text-xl text-xl  text-white-900">
I cannot find the answer to my questions. How can I get help?</h3>
Rush on the info point next to the entry to discuss with the TheSafeBox.io team that will guide you in your first NFT experience.<br/>&nbsp;

					</p>
				</section>
			</div>
		</div>
	);
};