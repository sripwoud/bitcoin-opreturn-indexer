import { Model, Optional, DataTypes } from 'sequelize'

import { sequelize } from '../lib'

// TO DO EXPORT IN COMMON NPM PACKAGE
export interface OpReturnAttrs {
  id: number
  data: string
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

    data: { type: DataTypes.TEXT, allowNull: false },
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
