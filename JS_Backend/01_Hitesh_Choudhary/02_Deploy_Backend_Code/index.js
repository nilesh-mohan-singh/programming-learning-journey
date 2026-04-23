// console.log("chai aur code");
// import express from "express"

require('dotenv').config()
const express = require('express')

const app = express()

// const port = 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code <h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> youtube.com/it_is_nilesh <h2>')
})

app.get('/twitter', (req, res) => {
    res.send('it_is_nilesh')
})

app.get('/gitHub', (req, res) => {
    res.send('githubdotcom')
})

app.get('/price', (req, res) => {
    res.send(`'the product of your price is $': ${25 + 52}`)
})

app.get('/cart', (req, res) => {
    res.send('Here is your cart')
})

app.get('/experiment', (req, res) => {
    res.send(`Here is the first experiment ${port}`)
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
