const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017/'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jsonwebtoken = require('jsonwebtoken')
const {secret} = require('./config')
const User = require('./models/User')
const Product = require('./models/Product')
const Card = require('./models/Card')

const app = express()

app.use(cors())
app.use(express.json())

const generateAccessToken = (id) => {
    const payload = {
        id
    }

    return jsonwebtoken.sign(payload, secret, {expiresIn: '24h'})
}

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body
    const user = new User({login, password, email})
    await user.save()
    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login})
    if (!user){
        return res.status(400).json({message: 'Пользователь не найден'})
    }
    if (user.password !== password){
        return res.status(400).json({message: 'Неверный логин или пароль'})
    }
    const token = generateAccessToken(user._id)
    const loginuser = user;

    res.json({
        message: loginuser.login + ': Вы успешно авторизованы',
        loginuser: loginuser.login,
        token: token,
        data: user
    })
})

app.get('/usercabinet', async (req, res) => {
    const logins = await User.find()
    
    res.json({
        data: logins
    })
})

app.post('/changePassword', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    let user
    user = await User.findOneAndUpdate({login: login}, { password: password })
    res.json({
        message: 'Пароль изменён!',
        newPassword: User.password
    })
})

app.post('/product', async (req, res) => {
    console.log(req.body)
    const {header, price} = req.body
    const prodNew = new Product({header, price})
    await prodNew.save()
    res.json({
        message: 'Товар добавлен!'
    })
})

app.get('/products', async (req, res) => {
    const products = await Product.find()
    
    res.json({
        data: products
    })
})

app.post('/payproducts', async (req, res) => {
    
    console.log(req.body)
    const {cardnumber, carddate, cardcvc} = req.body
    const card = new Card({cardnumber, carddate, cardcvc})
    await card.save()
    res.json({
        message: 'Товар оплачен'
    })

})

const start = async () => {
    try {
        await mongoose.connect(URLDB, {authSource:"admin"})
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()