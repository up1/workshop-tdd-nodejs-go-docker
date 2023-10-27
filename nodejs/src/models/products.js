module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "products",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: "nextval(products_id_seq::regclass)",
          comment: "null",
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          comment: "null",
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          comment: "null",
        },
      },
      {
        tableName: "products",
      }
    );
  };