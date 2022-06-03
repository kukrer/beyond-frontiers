/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { NFT_IMAGE_URI } from '../utils/constants';

import {
  ActionType,
  ITransactionContextProps,
  TransactionContext
} from '../context/TransactionContext';

export interface IMintCardProps {
  tokenId: string;
  hasFavorite?: boolean;
}

const i18n = {
  addFavorite: 'add to favorite',
  favoriteHeart: 'selected'
};

interface IMetaDataInfo {
  name: string;
}
export const MintCard: React.FC<IMintCardProps> = ({
  tokenId,
  hasFavorite = false
}) => {
  const imageURI = NFT_IMAGE_URI;
  const [metaDataInfo, setMetaDataInfo] = useState({} as IMetaDataInfo);
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { nftTransferOnwnership, onFavoriteList } = useContext(
    TransactionContext
  ) as ITransactionContextProps;

  const [toggleFavorite, setToggleFavorite] = useState(hasFavorite);

  const handleFavorite = () => {
    const isFavorite = !toggleFavorite;

    setToggleFavorite(isFavorite);
    onFavoriteList(
      tokenId,
      isFavorite ? ActionType.ADD_ACTION : ActionType.REMOVE_ACTION
    );
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e?.target.value);
  };

  const sendTransfer = (id: string) => {
    setIsLoading(true);
    console.log('transfer...');
    address && nftTransferOnwnership(address, id);
    setAddress('');
  };

  useEffect(() => {
    const initData = async () => {
      const res = await (
        await fetch(
          `NFT_IMAGE_URI`
        )
      ).json();
      console.log(res);
      setMetaDataInfo(res);
    };

    initData();
  }, [tokenId]);

  return (
    <>
      <a href="#" className="block group relative">
        <img
          src={imageURI}
          className="group-hover:opacity-90 w-full"
          alt="..."
          width="600"
          height="600"
        />
      </a>
      <div className="px-4 py-6 sm:px-6">
        <hr className="border-gray-200 my-4" />
        <div className="flex items-center justify-between">
          <span>NFT ID: {tokenId}</span>
        </div>
      </div>
    </>
  );
};
