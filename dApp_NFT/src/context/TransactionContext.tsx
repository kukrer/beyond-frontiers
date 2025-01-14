import { ethers, utils } from 'ethers';
import React, { useEffect, useState } from 'react';
import { HandleChangeType } from '../components/Input';

import { contract_NFT_ABI, contractNFTAddress, contract_NFT_PRICE, MAX_PER_WALLET, TARGET_CHAINID, TARGET_CHAINID_HEXSTR, TARGET_NETWORK_NAME, TARGET_RPC, TARGET_EXPLORER } from '../utils/constants';

export const KEY_FAVORITELIST = 'favoritedHeartList';

export interface IFormData {
	addressTo: string;
	amount: string;
	keyword: string;
	message: string;
}

export enum ActionType {
	'REMOVE_ACTION',
	'ADD_ACTION'
}
type nftTransferOnwnershipType = (
	addressTo: string,
	id: string
) => Promise<void>;
type onFavoriteListType = (id: string, action: ActionType) => Promise<void>;

type mintTokenType = (n: number) => Promise<void | undefined>;
export interface ITransactionContextProps {
	transactionCount?: string;
	connectWallet: () => Promise<void>;

	connectWalletAndShowNFT: () => Promise<void>;

	disconnectWallet: () => Promise<void>;
	transactions: any[];
	currentAccount: string;
	isLoading: boolean;
	handleChange: HandleChangeType;
	formData: IFormData;
	mintToken: mintTokenType;
	nftListId: number[];
	nftTransferOnwnership: nftTransferOnwnershipType;
	onFavoriteList: onFavoriteListType;
	nftListFavoriteIds: string[];
	isLoadingNFT: boolean;
}

export const TransactionContext =
	React.createContext<ITransactionContextProps | null>(null);

declare global {
	interface Window {
		ethereum: any;
	}
}

/*global window, localStorage, alert*/
const { ethereum } = window;
const delay = (ms = 10000) => new Promise((resolve) => setTimeout(resolve, ms));

const getNFTContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();

	const transactionContract = new ethers.Contract(
		contractNFTAddress,
		contract_NFT_ABI,
		signer
	);

	return transactionContract;
};

type TransactionProviderProps = { children: React.ReactNode };
export const TransactionProvider: React.FC<TransactionProviderProps> = ({
	children
}) => {
	const [currentAccount, setCurrentAccount] = useState('');
	const [formData, setFormData] = useState({
		addressTo: '',
		amount: '',
		keyword: '',
		message: ''
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingNFT, setIsLoadingNFT] = useState(false);

	const [transactions, setTransactions] = useState([]);
	const [nftListId, setNftListId] = useState([]);
	const [nftListFavoriteIds, setNftListFavoriteIds] = useState(
		JSON.parse(localStorage.getItem(KEY_FAVORITELIST) || '[]')
	);

	const handleChange: HandleChangeType = (e, name) => {
		setFormData((prevState) => ({
			...prevState,
			[name as string]: e.target.value
		}));
	};



	const checkRightNetwork = async () => {
		if (ethereum.networkVersion !== TARGET_CHAINID) {
			try {
				await ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: TARGET_CHAINID_HEXSTR }]
				});
			} catch (err) {
				// This error code indicates that the chain has not been added to MetaMask
				if (err.code === 4902) {
					await ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [
							{
								chainName: TARGET_NETWORK_NAME,
								chainId: TARGET_CHAINID_HEXSTR,
								nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
								rpcUrls: [TARGET_RPC],
								blockExplorerUrls: [TARGET_EXPLORER]
							}
						]
					});
				}
			}
		}
	}

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) alert('Install Metamask in browser!');
			checkRightNetwork()

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			if (accounts.length) {
				setCurrentAccount(accounts[0]);
			} else {
				console.log('No accounts');
			}
			console.log(accounts);
		} catch (error) {
			console.log(error);
			throw new Error('No ethereum object...');
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) alert('Install Metamask in browser!');
			checkRightNetwork()

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts'
			});
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
			throw new Error('No ethereum object...');
		}
	};

	const connectWalletAndShowNFT = async () => {
		try {
			if (!ethereum) alert('Install Metamask in browser!');
			checkRightNetwork()

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts'
			});

			const openAccount = accounts[0];
			setCurrentAccount(openAccount);

			setIsLoadingNFT(true);
			const contract = getNFTContract();
			const tokens = await contract.tokensOfOwner(openAccount);

			setNftListId(tokens);
			await delay(5000);

			console.log('owner has tokens:', tokens);
			setIsLoadingNFT(false);
		} catch (error) {
			console.log(error);
			throw new Error('No ethereum object...');
		}
	};

	const disconnectWallet = async () => {
		console.log('Disconnecting MetaMask...');
		setCurrentAccount('');
	};

	const mintToken: mintTokenType = async (countNFT) => {
		try {
			if (!ethereum) {
				alert('Install Metamask in browser!');
				return;
			}
			checkRightNetwork()

			if (!currentAccount) {
				alert('Please log in!');
				return;
			}
			const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [ currentAccount, 'latest' ]})
			const ethBalance = parseInt(balance, 16) / Math.pow(10, 18)
			if(ethBalance < (contract_NFT_PRICE*countNFT)) {
				alert('Insufficient funds. Each ticket costs ' + contract_NFT_PRICE + ' MATIC (+gas). You are trying to buy ' 
							+ countNFT + ' tickets, but you only have ' + ethBalance + ' MATIC')
				return
			}

			const contract = getNFTContract();

			const tokensofowner = await contract.tokensOfOwner(currentAccount)
			const tokenCnt = tokensofowner.length;
			if(MAX_PER_WALLET < (tokenCnt+countNFT)) {
				  alert('A wallet can have a maximum of ' + MAX_PER_WALLET + ' tickets. You already have ' 
				        + tokenCnt + '. You cannot mint ' + countNFT + ' more tickets')
				  return
			}

			console.log('Minting ', countNFT, ' @', contract_NFT_PRICE.toString(), ' MATIC each');
			
			const transactionHash = await contract.mintNFTs(countNFT, {
				value: utils.parseEther(contract_NFT_PRICE.toString())
			});
			console.log('Loading -', transactionHash.hash);
			setIsLoading(true);
			await transactionHash.wait();
			setIsLoading(false);
			console.log('Success -', transactionHash.hash);

			const tokens = await contract.tokensOfOwner(currentAccount);
			console.log('Owner has tokens: ', tokens);
			// let owner = await contract.ownerOf(currentAccount)
			// console.log(owner)
			setNftListId(tokens);
			setIsLoadingNFT(true);
			await delay(5000);
			setIsLoadingNFT(false);
		} catch (error: any) {
			console.log(error);
			if (error?.code === 'INSUFFICIENT_FUNDS') alert(error?.reason);

			throw new Error('No ethereum object...');
		}
	};

	const nftTransferOnwnership: nftTransferOnwnershipType = async (
		addressTo,
		id
	) => {
		try {
			if (!ethereum) alert('Install Metamask in browser!');

			const contract = getNFTContract();

			const txHash = await contract.transferFrom(currentAccount, addressTo, id);
			console.log('Result Transaction Transfer: ', txHash);

			await txHash.wait();

			const tokens = await contract.tokensOfOwner(currentAccount);
			console.log('Owner has tokens: ', tokens);

			setNftListId(tokens);
		} catch (error) {
			console.log(error);
			throw new Error('No ethereum object...');
		}
	};

	const onFavoriteList: onFavoriteListType = async (id, action) => {
		const listIds = [...nftListFavoriteIds];

		if (action === ActionType.REMOVE_ACTION) {
			listIds.forEach((value, key) => {
				String(value) === String(id) && listIds.splice(key, 1);
			});
		} else if (action === ActionType.ADD_ACTION) {
			listIds.push(String(id));
		}

		console.log(listIds);
		await localStorage.setItem(KEY_FAVORITELIST, JSON.stringify(listIds));
		await setNftListFavoriteIds(listIds);
	};
	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	const value: ITransactionContextProps = {
		connectWallet,
		connectWalletAndShowNFT,
		disconnectWallet,
		transactions,
		handleChange,
		currentAccount,
		isLoading,
		formData,
		mintToken,
		nftListId,
		nftTransferOnwnership,
		onFavoriteList,
		nftListFavoriteIds,
		isLoadingNFT
	};
	return (
		<TransactionContext.Provider value={value}>
			{children}
		</TransactionContext.Provider>
	);
};
