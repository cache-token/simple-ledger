import React, { useState } from "react";
import { Box, Button, Card, Heading, Input, Text, ToastMessage } from "rimble-ui";
import { EthAddress } from "rimble-ui";
import { ethers } from "ethers";
import { LedgerSigner } from "@ethersproject/hardware-wallets";
const network = "mainnet";

let dPath = `m/44'/60'/5'/0/0`;
let provider = ethers.providers.getDefaultProvider(network, {
  infura: "5c74d4da35f446f685058d9027a052e1",
});

// const cgtABI = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "unbackedTreasury",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "backedTreasury",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "feeAddress",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "redeemAddress",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "oracle",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "feePerYear",
//         type: "uint256",
//       },
//     ],
//     name: "AccountInactive",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "AccountReActive",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "AddBackedGold",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "RemoveGold",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "INACTIVE_THRESHOLD_DAYS",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "SUPPLY_CAP",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "isOwner",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "approve",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "addedValue",
//         type: "uint256",
//       },
//     ],
//     name: "increaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "subtractedValue",
//         type: "uint256",
//       },
//     ],
//     name: "decreaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "addBackedTokens",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "payStorageFee",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "setAccountInactive",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "forcePayFees",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "enforcer",
//         type: "address",
//       },
//     ],
//     name: "setFeeEnforcer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "newFeeAddress",
//         type: "address",
//       },
//     ],
//     name: "setFeeAddress",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "newRedeemAddress",
//         type: "address",
//       },
//     ],
//     name: "setRedeemAddress",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "newBackedAddress",
//         type: "address",
//       },
//     ],
//     name: "setBackedAddress",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "newUnbackedAddress",
//         type: "address",
//       },
//     ],
//     name: "setUnbackedAddress",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "oracleAddress",
//         type: "address",
//       },
//     ],
//     name: "setOracleAddress",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "daysGracePeriod",
//         type: "uint256",
//       },
//     ],
//     name: "setStorageFeeGracePeriodDays",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "setTransferFeeExempt",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "setStorageFeeExempt",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "unsetFeeExempt",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "fee",
//         type: "uint256",
//       },
//     ],
//     name: "setTransferFeeBasisPoints",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//     ],
//     name: "balanceOfNoFees",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "feeEnforcer",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "feeAddress",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "redeemAddress",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "backedTreasury",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "unbackedTreasury",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "oracleAddress",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "storageFeeGracePeriodDays",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "transferFeeBasisPoints",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "simulateTransfer",
//     outputs: [
//       {
//         internalType: "uint256[5]",
//         name: "",
//         type: "uint256[5]",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "setFeeExempt",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "isStorageFeeExempt",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "isTransferFeeExempt",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "isAllFeeExempt",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "isInactive",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalCirculation",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "daysSincePaidStorageFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "daysSinceActivity",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "calcOwedFees",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "calcStorageFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "calcInactiveFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "calcSendAllBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "calcTransferFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "balance",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "daysSinceStoragePaid",
//         type: "uint256",
//       },
//     ],
//     name: "storageFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     payable: false,
//     stateMutability: "pure",
//     type: "function",
//   },
// ];

const cgtMultiSigABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"}];

const cgtMultiSigContract = new ethers.Contract(
  // "0xD1A2E69deC4d1C18bBF65dFde982640F27D649FF",
  "0x3AB9c31148789570f51180a3eF7107E16c4B234c",
  cgtMultiSigABI,
  provider
);

function App() {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amountTf, setAmount] = useState("");
  const [tx, setToTx] = useState("");
  const [balanceFormatted, setBf] = useState("");

 async  function fetchAddress() {
    try {
      const signer = new LedgerSigner(provider, null, dPath);


      console.log("Sending");
      signer.getAddress().then((address) => {
        console.log(address);
        setFromAddress(address);

      });
    } catch (error) {
      console.log("Error Fetching address", error);
    }
  }

  
  // async function getBalance(from) {
  //   try {
  //     const signer = new LedgerSigner(provider, null, `m/44'/60'/5'/0/0`);

  //     let balance = await cgtContract.balanceOf(from);
  //     setBf(ethers.utils.formatUnits(balance, 8));
  //     // setBf(balance.toString());
  //     console.log("The balance is "+ethers.utils.formatUnits(balance, 8));
  //   }
  //   catch(E){
  //     console.log(E);
  //   }
  // }

  async function createTx(from, to, amountTf) {
    try {
      const signer = new LedgerSigner(provider, null, `m/44'/60'/5'/0/0`);

      let balance = await cgtContract.balanceOf(from);
      setBf(ethers.utils.formatUnits(balance, 8));
      // setBf(balance);
      console.log(balanceFormatted);
      // if (amountTf > 0 && balanceFormatted > 0 && amountTf <= balanceFormatted) {
        console.log("Sending", from, to, balanceFormatted);
        const transaction = await signer.sendTransaction({ to: to, value: ethers.utils.parseEther("0.005") });
        console.log(transaction);
        // const cgtWithSigner = cgtContract.connect(signer);
        // const transaction = await cgtWithSigner.transfer(
        //   to,
        //   ethers.utils.parseUnits(amountTf.toString(), 8)
        // );
        console.log(transaction);
        if(transaction){
          <ToastMessage
            message={"Transaction complete"}
            my={8}
          />
        }
        setToTx("Transaction Complete!");
      // } else {
        // setToTx("Not Enough balance: "+ balance + "  balanceFormatted: "+ balanceFormatted + " amount To Transfer: "+ amountTf +" In CGT"+ethers.utils.parseUnits(amountTf.toString(), 8) );
      // }
    } catch (error) {
      console.log("Error Sending transaction ", error);
    }
  }

  return (
    <Card
      bg="salmon"
      width={"auto"}
      maxWidth={"820px"}
      mx={"auto"}
      px={[3, 3, 4]}
    >
      <Text
        caps
        fontSize={0}
        fontWeight={4}
        // mb={3}
        display={"flex"}
        // alignItems={"center"}
      ></Text>
      <div>
        <Box x bg="salmon" color="white" fontSize={4}>
          <Heading>Ledger CGT extractor</Heading>
          <Box pb="2">
            <Button onClick={() => fetchAddress()}>
              {" "}
              Connect Ledger and get my CGT Address at {dPath}
            </Button>
          </Box>
          <EthAddress address={fromAddress} />
          <Text fontFamily="sansSerif">
            The amount of CGT at this address is {balanceFormatted.toString() | 0} CGT
          </Text>
          <Text>Enter the address where you want to receive the funds at</Text>
          <Input
            type="text"
            fontSize="1"
            required={true}
            onChange={(event) => setToAddress(event.target.value)}
            placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
          />
          <Box pt="2">
          <Input
            type="text"
            fontSize="1"
            required={true}
            onChange={(event) => setAmount(parseFloat(event.target.value))}
            placeholder="Amount with decimals"
          />
          </Box>
          <Box pt="5">
          <Button onClick={() => getBalance(fromAddress)}>
              {" "}
              Get Balance
            </Button>
            <Button onClick={() => createTx(fromAddress, toAddress, amountTf)}>
              {" "}
              Create Transfer to {toAddress}
            </Button>

            {/* <NetworkIndicator currentNetwork={3} requiredNetwork={1} /> */}
          </Box>
          <Box pt="5">
          <Text fontFamily="sansSerif">{tx}
            </Text>
          </Box>
        </Box>
      </div>
    </Card>
  );
}

export default App;
