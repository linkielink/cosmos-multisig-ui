import { EncodeObject } from "@cosmjs/proto-signing";
import {
  TxMsg,
  TxMsgClaimRewards,
  TxMsgDelegate,
  TxMsgRedelegate,
  TxMsgSend,
  TxMsgSetWithdrawAddress,
  TxMsgUndelegate,
} from "../types/txMsg";

const isTxMsgSend = (msg: TxMsg | EncodeObject): msg is TxMsgSend =>
  msg.typeUrl === "/cosmos.bank.v1beta1.MsgSend" &&
  "value" in msg &&
  "fromAddress" in msg.value &&
  "toAddress" in msg.value &&
  "amount" in msg.value &&
  !!msg.value.fromAddress &&
  !!msg.value.toAddress &&
  !!msg.value.amount.length;

const isTxMsgDelegate = (msg: TxMsg | EncodeObject): msg is TxMsgDelegate =>
  msg.typeUrl === "/cosmos.staking.v1beta1.MsgDelegate" &&
  "value" in msg &&
  "delegatorAddress" in msg.value &&
  "validatorAddress" in msg.value &&
  "amount" in msg.value &&
  !!msg.value.delegatorAddress &&
  !!msg.value.validatorAddress &&
  !!msg.value.amount.length;

const isTxMsgUndelegate = (msg: TxMsg | EncodeObject): msg is TxMsgUndelegate =>
  msg.typeUrl === "/cosmos.staking.v1beta1.MsgUndelegate" &&
  "value" in msg &&
  "delegatorAddress" in msg.value &&
  "validatorAddress" in msg.value &&
  "amount" in msg.value &&
  !!msg.value.delegatorAddress &&
  !!msg.value.validatorAddress &&
  !!msg.value.amount.length;

const isTxMsgRedelegate = (msg: TxMsg | EncodeObject): msg is TxMsgRedelegate =>
  msg.typeUrl === "/cosmos.staking.v1beta1.MsgBeginRedelegate" &&
  "value" in msg &&
  "delegatorAddress" in msg.value &&
  "validatorSrcAddress" in msg.value &&
  "validatorDstAddress" in msg.value &&
  "amount" in msg.value &&
  !!msg.value.delegatorAddress &&
  !!msg.value.validatorSrcAddress &&
  !!msg.value.validatorDstAddress &&
  !!msg.value.amount.length;

const isTxMsgClaimRewards = (msg: TxMsg | EncodeObject): msg is TxMsgClaimRewards =>
  msg.typeUrl === "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" &&
  "value" in msg &&
  "delegatorAddress" in msg.value &&
  "validatorAddress" in msg.value &&
  !!msg.value.delegatorAddress &&
  !!msg.value.validatorAddress;

const isTxMsgSetWithdrawAddress = (msg: TxMsg | EncodeObject): msg is TxMsgSetWithdrawAddress =>
  msg.typeUrl === "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress" &&
  "value" in msg &&
  "delegatorAddress" in msg.value &&
  "withdrawAddress" in msg.value &&
  !!msg.value.delegatorAddress &&
  !!msg.value.withdrawAddress;

export {
  isTxMsgSend,
  isTxMsgDelegate,
  isTxMsgUndelegate,
  isTxMsgRedelegate,
  isTxMsgClaimRewards,
  isTxMsgSetWithdrawAddress,
};
