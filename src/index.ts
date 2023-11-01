import dotenv from 'dotenv'
dotenv.config({ path: '/app/.env' })

//Exports all handler functions
export * from './mappings/bank'
export * from './mappings/contract'
export * from './mappings/nft'
export * from './mappings/token'
