const db = require('./../db')
const bcrypt = require('bcryptjs')
const uuid = require('uuid').v4
class UserController {

    async createUser(req, res){
        try {
            const {login, email, password } = req.body
            console.log(login, email, password)
            if (login.length < 4 || email.length < 9 || password.length < 6) {
                return res.sendStatus(401)
            }

            //  Ищем клиента по емейлу в БД при регмстрации. Проверка на уникальность, есть ли такой пользователь
            const searchPerson = await db.query('SELECT login FROM clients WHERE login = ($1)', [email])

           
            // Если такие пользователи с данным емейлом УЖЕ есть, то ошибка 401
            if(searchPerson.rows.length > 0){
                return res.sendStatus(401)
            }
            const hashPassword = bcrypt.hashSync(password, 2);
            // const hashLogin = bcrypt.hashSync(login, 5)
            const newPerson = await db.query('INSERT INTO clients (email, login, password) VALUES ($1, $2, $3) RETURNING *', [email, login, hashPassword])

            const userFK = newPerson.rows[0].id
            console.log(userFK)
            let session_id = uuid()

            const newSession = await db.query('INSERT INTO sessions (session_id, user_fk) VALUES ($1, $2)', [session_id, userFK] )
            res
                .status(201)
                .setHeader('Set-Cookie', `session=${session_id}`, {
                    sameSite: 'strict',
                    path: '/',
                    expires: new Date(new Date().getTime() + 300 * 1000),
                    httpOnly: false,
                } )
                .json(newPerson.rows[0]);

        } catch (error){

            return res.sendStatus(401)
        }

    }

    async getUser(req, res){
        try{
            const {email} = req.params.email
            const user = await db.query('SELECT email, login, password, id FROM clients WHERE email = ($1)', [email])
            if(user.rows[0]){
                res.status(200).json(user.rows[0])
            } else {
                return res.sendStatus(403)
            }
            
        } catch (error){
            return res.sendStatus(401)
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
            if(!validPassword) return res.sendStatus(401)
            else res.status(200).json(user)
        }
        catch (e){
            console.log(e)
            return res.sendStatus(401)
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
                return  res.sendStatus(401)
            }
        } catch(e) {
            return res.sendStatus(500)
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
                return res.sendStatus(401)
            }
        } catch(e) {
            return res.sendStatus(500)
        }
    }


    async authWithCookie(req, res){
        try {
            const cookies = req.headers.cookie.split('; ')
            const session_cookie = cookies.find((elem) => elem.includes('session='))
            if(!session_cookie){
                res.status(403).json('Вы Не авторизованы')
            }
            const response = await db.query('SELECT user_fk FROM sessions WHERE session_id = $1', [session_cookie.split('=')[1]])
            if(response.rows.length === 0){
                res.status(403).json('Вы Не авторизованы')
            }
            const user = await db.query('SELECT * FROM clients WHERE id = $1', [response.rows[0].user_fk])
            if (user.rows.length === 0){
                res.status(403).json('Вы Не авторизованы')
            }
            console.log(user.rows[0])
            res.status(200).json(user.rows[0])

        }
        catch{
            res.status(500).json('НЕ Успешно')
        }
    }

}




module.exports = new UserController()