process.loadEnvFile()
const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})
