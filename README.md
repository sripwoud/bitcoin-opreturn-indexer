# Test Asset Integration Engineer - Exodus
## Requirements & Rules
- [] time limit: 8 hours
- [] store Bitcoin OP_RETURN data
- [] index Bitcoin OP_RETURN data
- [] serve on an HTTP endpoint as a JSON payload: `/opreturn/${opReturnData}`
- [] payload should include transaction hash and block hash
- [] NodeJS
- [] any 3rd-party npm library
- [] Postgres as database
- [] Bitcoin ~~mainnet~~ or testnet
- [] use bitcoind

## Example
Transaction [8bae12b5f4c088d940733dcd1455efc6a3a69cf9340e17a981286d3778615684](https://www.smartbit.com.au/tx/8bae12b5f4c088d940733dcd1455efc6a3a69cf9340e17a981286d3778615684) has `OP_RETURN` 636861726c6579206c6f766573206865696469 that decoded leads to "charley loves heidi".
![tx_screenshot](./capture_smartbit.png)

# DB
## Preparation
- Requirements: PostgreSQL
- Create `opreturn` DB:
  ```
  sudo su - postgres
  psql
  ALTER USER r1oga WITH PASSWORD 'exodus';
  \q
  exit
  psql -d postgres
  CREATE DATABASE opreturn;
  # check DB was created
  \l
  ```
## Schema
|Column|Type|
|--|--|
|op_return|bytes|
|blockhash|string|
|blockheight|integer|
|txhash|string|

# Resource
- How to read read raw OP_RETURN data from blocks: refactored version of functions found in [blockai-unofficial/raw-op-return](https://github.com/blockai-unofficial/raw-op-return)

