const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const wallet = sequelize.define(
      'wallet',
      {
         id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
         },
         userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
         },
         accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
         },
      }
   );

   return wallet;
};
