import {
  MsgIssueMessage,
  MsgBurnMessage,
  MsgFreezeMessage,
  MsgGloballyFreezeMessage,
  MsgMintMessage,
  MsgGloballyUnfreezeMessage,
  MsgSetWhitelistedLimitMessage,
  MsgUnfreezeMessage,
} from '../types/CosmosMessageTypes'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { TOPIC_MESSAGE } from '../common/constants'
import { createTransaction } from './helper'

export async function handleIssueMsg(msg: MsgIssueMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgIssue', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgMint(msg: MsgMintMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgMint', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgBurn(msg: MsgBurnMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgBurn', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgFreeze(msg: MsgFreezeMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgFreeze', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgUnfreeze(msg: MsgUnfreezeMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgUnfreeze', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgGloballyFreeze(msg: MsgGloballyFreezeMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgGloballyFreeze', msg)], topic: TOPIC_MESSAGE }])
}

export async function handleMsgGloballyUnfreeze(msg: MsgGloballyUnfreezeMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([
    { messages: [createTransaction('MsgGloballyUnfreeze', msg)], topic: TOPIC_MESSAGE },
  ])
}

export async function handleMsgSetWhitelistedLimit(msg: MsgSetWhitelistedLimitMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([
    { messages: [createTransaction('MsgSetWhitelistedLimit', msg)], topic: TOPIC_MESSAGE },
  ])
}
