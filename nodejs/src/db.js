const Sequelize = require("sequelize");
const sequelize = new Sequelize("product_db", "user", "pass", {
    host: "localhost",
    dialect: "postgres",
    define: {
        timestamps: false
    }
});

module.exports = sequelize;