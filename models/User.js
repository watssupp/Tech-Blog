const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
// create our User model
class User extends Model {
    // set up method to run to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Table columns and configuration next
User.init(
    {
        // id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // username column
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        //  email column
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // password column
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [5]
          }
        }
      },
  {
      hooks: {
        // beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;