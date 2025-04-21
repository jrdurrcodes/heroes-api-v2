const express = require('express')
const server = express()
const router = require('./app/routes/router.js')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.POR || 3000


// Handle SEcurity
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]

    }
})
)


server.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))

    // server.use(cors.json())
    //server.use(express.json())
    //server.use (express.urlencoded({  extended }))

server.use('/', router)
server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`PORT ${PORT}is up, up and away...`))