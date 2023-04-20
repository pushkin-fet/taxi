const db = require('./../db')
const bcrypt = require('bcryptjs')
class UserController {

    async createUser(req, res){
        try {
            const {login, email, password } = req.body
            console.log(login, email, password)
            if (login.length < 4 || email.length < 9 || password.length < 6) {
                return res.status(401).end()
            }

            const searchPerson = await db.query('SELECT login FROM clients WHERE login = ($1)', [email])

            console.log(searchPerson)
           

            if(searchPerson.rows.length == 1){
                return res.status(400).end()
            }
            const hashPassword = bcrypt.hashSync(password, 2);
            const hashLogin = bcrypt.hashSync(login, 5)
            const newPerson = await db.query('INSERT INTO clients (email, login, password) VALUES ($1, $2, $3) RETURNING *', [email, login, hashPassword])
            res.status(201).json(newPerson.rows[0])

        } catch (error){

            res.status(400).json({error:error})
        }

    }

    async getUser(req, res){
        try{
            const {email} = req.params.email
            const user = await db.query('SELECT email, login, password, id FROM clients WHERE email = ($1)', [email])
            if(user.rows[0]){
                res.status(200).json(user.rows[0])
            } else {
                res.status(403).end()
            }
            
        } catch (error){
            res.status(400).json({error:error})
        }

    }

    async authUser(req, res){
        const {email, password} = req.body
        try{
            let person = await  db.query('SELECT email, login, password, id FROM clients WHERE email = ($1)',[email])
            if(person.rows.length == 0) return res.status(401).json({message:"Пользователь не найден"})
            const user = person.rows[0]

            // Сравниваем захешированный пароль с введеном в запросе
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) return res.status(401).json({message:"Неправильный логин или пароль"})
            else res.status(200).json(user)
        }
        catch (e){
            console.log(e)
            res.status(401).json({
                body:req.body,
                error:'incorrect password'
            })
        }
    }

    async updateUserName(req, res){
        const {login, password, username} = req.body
        try{
            const hashLogin = bcrypt.hashSync(login, 5);
            const hashPassword = bcrypt.hashSync(password, 5)
            let person = await db.query('SELECT email FROM clients WHERE login = ($1) AND password = ($2)', [hashLogin, hashPassword])
            if(person.rows.length === 1){
                let newUsername = await db.query('UPDATE clients SET login = ($1) WHERE login = $(2)', [username, hashLogin])
                return res.status(201).json({message:"Success"})
            }
            else{
                return res.status(401).json({message:"Не авторизованы"})
            }
        } catch(e) {
            res.status(500).json({message:e})
        }
    }

    async deleteUser(req, res) {
        try{
        const {login, password} = req.body
        const hashLogin = bcrypt.hashSync(login, 5);
            const hashPassword = bcrypt.hashSync(password, 5)
            let person = await db.query('SELECT username FROM users WHERE login = ($1) AND password = ($2)', [hashLogin, hashPassword])
            if(person.rows.length === 1){
                await db.query('DELETE FROM users WHERE login = ($1) WHERE login = $(2)', [hashLogin, hashPassword])
                return res.status(201).json({message:"Success"})
            }
            else{
                return res.status(401).json({message:"Не авторизованы"})
            }
        } catch(e) {
            res.status(500).json({message:e})
        }
    }


async testMessage(request, response){
    try{
        const{first} = request.params
        console.log(first)
        response.status(200).json({testmessage:"Работает!"})
    } catch{
        return response.status(500).json({errormessage:"ОШИБКА"})
    }
}

}




module.exports = new UserController()