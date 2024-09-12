import express from "express";
import path from "path"
// const express = require('express')
// const path = require('path')

const __dirname = import.meta.dirname;
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.use('/assets', express.static(path.join(__dirname, 'public')))

app.listen(3000)