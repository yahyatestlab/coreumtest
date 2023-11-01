import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { TOPIC_MESSAGE } from '../common/constants'
import { createTransaction } from './helper'
import {
  MsgAddToWhitelistMessage,
  MsgBurnMessageNFT,
  MsgFreezeMessageNFT,
  MsgIssueClassMessage,
  MsgMintMessageNFT,
  MsgRemoveFromWhitelistMessage,
  MsgUnfreezeMessageNFT,
} from '../types/CosmosMessageTypes'

// Fix naming conflict
//
// MsgMint as MsgMintNFT,
// MsgBurn as MsgBurnNFT,
// MsgFreeze as MsgFreezeNFT,
// MsgUnfreeze as MsgUnfreezeNFT,
//
// export type MsgMintMessageNFT = CosmosMessage<MsgMintNFT>
// export type MsgBurnMessageNFT = CosmosMessage<MsgBurnNFT>
// export type MsgFreezeMessageNFT = CosmosMessage<MsgFreezeNFT>
// export type MsgUnfreezeMessageNFT = CosmosMessage<MsgUnfreezeNFT>

export async function handleMsgIssueClass(message: MsgIssueClassMessage): Promise<void> {
  const transaction = createTransaction('MsgIssueClass', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgMintNFT(message: MsgMintMessageNFT): Promise<void> {
  const transaction = createTransaction('MsgMintNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgBurnNFT(message: MsgBurnMessageNFT): Promise<void> {
  const transaction = createTransaction('MsgBurnNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgFreezeNFT(message: MsgFreezeMessageNFT): Promise<void> {
  // const freeze=message.msg.decodedMsg.classId
  const transaction = createTransaction('MsgFreezeNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgUnFreezeNFT(message: MsgUnfreezeMessageNFT): Promise<void> {
  const transaction = createTransaction('MsgUnFreezeNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgAddToWhitelistNFT(message: MsgAddToWhitelistMessage): Promise<void> {
  const transaction = createTransaction('MsgAddToWhitelistNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgRemoveFromWhitelistNFT(message: MsgRemoveFromWhitelistMessage): Promise<void> {
  const transaction = createTransaction('MsgRemoveFromWhitelistNFT', message)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
