#!/bin/bash
# Interface (app) site service

NFTSERVERDIR=/home/ictspring/beyond-frontiers/dApp_NFT
cd $NFTSERVERDIR

NVM_DIR=/home/ictspring/.nvm 
source $NVM_DIR/nvm.sh # this loads nvm nvm use 17
nvm use 16

npm run dev > $NFTSERVERDIR/server.out 2> $NFTSERVERDIR/server.err
