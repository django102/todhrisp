const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
   const user = sequelize.define('user', {
      id: {
         type: DataTypes.BIGINT,
         autoIncrement: true,
         primaryKey: true,
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true,
         },
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      phone: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      isActive: {
         type: DataTypes.BOOLEAN,
         defaultValue: true,
      },
   });

   user.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
   user.validPassword = (password, userPassword) => bcrypt.compareSync(password, userPassword);

   return user;
};
