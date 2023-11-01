import { MsgInstantiateContractMessage, MsgExecuteContractMessage } from '../types/CosmosMessageTypes'
import { createTransaction } from './helper'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { TOPIC_MESSAGE } from '../common/constants'

export async function handleMsgInstantiateContract(msg: MsgInstantiateContractMessage): Promise<void> {
  const transaction = createTransaction('MsgInstantiateContract', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgExecuteContract(msg: MsgExecuteContractMessage): Promise<void> {
  const transaction = createTransaction('MsgExecuteContract', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
