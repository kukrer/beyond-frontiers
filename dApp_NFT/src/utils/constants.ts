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