const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const ledger = sequelize.define(
      'ledger',
      {
         id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
         },
         transaction_type: {
            type: DataTypes.ENUM(
               'wallet_topup',
               'bill_payment',
               'wallet_transfer',
               'external_transfer',
            ),
            allowNull: false,
         },
         reference: {
            type: DataTypes.STRING,
         },
         account: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         credit: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
         },
         debit: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
         },
         reversed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
         },
         deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
         },
      },
      {
         freezeTableName: true,
         timestamps: false,
      },
   );

   return ledger;
};
