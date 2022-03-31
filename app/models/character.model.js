module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("character", {
      serial_no: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      },
      ability: {
        type: Sequelize.TEXT
      },
      appearance: {
        type: Sequelize.TEXT
      },
      others: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Character;
  };