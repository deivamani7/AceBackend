module.exports = (sequelize, Sequelize) => {
    const item = sequelize.define("item", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement : true },
      name: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      }
    });
  
    return item;
  };