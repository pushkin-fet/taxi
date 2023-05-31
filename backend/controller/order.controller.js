const db = require('./../db')
const bcrypt = require('bcryptjs')
class OrderController {

    async createOrder(req, res) {
        try {
            const cookies = req.headers.cookie.split('; ')
            const session_cookie = cookies.find((elem) => elem.includes('session='))
            console.log(session_cookie)
            const response = await db.query('SELECT user_fk FROM sessions WHERE session_id = $1', [session_cookie.split('=')[1]])
            if(response.rows.length === 0){
                res.status(403).json('Вы Не авторизованы')
            }
            const user_fk = response.rows[0].user_fk

            const {fio, adressFrom, adressTo, phone} = req.body
            console.log(fio, adressFrom, adressTo, phone)
            if (fio.length < 2 || adressFrom.length < 5 || adressTo.length < 5 || phone.length < 6 ) {
                return res.sendStatus(401)
            }
            // const user = await db.query('SELECT id FROM clients WHERE email = $1', [email]);
            const newOrder = await db.query('INSERT INTO orders (fio, adress_from, adress_to, phone, user_fk) VALUES ($1, $2, $3, $4, $5) RETURNING *', [fio, adressFrom, adressTo, phone, user_fk])
            res.status(201).json(newOrder.rows[0])

        } catch (error) {
            console.log(error)
            return res.sendStatus(401)
        }

    }

    async getAllOrders(req, res){
        try{
            const response = await db.query('SELECT * FROM orders')
            res.status(200).json(response.rows)
        }
        catch{
            res.sendStatus(500)
        }


    }

}


module.exports = new OrderController()