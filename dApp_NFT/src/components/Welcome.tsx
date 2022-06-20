/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';

import {
  IFormData,
  ITransactionContextProps,
  TransactionContext
} from '../context/TransactionContext';
import { Loader } from '.';
import { Input } from './Input';
import { MintSection } from './MintSection';
import { shortAddress } from '../utils/Address';

import { NFT_IMAGE_URI } from '../utils/constants';

import {FaqPage} from '../pages/Faq';

const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

interface IWelcomeProps {
  showForm?: boolean;
  showMint?: boolean;
}

export const sendValidTransaction = (
  formData: IFormData,
  sendTransaction: () => void
) => {
  const { addressTo, amount, keyword, message } = formData;
  if (!addressTo || !amount || !keyword || !message) return;
  sendTransaction();
};

const Welcome: React.FC<IWelcomeProps> = ({
  showForm = false,
  showMint = false
}) => {
  const sentTransaction = () => {};

  const {
    connectWalletAndShowNFT,
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    isLoading
  } = useContext(TransactionContext) as ITransactionContextProps;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    sendValidTransaction(formData, sentTransaction);
    console.log('handleSubmit ...');
  };

  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 max-w-6xl w-full">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-2xl sm:text-5xl text-white  py-1">
             Buy your NFT<br /> an Artwork designed by SUMO 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Here mint your own NFT for the beyond frontiers community.
<br />  </p>
           <p className="text-left  text-xl sm:text-xl text-white py-1">
            4 Steps to get your NFT:
            <br /> 
            </p>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
1/ Download                   <a
                    href="https://metamask.io/"
                    className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"
                  >
                   &nbsp;Metamask&nbsp;
                  </a> and create your Wallet
<br /> <br /> 
2/ Go on your favorite crypto exchange to buy some MATIC, the currency required to purchase our NFTs, on your MetaMask Wallet
<br /> <br /> 
3/ Connect your MetaMask wallet to this website
<br /> <br /> 
4/ Select the number of NFT you want to buy and validate the transaction 
<br /> <br /> 
For further questions see the 
                  <a
                    href="/faq"
                    className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"
                  >
                   &nbsp;FAQ
                  </a>
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={showMint ? connectWalletAndShowNFT : connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div>
        <img
                src={NFT_IMAGE_URI}
                className="border-4 border-secondary-500 rounded-full"
                alt="..."
                width="360"
                height="360"
              />
          </div>
          {showForm && (
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] border-[#3d4f7c] p-2 hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
            </div>
          )}
          {showMint && <MintSection />}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
