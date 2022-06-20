import nft from './NFT.contract.json';

// NFT contract goes here
// 40 MATIC on mumbai => export const contractNFTAddress = '0x9EC65E9b3cd0d7eF61a317a34fBF0F609905F782';
export const contractNFTAddress = '0x83d9322187107B4f6cC2ccBa90f648b1907E78A2';
export const contract_NFT_ABI = nft.abi;
export const contract_NFT_PRICE = 0.0040;
//export const NFT_IMAGE_URI = 'http://ec2-3-142-229-40.us-east-2.compute.amazonaws.com:3009/ticket.jpeg';
export const NFT_IMAGE_URI = `http://vps636901.ovh.net:3000/ticket.jpeg`;
export const MAX_PER_MINT = 10;
export const MAX_PER_WALLET = 10;

export const POLYGON_MAINNET_CHAINID = 137
export const POLYGON_MUMBAI_CHAINID = 80001
export const POLYGON_MAINNET_CHAINID_HEXSTR = '0x89'
export const POLYGON_MUMBAI_CHAINID_HEXSTR = '0x13881'
export const POLYGON_MAINNET_NETWORK_NAME = 'Polygon Mainnet'
export const POLYGON_MUMBAI_NETWORK_NAME = 'Mumbai'
export const POLYGON_MAINNET_RPC = 'https://polygon-rpc.com/'
export const POLYGON_MUMBAI_RPC = 'https://matic-mumbai.chainstacklabs.com'
export const POLYGON_MAINNET_EXPLORER = 'https://polygonscan.com/'
export const POLYGON_MUMBAI_EXPLORER = 'https://mumbai.polygonscan.com'
export const TARGET_CHAINID = POLYGON_MUMBAI_CHAINID
export const TARGET_CHAINID_HEXSTR = POLYGON_MUMBAI_CHAINID_HEXSTR
export const TARGET_NETWORK_NAME = POLYGON_MUMBAI_NETWORK_NAME
export const TARGET_RPC = POLYGON_MUMBAI_RPC
export const TARGET_EXPLORER = POLYGON_MUMBAI_EXPLORER
