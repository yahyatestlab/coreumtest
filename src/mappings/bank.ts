import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { MsgSendMessage, MsgMultiSendMessage } from '../types/CosmosMessageTypes'

export async function handleMsgSend(msg: MsgSendMessage): Promise<void> {
  const transaction = createTransaction('MsgSend', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgMultiSend(msg: MsgMultiSendMessage): Promise<void> {
  const transaction = createTransaction('MsgMultiSend', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
