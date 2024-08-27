const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')
const { errorMiddleware, errorNotFound } = require('./middlewares/errorHandlers')

app.use(userRoutes)

app.use(errorNotFound)
app.use(errorMiddleware)

app.listen(process.env.PORT, e => {
    if (e) console.error(e)
    else console.log(`Server listening on port ${process.env.PORT}`)
})