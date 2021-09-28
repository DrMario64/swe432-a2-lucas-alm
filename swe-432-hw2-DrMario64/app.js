import fetch from "node-fetch"
import express from "express"
//const fetch = require('node-fetch')
//const express = require('express')
const app = express()
const port = 3000

fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))

app.get('/', (req, res) => {
  res.send('Hello World')
})

/*const cities = ["Fairfax", "Vienna", "Falls Church", "Arlington"];

const populations = [24019, 16489, 14128, 236842];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cities', (req, res) => {
  return res.json(cities)
})

app.get('/populations', (req, res) => {
  return res.json(populations)
})*/

//module.exports = app;