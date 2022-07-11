const db = require("../db")


class Store {
    static async listProducts(){

        // return (SELECT * FROM products)

        const result = await db.query(`SELECT  * FROM products;`)
        const products = result.rows
        return products

    }
}






module.exports= Store