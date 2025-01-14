/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState, useEffect } from 'react';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import {
  ITransactionContextProps,
  TransactionContext
} from '../context/TransactionContext';

interface INavbarItem {
  title: string;
  classProps: string;
}

const NavbarItem: React.FC<INavbarItem> = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    <Link to="/nft">{title}</Link>
  </li>
);

const Navbar: React.FC = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  const { currentAccount, disconnectWallet, connectWalletAndShowNFT } =
    useContext(TransactionContext) as ITransactionContextProps;

  useEffect(() => {
		if(currentAccount)
	    connectWalletAndShowNFT();
  }, [currentAccount]);
  <a href="faq.html">FAQ</a>
  const renderButton = () => {
    const isLogIn = !currentAccount;
    return (
      <button
        type="button"
        className="bg-[#2952e3] py-2 px-5 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        onClick={isLogIn ? connectWalletAndShowNFT : disconnectWallet}
      >
        {isLogIn ? (
          <> Connect</>
        ) : (
          <>
            <AiFillPlayCircle className="text-white mr-2 inline-flex" />
            <span className="text-sm">Logout</span>
          </>
        )}
      </button>
    );
  };
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      	<a href="https://www.ictspring.com/" className="block group relative">
        	<img src={logo} alt="logo" className="w-32 cursor-pointer invert"/>
        </a>
     </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[].map((item, index) => (
          <NavbarItem key={item + index} title={item} classProps="" />
        ))}
        <li>{renderButton()}</li>
      </ul>
      <div className="flex relate">
        {toogleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToogleMenu(false)} />
            </li>
            {[].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
