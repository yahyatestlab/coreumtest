import { CosmosDatasourceKind, CosmosHandlerKind, CosmosProject } from '@subql/types-cosmos'

// Can expand the Datasource processor types via the genreic param
const project: CosmosProject = {
  specVersion: '1.0.0',
  version: '0.0.1',
  name: 'coreum',
  description: 'Coreum blockchain indexer',
  runner: {
    node: {
      name: '@subql/node-cosmos',
      version: '>=3.0.0',
      options: { unsafe: true },
    },
    query: {
      name: '@subql/query',
      version: '*',
    },
  },
  schema: {
    file: './schema.graphql',
  },
  network: {
    /* The genesis hash of the network (hash of block 0) */
    chainId: 'coreum-testnet-1',
    chaintypes: new Map([
      [
        'cosmos.bank.v1beta1',
        {
          file: './proto/cosmos/bank/v1beta1/tx.proto',
          messages: ['MsgSend', 'MsgMultiSend'],
        },
      ],
      [
        'cosmos.bank.v1beta1.bank',
        {
          file: './proto/cosmos/bank/v1beta1/bank.proto',
          messages: ['Input', 'Output'],
        },
      ],
      [
        'cosmos.base.v1beta1.coin',
        {
          file: './proto/cosmos/base/v1beta1/coin.proto',
          messages: ['Coin'],
        },
      ],
      [
        'cosmwasm.wasm.v1',
        {
          file: './proto/cosmwasm/wasm/v1/tx.proto',
          messages: ['MsgInstantiateContract', 'MsgExecuteContract'],
        },
      ],
      [
        'coreum.asset.nft.v1',
        {
          file: './proto/coreum/asset/nft/v1/tx.proto',
          messages: [
            'MsgIssueClass',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgAddToWhitelist',
            'MsgRemoveFromWhitelist',
          ],
        },
      ],
      [
        'coreum.asset.nft.v1.ClassFeature',
        { file: './proto/coreum/asset/nft/v1/nft.proto', messages: ['ClassFeature'] },
      ],
      ['google.protobuf.Any', { file: './proto/google/protobuf/any.proto', messages: ['Any'] }],
      [
        'coreum.asset.ft.v1',
        {
          file: './proto/coreum/asset/ft/v1/tx.proto',
          messages: [
            'MsgIssue',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgGloballyFreeze',
            'MsgGloballyUnfreeze',
            'MsgSetWhitelistedLimit',
          ],
        },
      ],
      [
        'coreum.asset.ft.v1.Token',
        { file: './proto/coreum/asset/ft/v1/token.proto', messages: ['Token', 'Feature', 'Definition'] },
      ],
    ]),

    /**
     * These endpoint(s) should be non-pruned archive nodes
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * We suggest providing an array of endpoints for increased speed and reliability
     */
    endpoint: ['https://full-node.testnet-1.coreum.dev:26657'],
  },
  dataSources: [
    {
      kind: CosmosDatasourceKind.Runtime,
      startBlock: 13557560,
      mapping: {
        file: './dist/index.js',
        handlers: [
          // -----------------------------------------------------------------------
          // =========== handlers for bank module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgSend',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.bank.v1beta1.MsgSend',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgMultiSend',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.bank.v1beta1.MsgMultiSend',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for NFT module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgIssueClass',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgIssueClass',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgMintNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgMint',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgBurnNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgBurn',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgFreezeNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgUnFreezeNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgAddToWhitelistNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgAddToWhitelist',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgRemoveFromWhitelistNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgRemoveFromWhitelist',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for FT module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgMint',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgMint',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgBurn',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgBurn',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgFreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgUnfreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgGloballyFreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgGloballyFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgGloballyUnfreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgGloballyUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgSetWhitelistedLimit',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgSetWhitelistedLimit',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for COSMWASM module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgInstantiateContract',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmwasm.wasm.v1.MsgInstantiateContract',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgExecuteContract',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmwasm.wasm.v1.MsgExecuteContract',
              includeFailedTx: true,
            },
          },
        ],
      },
    },
  ],
}

// Must set default to the project instance
export default project
