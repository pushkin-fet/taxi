const db = require('./../db')
const bcrypt = require('bcryptjs')
class OrderController {

    async createOrder(req, res) {
        try {
            const {fio, adressFrom, adressTo, phone, email} = req.body
            console.log(fio, adressFrom, adressTo, phone)
            if (fio.length < 2 || adressFrom.length < 7 || adressTo.length < 7 || phone.length < 6 ) {
                return res.sendStatus(401)
            }
            // const user = await db.query('SELECT id FROM clients WHERE email = $1', [email]);
            const newOrder = await db.query('INSERT INTO orders (fio, adress_from, adress_to, phone) VALUES ($1, $2, $3, $4) RETURNING *', [fio, adressFrom, adressTo, phone])
            res.status(201).json(newPerson.rows[0])

        } catch (error) {

            return res.sendStatus(401)
        }

    }

}


module.exports = new UserController()