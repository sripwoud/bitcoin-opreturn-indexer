import { Model, Sequelize, BLOB, Optional, DataTypes } from 'sequelize'

import { sequelize } from '../lib'

export interface OpreturnAttrs {
  id: number
  data: string
  blockhash: string
  blockheight: number
  txhash: string
}

interface OpreturnCreationAttributes extends Optional<OpreturnAttrs, 'id'> {}

class Opreturn extends Model<OpreturnAttrs, OpreturnCreationAttributes> {}

Opreturn.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    data: { type: DataTypes.BLOB, allowNull: false },
    blockhash: { type: DataTypes.TEXT, allowNull: false },
    blockheight: { type: DataTypes.INTEGER, allowNull: false },
    txhash: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    sequelize,
    modelName: 'opreturn',
    timestamps: true
  }
)

export { Opreturn }
