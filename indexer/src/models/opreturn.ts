import { Model, Sequelize, BLOB, Optional, DataTypes } from 'sequelize'

import { sequelize } from '../lib'

export interface OpReturnAttrs {
  id: number
  data: Blob
  blockHash: string
  blockHeight: number
  txHash: string
}

interface OpReturnCreationAttributes extends Optional<OpReturnAttrs, 'id'> {}

class OpReturn extends Model<OpReturnAttrs, OpReturnCreationAttributes> {}

// @ts-ignore
OpReturn.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    data: { type: DataTypes.BLOB, allowNull: false },
    blockHash: { type: DataTypes.TEXT, allowNull: false },
    blockHeight: { type: DataTypes.INTEGER, allowNull: false },
    txHash: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    sequelize,
    modelName: 'opreturn',
    timestamps: true
  }
)

export { OpReturn }
